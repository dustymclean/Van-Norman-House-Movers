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