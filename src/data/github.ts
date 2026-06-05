export type GitHubRepo = {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
};

export type GitHubProfile = {
  login: string;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  htmlUrl: string;
};

export const fallbackGithubProfile: GitHubProfile = {
  login: "Kishore2005-kish",
  avatarUrl: "",
  publicRepos: 0,
  followers: 0,
  htmlUrl: "https://github.com/Kishore2005-kish",
};

export const fallbackRepos: GitHubRepo[] = [
  {
    name: "SpaceGuard AI",
    description: "Satellite anomaly prediction product with space weather monitoring and predictive risk scoring.",
    url: "https://github.com/Kishore2005-kish",
    stars: 0,
    forks: 0,
    language: "Python",
    updatedAt: "Curated project",
  },
  {
    name: "Eco Earn",
    description: "AI-powered recycling and rewards platform with sustainability analytics.",
    url: "https://github.com/Kishore2005-kish",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    updatedAt: "Curated project",
  },
  {
    name: "Deepfake Audio Detector",
    description: "Audio analysis and AI detection workflow with waveform visualization.",
    url: "https://github.com/Kishore2005-kish",
    stars: 0,
    forks: 0,
    language: "Python",
    updatedAt: "Curated project",
  },
];
