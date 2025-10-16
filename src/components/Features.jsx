import { Cpu, Sparkles, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Realtime 3D",
    desc: "Interactive scenes that respond smoothly to your cursor.",
    Icon: Sparkles,
    gradient: "from-fuchsia-500/20 to-violet-500/10",
    ring: "ring-fuchsia-400/30",
  },
  {
    title: "Optimized Performance",
    desc: "GPU-friendly effects with buttery-smooth animations.",
    Icon: Cpu,
    gradient: "from-violet-500/20 to-cyan-400/10",
    ring: "ring-violet-400/30",
  },
  {
    title: "Lightning Fast",
    desc: "Snappy interactions and low input latency.",
    Icon: Zap,
    gradient: "from-cyan-400/20 to-fuchsia-500/10",
    ring: "ring-cyan-400/30",
  },
  {
    title: "Secure by Design",
    desc: "Best practices baked in from day one.",
    Icon: Shield,
    gradient: "from-indigo-500/20 to-cyan-400/10",
    ring: "ring-indigo-400/30",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28 bg-gradient-to-b from-transparent to-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Designed to thrill</h2>
          <p className="mt-4 text-white/70">A vibrant, futuristic experience that feels alive, not another boring page.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, Icon, gradient, ring }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ${ring} overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition`} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/20">
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
