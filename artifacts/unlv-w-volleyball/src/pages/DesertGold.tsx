import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroRef from "@assets/UNLV_Volleyball_—_Stadium_Energy_Homepage_1777519729850.jpg";
import { useEffect } from "react";

const GOLD = "#C9A84C";
const SCARLET = "#CC0000";

export default function DesertGold() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 800], [0, 120]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0e0c0a] text-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[100dvh] flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: imgY }}
            src={heroRef}
            alt="UNLV Volleyball Arena"
            className="w-full h-[115%] object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a] via-[#0e0c0a]/70 to-[#0e0c0a]/10" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 30% 60%, ${SCARLET}22 0%, transparent 55%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 80% 20%, ${GOLD}18 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Logo / wordmark top-left */}
        <div className="absolute top-0 left-0 right-0 z-20 px-8 md:px-14 pt-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <div
              className="w-9 h-9 flex items-center justify-center"
              style={{ background: GOLD }}
            >
              <span className="font-[Barlow_Condensed] text-[#0e0c0a] text-xl font-black">R</span>
            </div>
            <div>
              <p className="text-[9px] font-black tracking-[0.35em] text-white/80 uppercase">
                UNLV Volleyball
              </p>
              <p className="text-[8px] tracking-[0.2em] text-white/35 uppercase">Est. 1996</p>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[9px] tracking-[0.35em] text-white/35 uppercase hidden md:block"
          >
            Las Vegas, Nevada
          </motion.p>
        </div>

        {/* Hero text — bottom of screen */}
        <div className="relative z-10 px-8 md:px-14 pb-16 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[9px] font-black tracking-[0.5em] uppercase mb-4"
            style={{ color: GOLD }}
          >
            Where Legends Are Forged
          </motion.p>

          <h1 className="font-[Barlow_Condensed] font-black uppercase leading-[0.85] mb-6">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-[18vw] md:text-[13vw] text-white"
            >
              UNLV
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="block text-[9vw] md:text-[6.5vw] tracking-[0.04em]"
              style={{ color: GOLD }}
            >
              VOLLEYBALL
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex items-center gap-6"
          >
            <button
              className="group inline-flex items-center gap-2 px-8 py-3.5 font-black text-[10px] tracking-[0.2em] uppercase text-[#0e0c0a] transition-all"
              style={{ background: GOLD }}
            >
              Start Recruiting
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="h-px flex-1 max-w-[120px] bg-white/15" />
            <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase">Scroll to explore</span>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-28 md:py-36 px-8 md:px-14">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12" style={{ background: GOLD }} />
              <p className="text-[9px] font-black tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                The Rebel Way
              </p>
            </div>
            <p className="font-[Barlow_Condensed] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-white/90 max-w-3xl">
              "Las Vegas is the most electric sports city in America. We play in that energy every single day — and it shows."
            </p>
            <p className="mt-5 text-[10px] tracking-[0.3em] text-white/35 uppercase">
              — Malia Shoji, Head Coach
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats — horizontal ticker style */}
      <section className="border-y border-white/8 py-0 overflow-hidden">
        <div className="flex">
          {[
            { number: "3×", label: "MWC Champions" },
            { number: "Top 25", label: "National Ranking" },
            { number: "25+", label: "All-Americans" },
            { number: "10K", label: "Arena Capacity" },
            { number: "#1", label: "Diverse Campus" },
            { number: "2021", label: "NIVC Champions" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex-1 min-w-0 px-6 py-8 text-center border-r border-white/8 last:border-r-0"
            >
              <div
                className="font-[Barlow_Condensed] text-3xl md:text-4xl font-black mb-1"
                style={{ color: i % 2 === 0 ? GOLD : "white" }}
              >
                {stat.number}
              </div>
              <div className="text-[8px] tracking-[0.2em] text-white/40 uppercase whitespace-nowrap">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program pillars */}
      <section className="py-28 md:py-36 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-between mb-14 flex-col md:flex-row gap-6"
          >
            <h2
              className="font-[Barlow_Condensed] text-5xl md:text-6xl font-black uppercase"
              style={{ color: GOLD }}
            >
              What We
              <br />
              <span className="text-white">Stand For</span>
            </h2>
            <p className="text-sm text-white/45 max-w-xs leading-relaxed text-right hidden md:block">
              Three core values guide every decision in our program — from recruitment to championships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Connection",
                body: "A sisterhood built on trust. Our culture of openness and belonging is unlike anything else in college volleyball.",
                accent: GOLD,
              },
              {
                title: "Commitment",
                body: "Championships are earned, not given. We hold ourselves to the standard of the elite — every single day.",
                accent: SCARLET,
              },
              {
                title: "Growth",
                body: "We develop complete athletes and complete people. Every Rebel leaves Las Vegas ready to win at life.",
                accent: GOLD,
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white/[0.04] border border-white/8 p-8 relative overflow-hidden group hover:bg-white/[0.07] transition-colors"
              >
                <div
                  className="absolute top-0 left-0 w-full h-0.5"
                  style={{ background: pillar.accent }}
                />
                <h3
                  className="font-[Barlow_Condensed] text-2xl font-black uppercase mb-3"
                  style={{ color: pillar.accent }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 px-8 md:px-14 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${SCARLET}20 0%, transparent 65%)`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[9px] font-black tracking-[0.5em] uppercase mb-5" style={{ color: GOLD }}>
              2026 Recruiting Class
            </p>
            <h2 className="font-[Barlow_Condensed] text-5xl md:text-7xl font-black uppercase text-white mb-10 leading-[0.9]">
              Your Name
              <br />
              <span style={{ color: GOLD }}>In Lights.</span>
            </h2>
            <button
              className="group inline-flex items-center gap-3 px-12 py-5 font-black text-[11px] tracking-[0.2em] uppercase text-[#0e0c0a] transition-all hover:scale-[1.03]"
              style={{ background: GOLD }}
            >
              Begin Your Journey
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-14 border-t border-white/8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 flex items-center justify-center"
              style={{ background: GOLD }}
            >
              <span className="font-[Barlow_Condensed] text-[#0e0c0a] text-lg font-black">R</span>
            </div>
            <span className="text-[9px] tracking-[0.3em] font-black text-white/60 uppercase">
              UNLV Women's Volleyball
            </span>
          </div>
          <p className="text-[8px] tracking-[0.15em] text-white/25 uppercase">
            &copy; {new Date().getFullYear()} UNLV Athletics · Las Vegas, NV
          </p>
        </div>
      </footer>
    </div>
  );
}
