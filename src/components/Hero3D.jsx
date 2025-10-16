import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0114] via-[#0a0420] to-[#03010a]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Grain and gradient accents - non-blocking */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<?xml version=\\'1.0\\' encoding=\\'UTF-8\\'?><svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/><feColorMatrix type=\\'saturate\\' values=\\'0\\'/><feComponentTransfer><feFuncA type=\\'table\\' tableValues=\\'0 0 0.6 1\\'/></feComponentTransfer><feBlend mode=\\'screen\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.8\\'/></svg>')" }} />
        <div className="absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),rgba(0,0,0,0)_60%)] blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-10rem] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),rgba(0,0,0,0)_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex min-h-screen items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-[linear-gradient(120deg,#a78bfa_0%,#f472b6_40%,#22d3ee_100%)] drop-shadow-[0_2px_12px_rgba(124,58,237,0.35)]"
          >
            Bold, colorful, and interactive.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
          >
            Experience a futuristic 3D hero that reacts to your cursor, wrapped in vibrant purple and blue hues on a sleek, dark canvas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
