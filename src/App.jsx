import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, useSpring, useMotionValue } from 'framer-motion';
import {
  PAGES,
  CONTACT,
  OBJECTIVE,
  PUBLICATIONS,
  PREPARATION,
  APPOINTMENTS,
  HONORS,
  POSTERS,
  SERVICE,
  LICENSES,
  MEMBERSHIPS
} from './constants';
import {
  BookOpen,
  Award,
  Users,
  Mail,
  ChevronRight,
  ExternalLink,
  Download,
  GraduationCap,
  FlaskConical,
  Linkedin,
  MapPin,
  FileText,
  Clock,
  Mic,
  Heart,
  Microscope,
  Moon,
  Sun,
  CheckCircle2,
  Trophy,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

// --- Components ---

const InteractiveLattice = ({ isDarkMode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const [maskCenter, setMaskCenter] = useState("50% 50%");

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    const unsubX = springX.on("change", (v) => setMaskCenter(`${v}px ${springY.get()}px`));
    return () => {
      window.removeEventListener('mousemove', handleMove);
      unsubX();
    };
  }, [mouseX, mouseY, springX, springY]);

  const color = isDarkMode ? "rgba(52, 211, 153, 0.6)" : "rgba(6, 78, 59, 0.25)";
  const copper = isDarkMode ? "rgba(251, 191, 36, 0.3)" : "rgba(180, 83, 9, 0.15)";
  const bgLattice = isDarkMode ? "rgba(52, 211, 153, 0.05)" : "rgba(6, 78, 59, 0.03)";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: `radial-gradient(circle 450px at ${maskCenter}, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 450px at ${maskCenter}, black 0%, transparent 100%)`
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='86.6' viewBox='0 0 100 86.6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25,0 L75,0 L100,43.3 L75,86.6 L25,86.6 L0,43.3 Z' fill='none' stroke='${encodeURIComponent(color)}' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 69.28px'
        }} />
      </motion.div>
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='86.6' viewBox='0 0 100 86.6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25,0 L75,0 L100,43.3 L75,86.6 L25,86.6 L0,43.3 Z' fill='none' stroke='${encodeURIComponent(bgLattice)}' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 69.28px'
      }} />
    </div>
  );
};

const ViewWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    className="w-full relative z-10"
  >
    {children}
  </motion.div>
);

const DossierHeader = ({ title, icon: Icon, isDarkMode }) => (
  <div className="mb-8 sm:mb-12 lg:mb-14">
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-4">
      {Icon && <Icon className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex-shrink-0 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`} />}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight ${isDarkMode ? 'text-stone-100' : 'text-stone-900'}`}>{title}</h2>
    </div>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className={`h-[1px] w-full origin-left ${isDarkMode ? 'bg-stone-800' : 'bg-stone-300'}`}
    />
  </div>
);

const DossierEntry = ({ item, isDarkMode }) => (
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`relative pl-14 border-l ${isDarkMode ? 'border-stone-800' : 'border-stone-200'} pb-16 last:pb-0 group`}
  >
    <div className={`absolute left-[-6px] top-3 w-3 h-3 rounded-full ${isDarkMode ? 'bg-emerald-500' : 'bg-emerald-800'} group-last:bg-amber-600 shadow-lg`} />
    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-2">
      <span className={`text-sm font-mono font-bold uppercase tracking-widest ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
        {item.period}
      </span>
      {item.loc && <span className="text-[10px] font-mono opacity-50 uppercase tracking-[0.2em]">{item.loc}</span>}
    </div>
    <h4 className={`text-3xl font-serif font-bold leading-tight mt-1 ${isDarkMode ? 'text-stone-100' : 'text-stone-900'} mb-1`}>
      {item.degree || item.role}
    </h4>
    <p className={`text-xl opacity-90 italic ${isDarkMode ? 'text-stone-300' : 'text-stone-700'} font-serif`}>
      {item.inst || item.org}
    </p>
    {item.details && <p className="text-base opacity-60 mt-4 max-w-3xl leading-relaxed">{item.details}</p>}
  </motion.div>
);

const HomeView = ({ isDarkMode }) => (
  <ViewWrapper>
      <div className="max-w-5xl mx-auto py-12 sm:py-16 lg:py-20 px-4">
        <div className="text-center mb-16 sm:mb-24 lg:mb-32 relative z-10">
          <p className={`font-mono text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
          {CONTACT.title}
          </p>
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-[10rem] font-serif font-bold tracking-tighter mb-8 sm:mb-12 ${isDarkMode ? 'text-stone-100' : 'text-stone-900'}`}>
          {CONTACT.name}
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            Sustainable visible-light-driven synthesis of bioactive molecules. <br className="hidden sm:block" />
            <span className={`opacity-90 font-sans not-italic text-base sm:text-lg md:text-xl tracking-wide sm:tracking-widest uppercase mt-3 sm:mt-4 block ${isDarkMode ? 'text-emerald-500' : 'text-emerald-900'} font-semibold`}>Oklahoma State University — Department of Chemistry.</span>
          </p>
      </div>
       <div className={`p-6 sm:p-12 lg:p-16 border-t-4 sm:border-t-6 lg:border-t-8 border-emerald-800 shadow-2xl relative backdrop-blur-md ${isDarkMode ? 'bg-stone-950/80' : 'bg-white/95'}`}>
         <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-8 sm:mb-12 text-amber-600 border-b border-amber-600/20 pb-3 w-max">Research Statement</h3>
         <p className={`text-xl sm:text-2xl lg:text-3xl font-serif leading-relaxed ${isDarkMode ? 'text-stone-200' : 'text-stone-800'} first-letter:text-5xl sm:first-letter:text-7xl lg:first-letter:text-9xl first-letter:font-bold first-letter:mr-3 sm:first-letter:mr-4 lg:first-letter:mr-6 first-letter:float-left first-letter:leading-none ${isDarkMode ? 'first-letter:text-emerald-500' : 'first-letter:text-emerald-900'}`}>
          {OBJECTIVE}
        </p>
       </div>
    </div>
  </ViewWrapper>
);

const ResearchView = ({ isDarkMode }) => (
  <ViewWrapper>
    <div className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4">
      <DossierHeader title="Expertise & Interests" icon={Microscope} isDarkMode={isDarkMode} />
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-24 lg:mb-32">
        {[
          { title: "Synthetic Organic Chemistry", desc: "Small molecule synthesis via clean, atom-economical pathways." },
          { title: "Natural Product Isolation", desc: "Bio-guided extraction and structural elucidation of plant metabolites." },
          { title: "Visible-Light Photochemistry", desc: "Harnessing light as a clean chemical reagent for C-C and C-H functionalization." },
          { title: "Bioactive Small Molecules", desc: "Design and synthesis of compounds with pharmacological significance." }
        ].map((item, i) => (
           <div key={i} className={`p-6 sm:p-10 lg:p-14 border transition-all backdrop-blur-md hover:translate-y-[-5px] ${isDarkMode ? 'border-stone-800 bg-stone-900/60' : 'border-stone-200 bg-white/95 shadow-xl'}`}>
             <h4 className={`text-lg sm:text-xl lg:text-2xl font-serif font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-stone-100' : 'text-stone-900'} underline decoration-amber-600/30 underline-offset-8`}>{item.title}</h4>
             <p className={`opacity-75 ${isDarkMode ? 'text-stone-400' : 'text-stone-700'} text-base sm:text-lg lg:text-xl leading-relaxed`}>{item.desc}</p>
           </div>
        ))}
      </div>
      <DossierHeader title="Symposia & Presence" icon={Mic} isDarkMode={isDarkMode} />
      <div className="space-y-8">
        {POSTERS.map((poster, i) => (
          <div key={i} className={`p-12 border-l-8 border-emerald-800 backdrop-blur-md transition-all hover:bg-emerald-50/10 ${isDarkMode ? 'bg-stone-900/40' : 'bg-white/90 shadow-lg'}`}>
             <h5 className={`font-serif font-bold text-3xl italic ${isDarkMode ? 'text-stone-100' : 'text-stone-900'} mb-4`}>{poster.title}</h5>
             <p className={`text-lg opacity-80 ${isDarkMode ? 'text-stone-400' : 'text-stone-600'} font-mono uppercase tracking-[0.2em] font-semibold`}>
              {poster.event} <span className="mx-4 opacity-30">/</span> {poster.loc} <span className="mx-4 opacity-30">/</span> {poster.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  </ViewWrapper>
);

const AcademicView = ({ isDarkMode }) => (
  <ViewWrapper>
    <div className="max-w-4xl mx-auto py-8 sm:py-12 lg:py-16 px-4 space-y-20 sm:space-y-32 lg:space-y-40">
      <section>
        <DossierHeader title="Academic Preparation" icon={GraduationCap} isDarkMode={isDarkMode} />
        <div className="space-y-0">
          {PREPARATION.map((item, i) => (
            <DossierEntry key={i} item={item} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>
      <section>
        <DossierHeader title="Appointments" icon={Clock} isDarkMode={isDarkMode} />
        <div className="space-y-0">
          {APPOINTMENTS.map((item, i) => (
            <DossierEntry key={i} item={item} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>
       <section className={`p-6 sm:p-12 lg:p-16 border-t-[8px] sm:border-t-[10px] lg:border-t-[12px] border-amber-600 backdrop-blur-xl ${isDarkMode ? 'bg-stone-950/70' : 'bg-white/95 shadow-2xl'}`}>
        <DossierHeader title="Awards & Fellowships" icon={Trophy} isDarkMode={isDarkMode} />
         <div className="grid gap-8 sm:gap-12 lg:gap-16">
          {HONORS.map((h, i) => (
            <div key={i} className="border-b border-stone-200 dark:border-stone-800 pb-10 last:border-0 last:pb-0">
              <span className="text-xs sm:text-sm font-mono opacity-50 block mb-2 sm:mb-3 text-stone-500 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">{h.year}</span>
              <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold ${isDarkMode ? 'text-stone-100' : 'text-stone-900'} leading-tight mb-3 sm:mb-4`}>
                {h.title}
              </p>
             <p className={`text-sm sm:text-base lg:text-lg font-mono uppercase mt-3 sm:mt-4 tracking-[0.15em] sm:tracking-[0.25em] ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'} font-bold`}>
                {h.org}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </ViewWrapper>
);

const OutputView = ({ isDarkMode }) => (
  <ViewWrapper>
    <div className={`max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4 ${isDarkMode ? 'bg-stone-950/20' : 'bg-white/30'} backdrop-blur-sm rounded-lg`}>
      <DossierHeader title="Articles & Bibliography" icon={BookOpen} isDarkMode={isDarkMode} />
        <div className="space-y-8">
          {PUBLICATIONS.map((pub, idx) => {
            const getBackgroundClass = () => {
              if (pub.featured) {
                return isDarkMode ? 'bg-emerald-950/50 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 border-emerald-800/60 shadow-2xl rounded-lg' : 'bg-emerald-50/90 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 border-emerald-200 shadow-xl rounded-lg';
              }
              return isDarkMode ? 'bg-stone-900/40 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-l-4 border-stone-700/30 rounded-lg' : 'bg-stone-100/80 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-l-4 border-stone-300/50 rounded-lg';
            };
            
            return (
           <div key={idx} className={`py-8 sm:py-12 lg:py-16 transition-all backdrop-blur-sm ${getBackgroundClass()} border-x border-transparent hover:border-emerald-300 dark:hover:border-emerald-800 hover:shadow-lg`}>
             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-10 mb-4 sm:mb-6">
               <span className={`text-xs font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>{pub.journal}</span>
               <span className={`text-sm font-serif font-bold italic font-mono ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{pub.year}</span>
            </div>
             <h4 className={`text-2xl sm:text-3xl lg:text-4xl font-serif italic mb-6 sm:mb-8 leading-snug ${isDarkMode ? 'text-stone-50' : 'text-stone-800'} decoration-amber-600/0 hover:decoration-amber-600 transition-all duration-300 underline underline-offset-8 font-bold`}>
              {pub.title}
            </h4>
             <p className={`text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'} font-serif leading-relaxed italic font-medium`}>{pub.authors}</p>
             <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
               <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className={`text-xs sm:text-sm font-mono underline underline-offset-8 decoration-stone-300 hover:decoration-amber-600 transition-all font-medium ${isDarkMode ? 'text-stone-300 hover:text-stone-100' : 'text-stone-600 hover:text-stone-900'}`}>
                DOI: {pub.doi}
              </a>
               {pub.featured && <span className={`text-[10px] sm:text-[12px] font-mono font-bold px-4 sm:px-5 py-2 uppercase rounded-full tracking-wide sm:tracking-widest shadow-sm w-fit ${isDarkMode ? 'bg-amber-900/80 text-amber-200' : 'bg-amber-100 text-amber-800'}`}>Featured Selection</span>}
             </div>
            </div>
            );
          })}
      </div>
    </div>
  </ViewWrapper>
);

const ServiceView = ({ isDarkMode }) => (
  <ViewWrapper>
    <div className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4">
      <DossierHeader title="Teaching & Pedagogy" icon={FlaskConical} isDarkMode={isDarkMode} />
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-20 sm:mb-32 lg:mb-40">
         <div className={`p-6 sm:p-12 lg:p-16 border-l-4 sm:border-l-6 lg:border-l-8 border-emerald-800 backdrop-blur-md ${isDarkMode ? 'bg-stone-950/80 shadow-stone-950' : 'bg-white/95 shadow-2xl shadow-stone-200'}`}>
           <h4 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-8 sm:mb-10 lg:mb-12 ${isDarkMode ? 'text-stone-100' : 'text-stone-900'}`}>Instructional Roles</h4>
           <ul className={`space-y-6 sm:space-y-8 lg:space-y-10 font-mono text-sm sm:text-base uppercase tracking-[0.15em] sm:tracking-[0.25em] ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
             <li className="flex items-center gap-4 sm:gap-6"><CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-700 flex-shrink-0" /><span className="break-words">CHEM3013 — Organic Survey</span></li>
             <li className="flex items-center gap-4 sm:gap-6"><CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-700 flex-shrink-0" /><span className="break-words">CHEM3012 — Lab Section</span></li>
          </ul>
         </div>
         <div className={`p-6 sm:p-12 lg:p-16 border-2 sm:border-4 ${isDarkMode ? 'border-stone-800' : 'border-stone-200'} border-dotted flex flex-col justify-center`}>
           <h4 className={`text-xl sm:text-2xl lg:text-3xl font-bold font-serif mb-6 sm:mb-8 lg:mb-12 italic ${isDarkMode ? 'text-stone-100' : 'text-stone-900'} border-b-2 border-amber-600/40 pb-3 sm:pb-4 w-max`}>Future PUI Educator</h4>
           <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 leading-relaxed font-serif italic ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>"I integrate impactful research with inclusive, evidence-based pedagogy to create engaging undergraduate environments."</p>
        </div>
      </div>
      <DossierHeader title="Outreach & Service" icon={Heart} isDarkMode={isDarkMode} />
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-20 sm:mb-32 lg:mb-40">
        {SERVICE.map((s, idx) => (
           <div key={idx} className={`p-6 sm:p-8 lg:p-12 border transition-all backdrop-blur-md ${isDarkMode ? 'border-stone-800 bg-stone-950/60' : 'border-stone-200 bg-white/95 shadow-xl'}`}>
             <h4 className={`text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.35em] mb-8 sm:mb-10 lg:mb-12 pb-4 sm:pb-5 border-b ${isDarkMode ? 'border-stone-800 text-stone-200' : 'border-stone-200 text-stone-800'}`}>{s.category}</h4>
             <ul className="space-y-4 sm:space-y-5 lg:space-y-6">
              {s.items.map((item, i) => (
                 <li key={i} className={`text-base sm:text-lg flex gap-3 sm:gap-4 lg:gap-5 leading-relaxed ${isDarkMode ? 'text-stone-400' : 'text-stone-600'} font-serif italic`}><ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0 mt-1" /><span className="break-words">{item}</span></li>
              ))}
            </ul>
           </div>
        ))}
         <div className={`p-6 sm:p-8 lg:p-12 border backdrop-blur-md ${isDarkMode ? 'border-stone-800 bg-stone-950/60' : 'border-stone-200 bg-white/95 shadow-xl'}`}>
           <h4 className={`text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.35em] mb-8 sm:mb-10 lg:mb-12 pb-4 sm:pb-5 border-b ${isDarkMode ? 'border-stone-800 text-stone-200' : 'border-stone-200 text-stone-800'}`}>Credentials</h4>
           <ul className="space-y-8 sm:space-y-10 lg:space-y-12">
            {LICENSES.map((l, i) => (
               <li key={i} className="space-y-3 sm:space-y-4">
                 <p className={`font-bold text-lg sm:text-xl lg:text-2xl leading-tight ${isDarkMode ? 'text-stone-100' : 'text-stone-900'} border-l-4 border-amber-600 pl-3 sm:pl-4`}>{l.title}</p>
                 <p className="text-xs opacity-60 font-mono uppercase text-stone-500 tracking-[0.15em] sm:tracking-[0.2em]">{l.org} <br /> {l.date}</p>
              </li>
            ))}
          </ul>
         </div>
      </div>
    </div>
  </ViewWrapper>
);

// --- Main App Entry ---

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Update document class for dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case PAGES.HOME: return <HomeView isDarkMode={isDarkMode} />;
      case PAGES.RESEARCH: return <ResearchView isDarkMode={isDarkMode} />;
      case PAGES.ACADEMIC: return <AcademicView isDarkMode={isDarkMode} />;
      case PAGES.OUTPUT: return <OutputView isDarkMode={isDarkMode} />;
      case PAGES.SERVICE: return <ServiceView isDarkMode={isDarkMode} />;
      default: return <HomeView isDarkMode={isDarkMode} />;
    }
  };

  return (
      <div className={`min-h-screen transition-colors duration-1000 font-sans overflow-x-hidden ${isDarkMode ? 'bg-stone-950 text-stone-200' : 'bg-stone-50 text-stone-800'}`}>
      <InteractiveLattice isDarkMode={isDarkMode} />
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-700 ${isDarkMode ? 'bg-stone-950/95 border-stone-800 shadow-stone-950' : 'bg-white/95 border-stone-200 shadow-md'} backdrop-blur-xl`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 flex justify-between items-center">
           <button onClick={() => setCurrentPage(PAGES.HOME)} className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tighter ${isDarkMode ? 'text-stone-100' : 'text-stone-900'} hover:text-emerald-700 transition-all hover:scale-105 active:scale-95`}>
            P<span className="text-emerald-800">S</span>.
          </button>

           {/* Desktop Navigation */}
           <div className="hidden lg:flex items-center gap-16">
             <div className="flex gap-14 text-[12px] font-mono font-bold uppercase tracking-[0.35em] text-stone-400">
              {Object.keys(PAGES).map((key) => (
                 <button key={key} onClick={() => setCurrentPage(PAGES[key])} className={`transition-all pb-2 border-b-4 hover:text-emerald-800 ${currentPage === PAGES[key] ? 'text-emerald-800 border-amber-600' : 'border-transparent hover:text-emerald-700 hover:border-emerald-200'}`}>
                  {PAGES[key]}
                </button>
              ))}
            </div>
             <div className={`flex items-center gap-8 pl-10 border-l-2 ${isDarkMode ? 'border-stone-800' : 'border-stone-200'}`}>
               <button onClick={toggleTheme} aria-label="Toggle Theme" className={`p-4 rounded-full transition-all hover:scale-110 active:rotate-45 ${isDarkMode ? 'bg-stone-900 text-amber-400 hover:bg-stone-800' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'} shadow-lg`}>
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
               <a href="/Parul_Sharma_CV.pdf" download="Parul_Sharma_CV.pdf" className="bg-emerald-900 text-stone-50 px-6 lg:px-10 py-3 lg:py-4 text-[10px] lg:text-[12px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-emerald-800 transition-all flex items-center gap-3 lg:gap-4 shadow-2xl active:scale-95 group">
                 CV <Download className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-y-1" />
               </a>
             </div>
           </div>

           {/* Mobile Navigation */}
           <div className="lg:hidden flex items-center gap-4">
             <button onClick={toggleTheme} aria-label="Toggle Theme" className={`p-3 rounded-full transition-all hover:scale-110 ${isDarkMode ? 'bg-stone-900 text-amber-400 hover:bg-stone-800' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'} shadow-lg`}>
               {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>
             <button onClick={toggleMobileMenu} className={`p-3 rounded-full transition-all ${isDarkMode ? 'bg-stone-900 text-stone-100 hover:bg-stone-800' : 'bg-stone-100 text-stone-900 hover:bg-stone-200'} shadow-lg`}>
               {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
         </div>

         {/* Mobile Menu */}
         {isMobileMenuOpen && (
           <div className={`lg:hidden absolute top-full left-0 right-0 ${isDarkMode ? 'bg-stone-950/98 border-stone-800' : 'bg-white/98 border-stone-200'} border-b backdrop-blur-xl`}>
             <div className="px-4 py-6 space-y-4">
               {Object.keys(PAGES).map((key) => (
                 <button 
                   key={key} 
                   onClick={() => {
                     setCurrentPage(PAGES[key]);
                     setIsMobileMenuOpen(false);
                   }} 
                   className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-mono font-bold uppercase tracking-[0.2em] transition-all ${currentPage === PAGES[key] ? (isDarkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-50 text-emerald-800') : (isDarkMode ? 'text-stone-300 hover:bg-stone-900/50' : 'text-stone-600 hover:bg-stone-50')}`}
                 >
                   {PAGES[key]}
                 </button>
               ))}
               <a href="/Parul_Sharma_CV.pdf" download="Parul_Sharma_CV.pdf" className="w-full mt-6 bg-emerald-900 text-stone-50 px-6 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-emerald-800 transition-all flex items-center justify-center gap-3 shadow-2xl rounded-lg active:scale-95 group">
                 Download CV <Download className="w-4 h-4 transition-transform group-hover:translate-y-1" />
               </a>
          </div>
        </div>
         )}
      </nav>
       <main className={`pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-40 lg:pb-56 px-4 sm:px-6 lg:px-10 relative z-10 ${isDarkMode ? 'bg-stone-950/5' : 'bg-white/5'}`}>
        <AnimatePresence mode="wait">
          <div key={currentPage}>{renderContent()}</div>
        </AnimatePresence>
      </main>
       <footer className={`py-24 sm:py-40 lg:py-56 border-t px-4 sm:px-6 lg:px-10 overflow-hidden relative z-10 shadow-inner ${isDarkMode ? 'bg-stone-900 border-stone-800' : 'bg-stone-100 border-stone-200'}`}>
         <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-16 sm:gap-24 lg:gap-32">
           <div className="space-y-12 sm:space-y-16 lg:space-y-20 text-center lg:text-left">
             <h3 className={`text-5xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-serif font-bold tracking-tighter leading-none ${isDarkMode ? 'text-stone-100' : 'text-stone-900'}`}>Academic <span className="italic opacity-30 font-light">&</span> <br /> Resilience<span className="text-emerald-800">.</span></h3>
             <div className="space-y-8 sm:space-y-12">
               <a href={`mailto:${CONTACT.email}`} className={`text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif italic hover:text-emerald-700 transition-colors border-b-2 ${isDarkMode ? 'border-stone-700 text-stone-200' : 'border-stone-300 text-stone-800'} pb-3 sm:pb-5 block w-max mx-auto lg:mx-0`}>{CONTACT.email}</a>
               <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 lg:gap-20 text-sm sm:text-base font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-70 text-stone-500 font-bold justify-center lg:justify-start">
                <div>Stillwater, Oklahoma</div>
                <div>+1 {CONTACT.phone}</div>
              </div>
            </div>
          </div>
           <div className="flex flex-col items-center lg:items-end gap-12 sm:gap-16 lg:gap-24">
             <div className="flex gap-6 sm:gap-8 lg:gap-10">
               {[
                 { icon: <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, href: CONTACT.links.linkedin },
                 { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, href: CONTACT.links.scholar },
                 { icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, href: CONTACT.links.orcid }
              ].map((s, i) => (
                 <a key={i} href={s.href} target="_blank" rel="noreferrer" className={`p-4 sm:p-6 lg:p-8 rounded-full border-2 transition-all duration-700 hover:rotate-[360deg] ${isDarkMode ? 'border-stone-800 hover:bg-emerald-400 hover:text-stone-900' : 'border-stone-200 hover:bg-emerald-800 hover:text-white'} shadow-2xl`}>
                  {s.icon}
                </a>
              ))}
            </div>
             <p className="text-[10px] sm:text-[12px] font-mono opacity-50 uppercase tracking-[0.4em] sm:tracking-[0.6em] text-center lg:text-right text-stone-500 font-extrabold max-w-xs sm:max-w-none">© 2025 {CONTACT.name.toUpperCase()} — RESEARCHER | EDUCATOR | CHEMIST</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;