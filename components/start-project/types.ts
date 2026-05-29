export type ProjectType = "SaaS Platform" | "Mobile App" | "UI/UX Design" | "Startup MVP";

export type BudgetRange = "$10k - $25k" | "$25k - $50k" | "$50k - $100k" | "$100k+";

export type StartProjectFormState = {
  projectType: ProjectType | null;
  techStack: string[];
  vision: string;
  fullName: string;
  email: string;
  budget: BudgetRange;
};
