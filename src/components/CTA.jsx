import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-t from-[#060314] to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/30 via-fuchsia-600/30 to-cyan-500/30 p-10 sm:p-14">
          <div className="pointer-events-none absolute -inset-1 bg-[radial-gradient(circle_at_top_left,rgba(216,180,254,0.35),rgba(0,0,0,0)_60%)]" />
          <div className="relative max-w-3xl">
            <h3 className="text-2xl md:text-4xl font-bold text-white">Make your web presence unforgettable</h3>
            <p className="mt-3 text-white/80">Bring color, depth, and motion to your brand with a responsive 3D experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90 transition"
              >
                Start a Project <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 text-white hover:bg-black/40 transition"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
