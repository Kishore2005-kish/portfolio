import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.intro,
    email: profile.email,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: profile.location,
    },
    sameAs: [profile.github, profile.linkedin],
  };
}
