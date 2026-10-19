import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";

// Server component: checks at build/request time whether the real photo has been added.
function hasPhoto() {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", profile.photo.src));
  } catch {
    return false;
  }
}

export default function Hero() {
  const photo = hasPhoto();

  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pt-24">
      <div className="grid items-start gap-10 md:gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent">{profile.role}</p>
          <h1 className="t-hero">{profile.headline}</h1>
          <p className="measure mt-7 text-xl">{profile.tagline}</p>
          <p className="measure mt-4 text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-fg px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Explore projects <ArrowDown size={16} aria-hidden />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm transition-colors hover:bg-sunken"
            >
              <Download size={16} aria-hidden /> Download resume
            </a>
          </div>

          <p className="mt-6 flex gap-5 text-sm">
            <a className="underline underline-offset-4 hover:text-accent" href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="underline underline-offset-4 hover:text-accent" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>

        {/* Portrait: round frame with a hover ring and gentle zoom. */}
        <div className="order-first md:order-none md:col-span-5 md:mt-6">
          <figure className="group relative mx-auto aspect-square w-full max-w-[14rem] sm:max-w-[22rem] md:max-w-none">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-full border border-accent/30 transition-all duration-500 group-hover:-inset-5 group-hover:border-accent/70"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-line bg-sunken shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
              {photo ? (
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
              ) : (
                <div className="grid h-full place-items-center">
                  <p className="font-serif text-7xl text-muted/60" aria-hidden>
                    KA
                  </p>
                </div>
              )}
            </div>
          </figure>
        </div>
      </div>

      {/* The one technical visual: the real pipeline from the emotion recognition project. */}
      <figure className="mt-16 border-t border-line pt-6">
        <ol className="grid gap-px overflow-hidden border border-line bg-line text-sm grid-cols-2 sm:grid-cols-4">
          {profile.pipeline.steps.map((s, i) => (
            <li key={s} className="bg-surface p-4">
              <span className="block text-xs text-muted">Step {i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
        <figcaption className="mt-3 text-sm text-muted">{profile.pipeline.caption}</figcaption>
      </figure>
    </section>
  );
}
