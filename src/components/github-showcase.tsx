"use client";

import { ExternalLink, GitFork, Github, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fallbackGithubProfile, fallbackRepos, type GitHubProfile, type GitHubRepo } from "@/data/github";
import { profile } from "@/data/portfolio";

type GitHubResponse = {
  source: "live" | "fallback";
  profile: GitHubProfile;
  repos: GitHubRepo[];
};

export function GitHubShowcase() {
  const [data, setData] = useState<GitHubResponse>({
    source: "fallback",
    profile: fallbackGithubProfile,
    repos: fallbackRepos,
  });

  useEffect(() => {
    let active = true;

    fetch("/api/github")
      .then((response) => response.json())
      .then((payload: GitHubResponse) => {
        if (active) {
          setData(payload);
        }
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="github" className="bg-black py-24 text-white sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="dark-glass rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-black">
                <Github className="size-7" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-300">GitHub Activity</p>
                <h2 className="mt-1 text-3xl font-semibold tracking-tight">{data.profile.login}</h2>
              </div>
            </div>
            <p className="mt-6 text-base leading-7 text-white/62">
              Live repository data is fetched through a cached server route. If GitHub rate-limits the request, this section keeps a polished fallback.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <Stat label="Public repos" value={data.profile.publicRepos || data.repos.length} />
              <Stat label="Followers" value={data.profile.followers} />
              <Stat label="Source" value={data.source === "live" ? "Live" : "Fallback"} />
              <Stat label="Profile" value="Open" href={profile.github} />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {data.repos.map((repo) => (
              <Link
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                key={repo.name}
                className="dark-glass group rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold tracking-tight">{repo.name}</p>
                    <p className="mt-3 min-h-16 text-sm leading-6 text-white/58">{repo.description}</p>
                  </div>
                  <ExternalLink className="mt-1 size-4 shrink-0 text-white/35 transition group-hover:text-emerald-300" />
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-medium text-white/52">
                  <span className="rounded-full bg-white/8 px-3 py-1.5 text-emerald-200">{repo.language}</span>
                  <span className="inline-flex items-center gap-1"><Star className="size-3.5" /> {repo.stars}</span>
                  <span className="inline-flex items-center gap-1"><GitFork className="size-3.5" /> {repo.forks}</span>
                  <span>{repo.updatedAt}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, href }: { label: string; value: string | number; href?: string }) {
  const content = (
    <div className="rounded-2xl border border-white/10 bg-white/7 p-4">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/38">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
}
