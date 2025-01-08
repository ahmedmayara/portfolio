import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { LeftPanel } from "@/components/left-panel";
import { RightPanel } from "@/components/right-panel";

export default function Home() {
  return (
    <Container>
      <main className="flex h-full w-full flex-col gap-6 px-6 xl:flex-row xl:gap-10">
        <LeftPanel />
        <RightPanel />
        <div className="block pb-6 xl:hidden">
          <Footer />
        </div>
      </main>
    </Container>
  );
}
