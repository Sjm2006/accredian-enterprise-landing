export interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  message: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}