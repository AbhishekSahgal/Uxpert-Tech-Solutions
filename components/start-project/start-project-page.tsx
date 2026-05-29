"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { InfoSidebar } from "@/components/start-project/info-sidebar";
import { ProgressSidebar } from "@/components/start-project/progress-sidebar";
import { SiteFooter } from "@/components/start-project/site-footer";
import { StepProjectType } from "@/components/start-project/step-project-type";
import { StepTechDetails } from "@/components/start-project/step-tech-details";
import { StepVisionContact } from "@/components/start-project/step-vision-contact";
import type { StartProjectFormState } from "@/components/start-project/types";

const initialFormState: StartProjectFormState = {
  projectType: null,
  techStack: [],
  vision: "",
  fullName: "",
  email: "",
  budget: "$10k - $25k",
};

export function StartProjectPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState<StartProjectFormState>(initialFormState);

  const isLastStep = currentStep === 3;

  const stepContent = useMemo(() => {
    if (currentStep === 1) {
      return (
        <StepProjectType
          selected={formState.projectType}
          onSelect={(projectType) => setFormState((prev) => ({ ...prev, projectType }))}
          onNext={() => setCurrentStep(2)}
        />
      );
    }

    if (currentStep === 2) {
      return (
        <StepTechDetails
          selected={formState.techStack}
          onToggle={(tag) =>
            setFormState((prev) => ({
              ...prev,
              techStack: prev.techStack.includes(tag)
                ? prev.techStack.filter((item) => item !== tag)
                : [...prev.techStack, tag],
            }))
          }
          onBack={() => setCurrentStep(1)}
          onNext={() => setCurrentStep(3)}
        />
      );
    }

    return (
      <StepVisionContact
        vision={formState.vision}
        fullName={formState.fullName}
        email={formState.email}
        budget={formState.budget}
        onChange={(field, value) =>
          setFormState((prev) => ({
            ...prev,
            [field]: value,
          }))
        }
        onBack={() => setCurrentStep(2)}
      />
    );
  }, [currentStep, formState]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9fb] text-[#191c1e]">
      <nav className="fixed top-0 z-[100] w-full border-b border-[#c6c6cd] bg-[#f7f9fb]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
          <div className="flex cursor-pointer items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#0f172a] font-black text-white">
              U
            </div>
            <span className="text-xl font-bold tracking-tight">Uxpert Tech Solutions</span>
          </div>
          <div className="hidden gap-8 md:flex">
            <Link className="text-sm font-medium text-[#45464d] hover:text-[#0f172a]" href="/#projects">
              Solutions
            </Link>
            <Link className="text-sm font-medium text-[#45464d] hover:text-[#0f172a]" href="/#about">
              About
            </Link>
            <Link className="text-sm font-medium text-[#45464d] hover:text-[#0f172a]" href="/#tech">
              Stack
            </Link>
            <Link className="text-sm font-medium text-[#45464d] hover:text-[#0f172a]" href="/#process">
              Process
            </Link>
          </div>
          <Link
            href="/start-project"
            className="rounded bg-[#0f172a] px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            Start Your Project
          </Link>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 px-6 py-12 md:px-16 md:py-24 lg:grid-cols-12 lg:gap-8">
          <ProgressSidebar currentStep={currentStep} onStepChange={setCurrentStep} />

          <div className="lg:col-span-6">
            <div className="mb-12" id="onboarding-header">
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Let&apos;s build something extraordinary together.
              </h1>
              <p className="text-lg text-muted-foreground">
                Tell us about your project, and we&apos;ll craft a technical solution that stands out.
              </p>
            </div>

            <form onSubmit={handleSubmit}>{stepContent}</form>

            {isLastStep ? (
              <p className="mt-4 text-xs text-muted-foreground">
                Form submission wiring can be connected to your backend API when you are ready.
              </p>
            ) : null}
          </div>

          <InfoSidebar />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
