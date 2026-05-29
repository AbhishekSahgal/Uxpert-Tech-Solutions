type StepTechDetailsProps = {
  selected: string[];
  onToggle: (tag: string) => void;
  onBack: () => void;
  onNext: () => void;
};

const techTags = [
  "React",
  "React Native",
  "Node.js",
  "TypeScript",
  "Python",
  "Next.js",
  "PostgreSQL",
  "AWS",
  "GraphQL",
];

export function StepTechDetails({ selected, onToggle, onBack, onNext }: StepTechDetailsProps) {
  return (
    <section className="animate-in fade-in-0 space-y-6 duration-300">
      <h3 className="text-2xl font-semibold tracking-tight">Select your preferred tech stack.</h3>
      <p className="text-muted-foreground">Don&apos;t worry if you&apos;re not sure, we can advise you later.</p>
      <div className="flex flex-wrap gap-3">
        {techTags.map((tag) => {
          const isActive = selected.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggle(tag)}
              className={[
                "rounded-full border px-4 py-2 font-mono text-xs transition-all",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary",
              ].join(" ")}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3 text-sm font-medium transition-all hover:bg-muted"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back
        </button>
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
