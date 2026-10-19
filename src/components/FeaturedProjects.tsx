import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

type LinkProps = { repo?: string; demo?: string };

function ProjectLinks({ repo, demo }: LinkProps) {
  if (!repo && !demo) return null;
  const cls = "inline-flex items-center gap-1 underline underline-offset-4 hover:text-accent";
  return (
    <p className="mt-5 flex gap-5 text-sm">
      {repo && (
        <a className={cls} href={repo} target="_blank" rel="noopener noreferrer">
          Source code <ArrowUpRight size={14} aria-hidden />
        </a>
      )}
      {demo && (
        <a className={cls} href={demo} target="_blank" rel="noopener noreferrer">
          Live demo <ArrowUpRight size={14} aria-hidden />
        </a>
      )}
    </p>
  );
}

export default function FeaturedProjects() {
  const f = profile.projects.featured;

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="t-section">Projects</h2>

        {/* Featured case study */}
        <article className="mt-12 grid gap-10 md:grid-cols-12">
          <header className="md:col-span-5">
            <p className="text-sm text-muted">{f.status}</p>
            <h3 className="t-project mt-2">{f.title}</h3>
            <p className="mt-4 text-muted">{f.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {f.stack.map((s) => (
                <li key={s} className="border-b border-line">
                  {s}
                </li>
              ))}
            </ul>
            <ProjectLinks repo={f.repo} demo={f.demo} />
          </header>

          <div className="space-y-8 md:col-span-6 md:col-start-7">
            {f.sections.map((s) => (
              <div key={s.heading}>
                <h4 className="font-medium">{s.heading}</h4>
                <p className="measure mt-2 text-muted">{s.body}</p>
              </div>
            ))}
            <div>
              <h4 className="font-medium">Pipeline</h4>
              <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted marker:text-fg">
                {profile.pipeline.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          </div>
        </article>

        {/* Secondary projects: plain ruled rows, deliberately lighter than the case study. */}
        <div className="mt-20 divide-y divide-line border-y border-line">
          {profile.projects.others.map((p) => (
            <article key={p.title} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-5">
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.status}</p>
              </div>
              <div className="md:col-span-7">
                <p className="measure">{p.body}</p>
                <p className="mt-3 text-sm text-muted">{p.stack.join(", ")}</p>
                <ProjectLinks repo={p.repo} demo={p.demo} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
