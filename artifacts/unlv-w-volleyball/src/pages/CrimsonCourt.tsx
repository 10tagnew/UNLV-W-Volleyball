import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroRef from "@assets/UNLV_Volleyball_—_Stadium_Energy_Homepage_1777519729850.jpg";
import { useEffect } from "react";

export default function CrimsonCourt() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-[#0d0d0d] overflow-x-hidden">
      {/* Hero — Split layout */}
      <section className="relative min-h-[100dvh] grid md:grid-cols-2">
        {/* Left: Content panel */}
        <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 py-32 bg-white">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-[#CC0000] flex items-center justify-center">
                <span className="font-[Barlow_Condensed] text-white text-2xl font-black">R</span>
              </div>
              <div>
                <p className="text-[10px] font-black tracking-[0.3em] text-[#CC0000] uppercase">
                  UNLV Women's Volleyball
                </p>
                <p className="text-[9px] tracking-[0.2em] text-black/40 uppercase">2026 Recruiting</p>
              </div>
            </div>

            <p className="text-[#CC0000] text-xs font-black tracking-[0.4em] uppercase mb-4">
              Las Vegas, Nevada
            </p>

            <h1 className="font-[Barlow_Condensed] text-[11vw] md:text-[7vw] leading-[0.88] font-black uppercase text-[#0d0d0d] mb-8">
              BUILT TO
              <br />
              <span className="text-[#CC0000]">WIN.</span>
            </h1>

            <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-sm mb-10 font-light">
              UNLV Volleyball is a program that demands excellence and rewards those who are ready to compete on the biggest stage in college athletics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-3 bg-[#CC0000] text-white px-8 py-4 font-black tracking-[0.1em] text-xs uppercase hover:bg-[#a80000] transition-colors">
                Start Recruiting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-3 border-2 border-[#0d0d0d] text-[#0d0d0d] px-8 py-4 font-black tracking-[0.1em] text-xs uppercase hover:bg-[#0d0d0d] hover:text-white transition-colors">
                Our Story
              </button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-10 md:left-16 flex items-center gap-2">
            <ChevronDown className="w-4 h-4 text-black/30 animate-bounce" />
            <span className="text-[9px] tracking-[0.3em] text-black/30 uppercase">Scroll</span>
          </div>
        </div>

        {/* Right: Image panel */}
        <motion.div
          className="relative overflow-hidden order-first md:order-last h-[45vw] md:h-auto"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={heroRef}
            alt="UNLV Volleyball Arena"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent md:from-transparent" />
          {/* Red accent bar */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[#CC0000]" />
        </motion.div>
      </section>

      {/* Stats band */}
      <section className="bg-[#CC0000] py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "3×", label: "MWC Champions" },
              { number: "#1", label: "Most Diverse Campus" },
              { number: "Top 25", label: "National Ranking" },
              { number: "10K", label: "Arena Capacity" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center text-white"
              >
                <div className="font-[Barlow_Condensed] text-4xl md:text-5xl font-black mb-1">
                  {stat.number}
                </div>
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars section */}
      <section className="py-24 md:py-32 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#CC0000] text-xs font-black tracking-[0.4em] uppercase mb-3">
              The UNLV Standard
            </p>
            <h2 className="font-[Barlow_Condensed] text-5xl md:text-6xl font-black uppercase text-[#0d0d0d]">
              Three Pillars
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Connection",
                body: "A program built on relationships. Our athletes, coaches, and community form an unbreakable bond that drives everything we do.",
              },
              {
                num: "02",
                title: "Commitment",
                body: "We pursue championships with relentless focus. From the practice court to the national stage, we never settle for anything less.",
              },
              {
                num: "03",
                title: "Growth",
                body: "Every player who puts on the Scarlet & Gray leaves better — as an athlete, as a student, and as a person ready for life beyond the court.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="border-t-4 border-[#CC0000] pt-6"
              >
                <p className="font-[Barlow_Condensed] text-6xl font-black text-[#CC0000]/15 mb-2 leading-none">
                  {pillar.num}
                </p>
                <h3 className="font-[Barlow_Condensed] text-2xl font-black uppercase text-[#0d0d0d] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-black/55 leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-[Barlow_Condensed] text-4xl md:text-5xl font-black uppercase text-white">
              Ready to be a Rebel?
            </h2>
            <p className="text-white/50 text-sm mt-2">Las Vegas is waiting for you.</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="shrink-0 group inline-flex items-center gap-3 bg-[#CC0000] text-white px-10 py-5 font-black tracking-[0.1em] text-xs uppercase hover:bg-white hover:text-[#0d0d0d] transition-colors"
          >
            Connect With Coaches
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-[#080808]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#CC0000] flex items-center justify-center">
              <span className="font-[Barlow_Condensed] text-white text-lg font-black">R</span>
            </div>
            <span className="text-[10px] tracking-[0.25em] font-black text-white/70 uppercase">
              UNLV Women's Volleyball
            </span>
          </div>
          <p className="text-[9px] tracking-[0.1em] text-white/30 uppercase">
            &copy; {new Date().getFullYear()} UNLV Athletics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
