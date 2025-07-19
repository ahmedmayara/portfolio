import { Container } from "@/components/container";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Socials } from "@/components/socials";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Header />
        <Socials />
        <Work />
        <Projects />
        <Education />
        <Skills />
        <Footer />
      </div>
    </Container>
  );
}
