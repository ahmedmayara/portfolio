import { Suspense } from "react";

import { getCachedContributions } from "@/lib/github";

import { Container } from "@/components/container";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Socials } from "@/components/socials";
import { Work } from "@/components/work";

export default function Home() {
  const contributions = getCachedContributions(process.env.GITHUB_USERNAME!);

  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Header />
        <Socials />
        <Suspense fallback={<GitHubContributionsFallback />}>
          <GitHubContributions
            contributions={contributions}
            githubProfileUrl={process.env.GITHUB_PROFILE_URL!}
          />
        </Suspense>
        <Work />
        <Projects />
        <Education />
        <Skills />
        <Footer />
      </div>
    </Container>
  );
}
