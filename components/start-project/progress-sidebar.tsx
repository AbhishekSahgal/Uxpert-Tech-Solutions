type ProgressSidebarProps = {
  currentStep: number;
  onStepChange: (step: number) => void;
};

const steps = [
  { id: 1, title: "Project Type", subtitle: "Defining scope" },
  { id: 2, title: "Tech Details", subtitle: "Stack preferences" },
  { id: 3, title: "Vision & Contact", subtitle: "Final touches" },
];

export function ProgressSidebar({ currentStep, onStepChange }: ProgressSidebarProps) {
  return (
    <aside className="space-y-8 lg:col-span-3">
      <div className="sticky top-24 space-y-6">
        {steps.map((step, idx) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div key={step.id}>
              <button
                type="button"
                className="group flex cursor-pointer items-center gap-4 text-left"
                onClick={() => onStepChange(step.id)}
              >
                <div
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-sm transition-all duration-300",
                    isActive ? "border-primary text-primary" : "border-border text-muted-foreground",
                    isCompleted ? "bg-[#dae2fd] text-primary" : "",
                  ].join(" ")}
                >
                  {isCompleted ? (
                    <span className="material-symbols-outlined text-base">check</span>
                  ) : (
                    `0${step.id}`
                  )}
                </div>
                <div className="flex flex-col">
                  <span
                    className={[
                      "font-mono text-[11px] uppercase tracking-wider",
                      isActive ? "text-primary" : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {step.title}
                  </span>
                  <span className="text-sm text-muted-foreground">{step.subtitle}</span>
                </div>
              </button>
              {idx < steps.length - 1 ? <div className="ml-5 mt-3 h-8 w-px bg-border" /> : null}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
