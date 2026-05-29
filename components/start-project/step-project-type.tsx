import type { ProjectType } from "@/components/start-project/types";

type ProjectTypeOption = {
  label: ProjectType;
  description: string;
  icon: string;
};

const options: ProjectTypeOption[] = [
  {
    label: "SaaS Platform",
    description: "Scalable cloud-based applications for enterprise or consumer use.",
    icon: "dashboard",
  },
  {
    label: "Mobile App",
    description: "Native or cross-platform experiences for iOS and Android.",
    icon: "smartphone",
  },
  {
    label: "UI/UX Design",
    description: "High-fidelity prototypes and visual identity design systems.",
    icon: "palette",
  },
  {
    label: "Startup MVP",
    description: "Rapid development of core features to hit the market fast.",
    icon: "rocket_launch",
  },
];

type StepProjectTypeProps = {
  selected: ProjectType | null;
  onSelect: (value: ProjectType) => void;
  onNext: () => void;
};

export function StepProjectType({ selected, onSelect, onNext }: StepProjectTypeProps) {
  return (
    <section className="animate-in fade-in-0 space-y-6 duration-300">
      <h3 className="text-2xl font-semibold tracking-tight">What type of project are we starting?</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {options.map((option) => {
          const isActive = selected === option.label;
          return (
            <button
              key={option.label}
              type="button"
              className={[
                "group flex flex-col gap-4 rounded-xl border p-6 text-left transition-all",
                isActive ? "border-primary bg-[#f2f4f6]" : "border-border bg-white hover:border-primary",
              ].join(" ")}
              onClick={() => onSelect(option.label)}
            >
              <span className="material-symbols-outlined text-3xl text-primary">{option.icon}</span>
              <div>
                <h4 className="mb-1 text-lg font-semibold">{option.label}</h4>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex justify-end pt-6">
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Next Step <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
