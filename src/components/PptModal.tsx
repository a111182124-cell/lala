import { motion } from 'motion/react';
import { X, ExternalLink, Presentation } from 'lucide-react';

export function PptModal({ onClose }) {
  const pptUrl = "https://docs.google.com/presentation/d/16sTCoq0FCCL2OXZiSALRYRKjwMbKhybN6MmAgpdgg-E/embed?slide=id.p1&rm=minimal&start=false&loop=false&delayms=3000";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-5xl bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col h-[85vh] max-h-[800px]"
      >
        <div className="bg-[#fbcfe8] border-b-4 border-black p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white border-2 border-black p-1.5 rounded-full">
              <Presentation className="w-5 h-5 text-black" />
            </div>
            <h2 className="font-black text-lg md:text-xl">清明連假企劃 (3/16 作業)</h2>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://docs.google.com/presentation/d/16sTCoq0FCCL2OXZiSALRYRKjwMbKhybN6MmAgpdgg-E/present?slide=id.p1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white border-2 border-black rounded-lg hover:bg-gray-100 transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              title="在新分頁中開啟"
            >
              <ExternalLink className="w-4 h-4 hidden md:block" />
              <span className="text-sm font-bold hidden md:block">新視窗開啟</span>
              <ExternalLink className="w-5 h-5 md:hidden" />
            </a>
            <button 
              onClick={onClose}
              className="p-2 bg-white border-2 border-black rounded-lg hover:bg-red-400 hover:text-white transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0"
              title="關閉"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full relative bg-[#e0e0e0]">
          <iframe 
            src={pptUrl} 
            allowFullScreen 
            className="absolute inset-0 w-full h-full border-0"
            title="清明連假企劃簡報"
          />
        </div>
      </motion.div>
    </div>
  );
}
