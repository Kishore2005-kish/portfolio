import { NextResponse } from "next/server";
import { fallbackGithubProfile, fallbackRepos, type GitHubRepo } from "@/data/github";

export const revalidate = 3600;

type GitHubUserResponse = {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  html_url: string;
};

type GitHubRepoResponse = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
};

export async function GET() {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "kishore-p-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch("https://api.github.com/users/Kishore2005-kish", {
        headers,
        next: { revalidate },
      }),
      fetch("https://api.github.com/users/Kishore2005-kish/repos?sort=updated&per_page=8", {
        headers,
        next: { revalidate },
      }),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error("GitHub API unavailable");
    }

    const user = (await userResponse.json()) as GitHubUserResponse;
    const repos = (await reposResponse.json()) as GitHubRepoResponse[];

    const mappedRepos: GitHubRepo[] = repos
      .filter((repo) => !repo.fork)
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        description: repo.description ?? "Product-minded engineering work from Kishore P.",
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language ?? "Code",
        updatedAt: new Intl.DateTimeFormat("en", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(new Date(repo.updated_at)),
      }));

    return NextResponse.json({
      source: "live",
      profile: {
        login: user.login,
        avatarUrl: user.avatar_url,
        publicRepos: user.public_repos,
        followers: user.followers,
        htmlUrl: user.html_url,
      },
      repos: mappedRepos.length ? mappedRepos : fallbackRepos,
    });
  } catch {
    return NextResponse.json({
      source: "fallback",
      profile: fallbackGithubProfile,
      repos: fallbackRepos,
    });
  }
}
