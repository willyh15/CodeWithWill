import React, { ReactNode } from "react";
import StarfieldCanvas from "@/components/Starfield/Starfield";
import ThreeDBackground from "@/components/ThreeDBackground";
import { ModalWithVortex } from "@/components/ModalWithVortex";
import { LoadingIndicator } from "@/components/LoadingIndicator";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10">
        <StarfieldCanvas color="#6E44FF" particleCount={500} speed={0.0005} />
        <ThreeDBackground />
      </div>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      {/* Global Components */}
      <ModalWithVortex />
      <LoadingIndicator />
    </div>
  );
}
