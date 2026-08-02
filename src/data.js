import {
  FiArrowUpRight,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiServer,
  FiTerminal,
} from 'react-icons/fi';

export const navItems = [
  { label: 'Mission Briefing', href: '#briefing' },
  { label: 'Systems', href: '#systems' },
  { label: 'Missions', href: '#missions' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const metrics = [
  { value: 'Cloud', label: 'Distributed services and infrastructure' },
  { value: 'AI', label: 'NLP models and intelligent workflows' },
  { value: 'Full Stack', label: 'Reliable interfaces through APIs' },
];

export const skills = [
  {
    title: 'Programming',
    icon: FiTerminal,
    items: ['Java', 'Python', 'C++', 'Embedded C', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: FiCode,
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: FiServer,
    items: ['Spring Boot', 'FastAPI', 'REST APIs', 'OAuth 2.0', 'SQLite'],
  },
  {
    title: 'Cloud',
    icon: FiCloud,
    items: ['AWS', 'Docker', 'Linux', 'GitHub Actions'],
  },
  {
    title: 'Systems',
    icon: FiDatabase,
    items: ['STM32', 'PWM Control', 'Sensor Integration', 'Real-Time Systems'],
  },
  {
    title: 'Artificial Intelligence',
    icon: FiCpu,
    items: ['BERT', 'DistilBERT', 'Machine Learning', 'Natural Language Processing'],
  },
];

export const projects = [
  {
    name: 'Capstone Project',
    status: 'Complete',
    summary:
      'An NDA-protected senior capstone platform built with an external industry partner, focused on FastAPI backend endpoints, OAuth 2.0 authorization workflows, and scalable REST API interfaces.',
    tech: ['Python', 'FastAPI', 'REST APIs', 'OAuth 2.0', 'Team Engineering'],
  },
  {
    name: 'Traduceme',
    status: 'In Progress',
    summary:
      'An in-progress workplace-focused language learning platform designed to help users learn job-specific communication skills through structured lessons.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Learning Systems'],
  },
  {
    name: 'Autonomous Firefighter Robot',
    status: 'Complete',
    summary:
      'An embedded systems project that detects and extinguishes flames using ultrasonic, flame, and color sensors with real-time control loops.',
    tech: ['Embedded C', 'STM32 Nucleo', 'PWM', 'Sensors', 'Real-Time Systems'],
  },
  {
    name: 'Cartograph Shopping Tracker',
    status: 'Complete',
    summary:
      'A full-stack product search and price-tracking platform with real multi-retailer results, secure accounts, personal watchlists, live offer refresh, and visual price history.',
    tech: ['React', 'TypeScript', 'Spring Boot', 'SQLite', 'SerpApi', 'GitHub Actions'],
    github: 'https://github.com/BBS17/Shopping_Tracker',
  },
  {
    name: 'AI Fact-Checking Platform',
    status: 'Complete',
    summary:
      'A containerized NLP platform that classifies claims and news content through a FastAPI service, trained model pipeline, evaluation metrics, persistent storage, and a browser extension workflow.',
    tech: ['Python', 'FastAPI', 'NLP', 'Machine Learning', 'Docker', 'Browser Extension'],
    github: 'https://github.com/BBS17/Cloud_Project',
  },
  {
    name: 'SmartTodo',
    status: 'In Progress',
    summary:
      'An AI-powered academic planning application that estimates assignment completion times and helps students organize workloads.',
    tech: ['AI Planning', 'JavaScript', 'Productivity UX', 'Scheduling Logic'],
    github: 'https://github.com/BBS17/SmartTodo',
  },
];

export const operations = [
  {
    title: 'California State University San Marcos',
    detail:
      'Bachelor of Science in Computer Science, GPA 3.9. Expected May 2026, with senior capstone work focused on full-stack software engineering.',
    icon: FiLayers,
  },
  {
    title: 'Palomar Community College',
    detail:
      'Completed transfer coursework in computer science from August 2021 to December 2024 before transferring to CSUSM.',
    icon: FiGitBranch,
  },
  {
    title: 'Production and Operations Experience',
    detail:
      'Professional experience at Amazon, GenMark Automation, and Del Taco, building reliability, process discipline, leadership, and quality-focused execution.',
    icon: FiCpu,
  },
];

export const contactLinks = [
  { label: 'Email', href: 'mailto:blancasbricio977@gmail.com', icon: FiMail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/briciob', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/bbs17', icon: FiGitBranch },
  { label: 'Portfolio Demo', href: '#missions', icon: FiArrowUpRight },
];
