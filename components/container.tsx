"use client";

import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-175 px-4 pt-14 pb-32">{children}</div>
  );
}
