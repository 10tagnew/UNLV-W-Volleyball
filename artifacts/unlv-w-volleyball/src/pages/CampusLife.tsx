import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";

/* ── Word-by-word slide-up reveal ────────────────────────────────── */
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

/* ── Eyebrow line ────────────────────────────────────────────────── */
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
  { number: "350+", label: "Acre Campus" },
  { number: "300+", label: "Days of Sunshine" },
  { number: "30 Min", label: "To Mount Charleston" },
  { number: "500+", label: "Student Organizations" },
  { number: "#1", label: "Most Diverse University in the West" },
];

const CARDS = [
  {
    emoji: "🏐",
    name: "Rebel Athletics Community",
    body: "Cheer on your fellow Rebels across 17 varsity sports, including basketball at the Thomas and Mack Center in front of 10,000 fans.",
  },
  {
    emoji: "🎭",
    name: "Arts and Entertainment",
    body: "From world-class artists to notable speakers, UNLV hosts a wide variety of cultural and academic events open to the entire campus community.",
  },
  {
    emoji: "🌎",
    name: "Diversity and Inclusion",
    body: "UNLV has built one of the most affirmative and dynamic academic environments in the country, recognized as one of the most diverse universities in the nation by U.S. News and World Report.",
  },
  {
    emoji: "💪",
    name: "Wellness and Fitness",
    body: "From physical fitness to overall well-being, UNLV's wellness resources are designed to help you thrive in mind, body, and spirit.",
  },
  {
    emoji: "🎓",
    name: "500+ Student Organizations",
    body: "Whether you want to lead, build, compete, or create, there is a community here waiting for you.",
  },
  {
    emoji: "🏙️",
    name: "Las Vegas",
    body: "Las Vegas is our home, but the greater valley is where student-athletes actually live. From master-planned Summerlin to award-winning Henderson, the communities surrounding campus are safe, welcoming, and full of the outdoor recreation, dining, and everyday life families are looking for.",
  },
];

const CHECKLIST = [
  "On-campus housing with athlete-friendly environments",
  "Campus safety and emergency resources available 24/7",
  "Dedicated wellness and mental health support for student-athletes",
  "RebelCard access to campus facilities, dining, and services",
  "Surrounded by safe, family-friendly communities: Summerlin, Henderson, and Lake Las Vegas",
  "350+ acre campus with maps, parking, and resource centers",
];

export default function CampusLife() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-[#0d0d0d] overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-end pb-20 md:pb-28 overflow-hidden">
        {/* YouTube background video */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/9KWFsbgX8dw?autoplay=1&mute=1&loop=1&playlist=9KWFsbgX8dw&controls=0&disablekb=1&playsinline=1&modestbranding=1&rel=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="UNLV campus overview"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: "100vw", height: "56.25vw", minHeight: "100%", minWidth: "177.78vh" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 pt-28 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow text="Las Vegas, Nevada · Life as a Rebel" />

            <h1
              className="font-['Bebas_Neue'] text-white leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
            >
              Where Rebels
              <br />
              <span className="text-[#CC0000]">Thrive</span>
            </h1>

            <p className="font-['Inter'] text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10 font-light">
              At UNLV, your college experience is rooted in one of the most livable regions in the American West. The greater Las Vegas Valley stretches from master-planned Summerlin to family-friendly Henderson, with mountain escapes at Mount Charleston and resort living at Lake Las Vegas just a short drive from campus.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.unlv.edu/student-life"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#CC0000] text-white px-10 py-4 font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase hover:bg-[#a80000] transition-colors"
              >
                See Campus Life
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://form.typeform.com/to/b58w99Bc"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 px-10 py-4 rounded-full font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase transition-colors"
              >
                Ready to Be a Rebel?
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
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

      {/* ── FEATURED VIDEO ───────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d]">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/mXbKLPD-rx0?autoplay=1&mute=1&loop=1&playlist=mXbKLPD-rx0&controls=1&rel=0&modestbranding=1"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="Life at UNLV"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

      {/* ── LIFE ON CAMPUS ────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="Campus Experience" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Life on Campus. Built Around You." />
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="pt-2"
          >
            <p className="font-['Inter'] text-base md:text-lg text-black/60 leading-relaxed font-light">
              UNLV's campus gives you quick access to everything you need, with independent living and a built-in support system from day one. On-campus housing connects you with student-athletes and classmates from across the country, while dining, wellness, and recreation resources are steps away from where you train and study.
            </p>
            <p className="font-['Inter'] text-base md:text-lg text-black/50 leading-relaxed font-light mt-6">
              As a Rebel, you will never have to choose between being a great athlete and having a great college experience. We make sure you can be both.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── GET INVOLVED CARDS ───────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Eyebrow text="Student Life" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Get Involved. This Is Your Program." />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="border-t-4 border-[#CC0000] pt-6 pb-2"
              >
                <p className="font-['Barlow_Condensed'] text-[10px] font-black text-[#CC0000]/40 tracking-[0.3em] uppercase mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-['Barlow_Condensed'] text-xl md:text-2xl font-black uppercase text-[#0d0d0d] mb-3 leading-tight">
                  <span className="mr-2">{card.emoji}</span>
                  {card.name}
                </h3>
                <p className="font-['Inter'] text-sm text-black/55 leading-relaxed font-light">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAS VEGAS SECTION ────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="The Greater Valley" />
            <h2
              className="font-['Bebas_Neue'] text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="The Valley. More Than You Think." />
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
              The Las Vegas Valley is one of the most misunderstood places in America. Beyond the entertainment district, you will find some of the most livable, family-friendly communities in the West. Summerlin offers master-planned neighborhoods and world-class hiking at Red Rock Canyon. Henderson is consistently ranked one of the safest cities its size in the country. Lake Las Vegas sits at a resort-style waterfront just 25 minutes from campus. And Mount Charleston rises to 11,000 feet, giving you skiing, hiking, and cool mountain air less than an hour away.
            </p>
            <p className="font-['Inter'] text-base md:text-lg text-white/40 leading-relaxed font-light mt-6">
              This is where Rebels actually live. The energy of the city is there when you want it. The peace of the suburbs is always there when you need it.
            </p>

            {/* Callout quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 border-l-4 border-[#CC0000] pl-6"
            >
              <p className="font-['Barlow_Condensed'] italic font-black text-white/80 text-xl md:text-2xl leading-snug">
                "Las Vegas is the address. The valley is the home. And for student-athletes, there is no better place to compete, grow, and belong."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── SAFETY & SUPPORT CHECKLIST ───────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="Your Support System" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Safety and Support. We Have You Covered." />
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
                  <span className="font-['Inter'] text-base text-black/65 leading-relaxed font-light">
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
              Ready to Call
              <br />Vegas Home?
            </h2>
            <p className="font-['Inter'] text-lg md:text-xl text-white/75 leading-relaxed font-light max-w-2xl mb-12">
              Life as a Rebel is unlike anything else in college volleyball. The campus, the city, the program. It all comes together here. Come see it for yourself.
            </p>
            <a
              href="https://form.typeform.com/to/b58w99Bc"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-[#CC0000] px-12 py-5 rounded-full font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase hover:bg-[#0d0d0d] hover:text-white transition-colors"
            >
              Ready to Be a Rebel?
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="py-10 px-8 md:px-16 border-t border-black/10 bg-[#080808]">
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
