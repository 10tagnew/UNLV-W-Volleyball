import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";

/* ── Word-by-word slide-up reveal (matches StadiumEnergy pattern) ─── */
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

/* ── Eyebrow line (matches StadiumEnergy pattern) ────────────────── */
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
  { number: "78", label: "Majors Offered" },
  { number: "197", label: "Graduate Programs" },
  { number: "16", label: "Colleges & Schools" },
  { number: "#1", label: "Hospitality Program in the World" },
  { number: "$54K+", label: "Avg. Starting Salary" },
];

const COLLEGES = [
  {
    name: "William F. Harrah College of Hospitality",
    body: "Ranked among the top hospitality programs in the world, built in the hospitality capital of the planet.",
  },
  {
    name: "Lee Business School",
    body: "A comprehensive business program with tracks in finance, marketing, entrepreneurship, and management.",
  },
  {
    name: "William S. Boyd School of Law",
    body: "One of the West's most respected law programs, with strong Nevada and national bar passage rates.",
  },
  {
    name: "College of Sciences",
    body: "Rigorous programs across biology, chemistry, neuroscience, and kinesiology for science-focused athletes.",
  },
  {
    name: "Greenspun College of Urban Affairs",
    body: "Journalism, film, communication, and social justice programs shaped by Las Vegas's unique media landscape.",
  },
  {
    name: "Kirk Kerkorian School of Medicine",
    body: "UNLV's medical school preparing the next generation of physicians in one of the nation's fastest-growing cities.",
  },
  {
    name: "Howard R. Hughes College of Engineering",
    body: "Strong programs in computer science, civil, electrical, and mechanical engineering with growing industry ties.",
  },
  {
    name: "Honors College",
    body: "A selective program offering enhanced academic experiences for high-achieving student-athletes.",
  },
];

const CHECKLIST = [
  "Dedicated athletic academic counselors and priority advising",
  "Tutoring and study hall resources through the Lied Athletic Complex",
  "NCAA eligibility tracking and degree planning from day one",
  "Access to career fairs, employer connections, and alumni networks",
  "Online and hybrid learning options across multiple degree programs",
  "78% freshman retention rate",
];

export default function Academics() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-[#0d0d0d] overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-8 md:px-16 bg-white">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow text="Las Vegas, Nevada · UNLV Academics" />

            <h1
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
            >
              A Degree as Bold
              <br />
              <span className="text-[#CC0000]">as Your Game</span>
            </h1>

            <p className="font-['Inter'] text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl mb-10 font-light">
              At UNLV, you don't just compete in one of college volleyball's most electric programs. You earn a degree from one of the fastest-rising research universities in the country.
            </p>

            <a
              href="https://www.unlv.edu/academics"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#CC0000] text-white px-10 py-4 font-['Inter'] font-bold tracking-[0.15em] text-xs uppercase hover:bg-[#a80000] transition-colors"
            >
              Explore Programs
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

      {/* ── WORLD-CLASS ACADEMICS ─────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="The University" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="World-Class Academics. Right Here in Las Vegas." />
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
              UNLV is more than Nevada's flagship research university. It is one of the most dynamic academic institutions in the American West, sitting at the center of a city that runs on innovation, hospitality, entertainment, and business. With 78 undergraduate majors and 197 graduate degree and certificate programs across 16 colleges and schools, UNLV gives you the flexibility to pursue any career path while competing at the highest level of college volleyball.
            </p>
            <p className="font-['Inter'] text-base md:text-lg text-black/50 leading-relaxed font-light mt-6">
              As a Rebels student-athlete, you will study alongside future executives, entrepreneurs, physicians, and world-builders. The UNLV degree does not just open doors. It puts you in rooms most people never reach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COLLEGES ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Eyebrow text="Colleges & Schools" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Areas of Study. 16 Colleges. Unlimited Paths." />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {COLLEGES.map((college, i) => (
              <motion.div
                key={college.name}
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
                  {college.name}
                </h3>
                <p className="font-['Inter'] text-sm text-black/55 leading-relaxed font-light">
                  {college.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REBEL NETWORK ────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="Career & Network" />
            <h2
              className="font-['Bebas_Neue'] text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="The Rebel Network. Built for What's Next." />
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
              Las Vegas is not just a city. It is an economy. With over $100 billion flowing through the region annually, UNLV graduates have access to career pipelines in hospitality, sports, entertainment, tech, healthcare, and real estate that simply do not exist anywhere else.
            </p>
            <p className="font-['Inter'] text-base md:text-lg text-white/40 leading-relaxed font-light mt-6">
              The city is your classroom, and your network starts building the moment you step on campus. UNLV's Career Services connects student-athletes directly to employers across Las Vegas and beyond, with recruiting events, internship placements, and alumni mentorship programs designed to bridge your athletic career to your professional one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STUDENT-ATHLETE SUPPORT ───────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="Athletic Support" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Support for Student-Athletes. You're a Student First." />
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
              Ready to Become
              <br />a Rebel?
            </h2>
            <p className="font-['Inter'] text-lg md:text-xl text-white/75 leading-relaxed font-light max-w-2xl mb-12">
              A UNLV Women's Volleyball scholarship is more than a chance to compete. It is an invitation to one of the West's great universities, in one of the world's most electrifying cities. Come build something that has never been built before.
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
