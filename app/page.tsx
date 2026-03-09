import { Container } from "@/components/container";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Socials } from "@/components/socials";
import { Work } from "@/components/work";
import { getContributions } from "@/lib/github";
import { Contributions } from "@/components/contributions";

export default async function Home() {
  const history = await getContributions(process.env.GITHUB_USERNAME!);

  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Header />
        <Socials />
        <Contributions history={history} />
        <Work />
        <Projects />
        <Education />
        <Skills />
        <Footer />
      </div>
    </Container>
  );
}
