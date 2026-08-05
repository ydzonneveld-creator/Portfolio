const cv = [
  {
    label: "Education",
    items: [
      "MSc Integrated Product Design, TU Delft — 2023–2026",
      "Exchange, Politecnico di Milano — 2025",
      "BSc Industrial Design Engineering, TU Delft — 2019–2022",
    ],
  },
  {
    label: "Experience",
    items: [
      "Product Development, Jelt Design — 2024–2025",
      "Marketing & Communication, TU Delft Science Centre — 2024–2025",
      "TOC (technical support committee), Studievereniging ID — 2022–2023",
    ],
  },
  {
    label: "Languages",
    items: ["Dutch — native", "English — proficient", "French & Spanish — intermediate"],
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-wood-soft/40 px-6 py-24 lg:px-24 lg:py-32">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-stone">
          Let&rsquo;s talk
        </h2>
        <span className="font-mono text-xs uppercase tracking-wide text-wood">07</span>
      </div>

      <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-dim">
        I&rsquo;m looking for a design role where prototypes get built, not
        just rendered. If that&rsquo;s what you&rsquo;re hiring for, I&rsquo;d
        like to hear from you.
      </p>

      <a
        href="mailto:y.d.zonneveld@student.tudelft.nl"
        className="mt-8 inline-block break-all font-[family-name:var(--font-display)] text-xl font-medium text-signal underline decoration-wood-soft underline-offset-8 hover:decoration-signal sm:text-2xl md:text-3xl"
      >
        y.d.zonneveld@student.tudelft.nl
      </a>

      <div className="mt-16 grid gap-10 border-t border-wood-soft/40 pt-12 sm:grid-cols-3">
        {cv.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-wood">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-stone-dim">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-16 font-mono text-[11px] uppercase tracking-wide text-wood-soft">
        Yoran Zonneveld &mdash; Delft, NL
      </p>
    </footer>
  );
}
