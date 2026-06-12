import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "wouter";
import heroRef from "@assets/UNLV_Volleyball_—_Stadium_Energy_Homepage_1777519729850.jpg";
import VimeoBackground from "@/components/VimeoBackground";
import { useEffect } from "react";

const VIMEO_ID = "1187950924";

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

const ROSTER = [
  { number: "0",  name: "Alexa Ankerstar",      pos: "S",      position: "Setter",         height: "5'10\"", year: "Sophomore",  hometown: "Round Rock, TX",   video: "/Alexa Ankerstar.mp4" },
  { number: "1",  name: "Jada Ingram",          pos: "OH",     position: "Outside Hitter", height: "6'0\"",  year: "Junior",     hometown: "Topeka, KS",       video: "/Jada Ingram.mp4" },
  { number: "2",  name: "Kadence Wilson",       pos: "L",      position: "Libero",         height: "5'8\"",  year: "Freshman",   hometown: "Honolulu, HI",     video: "" },
  { number: "3",  name: "Tia Traudt",           pos: "OH",     position: "Outside Hitter", height: "6'3\"",  year: "Sophomore",  hometown: "Grand Island, NE", video: "/Tia Traudt.mp4" },
  { number: "4",  name: "Cami Christiansen",    pos: "OPP",    position: "Opposite",       height: "6'3\"",  year: "Junior",     hometown: "Cedar Hills, UT",  video: "" },
  { number: "5",  name: "Arrie Brown",          pos: "OH",     position: "Outside Hitter", height: "6'0\"",  year: "Freshman",   hometown: "Tulsa, OK",        video: "" },
  { number: "6",  name: "Kamiera Watkins",      pos: "OPP/MB", position: "Opp / Mid",      height: "6'0\"",  year: "Senior",     hometown: "Euless, TX",       video: "" },
  { number: "7",  name: "Julie Beckham",        pos: "OH",     position: "Outside Hitter", height: "6'0\"",  year: "Freshman",   hometown: "Henderson, NV",    video: "" },
  { number: "8",  name: "Caleigh King",         pos: "L",      position: "Libero",         height: "5'6\"",  year: "Senior",     hometown: "Southlake, TX",    video: "/Caleigh King.mp4" },
  { number: "9",  name: "Rheanna Deen-Jackson", pos: "MB",     position: "Middle Blocker", height: "6'1\"",  year: "Junior",     hometown: "Houston, TX",      video: "/Rheanna Deen-Jackson.mp4" },
  { number: "10", name: "Natalie Monroe",       pos: "OH",     position: "Outside Hitter", height: "6'2\"",  year: "Freshman",   hometown: "Santa Cruz, CA",   video: "" },
  { number: "11", name: "Logan Lindsay",        pos: "OPP",    position: "Opposite",       height: "6'2\"",  year: "Senior",     hometown: "Layton, UT",       video: "/Logan Lindsey.mp4" },
  { number: "15", name: "Jaida Harris",         pos: "OH",     position: "Outside Hitter", height: "6'2\"",  year: "RS Junior",  hometown: "Las Vegas, NV",    video: "/Jaida Harris.mp4" },
  { number: "16", name: "Sloan Cleveland",      pos: "L",      position: "Libero",         height: "5'7\"",  year: "Sophomore",  hometown: "Prosper, TX",      video: "/Sloan Cleveland.mp4" },
  { number: "18", name: "Brooklynn Williams",   pos: "MB",     position: "Middle Blocker", height: "5'11\"", year: "Sophomore",  hometown: "Las Vegas, NV",    video: "/Brooklynn Willams.mp4" },
  { number: "19", name: "Kamryn Scroggins",     pos: "S",      position: "Setter",         height: "5'9\"",  year: "Graduate",   hometown: "Pearland, TX",     video: "" },
  { number: "21", name: "Basia Latos",          pos: "OH",     position: "Outside Hitter", height: "5'11\"", year: "Junior",     hometown: "Łazy, Poland",     video: "/Basia Latos.mp4" },
  { number: "22", name: "Kaia Thiele",          pos: "S",      position: "Setter",         height: "5'11\"", year: "Sophomore",  hometown: "San Antonio, TX",  video: "/Kaia Theile.mp4" },
];


export default function StadiumEnergy() {
  // Page-level scroll for hero parallax
  const { scrollY } = useScroll();

  // Smooth spring wrapper so parallax feels physical
  const smoothScroll = useSpring(scrollY, { stiffness: 80, damping: 25 });

  // Three layers moving at different speeds
  const videoY    = useTransform(smoothScroll, [0, 900], [0, 140]);   // slowest — video
  const glowY     = useTransform(smoothScroll, [0, 900], [0, 70]);    // mid — gradient
  const heroTextY = useTransform(smoothScroll, [0, 900], [0, 260]);   // fastest — text
  const heroOpacity = useTransform(scrollY, [0, 480], [1, 0]);

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

        {/* Layer 1 — Background video (slowest) */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: videoY }}
        >
          <VimeoBackground videoId={VIMEO_ID} opacity={0.55} />
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
            UNLV Women's Volleyball, where champions are built every day.
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
              We are building something undeniable in Las Vegas: a culture of excellence, a relentless pursuit of greatness, and a sisterhood of athletes who demand more.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-['Inter'] text-base md:text-lg text-white/40 leading-relaxed font-light"
            >
              The lights are bright. The stage is set. Las Vegas is the most electric sports city in America, and UNLV Volleyball plays in that energy every single night.
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

      {/* ── STARTING ROSTER ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/mXbKLPD-rx0?autoplay=1&mute=1&loop=1&playlist=mXbKLPD-rx0&controls=0&disablekb=1&playsinline=1&modestbranding=1&rel=0"
            allow="autoplay; encrypted-media"
            title="UNLV roster backdrop"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: "100vw", height: "56.25vw", minHeight: "100%", minWidth: "177.78vh" }}
          />
          <div className="absolute inset-0 bg-[#080000]/88" />
        </div>

        <div className="relative z-10 py-24 md:py-36 px-8 md:px-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[2px] bg-[#CC0000]" />
            <p className="font-['Inter'] text-[9px] font-semibold tracking-[0.5em] text-[#CC0000] uppercase">
              2026 Season
            </p>
          </div>

          <h2
            className="font-['Bebas_Neue'] text-white leading-[0.88] mb-14"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            <WordReveal text="Starting Roster." />
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {ROSTER.map((player, i) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden"
                style={{ aspectRatio: "2/3" }}
              >
                {/* Video or dark bg */}
                {player.video ? (
                  <video
                    src={player.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0d0d0d]" />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                {/* Red top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#CC0000] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Content pinned to bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div
                    className="font-['Bebas_Neue'] text-white/15 leading-none select-none group-hover:text-[#CC0000]/25 transition-colors"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                  >
                    {player.number}
                  </div>
                  <div className="font-['Bebas_Neue'] text-white leading-[1.0] group-hover:text-[#CC0000] transition-colors mb-2"
                    style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)" }}
                  >
                    {player.name}
                  </div>
                  <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                    <span className="font-['Inter'] text-[7px] font-bold tracking-[0.3em] text-[#CC0000] uppercase border border-[#CC0000]/40 px-1.5 py-0.5">
                      {player.pos}
                    </span>
                    <span className="font-['Inter'] text-[7px] tracking-[0.15em] text-white/35 uppercase">
                      {player.height}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-2 space-y-0.5">
                    <p className="font-['Inter'] text-[9px] text-white/50">{player.year}</p>
                    {player.hometown && (
                      <p className="font-['Inter'] text-[9px] text-white/30">{player.hometown}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE SECTION ───────────────────────────────────── */}
      <ParallaxQuote />

      {/* ── CAMPUS LIFE VIDEO CALLOUT ────────────────────────────────── */}
      <section className="relative h-[100dvh] overflow-hidden flex items-end">
        {/* YouTube full-bleed */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/mXbKLPD-rx0?autoplay=1&mute=1&loop=1&playlist=mXbKLPD-rx0&controls=0&disablekb=1&playsinline=1&modestbranding=1&rel=0"
            allow="autoplay; encrypted-media"
            title="UNLV campus"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: "100vw", height: "56.25vw", minHeight: "100%", minWidth: "177.78vh" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080000]/90 via-[#080000]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080000]/70 via-transparent to-transparent" />
        </div>

        <motion.div
          className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[2px] bg-[#CC0000]" />
            <p className="font-['Inter'] text-[9px] font-semibold tracking-[0.5em] text-[#CC0000] uppercase">
              Life as a Rebel
            </p>
          </div>

          <h2
            className="font-['Bebas_Neue'] text-white leading-[0.88] mb-10"
            style={{ fontSize: "clamp(4rem, 13vw, 13rem)" }}
          >
            Where Rebels
            <br />
            <span style={{ WebkitTextStroke: "2px #CC0000", color: "transparent" }}>
              Thrive
            </span>
          </h2>

          <Link href="/campus-life">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 bg-[#CC0000] hover:bg-white text-white hover:text-black px-10 py-5 font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase transition-colors duration-300 cursor-pointer"
            >
              Explore Campus Life
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </section>

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
            <motion.a
              href="https://unlvrebels.com/sports/womens-volleyball"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 bg-[#CC0000] hover:bg-white text-white hover:text-black px-10 py-5 font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase transition-colors duration-300"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://vimeo.com/1187950924"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 border border-white/20 hover:border-white/60 text-white/60 hover:text-white px-10 py-5 font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300"
            >
              Watch Highlights
            </motion.a>
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
          Malia Shoji, Head Coach · UNLV Women's Volleyball
        </p>
      </motion.div>
    </section>
  );
}
