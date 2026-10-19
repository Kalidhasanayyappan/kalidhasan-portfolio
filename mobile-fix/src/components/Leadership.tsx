import { profile } from "@/data/profile";

export default function Leadership() {
  return (
    <section id="leadership" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-28">
        <h2 className="t-section">Leadership &amp; Community</h2>
        <p className="measure mt-4 text-muted">{profile.leadershipIntro}</p>

        <h3 className="mt-14 font-medium">Leadership roles</h3>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {profile.leadership.map((l) => (
            <li key={l.role + l.org} className="grid gap-1 py-5 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-5">
                <p className="font-serif text-xl">{l.role}</p>
                <p className="text-sm text-muted">
                  {l.org}
                  {l.period && `, ${l.period}`}
                </p>
              </div>
              <p className="measure text-muted md:col-span-7">{l.body}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 font-medium">Initiatives &amp; impact</h3>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {profile.leadershipHighlights.map((h) => (
            <article key={h.title} className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-5">
                <h4 className="t-project font-serif">{h.title}</h4>
                <p className="mt-1 text-sm text-muted">{h.subtitle}</p>
              </div>
              <p className="measure text-lg md:col-span-6 md:col-start-7">{h.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
