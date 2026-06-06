import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Satellite,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { AmbientCanvas } from "@/components/ambient-canvas";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { GitHubShowcase } from "@/components/github-showcase";
import { PlaceholderFrame } from "@/components/placeholder-frame";
import { Reveal } from "@/components/reveal";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { SiteNav } from "@/components/site-nav";
import {
  achievements,
  externalLinks,
  flagship,
  identity,
  journey,
  leadership,
  profile,
  projects,
  quickStats,
  skillGroups,
  trustPillars,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main id="top">
      <SiteNav />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <AchievementsSection />
      <FlagshipSection />
      <ProjectsSection />
      <SkillsSection />
      <LeadershipSection />
      <GitHubShowcase />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-16 pt-28">
      <AmbientCanvas />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.22),transparent_34rem)]" />
      <div className="container-x grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/58 px-4 py-2 text-sm font-semibold text-black/68 backdrop-blur">
              <Sparkles className="size-4 text-emerald-600" aria-hidden="true" />
              {profile.role}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.92] tracking-tight text-black text-balance sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-black/84 text-balance sm:text-5xl">
              {profile.headline}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/58 sm:text-xl">{profile.subheadline}</p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#work" icon={ArrowRight}>View Projects</ButtonLink>
              <ButtonLink href={profile.resume} icon={Download} variant="light" download>Download Resume</ButtonLink>
              <ButtonLink href={profile.github} icon={Github} variant="ghost">GitHub</ButtonLink>
              <ButtonLink href={profile.linkedin} icon={Linkedin} variant="ghost">LinkedIn</ButtonLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.18} className="relative">
          <PlaceholderFrame
            label="Professional Portrait"
            src={profile.portrait}
            className="aspect-[4/5] min-h-[420px] shadow-[0_32px_100px_rgba(0,0,0,0.22)]"
          />
          <div className="glass absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-3 rounded-[1.5rem] p-3 sm:left-8 sm:right-8 sm:grid-cols-4">
            {quickStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-2xl bg-white/56 p-3">
                  <Icon className="size-4 text-emerald-700" aria-hidden="true" />
                  <p className="mt-2 text-lg font-bold text-black">{stat.value}</p>
                  <p className="text-xs font-medium text-black/48">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
      <ScrollDownButton
        href="#about"
        className="liquid-glass-pill absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-black/68 transition hover:text-black md:inline-flex"
      />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">About</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black text-balance sm:text-6xl">
              Builder first. Coder second.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-9 text-black/66 text-pretty">
              I am a final-year Computer Science student who combines AI/ML, full-stack development, product thinking, and UI/UX design. Unlike many developers, I focus not only on writing code but on building solutions people genuinely want to use.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.07} className="glass rounded-[1.5rem] p-6">
                <Icon className="size-6 text-emerald-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-black/58">{pillar.copy}</p>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-6 flex flex-wrap gap-2">
          {identity.map((item) => (
            <span key={item} className="rounded-full border border-black/10 bg-white/52 px-4 py-2 text-sm font-semibold text-black/62 backdrop-blur">
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">The Journey</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-black text-balance sm:text-6xl">
            From first builds to product-level AI systems.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {journey.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="relative rounded-[1.5rem] border border-black/10 bg-white/58 p-5 shadow-sm backdrop-blur">
              <div className="flex size-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">{index + 1}</div>
              <h3 className="mt-6 text-lg font-semibold leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/56">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Achievements</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-black text-balance sm:text-6xl">
            Recognition for products with real-world intent.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Reveal key={achievement.title} delay={index * 0.08} className="overflow-hidden rounded-[2rem] bg-black text-white shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
                <PlaceholderFrame label={achievement.imageSlot} src={achievement.imageSrc} className="aspect-[16/10] rounded-none" dark />
                <div className="p-6 sm:p-8">
                  <Icon className="size-8 text-emerald-300" aria-hidden="true" />
                  <h3 className="mt-5 text-3xl font-semibold tracking-tight">{achievement.title}</h3>
                  <p className="mt-4 leading-7 text-white/62">{achievement.copy}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {achievement.stats.map((stat) => (
                      <span key={stat} className="rounded-full bg-white/9 px-3 py-1.5 text-sm font-semibold text-emerald-100">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FlagshipSection() {
  return (
    <section className="overflow-hidden bg-black py-24 text-white sm:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-400/12 px-4 py-2 text-sm font-semibold text-emerald-200">
              <Satellite className="size-4" aria-hidden="true" />
              Current Flagship Project
            </p>
            <h2 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">{flagship.name}</h2>
            <p className="mt-5 text-2xl font-semibold text-white/86 text-balance">{flagship.tagline}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">{flagship.copy}</p>
            <ul className="mt-6 grid gap-3">
              {flagship.proof.map((line) => (
                <li key={line} className="flex gap-3 text-base leading-7 text-white/68">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {flagship.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/7 px-3 py-1.5 text-sm font-medium text-white/72">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.14} className="dark-glass rounded-[2rem] p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#050505] p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-white/44">Predictive Risk Console</p>
                  <p className="mt-1 text-xl font-semibold">Satellite Alert System</p>
                </div>
                <span className="rounded-full bg-emerald-400/12 px-3 py-1.5 text-sm font-semibold text-emerald-200">Monitoring</span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {flagship.features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <div className="h-1.5 w-16 rounded-full bg-emerald-400/70" />
                    <p className="mt-4 text-sm font-semibold text-white/78">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Products & Projects</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-black text-balance sm:text-6xl">
            Projects presented as products: problem, solution, and impact.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={0.04}
              className="grid overflow-hidden rounded-[2rem] border border-black/10 bg-white/64 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur lg:grid-cols-[0.92fr_1.08fr]"
            >
              <PlaceholderFrame label={project.imageSlot} src={project.imageSrc} className="min-h-[360px] rounded-none" />
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">{project.label}</p>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight text-black">{project.name}</h3>
                <div className="mt-7 grid gap-5">
                  <ProductCopy label="Problem" copy={project.problem} />
                  <ProductCopy label="Solution" copy={project.solution} />
                  <ProductCopy label="Impact" copy={project.impact} />
                </div>
                {project.metrics && project.metrics.length > 0 ? (
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-emerald-700/15 bg-emerald-700/[0.08] px-3 py-1.5 text-sm font-semibold text-emerald-800"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-black/[0.055] px-3 py-1.5 text-sm font-semibold text-black/62">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-black/10 bg-white/58 px-4 py-3 text-sm font-semibold text-black/64">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={project.repo ?? profile.github} icon={Github} variant={index % 2 === 0 ? "dark" : "ghost"}>
                    View Code
                  </ButtonLink>
                  {project.demoUrl ? (
                    <ButtonLink href={project.demoUrl} icon={ExternalLink} variant="light">
                      Live Demo
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCopy({ label, copy }: { label: string; copy: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/36">{label}</p>
      <p className="mt-1 text-base leading-7 text-black/66">{copy}</p>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Skills</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-black text-balance sm:text-6xl">
            A modern stack for AI products, interfaces, and reliable systems.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.05} className="group rounded-[1.5rem] border border-black/10 bg-white/58 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white">
                <Icon className="size-7 text-emerald-700 transition group-hover:scale-110" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-black/[0.055] px-3 py-1.5 text-sm font-semibold text-black/58">
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Leadership</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black text-balance sm:text-6xl">
            Lead with product clarity, technical judgment, and presentation energy.
          </h2>
        </Reveal>
        <div className="grid gap-4">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08} className="glass rounded-[1.5rem] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.items.map((responsibility) => (
                        <span key={responsibility} className="rounded-full bg-white/72 px-3 py-1.5 text-sm font-semibold text-black/58">
                          {responsibility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="bg-[#050505] pb-10 pt-24 text-white sm:pt-32">
      <div className="container-x">
        <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Contact</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Let’s build products that feel useful, intelligent, and worth caring about.
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            {externalLinks.map((link) => {
              const Icon = link.icon;
              return (
                <ButtonLink key={link.label} href={link.href} icon={Icon} variant={link.label === "Email" ? "light" : "ghost"}>
                  {link.label}
                </ButtonLink>
              );
            })}
          </div>
          <ContactForm />
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-3 text-sm text-white/38 sm:flex-row">
          <p>© 2026 Kishore P. Product-Focused AI Engineer.</p>
          <div className="flex gap-4">
            <Link href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="size-4" /> {profile.email}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
