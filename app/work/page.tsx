import React from "react";

import { Container } from "@/components/container";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Work />
      </div>
    </Container>
  );
}
