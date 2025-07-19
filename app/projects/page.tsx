import React from "react";

import { Container } from "@/components/container";
import { Projects } from "@/components/projects";

export default function Page() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Projects />
      </div>
    </Container>
  );
}
