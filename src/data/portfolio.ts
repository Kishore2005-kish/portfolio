import {
  Award,
  Brain,
  Code2,
  Database,
  Figma,
  Github,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Leaf,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export type Project = {
  name: string;
  label: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  features: string[];
  imageSlot: string;
  imageSrc?: string;
  repo?: string;
};

export const profile = {
  name: "Kishore P",
  role: "Product-Focused AI Engineer",
  headline:
    "Building intelligent systems, impactful products, and meaningful digital experiences.",
  subheadline:
    "Combining AI, engineering, and design to solve real-world problems.",
  intro:
    "I build intelligent systems, impactful products, and human-centered digital experiences that solve real-world problems.",
  email: "kishkeerthi24@gmail.com",
  github: "https://github.com/Kishore2005-kish",
  linkedin: "https://www.linkedin.com/in/kishore-p24/",
  resume: "/Kishore.p_Resume.pdf",
  location: "India",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const identity = [
  "Full-Stack Engineer",
  "AI/ML Developer",
  "UI/UX-Oriented Builder",
  "Hackathon Winner",
  "Team Lead",
  "Sustainability Innovator",
];

export const journey = [
  {
    title: "First Full-Stack Project",
    copy: "Moved from isolated code to usable systems with real data, flows, and interfaces.",
  },
  {
    title: "Hackathons",
    copy: "Built under pressure, led product direction, and learned to ship convincing demos.",
  },
  {
    title: "Awards",
    copy: "Turned civic and sustainability ideas into winning products with measurable value.",
  },
  {
    title: "AI Projects",
    copy: "Expanded into ML, NLP, computer vision, forecasting, and intelligent automation.",
  },
  {
    title: "SpaceGuard AI",
    copy: "Now building toward satellite anomaly prediction and operational risk intelligence.",
  },
  {
    title: "Future Vision",
    copy: "Create products that combine engineering depth, design taste, and founder-level ownership.",
  },
];

export const achievements = [
  {
    icon: Trophy,
    title: "1st Place - Sustainathon",
    stats: ["Rs. 25,000 Prize", "50 Finalist Teams", "100+ Applicants"],
    copy: "Award-winning SmartRecycle platform designed around reward-based recycling, civic participation, and measurable sustainability outcomes.",
    imageSlot: "Sustainathon Award Photo",
    imageSrc: "/images/sustainathon-award.png",
  },
  {
    icon: Award,
    title: "1st Prize - Inter-College Project Expo",
    stats: ["Product Demo", "Technical Pitch", "Impact Story"],
    copy: "Recognized for presenting a practical civic-tech solution with a clear user problem, usable experience, and strong engineering execution.",
    imageSlot: "Trophy Presentation Images",
  },
];

export const flagship = {
  name: "SpaceGuard AI",
  tagline: "Building the future of satellite anomaly prediction.",
  copy:
    "A startup-style AI product for monitoring space weather, analyzing satellite datasets, and predicting operational risk before anomalies become mission-impacting failures.",
  tech: ["Python", "TensorFlow", "PyTorch", "FastAPI", "React", "PostgreSQL"],
  features: [
    "NOAA Data Integration",
    "ESA Dataset Analysis",
    "Random Forest Models",
    "XGBoost Models",
    "LSTM Forecasting",
    "Predictive Risk Scoring",
    "Space Weather Monitoring",
    "Satellite Alert System",
  ],
};

export const projects: Project[] = [
  {
    name: "Eco Earn",
    label: "Sustainability Product",
    problem: "Recycling systems often fail because citizens do not get immediate feedback, incentives, or proof of impact.",
    solution:
      "An AI-powered recycling platform with waste recognition, rewards, badges, analytics, and civic dashboards.",
    impact:
      "Turns responsible waste disposal into a measurable, motivating experience for users and administrators.",
    tech: ["Gemini Flash Vision", "Firebase Auth", "Firestore", "Analytics", "React"],
    features: [
      "AI Waste Recognition",
      "Reward System",
      "Gamification",
      "Achievement Badges",
      "State-Level Insights",
      "Zone-Level Insights",
      "Light/Dark Mode",
    ],
    imageSlot: "Eco Earn Dashboard Screenshots",
    imageSrc: "/images/eco-earn-cover.png",
    repo: "https://github.com/Kishore2005-kish/Eco-Earn",
  },
  {
    name: "SmartRecycle",
    label: "Award-Winning Civic-Tech",
    problem: "Municipal recycling behavior is difficult to track, reward, and improve at a community level.",
    solution:
      "A reward-based recycling platform with admin management, waste tracking, and engagement loops.",
    impact:
      "Won Sustainathon and Project Expo recognition by connecting sustainability intent with product execution.",
    tech: ["Full Stack", "Admin Dashboard", "Waste Tracking", "Rewards"],
    features: ["Sustainathon Winner", "Project Expo Winner", "Admin Management", "Reward-Based Recycling"],
    imageSlot: "SmartRecycle Product Screenshots",
    imageSrc: "/images/smartrecycle-cover.png",
    repo: "https://github.com/Kishore2005-kish/SMARTRECYCLE",
  },
  {
    name: "Deepfake Audio Detector",
    label: "AI Safety Tool",
    problem: "Synthetic audio is increasingly difficult to identify and can undermine trust in digital communication.",
    solution:
      "An audio analysis interface for AI detection, waveform review, and real-time monitoring workflows.",
    impact: "Helps users evaluate suspicious audio with clear signals instead of opaque model output.",
    tech: ["AI Detection", "Audio Analysis", "Waveforms", "Monitoring"],
    features: ["Waveform Visualization", "Real-Time Monitoring", "Audio Classification"],
    imageSlot: "Deepfake Audio Demo Images",
    imageSrc: "/images/deepfake-audio-detector-cover.png",
    repo: "https://github.com/Kishore2005-kish/deepfake-detector",
  },
  {
    name: "Job Trend Analyzer",
    label: "Market Intelligence",
    problem: "Students and job seekers struggle to understand skill gaps against current market demand.",
    solution:
      "An NLP-driven tool that analyzes resumes, job trends, skill gaps, and market signals from the Adzuna API.",
    impact: "Turns career planning into a data-informed product experience.",
    tech: ["NLP", "Resume Analysis", "Adzuna API", "Skill Gap Detection"],
    features: ["Market Intelligence", "Resume Parsing", "Role Trend Analysis"],
    imageSlot: "Job Trend Analyzer Screenshots",
    imageSrc: "/images/job-trend-analyzer-cover.png",
    repo: "https://github.com/Kishore2005-kish/job-trend-analyzer",
  },
  {
    name: "Organ Donation System",
    label: "Healthcare Impact",
    problem: "Donor-recipient coordination requires clarity, urgency, and reliable record management.",
    solution:
      "A healthcare workflow system for donor matching, recipient tracking, and operational visibility.",
    impact: "Frames healthcare data as a service experience with direct human stakes.",
    tech: ["Matching Logic", "Database", "Healthcare Workflow"],
    features: ["Donor Matching", "Recipient Tracking", "Healthcare Impact"],
    imageSlot: "Organ Donation System Screenshots",
    imageSrc: "/images/organ-donation-system-cover.png",
    repo: "https://github.com/Kishore2005-kish/organ-donation-system",
  },
  {
    name: "Secure Online Voting System",
    label: "Trust Infrastructure",
    problem: "Digital election systems need strong authentication, controlled access, and clear administration.",
    solution:
      "A secure voting product with authentication, voting flows, and election management tooling.",
    impact: "Explores civic trust, access, and secure product design through a complete system.",
    tech: ["Authentication", "Secure Voting", "Election Management"],
    features: ["Voter Access", "Admin Controls", "Secure Ballot Flow"],
    imageSlot: "Secure Voting Screenshots",
    imageSrc: "/images/secure-online-voting-system-cover.png",
    repo: "https://github.com/Kishore2005-kish/online-voting-system",
  },
];

export const skillGroups = [
  { icon: Brain, title: "AI & Machine Learning", skills: ["TensorFlow", "PyTorch", "XGBoost", "LSTM", "NLP", "Computer Vision"] },
  { icon: Code2, title: "Frontend Engineering", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { icon: Globe2, title: "Backend Engineering", skills: ["FastAPI", "Node.js", "REST APIs", "Auth", "Server Logic"] },
  { icon: Database, title: "Databases", skills: ["PostgreSQL", "Firestore", "Firebase", "Data Modeling"] },
  { icon: Sparkles, title: "Tools", skills: ["Git", "Vercel", "GSAP", "Lenis", "API Integrations"] },
  { icon: Figma, title: "Design", skills: ["UI/UX", "Product Thinking", "Storytelling", "Dashboards"] },
];

export const leadership = [
  {
    icon: Users,
    title: "Hackathon Team Lead",
    items: ["Product Direction", "Architecture Decisions", "UI/UX Strategy", "Team Coordination", "Final Presentations"],
  },
  {
    icon: LayoutDashboard,
    title: "Content & Photography Coordinator",
    items: ["Visual Storytelling", "Event Documentation", "Creative Direction", "Team Collaboration"],
  },
];

export const quickStats = [
  { label: "Winner", value: "2x", icon: Award },
  { label: "Prize", value: "Rs. 25K", icon: Trophy },
  { label: "Focus", value: "AI + Product", icon: Brain },
  { label: "Impact", value: "Civic Tech", icon: Leaf },
];

export const externalLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Resume", href: profile.resume, icon: GraduationCap },
];

export const imageSlots = [
  "Professional Portrait",
  "Sustainathon Award Photo",
  "Trophy Presentation Images",
  "Team Photos",
  "Project Screenshots",
  "Dashboard Screenshots",
  "Demo Images",
  ...projects.map((project) => project.imageSlot),
];

export const trustPillars = [
  { icon: Rocket, title: "Product Builder", copy: "Ships ideas as coherent product experiences, not isolated demos." },
  { icon: Brain, title: "AI Developer", copy: "Applies ML and data systems to problems with real-world stakes." },
  { icon: ShieldCheck, title: "Systems Thinker", copy: "Connects users, workflows, data, and reliability into one story." },
];
