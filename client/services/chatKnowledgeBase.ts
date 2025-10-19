export interface KnowledgeBaseItem {
  keywords: string[];
  response: string;
  category: string;
  priority: number;
}

export interface CompanyInfo {
  name: string;
  description: string;
  services: string[];
  programs: string[];
  contact: {
    phone: string;
    email?: string;
    address?: string;
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
    };
  };
  stats: {
    projects: string;
    careers: string;
    clients: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "Kin-G Technologies",
  description: "A comprehensive technology solutions provider specializing in web development, mobile applications, CRM integration, data analytics, cloud solutions, and AI integration. We deliver cutting-edge solutions and career development programs to help businesses and individuals thrive in the digital age.",
  services: [
    "Web Development - Custom websites, e-commerce platforms, and web applications",
    "Mobile Applications - iOS and Android app development",
    "CRM Integration - Customer relationship management solutions",
    "Data Analytics - Business intelligence and data visualization",
    "Cloud Solutions - Cloud migration, deployment, and management",
    "AI Integration - Artificial intelligence and machine learning solutions"
  ],
  programs: [
    "Launchpad Career Program - Comprehensive career development and placement assistance",
    "Training & Development - Professional skill enhancement programs",
    "B2B Consulting - Business strategy and technology consulting",
    "EdTech Solutions - Educational technology platforms and tools",
    "Telecalling Services - Customer support and lead generation",
    "Quality Assurance - Software testing and quality control services"
  ],
  contact: {
    phone: "+91 89104 81993",
    social: {
      facebook: "https://www.facebook.com/share/1LMHJULrar/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/kin.g.tech?igsh=bDJmNjZyeXhyMDA4&utm_source=qr",
      linkedin: "https://linkedin.com/company/kingTechnologies"
    }
  },
  stats: {
    projects: "500+",
    careers: "1000+",
    clients: "50+"
  }
};

export const knowledgeBase: KnowledgeBaseItem[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    response: `Hello! I'm your Kin-G Technologies assistant. I'm here to help you with any questions about our services, programs, or company information. How can I assist you today?`,
    category: "greeting",
    priority: 10
  },
  {
    keywords: ["service", "services", "what do you do", "offer", "provide", "solutions"],
    response: `We offer comprehensive technology solutions including:

• **Web Development** - Custom websites, e-commerce platforms, and web applications
• **Mobile Applications** - iOS and Android app development  
• **CRM Integration** - Customer relationship management solutions
• **Data Analytics** - Business intelligence and data visualization
• **Cloud Solutions** - Cloud migration, deployment, and management
• **AI Integration** - Artificial intelligence and machine learning solutions

Each service is tailored to meet your specific business needs. Would you like more details about any particular service?`,
    category: "services",
    priority: 9
  },
  {
    keywords: ["program", "programs", "course", "training", "career", "development", "launchpad"],
    response: `Our programs are designed to help individuals and businesses grow in the technology sector:

• **Launchpad Career Program** - Comprehensive career development and placement assistance
• **Training & Development** - Professional skill enhancement programs
• **B2B Consulting** - Business strategy and technology consulting
• **EdTech Solutions** - Educational technology platforms and tools
• **Telecalling Services** - Customer support and lead generation
• **Quality Assurance** - Software testing and quality control services

These programs combine practical experience with industry expertise to ensure success.`,
    category: "programs",
    priority: 9
  },
  {
    keywords: ["contact", "phone", "reach", "call", "email", "address", "location"],
    response: `You can reach us through multiple channels:

📞 **Phone**: ${companyInfo.contact.phone}
🌐 **Social Media**: 
   - Facebook: Follow us for updates and insights
   - Instagram: @kin.g.tech for visual content
   - LinkedIn: Connect with our professional network

We're always happy to discuss your project requirements and answer any questions you may have!`,
    category: "contact",
    priority: 8
  },
  {
    keywords: ["price", "pricing", "cost", "fee", "rate", "budget", "expensive", "cheap"],
    response: `We offer competitive and flexible pricing for all our services and programs. Our pricing is customized based on:

• Project scope and complexity
• Timeline requirements
• Specific technology needs
• Support and maintenance requirements

For detailed pricing information, I recommend:
1. Visiting our Launchpad page for program costs
2. Contacting us directly for service quotes
3. Scheduling a consultation to discuss your specific needs

We believe in transparent pricing and will provide detailed estimates before starting any project.`,
    category: "pricing",
    priority: 7
  },
  {
    keywords: ["career", "job", "hiring", "work", "employment", "position", "vacancy"],
    response: `We're always looking for talented individuals to join our growing team! 

**Current Opportunities:**
• Software Developers (Frontend/Backend)
• Mobile App Developers
• Data Analysts
• UI/UX Designers
• Project Managers
• Quality Assurance Engineers

**Why Join Kin-G Technologies:**
• Work on cutting-edge projects
• Professional development opportunities
• Collaborative work environment
• Competitive compensation
• Flexible work arrangements

Check out our Careers page for current openings and application details. We'd love to hear from you!`,
    category: "careers",
    priority: 7
  },
  {
    keywords: ["about", "company", "who are you", "background", "history", "mission"],
    response: `Kin-G Technologies is a comprehensive technology solutions provider that specializes in delivering cutting-edge digital solutions and career development programs.

**Our Mission:**
We help businesses and individuals thrive in the digital age through innovative technology solutions and comprehensive career development programs.

**What Sets Us Apart:**
• ${companyInfo.stats.projects} Projects Delivered
• ${companyInfo.stats.careers} Careers Launched  
• ${companyInfo.stats.clients} Enterprise Clients
• Industry expertise across multiple technology domains
• Focus on both business solutions and individual growth

We combine technical excellence with a commitment to helping people succeed in their careers.`,
    category: "about",
    priority: 6
  },
  {
    keywords: ["web development", "website", "web app", "frontend", "backend", "full stack"],
    response: `Our Web Development services include:

**Frontend Development:**
• React, Vue.js, Angular applications
• Responsive and mobile-first design
• Modern UI/UX implementation
• Progressive Web Apps (PWA)

**Backend Development:**
• Node.js, Python, PHP, Java
• Database design and optimization
• API development and integration
• Cloud deployment and scaling

**Full-Stack Solutions:**
• End-to-end web applications
• E-commerce platforms
• Content management systems
• Custom business applications

We use the latest technologies and best practices to deliver high-performance, scalable web solutions.`,
    category: "web-development",
    priority: 5
  },
  {
    keywords: ["mobile", "app", "ios", "android", "react native", "flutter"],
    response: `Our Mobile Application Development services cover:

**Platforms:**
• iOS (Swift, Objective-C)
• Android (Kotlin, Java)
• Cross-platform (React Native, Flutter)

**App Types:**
• Native mobile applications
• Hybrid applications
• Progressive Web Apps
• Enterprise mobile solutions

**Features:**
• Offline functionality
• Push notifications
• Payment integration
• Social media integration
• Analytics and reporting

We ensure your mobile app delivers exceptional user experience across all devices and platforms.`,
    category: "mobile-development",
    priority: 5
  },
  {
    keywords: ["help", "support", "assistance", "question", "problem", "issue"],
    response: `I'm here to help! I can assist you with information about:

• Our services and solutions
• Career programs and opportunities
• Contact information and support
• Pricing and project details
• Company information and background

If you have a specific question or need detailed information about any of our services, please let me know. For immediate assistance, you can also call us at ${companyInfo.contact.phone}.

What would you like to know more about?`,
    category: "help",
    priority: 4
  }
];

export class ChatKnowledgeService {
  private knowledgeBase: KnowledgeBaseItem[];

  constructor() {
    this.knowledgeBase = knowledgeBase;
  }

  findBestResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();
    const matches: { item: KnowledgeBaseItem; score: number }[] = [];

    // Find matching knowledge base items
    this.knowledgeBase.forEach(item => {
      const score = this.calculateMatchScore(message, item.keywords);
      if (score > 0) {
        matches.push({ item, score });
      }
    });

    // Sort by score (priority + keyword matches)
    matches.sort((a, b) => {
      const scoreA = a.score + a.item.priority;
      const scoreB = b.score + b.item.priority;
      return scoreB - scoreA;
    });

    // Return the best match or default response
    if (matches.length > 0) {
      return matches[0].item.response;
    }

    return this.getDefaultResponse();
  }

  private calculateMatchScore(message: string, keywords: string[]): number {
    let score = 0;
    keywords.forEach(keyword => {
      if (message.includes(keyword)) {
        score += 1;
        // Bonus for exact matches
        if (message === keyword) {
          score += 2;
        }
        // Bonus for word boundaries
        const regex = new RegExp(`\\b${keyword}\\b`, 'i');
        if (regex.test(message)) {
          score += 1;
        }
      }
    });
    return score;
  }

  private getDefaultResponse(): string {
    return `I'd be happy to help! I can provide information about:

• **Services**: Web development, mobile apps, CRM, data analytics, cloud solutions, AI
• **Programs**: Launchpad career program, training, consulting, EdTech solutions
• **Contact**: Phone, social media, and support information
• **Careers**: Job opportunities and company culture
• **Pricing**: Custom quotes and program costs

Could you please be more specific about what you'd like to know? I'm here to help with any questions about Kin-G Technologies!`;
  }

  getCompanyInfo(): CompanyInfo {
    return companyInfo;
  }

  getQuickActions(): string[] {
    return [
      "Tell me about your services",
      "What programs do you offer?",
      "How can I contact you?",
      "Do you have job openings?",
      "What are your prices?",
      "Tell me about the company"
    ];
  }
}

export const chatKnowledgeService = new ChatKnowledgeService();
