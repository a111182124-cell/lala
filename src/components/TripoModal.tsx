import { motion } from 'motion/react';
import { X, ExternalLink, Box, Upload } from 'lucide-react';
import { useState } from 'react';

export function TripoModal({ onClose }: { onClose: () => void }) {
  const tripoUrl = "https://studio.tripo3d.ai/workspace/generate/73602983-c6d0-482c-87e9-a0f52676deae";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-6xl bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col my-auto max-h-[90vh]"
      >
        <div className="bg-[#c084fc] border-b-4 border-black p-4 flex justify-between items-center shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white border-2 border-black p-1.5 rounded-full">
              <Box className="w-5 h-5 text-black" />
            </div>
            <h2 className="font-black text-lg md:text-xl">3D 人物建模生成對比 (4/13 作業)</h2>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={tripoUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white border-2 border-black rounded-lg hover:bg-gray-100 transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              title="前往 Tripo 3D"
            >
              <ExternalLink className="w-4 h-4 hidden md:block" />
              <span className="text-sm font-bold hidden md:block">在 Tripo 3D 開啟</span>
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
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f3f4f6]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-[500px]">
            {/* Original Image Side */}
            <div className="flex flex-col border-4 border-black border-dashed rounded-xl bg-white p-4 relative h-[400px] lg:h-auto overflow-hidden">
              <div className="absolute top-0 w-full left-0 bg-yellow-300 border-b-4 border-black py-2 px-4 shadow-sm z-10 font-bold flex items-center justify-between">
                <span>真實照片 (對比用)</span>
              </div>
              <div className="flex-1 w-full flex items-center justify-center mt-12 relative">
                {/* 
                  Since uploaded images from the chat aren't automatically in the file system,
                  we expect the user to upload it to AI Studio's file explorer and then we can display it. 
                  If user uploads to public folder as 'me-photo.jpg' we can use that, otherwise show a placeholder.
                */}
                <img 
                  src="/me-photo.jpg" 
                  alt="Original provided image" 
                  className="max-h-full max-w-full object-contain rounded-lg border-2 border-gray-200"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/600x800?text=Please+Upload+Photo+to+public+folder";
                  }}
                />
              </div>
              <div className="mt-4 p-3 bg-blue-50 border-2 border-blue-400 rounded-lg text-sm text-blue-800 font-medium flex items-center gap-2">
                如果您想在頁面中看到您剛剛上傳的照片，請透過左側檔案總管將圖片上傳到 <code>public</code> 資料夾中，並命名為 <code>me-photo.jpg</code>，我們將更新這裡的顯示。
              </div>
            </div>

            {/* Tripo 3D Side */}
            <div className="flex flex-col border-4 border-black rounded-xl bg-black overflow-hidden h-[500px] lg:h-auto relative">
              <div className="absolute top-0 w-full left-0 bg-[#c084fc] border-b-4 border-black py-2 px-4 z-10 font-bold flex items-center justify-between">
                <span>Tripo 3D 生成模型</span>
              </div>
              <div className="flex-1 w-full bg-[#111] mt-12">
                <iframe 
                  src={tripoUrl} 
                  allowFullScreen 
                  className="w-full h-full border-0"
                  title="Tripo 3D 預覽"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-white border-4 border-black rounded-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <h3 className="font-bold text-lg mb-2">真實照片與 3D 模型比對分析</h3>
            <div className="space-y-4 text-gray-700">
              <p>根據您提供的海灘黃昏照片（穿著白色羽絨外套、寬鬆牛仔褲，手持拉拉熊），以下是 3D 建模的比對觀察：</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>服裝與身形輪廓：</strong> 
                  白色羽絨外套的蓬鬆感和菱格紋理，以及寬鬆牛仔褲的版型，是這張照片的重點。3D 模型通常能捕捉大輪廓，但在側面和背面的厚度預測上可能會有誤差（AI 會自行腦補背部）。
                </li>
                <li>
                  <strong>配件與複雜動作 (最大難點)：</strong> 
                  右手抱著的「拉拉熊(Rilakkuma)」玩偶和左手「比 YA (V字)」的手勢。單張圖片生成 3D 時，手指細節經常會融合或扭曲，且 AI 極有可能將玩偶的紋理直接貼合在衣服上，或是形狀無法完美分離。
                </li>
                <li>
                  <strong>臉部特徵與眼鏡：</strong> 
                  照片中佩戴的細框圓形眼鏡，在 AI 建模中常會被轉化為貼在臉上的平面貼圖，而非立體的鏡架。五官神韻在正面的還原度尚可，但轉至側面可能會略顯平滑或失真。
                </li>
                <li>
                  <strong>光影干擾：</strong> 
                  照片背景是強烈的黃昏逆光/側光，這會影響 AI 對衣物原始顏色的判斷（白外套可能在模型中帶有夕陽的橘黃色調）。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
