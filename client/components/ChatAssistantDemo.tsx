import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function ChatAssistantDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple mb-4"
        >
          <Bot className="h-8 w-8 text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-2">Kin-G AI Assistant</h2>
        <p className="text-muted-foreground text-lg">
          Get instant answers about our services, programs, and company information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center mb-2">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-lg">Real-time Chat</CardTitle>
            <CardDescription>
              Instant responses to your questions about our services and programs
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-neon-purple/30 hover:border-neon-purple/60 transition-colors">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center mb-2">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-lg">Smart Responses</CardTitle>
            <CardDescription>
              AI-powered answers based on our comprehensive knowledge base
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-neon-pink/30 hover:border-neon-pink/60 transition-colors md:col-span-2 lg:col-span-1">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-neon-pink to-neon-cyan flex items-center justify-center mb-2">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-lg">Mobile Optimized</CardTitle>
            <CardDescription>
              Responsive design that works perfectly on all devices
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center space-x-2 text-sm text-muted-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Click the chat button in the bottom-right corner to get started!</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
