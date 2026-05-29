export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-border bg-[#f2f4f6] py-8 md:py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-16">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
          Uxpert Tech Solutions
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="#">
            Privacy Policy
          </a>
          <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="#">
            Terms of Service
          </a>
          <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="#">
            Service Level Agreement
          </a>
          <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="#">
            Documentation
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2024 Uxpert Tech Solutions Support &amp; Maintenance. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
