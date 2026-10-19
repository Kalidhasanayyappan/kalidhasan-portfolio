import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-sunken/60 surface-transition">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-28">
        <h2 className="t-section">Skills</h2>
        <p className="measure mt-4 text-muted">Grouped by what I use them for. Where a skill comes from a specific project or role, it&apos;s noted.</p>

        <dl className="mt-12 divide-y divide-line border-y border-line">
          {profile.skills.map((g) => (
            <div key={g.group} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8">
              <dt className="font-medium md:col-span-3">{g.group}</dt>
              <dd className="md:col-span-9">
                <p>{g.items.join(", ")}</p>
                {g.evidence && <p className="mt-1 text-sm text-muted">{g.evidence}</p>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
