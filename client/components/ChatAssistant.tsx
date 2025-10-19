import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2,
  Loader2,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import { chatKnowledgeService } from '@/services/chatKnowledgeBase';
import { useChatAssistant } from '@/hooks/useChatAssistant';

interface ChatAssistantProps {
  className?: string;
}


export function ChatAssistant({ className }: ChatAssistantProps) {
  const {
    isOpen,
    isMinimized,
    messages,
    isTyping,
    inputValue,
    toggleChat,
    toggleMinimize,
    sendMessage,
    setInputValue,
    clearChat
  } = useChatAssistant();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    await sendMessage(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };


  return (
    <div className={cn("fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50", className)}>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Button
              onClick={toggleChat}
              size="lg"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 group relative overflow-hidden touch-manipulation"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full bg-neon-cyan/30 animate-ping" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              height: isMinimized ? 'auto' : '500px'
            }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "bg-background/95 backdrop-blur-xl border border-neon-cyan/30 rounded-2xl shadow-2xl",
              "w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-sm",
              isMinimized ? "h-auto" : "h-[calc(100vh-8rem)] sm:h-[500px]"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/20 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Kin-G Assistant</h3>
                  <p className="text-xs text-muted-foreground">Online now</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {!isMinimized && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearChat}
                    className="h-8 w-8 hover:bg-neon-cyan/10"
                    title="Clear chat"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMinimize}
                  className="h-8 w-8 hover:bg-neon-cyan/10"
                  title={isMinimized ? "Expand" : "Minimize"}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleChat}
                  className="h-8 w-8 hover:bg-destructive/10"
                  title="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <ScrollArea className="flex-1 p-4 h-[calc(100vh-16rem)] sm:h-[350px]">
                  <div className="space-y-4">
                    {/* Quick Actions - Show when there's just the initial greeting or after assistant responses */}
                    {(messages.length === 1 || (messages.length > 1 && messages[messages.length - 1]?.sender === 'assistant' && !isTyping)) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-2 mb-4"
                      >
                        {chatKnowledgeService.getQuickActions().slice(0, 4).map((action) => (
                          <Button
                            key={action}
                            variant="outline"
                            size="sm"
                            onClick={() => setInputValue(action)}
                            className="text-xs border-neon-cyan/30 hover:bg-neon-cyan/10 hover:border-neon-cyan touch-manipulation bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform"
                          >
                            {action.split(' ')[0]}
                          </Button>
                        ))}
                      </motion.div>
                    )}
                    
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "flex items-start space-x-3",
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.sender === 'assistant' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        )}
                        
                        <div
                          className={cn(
                            "max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-sm",
                            message.sender === 'user'
                              ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-white ml-8 sm:ml-12"
                              : "bg-muted/50 text-foreground border border-border/20"
                          )}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>

                        {message.sender === 'user' && (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center flex-shrink-0">
                            <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-muted/50 border border-border/20 rounded-2xl px-4 py-3">
                          <div className="flex items-center space-x-1">
                            <Loader2 className="h-4 w-4 animate-spin text-neon-cyan" />
                            <span className="text-sm text-muted-foreground">Typing...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Input */}
                <div className="p-3 sm:p-4 border-t border-border/20 bg-muted/20">
                  <div className="flex items-center space-x-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything..."
                      className="flex-1 border-neon-cyan/30 focus:border-neon-cyan focus:ring-neon-cyan/20 text-sm sm:text-base"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      size="icon"
                      className="h-9 w-9 sm:h-10 sm:w-10 bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan disabled:opacity-50 touch-manipulation"
                    >
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
