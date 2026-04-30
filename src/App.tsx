import { motion } from 'motion/react';
import { 
  User, Calendar, Mail, Briefcase, GraduationCap, 
  Map, Earth, Camera, Sparkles, Languages, Compass, 
  Anchor, Navigation, Skull, Ship, Star, Box, Presentation
} from 'lucide-react';
import avatarImg from './avatar.jpg';
import beachBearImg from './beach-bear.jpg';
import img91608 from './91608.jpg';

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

const ProjectCard = ({ title, date, desc, icon: Icon, color, delay, href, children }: any) => {
  const CardWrapper = href ? motion.a : motion.div;
  return (
    <CardWrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", delay }}
      className={`border-4 border-black rounded-3xl p-6 ${color} neo-shadow-lg hover:neo-shadow-hover transition-all duration-300 flex flex-col h-full block ${href ? 'cursor-pointer hover:-translate-y-2 hover:scale-[1.02]' : 'hover:-translate-y-2'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="bg-white border-4 border-black rounded-full w-14 h-14 flex shrink-0 items-center justify-center neo-shadow">
          <Icon className="w-6 h-6" />
        </div>
        {href && (
          <span className="bg-white border-2 border-black rounded-full px-3 py-1 text-[10px] sm:text-xs font-black neo-shadow hover:bg-black hover:text-white transition-colors whitespace-nowrap">
            打開連結 🔗
          </span>
        )}
      </div>
      <span className="bg-white px-3 py-1 rounded-full border-2 border-black font-black text-xs self-start mb-3 neo-shadow">
        {date}
      </span>
      <h3 className="font-black text-xl mb-3 leading-tight">{title}</h3>
      {children && <div className="mb-4">{children}</div>}
      <p className="font-semibold text-gray-700 text-sm mt-auto">{desc}</p>
    </CardWrapper>
  );
};

export default function App() {
  return (
    <div className="min-h-screen text-black">
      
      {/* Floating Background Decor */}
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="fixed top-20 left-10 text-pink-300 opacity-50 z-0 text-7xl"><Sparkles /></motion.div>
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="fixed bottom-20 right-10 text-yellow-300 opacity-50 z-0"><Anchor size={80} /></motion.div>

      <main className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10 overflow-hidden lg:overflow-visible">
        
        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
        >
          <div className="relative group">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
              className="w-48 h-48 md:w-64 md:h-64 bg-[#fde047] border-[6px] border-black rounded-full flex items-center justify-center neo-shadow-lg overflow-hidden relative z-10"
            >
              <img src={avatarImg} alt="王柔涵" className="absolute inset-0 w-full h-full object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <Ship className="w-24 h-24 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              {/* Cute wavy background inside avatar */}
              <motion.div 
                animate={{ x: [-50, 0, -50] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[200%] h-20 bg-blue-400 opacity-50 rounded-t-[100px]" 
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

          <div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-4 flex items-center gap-4 flex-wrap">
                王柔涵
                <Sparkles className="text-yellow-400 w-10 h-10 fill-current" />
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white border-[3px] border-black px-4 py-2 rounded-full font-black text-sm md:text-base neo-shadow">
                  國立高雄科技大學
                </span>
                <span className="bg-cyan-300 border-[3px] border-black px-4 py-2 rounded-full font-black text-sm md:text-base neo-shadow">
                  航海科
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* BIO */}
          <Card className="md:col-span-2" color="bg-[#e0e7ff]" delay={0.1}>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <div className="bg-white border-4 border-black p-2 rounded-full"><User /></div>
              關於我 😎
            </h2>
            <div className="bg-white border-4 border-black rounded-2xl p-6 font-semibold text-lg leading-relaxed neo-shadow">
              <p className="mb-4">
                我是王柔涵，目前就讀高科大五專航海科四年級，興趣是看動漫 <span className="inline-block animate-bounce">🎌</span>。
              </p>
              <p className="mb-4">
                當初選擇航海科，其實是因為家裡人也讀這科系，加上我對未來毫無想法，就順理成章聽了家人的推薦。但就學期間，實作課程與間實習讓我 <span className="bg-yellow-200 px-2 border-2 border-black rounded-md">第一次實際離開陸地這麼久</span>，也慢慢對這科系產生興趣並努力學習 🌟！
              </p>
              <p className="mb-4">
                因為對日文極有興趣，我參加營隊到 <span className="text-red-500 font-bold underline decoration-4 decoration-black">日本當地的海專學校</span> 進行交流，體驗了與本校不同的實習船，應證了「麻雀雖小，五臟俱全」，更加深了我的日文學習魂 🔥。
              </p>
              <p>
                預計專科畢業後會繼續完成二技學業，累積專業知識與經驗，為步入職場火力全開！🚀
              </p>
            </div>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-4 left-10 w-8 h-8 bg-white border-r-4 border-b-4 border-black transform rotate-45" />
          </Card>

          {/* BASIC INFO */}
          <Card color="bg-[#fef08a]" delay={0.2} className="flex flex-col justify-center">
            <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2">基本資料 📜</h2>
            <div className="space-y-4 font-black">
              <div className="flex items-center gap-4 bg-white p-3 rounded-xl border-4 border-black neo-shadow">
                <Star className="text-pink-500 fill-current" />
                <span>牡羊座 | B型</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-3 rounded-xl border-4 border-black neo-shadow">
                <Calendar className="text-blue-500" />
                <span>2007-04-08</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-3 rounded-xl border-4 border-black neo-shadow overflow-hidden">
                <Mail className="text-green-500 shrink-0" />
                <span className="truncate text-sm md:text-base">a111182124@...</span>
              </div>
            </div>
          </Card>

          {/* EXPERIENCE */}
          <Card className="md:col-span-2 lg:col-span-2" color="bg-[#ffedd5]" delay={0.3}>
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <div className="bg-white border-4 border-black p-2 rounded-full"><Briefcase /></div>
              打工經歷 🛠️
            </h2>
            <div className="ml-2">
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

          {/* LANGUAGES & EDUCATION (Stacked in one column on Desktop) */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <Card color="bg-[#fbcfe8]" delay={0.4}>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="bg-white border-4 border-black p-1.5 rounded-full"><GraduationCap /></div>
                學歷 🎓
              </h2>
              <div className="bg-white border-[3px] border-black rounded-2xl p-4 neo-shadow font-black">
                <span className="text-white bg-black px-2 py-1 rounded text-xs mb-2 inline-block">2022-09 ~ 在學</span>
                <h3 className="text-xl">國立高雄科技大學</h3>
                <p className="text-pink-500 mt-1">航海科 🌊</p>
              </div>
            </Card>

            <Card color="bg-[#bae6fd]" delay={0.5} className="flex-1">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="bg-white border-4 border-black p-1.5 rounded-full"><Languages /></div>
                語言能力 🗣️
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between font-black mb-2">
                    <span>英文 🇺🇸</span>
                    <span className="text-red-500 text-sm">不佳 (TOEIC 0)</span>
                  </div>
                  <div className="h-4 w-full bg-white border-[3px] border-black rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 w-[10%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-black mb-2">
                    <span>日文 🇯🇵</span>
                    <span className="text-blue-600 text-sm">略懂</span>
                  </div>
                  <div className="h-4 w-full bg-white border-[3px] border-black rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[40%]" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* PORTFOLIO WORKS */}
          <Card className="md:col-span-2 lg:col-span-3 pb-12" color="bg-[#dcfce7]" delay={0.6}>
            <h2 className="text-4xl font-black mb-8 flex items-center gap-3">
              <div className="bg-white border-4 border-black p-2 rounded-full"><Earth className="text-green-500" /></div>
              我的宇宙作業 🪐
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard 
                title="連假企劃 (Word)" 
                date="3/9 作業" 
                desc="使用 Word 製作的連假旅遊企劃文件 📝" 
                icon={Sparkles} 
                color="bg-[#fef08a]" 
                delay={0.7}
                href="https://docs.google.com/document/d/12FPQionX05-ukP9XbpjQY_HqU4PLOh_ygQieE9Hhw-E/edit?tab=t.0"
              />
              <ProjectCard 
                title="連假企劃簡報" 
                date="3/16 作業" 
                desc="關於清明連假企劃的簡報展示 📄" 
                icon={Presentation} 
                color="bg-[#bae6fd]" 
                delay={0.75}
                href="https://docs.google.com/presentation/d/16sTCoq0FCCL2OXZiSALRYRKjwMbKhybN6MmAgpdgg-E/present?slide=id.p3"
              />
              <ProjectCard 
                title="清明連假企劃 (Manus)" 
                date="3/23 作業" 
                desc="使用 Manus AI 生成的心靈與傳統完美結合提案簡報 📄" 
                icon={Presentation} 
                color="bg-[#fecdd3]" 
                delay={0.8}
                href="https://drive.google.com/file/d/1PjTkaV5l9OJKvsXeNQI_Par9fZUiWfJs/view"
              />
              <ProjectCard 
                title="連假企劃 (Notebook LM)" 
                date="3/23 作業" 
                desc="使用 Notebook LM 分析與整理的連假企劃相關資料 💡" 
                icon={Presentation} 
                color="bg-[#c4b5fd]" 
                delay={0.85}
                href="https://drive.google.com/file/d/1j0yw3cYMCLnWnxSjFOMoSvZCOEOzfoAr/view"
              />
              <ProjectCard 
                title="清明連假企劃 (Gamma)" 
                date="3/23 作業" 
                desc="使用 Gamma 生成的黑金質感排版旅遊企劃簡報 🖤" 
                icon={Presentation} 
                color="bg-[#fed7aa]" 
                delay={0.9}
                href="https://drive.google.com/file/d/1l5k2B_mbxV2iS8O6iTTHM7LiNuzot7uL/view"
              />
              <ProjectCard 
                title="模擬連假第一天Vlog" 
                date="3/30 作業" 
                desc="紀錄清明節連假的歡樂與點點滴滴，充滿活力的影片記錄 🎬" 
                icon={Camera} 
                color="bg-[#bfdbfe]" 
                delay={1.0}
                href="https://drive.google.com/file/d/1UFDQz1DT-qx6uNtLpKleiIS59hZh0N3Q/view"
              />
              <ProjectCard 
                title="模擬連假第二天Vlog" 
                date="3/30 作業" 
                desc="接續第一天的行程，紀錄連假第二天的精彩影片記錄 🎬" 
                icon={Camera} 
                color="bg-[#a7f3d0]" 
                delay={1.1}
                href="https://drive.google.com/file/d/1Wh95KThMqXCNJv5UbiQMq4HqTSqy9FWD/view"
              />
              <ProjectCard 
                title="模擬連假第三天" 
                date="3/30 作業" 
                desc="連假第三天的精彩生活點滴紀錄 🎬" 
                icon={Camera} 
                color="bg-[#fbcfe8]" 
                delay={1.2}
                href="https://drive.google.com/file/d/158FZ9eHFxa4Q5EkNb2qGEB1P1Hbo31oy/view"
              />
              <ProjectCard 
                title="模擬連假第四天" 
                date="3/30 作業" 
                desc="連假第四天的精彩生活點滴紀錄 🎬" 
                icon={Camera} 
                color="bg-[#fde68a]" 
                delay={1.3}
                href="https://drive.google.com/file/d/1hKJSSohaUAM7iKbsCjbdbg39xWHMxXqt/view"
              >
                <div className="w-full aspect-video bg-amber-100 rounded-xl border-[3px] border-black overflow-hidden relative group neo-shadow mb-2">
                  <img src={img91608} alt="模擬連假第四天封面" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              </ProjectCard>
              <ProjectCard 
                title="3D 人物建模生成" 
                date="4/13 作業" 
                desc="點擊打開專案！使用 Tripo 3D 生成虛擬角色。上圖為真實照片與3D模型的對比 ✨" 
                icon={Box} 
                color="bg-[#e9d5ff]" 
                delay={1.1}
                href="https://studio.tripo3d.ai/workspace/generate/73602983-c6d0-482c-87e9-a0f52676deae"
              >
                <div className="flex gap-2 w-full mb-1 bg-white/50 p-2 rounded-xl border-2 border-black neo-shadow">
                  <div className="w-1/2 flex flex-col items-center">
                    <span className="text-[10px] font-black bg-white px-2 py-0.5 rounded-full border-2 border-black mb-1 -mt-4 neo-shadow relative z-10 whitespace-nowrap">真實照片</span>
                    <div className="w-full aspect-[4/5] bg-sky-100 rounded-lg border-2 border-black flex items-center justify-center overflow-hidden relative group">
                      <img src={beachBearImg} alt="海邊拿熊寶" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-sky-800 font-black p-2 text-center">
                        🌅 🏖️<br/>海邊拿熊寶<br/>合照
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col items-center">
                    <span className="text-[10px] font-black bg-white px-2 py-0.5 rounded-full border-2 border-black mb-1 -mt-4 neo-shadow relative z-10 whitespace-nowrap">3D 模型</span>
                    <div className="w-full aspect-[4/5] bg-fuchsia-100 rounded-lg border-2 border-black flex items-center justify-center overflow-hidden relative group">
                      <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-fuchsia-800 font-black p-2 text-center">
                        👾 ✨<br/>可愛3D<br/>人物
                      </span>
                    </div>
                  </div>
                </div>
              </ProjectCard>
            </div>
          </Card>
          
        </div>
        
        <footer className="mt-16 text-center font-black text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 王柔涵 ⚓️ Built with 💖 and a 4D pocket.</p>
        </footer>

      </main>
    </div>
  );
}
