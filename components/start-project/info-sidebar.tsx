import Image from "next/image";

export function InfoSidebar() {
  return (
    <aside className="space-y-8 lg:col-span-3">
      <div className="space-y-8 rounded-xl border border-border bg-white p-8">
        <div>
          <h5 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Why Work With Us
          </h5>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-xl text-primary">verified</span>
              <span className="text-sm">Architect-level technical oversight on every line of code.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-xl text-primary">speed</span>
              <span className="text-sm">Rapid MVP turnaround without compromising scalability.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-xl text-primary">security</span>
              <span className="text-sm">Built-in security and performance optimization.</span>
            </li>
          </ul>
        </div>
        <div className="border-t border-border pt-8">
          <p className="mb-4 text-sm italic text-muted-foreground">
            &quot;The attention to technical detail and the clean, modular approach Expert Architect
            brought to our SaaS platform was transformative. They are true masters of their
            craft.&quot;
          </p>
          <div className="flex items-center gap-3">
            <Image
              className="h-10 w-10 rounded-full object-cover"
              alt="Rohit Sharma"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeQT8dsCSTvzbvJ2xjmrXA-XJdpFiGKwg2C6yDABcVahte6yjUorvhb96CcXOK9M87LHAoWRfOeB9aF6xkZinp_pjKbtBKug2i5mzcf0vPH8z2UZHEMhVHaIOKgZpLDub-177Wl0s2yl1txH5biCQPc6lq3YzygVM0AjmVCpKYBvgtMxvj7MHRvBLl-ASBWgEZFrCWrcUrrPJvuok1dwmbgWc8w3e7oyizGT1VKLr8gf-INiCrY0shJ-c0Jo3tn-xeRfc_nv43Gcz0"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">Rohit Sharma</span>
              <span className="font-mono text-[10px] text-muted-foreground">CTO, Nexus Systems</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg border border-border bg-[#eceef0] p-4">
          <span
            className="material-symbols-outlined text-3xl text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            workspace_premium
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] font-bold text-primary">SLA GUARANTEE</span>
            <span className="text-[11px] text-muted-foreground">99.9% Uptime Support</span>
          </div>
        </div>
      </div>

      <div className="relative h-48 overflow-hidden rounded-xl bg-primary">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay"
          alt="Server boards and fiber optics"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl_wKiglGIvVA_Eq4XeJHpHF_Mn8e1NV6ue9URCw9k4jQFS73JyJ7Qduzv55CqDtYRZLmQDqwqS5sXzOPk52_hINl1IwBvnueyZmmlpaAtC75ekaM5RQiTv7R-v0VjXj9Jt6oscOHQrL-fHyJ2uL9oOSzh2nvCsdG1JlGDB14Og12BluvvdHQxKwQ3Lva2pVNLjtvCEdWHxgwGR0rdPO1Z9HqfBZ3iJ5OYKwIyxlpXwFcaJPkoTijKJGinLI-k-x9_A9tLFsS9ypE3"
          fill
          sizes="(max-width: 1024px) 100vw, 320px"
        />
        <div className="relative flex h-full flex-col justify-end p-6">
          <span className="font-mono text-[10px] text-white/80">CURRENT STATUS</span>
          <span className="text-lg font-semibold text-white">Accepting New Projects</span>
        </div>
      </div>
    </aside>
  );
}
