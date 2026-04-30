import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroRef from "@assets/UNLV_Volleyball_—_Stadium_Energy_Homepage_1777519729850.jpg";
import { useEffect } from "react";

/* ── Marquee strip ─────────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "REBELS VOLLEYBALL",
  "LAS VEGAS",
  "MWC CHAMPIONS",
  "2026 RECRUITING",
  "MAKE HISTORY",
  "TOP 25 PROGRAM",
];

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden bg-[#CC0000] py-3 border-y border-[#FF0000]/20">
      <motion.div
        className="flex gap-12 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-white font-['Bebas_Neue'] text-xl tracking-[0.25em]"
          >
            {item}
            <span className="mx-6 text-white/40">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Scramble/reveal word list ─────────────────────────────────────── */
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

/* ── Main page ─────────────────────────────────────────────────────── */
export default function StadiumEnergy() {
  // Page-level scroll for hero parallax
  const { scrollY } = useScroll();

  // Smooth spring wrapper so parallax feels physical
  const smoothScroll = useSpring(scrollY, { stiffness: 80, damping: 25 });

  // Three layers moving at different speeds
  const imgY      = useTransform(smoothScroll, [0, 900], [0, 140]);   // slowest
  const glowY     = useTransform(smoothScroll, [0, 900], [0, 70]);    // mid
  const heroTextY = useTransform(smoothScroll, [0, 900], [0, 260]);   // fastest
  const heroOpacity = useTransform(scrollY, [0, 480], [1, 0]);

  // Clip-path progress for image reveal
  const clipProgress = useTransform(scrollY, [0, 500], [100, 115]);
  const clip = useMotionTemplate`circle(${clipProgress}% at 50% 40%)`;

  // Section refs for in-section scroll
  const pitchRef = useRef<HTMLElement>(null);
  const { scrollYProgress: pitchProgress } = useScroll({
    target: pitchRef,
    offset: ["start end", "end start"],
  });
  const pitchX = useTransform(pitchProgress, [0, 1], ["-4%", "4%"]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#080000] text-white selection:bg-[#CC0000] selection:text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[100dvh] w-full flex items-end justify-start overflow-hidden">

        {/* Layer 1 — Background image (slowest) */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: imgY, clipPath: clip }}
        >
          <img
            src={heroRef}
            alt="UNLV Volleyball Arena"
            className="w-full h-[125%] object-cover object-center opacity-50"
          />
        </motion.div>

        {/* Layer 2 — Gradient vignette (mid speed) */}
        <motion.div className="absolute inset-0 z-10" style={{ y: glowY }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_60%,rgba(204,0,0,0.55)_0%,rgba(8,0,0,0.0)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080000]/60 via-transparent to-[#080000]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080000]/80 via-transparent to-[#080000]/30" />
        </motion.div>

        {/* Layer 3 — Hero text (fastest — exits first) */}
        <motion.div
          className="relative z-20 w-full px-8 md:px-16 pb-20 md:pb-28"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-[2px] bg-[#CC0000]" />
            <p className="font-['Inter'] text-[10px] font-semibold tracking-[0.6em] text-[#CC0000] uppercase">
              Las Vegas, Nevada · 2026 Recruiting
            </p>
          </motion.div>

          {/* Main title — Bebas Neue for raw power */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-['Bebas_Neue'] leading-[0.85] text-white"
              style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              REBEL
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-['Bebas_Neue'] leading-[0.85]"
              style={{
                fontSize: "clamp(5rem, 18vw, 18rem)",
                WebkitTextStroke: "2px #CC0000",
                color: "transparent",
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              RISING
            </motion.h1>
          </div>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="font-['Inter'] text-sm md:text-base text-white/50 font-light tracking-widest mt-8 max-w-sm"
          >
            UNLV Women's Volleyball — where champions are built every day.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-3 mt-10"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-white/30" />
            </motion.div>
            <span className="font-['Inter'] text-[9px] tracking-[0.45em] text-white/30 uppercase">
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE STRIP ────────────────────────────────────────────── */}
      <Marquee />

      {/* ── PITCH SECTION ────────────────────────────────────────────── */}
      <section
        ref={pitchRef}
        className="relative py-32 md:py-48 px-8 md:px-16 overflow-hidden bg-[#080000]"
      >
        {/* Decorative background number */}
        <motion.span
          style={{ x: pitchX }}
          className="absolute right-[-4vw] top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[30vw] text-white/[0.03] select-none pointer-events-none leading-none"
        >
          26
        </motion.span>

        <div className="max-w-5xl relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[2px] bg-[#CC0000]" />
            <p className="font-['Inter'] text-[9px] font-semibold tracking-[0.5em] text-[#CC0000] uppercase">
              The Program
            </p>
          </div>

          <h2
            className="font-['Bebas_Neue'] leading-[0.9] text-white mb-10"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            <WordReveal text="Join the Rebellion." />
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="font-['Inter'] text-lg md:text-xl text-white/60 leading-relaxed font-light"
            >
              We are building something undeniable in Las Vegas — a culture of excellence, a relentless pursuit of greatness, and a sisterhood of athletes who demand more.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-['Inter'] text-base md:text-lg text-white/40 leading-relaxed font-light"
            >
              The lights are bright. The stage is set. Las Vegas is the most electric sports city in America — and UNLV Volleyball plays in that energy every single night.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="py-0 border-y border-white/8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {[
            { number: "3×", label: "MWC Championships", sub: "& counting" },
            { number: "25+", label: "All-Americans", sub: "produced" },
            { number: "Top 25", label: "National Ranking", sub: "consistently" },
            { number: "10K", label: "Arena Capacity", sub: "Thomas & Mack" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-14 px-8 text-center group hover:bg-white/[0.03] transition-colors border-b md:border-b-0 border-white/8"
            >
              <div
                className="font-['Bebas_Neue'] text-white mb-1 group-hover:text-[#CC0000] transition-colors"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                {stat.number}
              </div>
              <div className="font-['Inter'] text-[10px] font-semibold tracking-[0.3em] text-white/70 uppercase mb-1">
                {stat.label}
              </div>
              <div className="font-['Inter'] text-[9px] tracking-[0.2em] text-white/30 uppercase">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PARALLAX QUOTE SECTION ───────────────────────────────────── */}
      <ParallaxQuote />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-40 px-8 md:px-16 relative overflow-hidden bg-[#080000]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.12)_0%,transparent_65%)]" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[2px] bg-[#CC0000]" />
            <p className="font-['Inter'] text-[9px] font-semibold tracking-[0.5em] text-[#CC0000] uppercase">
              2026 Recruiting Class
            </p>
          </div>

          <h2
            className="font-['Bebas_Neue'] text-white leading-[0.88] mb-12"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            <WordReveal text="Your Legacy" />
            <br />
            <WordReveal text="Starts Here." />
          </h2>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 bg-[#CC0000] hover:bg-white text-white hover:text-black px-10 py-5 font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase transition-colors duration-300"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 border border-white/20 hover:border-white/60 text-white/60 hover:text-white px-10 py-5 font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300"
            >
              Watch Highlights
            </motion.button>
          </div>
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

/* ── Parallax Quote ── lives outside to get its own scroll context ── */
function ParallaxQuote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY    = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textY  = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden flex items-center">
      {/* Parallax image layer */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={heroRef}
          alt=""
          aria-hidden
          className="w-full h-[130%] object-cover object-top opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-[#080000]/70" />
      </motion.div>

      {/* Text moves opposite direction */}
      <motion.div
        className="relative z-10 px-8 md:px-16 max-w-4xl"
        style={{ y: textY }}
      >
        <p
          className="font-['Barlow_Condensed'] italic font-black text-white leading-[1.05]"
          style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
        >
          "We are now working towards accomplishments that have never been done before."
        </p>
        <p className="font-['Inter'] text-[10px] tracking-[0.4em] text-[#CC0000] uppercase mt-5">
          — Malia Shoji, Head Coach · UNLV Women's Volleyball
        </p>
      </motion.div>
    </section>
  );
}
