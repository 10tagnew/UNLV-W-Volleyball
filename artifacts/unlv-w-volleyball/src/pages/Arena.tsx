import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";

function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-[2px] bg-[#CC0000]" />
      <p className="font-['Inter'] text-[10px] font-semibold tracking-[0.5em] text-[#CC0000] uppercase">
        {text}
      </p>
    </div>
  );
}

const STATS = [
  { number: "3,117", label: "Attendance Record" },
  { number: "4×", label: "MWC Championships" },
  { number: "2×", label: "NCAA Tournament" },
  { number: "2,000", label: "The Pavilion Cap." },
  { number: "1", label: "Home Court Advantage" },
];

const CHECKLIST = [
  "Championship banners hanging above the court",
  "One of the loudest home crowds in Mountain West volleyball",
  "Single-game attendance record of 3,117 fans vs. Hawaii (Sept. 17, 2024)",
  "State-of-the-art scoreboard and sound system",
  "Located directly on the UNLV campus — no commute",
  "Thomas & Mack Center nearby for marquee matchups",
];

export default function Arena() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#080000] text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Screen Shot 2026-06-12 at 4.25.25 PM.png"
            alt="The Pavilion — UNLV Volleyball"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080000] via-[#080000]/50 to-[#080000]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080000]/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 pt-28 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-[#CC0000]" />
              <p className="font-['Inter'] text-[10px] font-semibold tracking-[0.5em] text-[#CC0000] uppercase">
                The Pavilion · Las Vegas, Nevada
              </p>
            </div>

            <h1
              className="font-['Bebas_Neue'] text-white leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
            >
              Imagine
              <br />
              <span className="text-[#CC0000]">Playing Here.</span>
            </h1>

            <p className="font-['Inter'] text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10 font-light">
              This is The Pavilion — UNLV Volleyball's home court. Championship banners hang from the rafters. The crowd is electric. And every night you play here, you play in front of one of the most passionate fan bases in the Mountain West.
            </p>

            <a
              href="https://form.typeform.com/to/b58w99Bc"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#CC0000] text-white px-10 py-4 rounded-full font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase hover:bg-[#a80000] transition-colors"
            >
              Ready to Be a Rebel?
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section className="bg-[#CC0000] border-y border-[#a80000]">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-white text-center py-10 px-4 border-b md:border-b-0 border-white/20 last:border-b-0"
            >
              <div className="font-['Bebas_Neue'] text-4xl md:text-5xl mb-1">{stat.number}</div>
              <div className="font-['Inter'] text-[9px] font-semibold tracking-[0.25em] text-white/70 uppercase leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── THE ATMOSPHERE ───────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#080000]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="The Experience" />
            <h2
              className="font-['Bebas_Neue'] text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="An Arena Built for Winners." />
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="pt-2"
          >
            <p className="font-['Inter'] text-base md:text-lg text-white/60 leading-relaxed font-light">
              The Pavilion is not just a gym — it is a statement. Championship banners from MWC and NCAA Tournament runs hang above the court. The scoreboard is modern. The sound system is loud. And the fans who pack this building know volleyball.
            </p>
            <p className="font-['Inter'] text-base md:text-lg text-white/40 leading-relaxed font-light mt-6">
              When you suit up in Scarlet &amp; Gray and walk out onto this floor, you feel it. There is history here. And there is room to add yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CHECKLIST ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="The Venue" />
            <h2
              className="font-['Bebas_Neue'] text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Everything You Need to Compete." />
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="pt-2"
          >
            <ul className="space-y-4">
              {CHECKLIST.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#CC0000] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span className="font-['Inter'] text-base text-white/60 leading-relaxed font-light">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 px-8 md:px-16 bg-[#CC0000]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-['Bebas_Neue'] text-white leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
            >
              Your Court.
              <br />Your Stage.
            </h2>
            <p className="font-['Inter'] text-lg md:text-xl text-white/75 leading-relaxed font-light max-w-2xl mb-12">
              Stop imagining. Come see The Pavilion for yourself. Reach out to the coaching staff and take the first step toward playing in one of college volleyball's best home atmospheres.
            </p>
            <a
              href="https://unlvrebels.com/sports/womens-volleyball"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-[#CC0000] px-12 py-5 font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase hover:bg-[#0d0d0d] hover:text-white transition-colors"
            >
              Get Recruited
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="py-10 px-8 md:px-16 border-t border-white/8 bg-[#040000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#CC0000] w-8 h-8 flex items-center justify-center">
              <span className="font-['Bebas_Neue'] text-white text-xl leading-none">R</span>
            </div>
            <div>
              <p className="font-['Inter'] text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                UNLV Women's Volleyball
              </p>
              <p className="font-['Inter'] text-[8px] tracking-[0.2em] text-white/30 uppercase">
                Las Vegas, Nevada
              </p>
            </div>
          </div>
          <p className="font-['Inter'] text-[9px] tracking-[0.15em] text-white/25 uppercase">
            &copy; {new Date().getFullYear()} UNLV Athletics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
