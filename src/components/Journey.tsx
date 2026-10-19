import { profile } from "@/data/profile";

export default function Journey() {
  return (
    <section id="experience" className="border-t border-line bg-sunken/60 surface-transition">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-28">
        <h2 className="t-section">Experience &amp; education</h2>

        <div className="mt-12 grid gap-16 md:grid-cols-12">
          {/* Internships: ordered newest first, so the vertical rule carries real meaning. */}
          <div className="md:col-span-7">
            <h3 className="mb-6 font-medium">Internships</h3>
            <ol className="space-y-10 border-l border-line pl-6">
              {profile.internships.map((i) => (
                <li key={i.title + i.place} className="relative">
                  <span aria-hidden className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent" />
                  <p className="font-serif text-xl">{i.title}</p>
                  <p className="text-sm text-muted">{i.place}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                    {i.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-12 md:col-span-5">
            <div>
              <h3 className="mb-4 font-medium">Education</h3>
              <ul className="space-y-4">
                {profile.education.map((e) => (
                  <li key={e.title}>
                    <p>{e.title}</p>
                    <p className="text-sm text-muted">
                      {e.place}. {e.period}. {e.note}.
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-medium">Certifications</h3>
              <ul className="space-y-1 text-muted">
                {profile.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
