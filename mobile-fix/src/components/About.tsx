import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-12 md:py-28">
        <h2 className="t-section md:col-span-4">About</h2>
        <div className="measure space-y-5 text-lg md:col-span-7 md:col-start-6">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
