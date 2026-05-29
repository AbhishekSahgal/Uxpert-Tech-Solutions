import type { Metadata } from "next";
import { StartProjectPage } from "@/components/start-project/start-project-page";

export const metadata: Metadata = {
  title: "Start Project | Uxpert Tech Solutions",
  description:
    "Tell Uxpert Tech Solutions about your product idea and get a premium architecture-first implementation plan.",
};

export default function StartProjectRoute() {
  return <StartProjectPage />;
}
