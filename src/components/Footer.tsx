export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-black/50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-white/10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-primary"
                >
                  <path d="M4 8L16 4L28 8V24L16 28L4 24V8Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M16 4V28" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 8L28 24" stroke="currentColor" strokeWidth="2" />
                  <path d="M28 8L4 24" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-tight font-heading">
                ASUS Zenbook
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              In Search of Incredible. For over three decades, ASUS has been
              crafting technology that empowers everyone to do more.
            </p>
            <div className="mt-6 flex gap-3">
              {["instagram", "x", "youtube", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-muted-foreground transition-all duration-200 hover:border-white/[0.1] hover:text-foreground hover:bg-white/[0.04]"
                  aria-label={social}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${social}/666`}
                    alt=""
                    className="h-3.5 w-3.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Products",
              items: ["Zenbook Series", "Vivobook", "ROG Gaming", "ProArt Studio", "Displays"],
            },
            {
              title: "Support",
              items: ["Drivers & Manuals", "Warranty Info", "Contact Us", "Repair Status", "FAQ"],
            },
            {
              title: "Company",
              items: ["About ASUS", "Press Room", "Careers", "Investors", "Sustainability"],
            },
            {
              title: "Legal",
              items: ["Privacy Policy", "Terms of Service", "Cookie Policy", "E-Waste", "Patents"],
            },
          ].map((group) => (
            <div key={group.title}>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {group.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} ASUS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-foreground">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
