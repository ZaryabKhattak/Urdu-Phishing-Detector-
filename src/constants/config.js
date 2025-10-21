/**
 * Application Configuration
 * Centralized configuration constants
 */

export const APP_CONFIG = {
  name: 'Urdu Phishing Detector',
  version: '1.0.0',
  description: 'AI-powered phishing detection for Urdu text messages',
  
  // Contact Information
  contact: {
    email: 'zaryab9339@gmail.com',
  },
  
  // Team Information
  team: {
    founder: {
      name: 'Sibghat Ullah',
      title: 'Founder & Cybersecurity Engineer',
      linkedin: 'https://www.linkedin.com/in/sibghat-ullah-493a73323',
      description: 'Envisioned and built the AI model powering our phishing detection engine.',
    },
    coFounder: {
      name: 'Zaryab Khattak',
      title: 'Co-Founder & Product Designer',
      linkedin: 'https://www.linkedin.com/in/zaryab-khattak',
      description: 'Managing the vision, design, and user experience of the platform.',
    },
  },
  
  // API Configuration
  api: {
    timeout: 30000, // 30 seconds
    retryAttempts: 3,
    processingDelay: 3000, // 3 seconds for mock API
  },
  
  // Feature Flags
  features: {
    mockApi: true, // Set to false when integrating with real backend
    analytics: false,
    errorReporting: false,
  },
};

export const ROUTES = {
  home: '/',
  about: '/about',
  privacy: '/privacy',
  terms: '/terms',
  contact: '/contact',
};

export const NAV_ITEMS = [
  { label: 'Home', path: ROUTES.home },
  { label: 'About', path: ROUTES.about },
  { label: 'Privacy Policy', path: ROUTES.privacy },
  { label: 'Terms of Use', path: ROUTES.terms },
  { label: 'Contact', path: ROUTES.contact },
];

export const FOOTER_TEXT = {
  main: 'Built by independent developers passionate about AI-powered cybersecurity awareness.',
  copyright: '© 2025 Sibghat Ullah & Zaryab Khattak. All rights reserved.',
};
