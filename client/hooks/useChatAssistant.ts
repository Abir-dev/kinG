import { useState, useEffect, useCallback } from 'react';
import { chatKnowledgeService } from '@/services/chatKnowledgeBase';

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  isTyping?: boolean;
}

export interface ChatState {
  isOpen: boolean;
  isMinimized: boolean;
  messages: Message[];
  isTyping: boolean;
  inputValue: string;
}

export function useChatAssistant() {
  const [state, setState] = useState<ChatState>({
    isOpen: false,
    isMinimized: false,
    messages: [
      {
        id: '1',
        content: chatKnowledgeService.findBestResponse("hello"),
        sender: 'assistant',
        timestamp: new Date()
      }
    ],
    isTyping: false,
    inputValue: ''
  });

  const toggleChat = useCallback(() => {
    setState(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
      isMinimized: !prev.isOpen ? false : prev.isMinimized
    }));
  }, []);

  const toggleMinimize = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMinimized: !prev.isMinimized
    }));
  }, []);

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      inputValue: '',
      isTyping: true
    }));

    // Simulate typing delay
    setTimeout(() => {
      const response = chatKnowledgeService.findBestResponse(userMessage.content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isTyping: false
      }));
    }, 1000 + Math.random() * 1000);
  }, []);

  const setInputValue = useCallback((value: string) => {
    setState(prev => ({
      ...prev,
      inputValue: value
    }));
  }, []);

  const clearChat = useCallback(() => {
    setState(prev => ({
      ...prev,
      messages: [
        {
          id: '1',
          content: chatKnowledgeService.findBestResponse("hello"),
          sender: 'assistant',
          timestamp: new Date()
        }
      ]
    }));
  }, []);

  return {
    ...state,
    toggleChat,
    toggleMinimize,
    sendMessage,
    setInputValue,
    clearChat
  };
}
