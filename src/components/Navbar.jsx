import { Rocket, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30" />
          <span className="text-white font-semibold tracking-tight">NeonWave</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#showcase" className="text-white/80 hover:text-white transition">Showcase</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">
          <Rocket size={16} /> Launch
        </button>
      </div>
    </header>
  );
}
