import React from "react";

import Link from "next/link";
import Image from "next/image";

export function Education() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs tracking-tighter">
          Where I’ve learned and grown!
        </h1>
        <h2 className="font-doto text-2xl font-bold">Education</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="https://isetn.rnu.tn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group hover:bg-accent relative flex cursor-pointer flex-col rounded border border-dashed p-2.5 transition-colors duration-200 ease-in-out">
            <Image
              className="mb-3 size-10 shrink-0"
              src="/images/iset-logo.png"
              width={40}
              height={40}
              alt="ISETN logo"
            />
            <h3 className="text-muted-foreground mb-1 text-xs">2021 - 2024</h3>
            <p className="text-sm font-medium tracking-tight">
              Bachelor&apos;s Degree in Computer Technology
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              Higher Institute of Technological Studies of Nabeul (ISETN)
            </p>
          </div>
        </Link>

        <div className="group hover:bg-accent relative flex cursor-pointer flex-col rounded border border-dashed p-2.5 transition-colors duration-200 ease-in-out">
          <Image
            className="mb-3 size-10 shrink-0"
            src="/images/ldcf-logo.png"
            width={40}
            height={40}
            alt="ISETN logo"
          />
          <h3 className="text-muted-foreground mb-1 text-xs">2017 - 2021</h3>
          <p className="text-sm font-medium tracking-tight">
            High School Diploma in Computer Science
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            Dar Chaabane El Fehri High School
          </p>
        </div>
      </div>
    </div>
  );
}
