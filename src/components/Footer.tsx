export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-bold tracking-tight">ASUS</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              In Search of Incredible.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              Products
            </div>
            <ul className="mt-4 space-y-3">
              {["Laptops", "Desktop", "Displays", "Components"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              Support
            </div>
            <ul className="mt-4 space-y-3">
              {["Drivers & Manuals", "Warranty", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              Company
            </div>
            <ul className="mt-4 space-y-3">
              {["About ASUS", "Press", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ASUS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
