
// Import React to provide the React namespace for ReactNode usage in interfaces
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  author: string;
  location: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  location: string;
  description: string;
  category: 'moving' | 'raising' | 'leveling';
  timestamp: number;
}
