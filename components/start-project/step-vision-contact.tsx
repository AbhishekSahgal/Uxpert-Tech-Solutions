import type { BudgetRange } from "@/components/start-project/types";

type StepVisionContactProps = {
  vision: string;
  fullName: string;
  email: string;
  budget: BudgetRange;
  onChange: (field: "vision" | "fullName" | "email" | "budget", value: string) => void;
  onBack: () => void;
};

const budgetOptions: BudgetRange[] = ["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

export function StepVisionContact({
  vision,
  fullName,
  email,
  budget,
  onChange,
  onBack,
}: StepVisionContactProps) {
  return (
    <section className="animate-in fade-in-0 space-y-8 duration-300">
      <h3 className="text-2xl font-semibold tracking-tight">Vision &amp; Contact Details</h3>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Your Vision
          </label>
          <textarea
            value={vision}
            onChange={(event) => onChange("vision", event.target.value)}
            className="w-full rounded-lg border border-border bg-white p-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Describe what you want to achieve..."
            rows={4}
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Full Name
            </label>
            <input
              value={fullName}
              onChange={(event) => onChange("fullName", event.target.value)}
              className="w-full rounded-lg border border-border bg-white p-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Email Address
            </label>
            <input
              value={email}
              onChange={(event) => onChange("email", event.target.value)}
              className="w-full rounded-lg border border-border bg-white p-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="john@company.com"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Budget Range
          </label>
          <select
            value={budget}
            onChange={(event) => onChange("budget", event.target.value)}
            className="w-full rounded-lg border border-border bg-white p-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3 text-sm font-medium transition-all hover:bg-muted"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-12 py-3 text-sm font-medium text-primary-foreground shadow-xl shadow-black/10 transition-all hover:opacity-90"
        >
          Submit Inquiry <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </section>
  );
}
