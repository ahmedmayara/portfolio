import React from "react";

import { Container } from "@/components/container";
import { Skills } from "@/components/skills";

export default function Page() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Skills />
      </div>
    </Container>
  );
}
