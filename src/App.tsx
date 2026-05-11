import { motion } from 'motion/react';
import { 
  User, Calendar, Mail, Briefcase, GraduationCap, 
  Map, Earth, Camera, Sparkles, Languages, Compass, 
  Anchor, Navigation, Skull, Ship, Star, Box, Presentation,
  ArrowUp, Video
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { WordDocumentModal } from './components/WordDocumentModal';
import { PptModal } from './components/PptModal';
import { ManusModal } from './components/ManusModal';
import { GammaModal } from './components/GammaModal';
import { VlogModal } from './components/VlogModal';
import { Vlog2Modal } from './components/Vlog2Modal';
import { Vlog3Modal } from './components/Vlog3Modal';
import { Vlog4Modal } from './components/Vlog4Modal';

const Card = ({ children, className = '', color = 'bg-white', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotate: -2 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: delay }}
    className={`border-[4px] border-black rounded-[24px] p-6 lg:p-8 neo-shadow-lg transition-all duration-300 hover:neo-shadow-hover ${color} relative ${className}`}
  >
    {children}
  </motion.div>
);

const TimelineItem = ({ span, title, subTitle, desc, icon: Icon, color = "bg-blue-300" }) => (
  <div className="flex gap-4 relative group">
    <div className="absolute left-6 top-10 bottom-[-20px] w-1 bg-black group-last:hidden" />
    <div className={`w-12 h-12 rounded-full border-4 border-black ${color} flex items-center justify-center shrink-0 z-10 neo-shadow`}>
      <Icon className="w-5 h-5 text-black" />
    </div>
    <div className="pb-8">
      <div className="bg-white border-[3px] border-black rounded-2xl p-4 neo-shadow hover:neo-shadow-hover transition-all">
        <span className="inline-block bg-black text-white px-2 py-1 rounded-md text-xs font-bold mb-2">
          {span}
        </span>
        <h3 className="text-lg font-black">{title}</h3>
        <p className="font-bold text-gray-600 border-b-2 border-dashed border-gray-300 pb-2 mb-2">{subTitle}</p>
        <p className="text-gray-800 font-medium text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, date, desc, icon: Icon, color, delay, onClick = undefined }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", delay }}
    onClick={onClick}
    className={`border-4 border-black rounded-3xl p-6 ${color} neo-shadow-lg hover:neo-shadow-hover transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-2`}
  >
    <div className="bg-white border-4 border-black rounded-full w-14 h-14 flex items-center justify-center mb-4 neo-shadow">
      <Icon className="w-6 h-6" />
    </div>
    <span className="bg-white px-3 py-1 rounded-full border-2 border-black font-black text-xs self-start mb-3 neo-shadow">
      {date}
    </span>
    <h3 className="font-black text-xl mb-2 leading-tight">{title}</h3>
    <p className="font-semibold text-gray-700 text-sm mt-auto">{desc}</p>
  </motion.div>
);

const SectionTitle = ({ children, rotate = "-rotate-2", color = "bg-white" }) => (
  <div className="flex items-center gap-4 mb-8">
    <h2 className={`text-3xl md:text-4xl font-black ${color} border-4 border-black px-6 py-3 rounded-full neo-shadow inline-block transform ${rotate}`}>
      {children}
    </h2>
  </div>
);

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [docModalOpen, setDocModalOpen] = useState(false);
  const [pptModalOpen, setPptModalOpen] = useState(false);
  const [manusModalOpen, setManusModalOpen] = useState(false);
  const [gammaModalOpen, setGammaModalOpen] = useState(false);
  const [vlogModalOpen, setVlogModalOpen] = useState(false);
  const [vlog2ModalOpen, setVlog2ModalOpen] = useState(false);
  const [vlog3ModalOpen, setVlog3ModalOpen] = useState(false);
  const [vlog4ModalOpen, setVlog4ModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-black font-sans relative">
      
      {/* Floating Background Decor */}
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="fixed top-32 left-10 text-pink-300 opacity-50 z-0 text-7xl pointer-events-none"><Sparkles /></motion.div>
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="fixed bottom-20 right-10 text-yellow-300 opacity-50 z-0 pointer-events-none"><Anchor size={80} /></motion.div>

      {/* STICKY NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black neo-shadow-lg w-full">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-yellow-300 border-2 border-black p-1.5 rounded-full group-hover:rotate-12 transition-transform">
              <Ship className="w-6 h-6" />
            </div>
            <span className="font-black text-xl tracking-wider">ROU-HAN</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6 font-bold text-lg">
            <a href="#about" className="hover:text-pink-500 hover:-translate-y-1 transition-transform border-b-2 border-transparent hover:border-pink-500">關於我</a>
            <a href="#experience" className="hover:text-green-500 hover:-translate-y-1 transition-transform border-b-2 border-transparent hover:border-green-500">經歷與學習</a>
            <a href="#portfolio" className="hover:text-purple-500 hover:-translate-y-1 transition-transform border-b-2 border-transparent hover:border-purple-500">宇宙作業</a>
          </div>

          <a href="#portfolio" className="md:hidden bg-black text-white px-4 py-2 rounded-full font-bold text-sm neo-shadow active:translate-y-1">
            看作業
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-20 relative z-10 space-y-24 lg:space-y-32">
        
        {/* HERO SECTION */}
        <section id="hero" className="flex flex-col md:flex-row items-center gap-10 pt-4 md:pt-10 scroll-mt-32">
          <div className="relative group mx-auto md:mx-0">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
              className="w-48 h-48 md:w-64 md:h-64 bg-[#fde047] border-[6px] border-black rounded-full flex items-center justify-center neo-shadow-lg overflow-hidden relative z-10"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1u4hQtA36Zt014L3N9es-ujtndix4uJ4w" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              animate={{ rotate: [12, -5, 12] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-2 -right-4 bg-[#f472b6] text-white font-black px-5 py-2 rounded-full border-4 border-black neo-shadow z-20 text-lg"
            >
              Ahoy! ⚓️
            </motion.div>
          </div>

          <div className="text-center md:text-left flex-1">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 flex items-center justify-center md:justify-start gap-4 flex-wrap">
                王柔涵
                <Sparkles className="text-yellow-400 w-10 h-10 fill-current" />
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                來自高科大航海科的學生！對日文充滿熱情，正在努力航向偉大的航道！🌊
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="bg-white border-[3px] border-black px-4 py-2 rounded-full font-black text-sm md:text-base neo-shadow hover:neo-shadow-hover hover:-translate-y-1 transition-all cursor-default relative overflow-hidden group">
                  <span className="relative z-10">國立高雄科技大學</span>
                  <div className="absolute inset-0 bg-pink-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></div>
                </span>
                <span className="bg-cyan-300 border-[3px] border-black px-4 py-2 rounded-full font-black text-sm md:text-base neo-shadow hover:neo-shadow-hover hover:-translate-y-1 transition-all cursor-default">
                  航海科
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-32">
          <SectionTitle color="bg-[#fecdd3]">
            <span className="flex items-center gap-3">
              <User /> 關於我 About Me
            </span>
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="md:col-span-2" color="bg-[#e0e7ff]" delay={0.1}>
              <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 font-semibold text-lg leading-relaxed neo-shadow h-full flex flex-col justify-center relative z-10">
                <p className="mb-4 text-gray-800">
                  我是王柔涵，目前就讀高科大五專航海科四年級，興趣是看動漫 <span className="inline-block animate-bounce text-xl">🎌</span>。
                </p>
                <p className="mb-4 text-gray-800">
                  當初選擇航海科，其實是因為家裡人也讀這科系，加上我對未來毫無想法，就順理成章聽了家人的推薦。但就學期間，實作課程與海上實習讓我 <span className="bg-yellow-300 px-2 border-2 border-black rounded-md transform rotate-1 inline-block">第一次實際離開陸地這麼久</span>，慢慢對這科系產生興趣並努力學習 🌟！
                </p>
                <p className="mb-4 text-gray-800">
                  因為對日文極有興趣，我參加營隊到 <span className="text-white bg-red-500 px-2 border-2 border-black rounded font-black rotate-[-1deg] inline-block">日本當地的海專學校</span> 進行交流，體驗了與本校不同的實習船，應證了「麻雀雖小，五臟俱全」，更加深了我的日文學習魂 🔥。
                </p>
                <p className="text-gray-800">
                  預計專科畢業後會繼續完成二技學業，累積專業知識與經驗，為步入職場火力全開！🚀
                </p>
              </div>
              <div className="absolute -bottom-6 left-16 w-12 h-12 bg-white border-r-4 border-b-4 border-black transform rotate-45 z-0" />
            </Card>

            <Card color="bg-[#fef08a]" delay={0.2} className="flex flex-col justify-center">
              <h3 className="text-2xl font-black mb-6 border-b-4 border-black pb-2">基本資料 📜</h3>
              <div className="space-y-5 font-black text-lg">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-4 border-black neo-shadow hover:-translate-y-1 transition-transform">
                  <Star className="text-pink-500 fill-current w-6 h-6" />
                  <span>牡羊座 | B型</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-4 border-black neo-shadow hover:-translate-y-1 transition-transform">
                  <Calendar className="text-blue-500 w-6 h-6" />
                  <span>2007-04-08</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-4 border-black neo-shadow overflow-hidden hover:-translate-y-1 transition-transform">
                  <Mail className="text-green-500 shrink-0 w-6 h-6" />
                  <span className="truncate text-sm md:text-base">a111182124@...</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-32">
          <SectionTitle rotate="rotate-2" color="bg-[#bfdbfe]">
            <span className="flex items-center gap-3">
              <Compass /> 經歷與學習
            </span>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="md:col-span-1 lg:col-span-2" color="bg-[#ffedd5]" delay={0.3}>
              <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                <div className="bg-white border-4 border-black p-2 rounded-full"><Briefcase /></div>
                打工經歷 🛠️
              </h3>
              <div className="ml-2 mt-4">
                <TimelineItem 
                  span="2024-09 ~ 現在"
                  title="航運技術系辦公室"
                  subTitle="工讀生"
                  desc="負責協助日常文書作業與辦公室環境整理，確保系辦運作順暢！"
                  icon={Navigation}
                  color="bg-[#86efac]"
                />
                <TimelineItem 
                  span="2024-07 ~ 08"
                  title="其祥食品有限公司"
                  subTitle="工讀生 (暑期)"
                  desc="於食品加工廠內，協助甜點製作、清洗模具等生產線工作，學會了團隊合作與效率！🍰"
                  icon={Briefcase}
                  color="bg-[#fcd34d]"
                />
              </div>
            </Card>

            <div className="flex flex-col gap-6 lg:gap-8">
              <Card color="bg-[#fbcfe8]" delay={0.4}>
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="bg-white border-4 border-black p-1.5 rounded-full"><GraduationCap /></div>
                  學歷 🎓
                </h3>
                <div className="bg-white border-[3px] border-black rounded-2xl p-4 neo-shadow font-black group hover:-translate-y-1 transition-transform">
                  <span className="text-white bg-black px-2 py-1 rounded text-xs mb-2 inline-block">2022-09 ~ 在學</span>
                  <h4 className="text-xl">國立高雄科技大學</h4>
                  <p className="text-pink-500 mt-1 flex items-center gap-2">航海科 <Anchor className="w-4 h-4" /></p>
                </div>
              </Card>

              <Card color="bg-[#bae6fd]" delay={0.5} className="flex-1">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="bg-white border-4 border-black p-1.5 rounded-full"><Languages /></div>
                  語言能力 🗣️
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between font-black mb-2">
                      <span>英文 🇺🇸</span>
                      <span className="text-red-500 text-sm bg-white border-2 border-black px-2 py-0.5 rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)]">不佳 (TOEIC 0)</span>
                    </div>
                    <div className="h-5 w-full bg-white border-[3px] border-black rounded-full overflow-hidden p-0.5">
                      <div className="h-full bg-red-400 w-[10%] rounded-full relative overflow-hidden object-cover transition-all duration-1000">
                        <div className="absolute inset-0 bg-white/30 skew-x-[-20deg] w-4 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-black mb-2">
                      <span>日文 🇯🇵</span>
                      <span className="text-blue-600 text-sm bg-white border-2 border-black px-2 py-0.5 rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)]">略懂 (興趣滿滿🔥)</span>
                    </div>
                    <div className="h-5 w-full bg-white border-[3px] border-black rounded-full overflow-hidden p-0.5">
                      <div className="h-full bg-blue-400 w-[45%] rounded-full relative overflow-hidden transition-all duration-1000">
                         <div className="absolute inset-0 bg-white/30 skew-x-[-20deg] w-4 translate-x-[-100%] animate-[shimmer_2s_infinite] delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* PORTFOLIO WORKS SECTION */}
        <section id="portfolio" className="scroll-mt-32 pb-12">
          <SectionTitle rotate="-rotate-1" color="bg-[#dcfce7]">
            <span className="flex items-center gap-3">
              <Earth className="text-green-500 w-8 h-8" /> 宇宙作業 Portfolio
            </span>
          </SectionTitle>
          
          <div className="bg-white border-[5px] border-black rounded-[32px] p-6 md:p-10 neo-shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#fef08a] rounded-bl-full border-b-[5px] border-l-[5px] border-black z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              <ProjectCard 
                title="清明連假企劃 (PPT)" 
                date="3/16 作業" 
                desc="使用 Google Slides 生成的心靈與傳統完美結合提案簡報 📄" 
                icon={Presentation} 
                color="bg-[#fbcfe8]" 
                delay={0.1}
                onClick={() => setPptModalOpen(true)}
              />
              <ProjectCard 
                title="清明連假企劃 (Manus)" 
                date="3/23 作業" 
                desc="使用 Manus AI 錄製的連假企劃操作說明與展示影片 🎥" 
                icon={Video} 
                color="bg-[#c4b5fd]" 
                delay={0.15}
                onClick={() => setManusModalOpen(true)}
              />
              <ProjectCard 
                title="清明連假企劃 (Gamma)" 
                date="3/23 作業" 
                desc="使用 Gamma 生成的黑金質感排版旅遊企劃簡報 🖤" 
                icon={Presentation} 
                color="bg-[#fed7aa]" 
                delay={0.2}
                onClick={() => setGammaModalOpen(true)}
              />
              <ProjectCard 
                title="連假第一天 Vlog" 
                date="3/30 作業" 
                desc="紀錄清明節連假的歡樂與點點滴滴，充滿活力的影片記錄 🎬" 
                icon={Camera} 
                color="bg-[#bfdbfe]" 
                delay={0.3}
                onClick={() => setVlogModalOpen(true)}
              />
              <ProjectCard 
                title="連假第二天 Vlog" 
                date="3/30 作業" 
                desc="紀錄清明節連假第二天的旅程紀錄，精彩的Vlog影片 🎬" 
                icon={Camera} 
                color="bg-[#a7f3d0]" 
                delay={0.35}
                onClick={() => setVlog2ModalOpen(true)}
              />
              <ProjectCard 
                title="連假第三天 Vlog" 
                date="3/30 作業" 
                desc="放鬆與居家充電的清明連假第三天日常紀錄 🎬" 
                icon={Camera} 
                color="bg-[#fde047]" 
                delay={0.38}
                onClick={() => setVlog3ModalOpen(true)}
              />
              <ProjectCard 
                title="連假第四天 Vlog" 
                date="3/30 作業" 
                desc="收心與回歸日常的清明連假第四天紀錄 🎬" 
                icon={Camera} 
                color="bg-[#fca5a5]" 
                delay={0.39}
                onClick={() => setVlog4ModalOpen(true)}
              />
              <ProjectCard 
                title="3D 人物建模生成" 
                date="4/13 作業" 
                desc="使用 Tripo 3D AI 工具生成的虛擬可愛角色與模型 👾" 
                icon={Box} 
                color="bg-[#e9d5ff]" 
                delay={0.4}
                onClick={() => window.open('https://studio.tripo3d.ai/workspace/generate/73602983-c6d0-482c-87e9-a0f52676deae', '_blank', 'noopener,noreferrer')}
              />
              <ProjectCard 
                title="連假企劃 Word" 
                date="3/9 作業" 
                desc="使用 Word 版面呈現的清明連假心靈與傳統旅遊企劃 📄" 
                icon={Sparkles} 
                color="bg-[#fef08a]" 
                delay={0.5}
                onClick={() => setDocModalOpen(true)}
              />
            </div>
          </div>
        </section>
        
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t-8 border-black py-10 mt-20 neo-shadow-[0_-5px_0_0_rgba(0,0,0,1)] relative z-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-[#fde047] border-4 border-black rounded-full mx-auto mb-4 flex items-center justify-center neo-shadow">
            <Anchor className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black mb-2">王柔涵 ROU-HAN</h2>
          <p className="font-bold text-gray-500 mb-6 flex justify-center items-center gap-2">
            Built with 💖 and a 4D pocket <Sparkles className="w-4 h-4 text-yellow-500" />
          </p>
          <div className="inline-block border-2 border-black px-6 py-2 rounded-full text-sm font-bold bg-[#fce7f3] mx-auto shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      {showTopBtn && !docModalOpen && !pptModalOpen && !manusModalOpen && !gammaModalOpen && !vlogModalOpen && !vlog2ModalOpen && !vlog3ModalOpen && !vlog4ModalOpen && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#f472b6] text-white p-4 rounded-full border-4 border-black neo-shadow-lg hover:neo-shadow-hover hover:-translate-y-2 transition-all z-50 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-8 h-8 group-hover:animate-bounce" />
        </button>
      )}

      {/* Word Document Modal */}
      {docModalOpen && <WordDocumentModal onClose={() => setDocModalOpen(false)} />}

      {/* PPT Modal */}
      {pptModalOpen && <PptModal onClose={() => setPptModalOpen(false)} />}

      {/* Manus Modal */}
      {manusModalOpen && <ManusModal onClose={() => setManusModalOpen(false)} />}

      {/* Gamma Modal */}
      {gammaModalOpen && <GammaModal onClose={() => setGammaModalOpen(false)} />}

      {/* Vlog Modal */}
      {vlogModalOpen && <VlogModal onClose={() => setVlogModalOpen(false)} />}

      {/* Vlog2 Modal */}
      {vlog2ModalOpen && <Vlog2Modal onClose={() => setVlog2ModalOpen(false)} />}

      {/* Vlog3 Modal */}
      {vlog3ModalOpen && <Vlog3Modal onClose={() => setVlog3ModalOpen(false)} />}

      {/* Vlog4 Modal */}
      {vlog4ModalOpen && <Vlog4Modal onClose={() => setVlog4ModalOpen(false)} />}

      {/* Keyframes for internal animations not handled by motion directly */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
