import { motion } from 'motion/react';
import { 
  X, FileText, Save, Printer, Undo, Redo, 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Download
} from 'lucide-react';
import { useState } from 'react';

export function WordDocumentModal({ onClose }) {
  const [isDownloading, setIsDownloading] = useState(false);

  // Generate simple HTML download
  const handleDownload = () => {
    setIsDownloading(true);
    const content = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <title>2026 清明連假：心靈平衡與傳統傳承旅遊企劃</title>
      </head>
      <body>
        <h1 style="color: #2b579a;">🌸 2026 清明連假：心靈平衡與傳統傳承旅遊企劃</h1>
        <p><strong>對象：</strong> 4人家庭 | <strong>日期：</strong> 2026/04/03 (五) – 2026/04/06 (一)</p>
        
        <h2>📑 企劃核心</h2>
        <p>本次假期規劃旨在達成<strong>「傳統祭祀」、「信仰淨化」與「居家修復」</strong>的平衡。透過前兩日的高能量活動與後兩日的極致放鬆，讓全家人在收假前獲得真正的能量補充。</p>
        
        <h2>🗓️ 四日詳細行程與餐點規劃</h2>
        
        <h3>Day 1: 🌿 慎終追遠・祭祖傳承日</h3>
        <p><strong>地點：</strong> 家族墓園/納骨塔、家中<br/>
        <strong>行程亮點：</strong> 早晨進行傳統祭掃，午後返家享受靜謐時光，傳承家族歷史。</p>
        <ul>
          <li><strong>早餐：</strong> 出發前家中簡單輕食（吐司、咖啡）。</li>
          <li><strong>午餐：</strong> DIY 家族潤餅派對 (自製潤餅皮、花生粉、糖粉、高麗菜絲、五花肉)。</li>
          <li><strong>晚餐：</strong> 祭祀後全家聚餐（家常熱炒或簡易自煮）。</li>
        </ul>
        <p><strong>💰 預估花費：</strong> NT$ 3,000 (含祭祀備品與潤餅食材)。<br/>
        <strong>⚡ 體力消耗：</strong> ⭐⭐⭐ (中)</p>

        <h3>Day 2: 🛕 靜心祈福・佛光山知性之旅</h3>
        <p><strong>地點：</strong> 高雄佛光山佛陀紀念館、大樹舊鐵橋<br/>
        <strong>行程亮點：</strong> 參觀建築之美，於本館靜坐參拜，傍晚至舊鐵橋看夕陽與火車。</p>
        <ul>
          <li><strong>早餐：</strong> 路上外帶特色飯糰。</li>
          <li><strong>午餐：</strong> 佛光山滴水坊 (必嚐：豆漿麵、吉祥飯)。</li>
          <li><strong>晚餐：</strong> 大樹區在地小吃（肉圓、黑輪）。</li>
        </ul>
        <p><strong>💰 預估花費：</strong> NT$ 1,800 (含油錢、供花點燈、餐飲)。<br/>
        <strong>⚡ 體力消耗：</strong> ⭐⭐⭐⭐⭐ (高)</p>

        <h3>Day 3: 🛌 極致放鬆・居家充電日</h3>
        <p><strong>地點：</strong> 溫馨的家<br/>
        <strong>行程亮點：</strong> 全日「數位斷捨離」。早午餐後午睡，下午閱讀或進行家庭電影院。</p>
        <ul>
          <li><strong>早午餐：</strong> 豪華外送拼盤 (班尼迪克蛋、法式吐司、新鮮果汁)。</li>
          <li><strong>下午茶：</strong> 精緻甜點與熱茶。</li>
          <li><strong>晚餐：</strong> 慶祝連假大餐 (精緻外帶餐盒或披薩分享餐)。</li>
        </ul>
        <p><strong>💰 預估花費：</strong> NT$ 4,500 (主預算投資在高品質餐飲)。<br/>
        <strong>⚡ 體力消耗：</strong> ⭐ (極低)</p>

        <h3>Day 4: ☕ 慢活收心・回歸儀式日</h3>
        <p><strong>地點：</strong> 巷弄咖啡廳、社區超市<br/>
        <strong>行程亮點：</strong> 在安靜的咖啡廳整理心境。下午至超市補給下週生活必需品，早睡收假。</p>
        <ul>
          <li><strong>早餐：</strong> 咖啡廳輕食與拿鐵。</li>
          <li><strong>午餐：</strong> 自製健康蔬果沙拉與雞肉。</li>
          <li><strong>晚餐：</strong> 居家清淡料理，減輕腸胃負擔。</li>
        </ul>
        <p><strong>💰 預估花費：</strong> NT$ 700 (咖啡與微量採買)。<br/>
        <strong>⚡ 體力消耗：</strong> ⭐⭐ (低)</p>

        <h2>📊 總體預算分析 (NT$ 10,000)</h2>
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr><th>類別</th><th>分項目</th><th>金額估計</th></tr>
          <tr><td>餐飲美食</td><td>潤餅食材、佛光山午齋、大餐、早午餐</td><td>$ 6,000</td></tr>
          <tr><td>信仰與傳統</td><td>祭祀金紙/鮮花、佛前點燈</td><td>$ 2,000</td></tr>
          <tr><td>交通與雜支</td><td>汽油費、停車費、超市採買</td><td>$ 2,000</td></tr>
        </table>

        <h2>💡 旅人備忘錄</h2>
        <ul>
          <li><strong>潤餅皮預訂：</strong> 清明當日潤餅皮極難買，建議 4/2 (四) 先向店家預訂。</li>
          <li><strong>佛館著裝：</strong> 園區廣大，建議著深色運動鞋，且館內空調強，需帶薄外套。</li>
          <li><strong>居家日宗旨：</strong> 將手機關機 4 小時，您會發現體力恢復速度快一倍。</li>
        </ul>
      </body>
      </html>
    `;

    const blob = new Blob(['\\ufeff', content], {
      type: 'application/msword'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '2026清明連假企劃.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsDownloading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col font-sans bg-[#f3f2f1]">
      {/* Header / Ribbon Area */}
      <div className="bg-[#2b579a] text-white flex items-center justify-between px-4 py-2 select-none shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center border border-blue-400">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide flex items-center gap-2">
              作業區3_9連假企劃 - Word 
              <span className="bg-blue-600 text-[10px] px-1.5 py-0.5 rounded border border-blue-500">已儲存</span>
            </div>
            <div className="text-[11px] text-blue-200 hidden sm:block">儲存於 OneDrive</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
           <button 
            onClick={handleDownload}
            className="flex items-center gap-1.5 hover:bg-blue-600/80 px-3 py-1.5 rounded transition-colors text-sm font-medium mr-2"
          >
            <Download className="w-4 h-4" />
            {isDownloading ? "匯出中..." : "匯出 Word"}
          </button>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-red-500 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#f3f2f1] border-b border-gray-300 px-4 py-2 flex items-center gap-4 select-none overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 border-r border-gray-300 pr-4 shrink-0">
          <ToolbarButton icon={<Undo size={16} />} />
          <ToolbarButton icon={<Redo size={16} />} />
          <ToolbarButton icon={<Save size={16} />} />
          <ToolbarButton icon={<Printer size={16} />} />
        </div>
        
        <div className="flex items-center gap-1 border-r border-gray-300 pr-4 shrink-0">
          <select className="bg-white border border-gray-300 text-sm py-1 px-2 rounded w-32 focus:outline-blue-500 outline-none">
            <option>微軟正黑體</option>
            <option>新細明體</option>
            <option>標楷體</option>
            <option>Arial</option>
          </select>
          <select className="bg-white border border-gray-300 text-sm py-1 px-2 rounded w-16 focus:outline-blue-500 outline-none">
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>24</option>
          </select>
        </div>

        <div className="flex items-center gap-1 border-r border-gray-300 pr-4 shrink-0">
          <ToolbarButton icon={<Bold size={16} />} active />
          <ToolbarButton icon={<Italic size={16} />} />
          <ToolbarButton icon={<Underline size={16} />} />
        </div>

        <div className="flex items-center gap-1 border-r border-gray-300 pr-4 shrink-0">
          <ToolbarButton icon={<AlignLeft size={16} />} active />
          <ToolbarButton icon={<AlignCenter size={16} />} />
          <ToolbarButton icon={<AlignRight size={16} />} />
          <ToolbarButton icon={<AlignJustify size={16} />} />
        </div>

         <div className="flex items-center gap-1 shrink-0">
          <ToolbarButton icon={<List size={16} />} />
          <ToolbarButton icon={<ListOrdered size={16} />} />
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 bg-[#e0e0e0] overflow-y-auto p-4 md:p-8 flex justify-center pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white w-full max-w-[800px] min-h-[1100px] shadow-sm border border-gray-200 p-10 md:p-16 lg:p-20 outline-none"
        >
          <div className="prose prose-slate prose-img:rounded-xl max-w-none">
            <h1 className="text-3xl font-black text-[#2b579a] mb-2 border-b-2 border-slate-100 pb-4">
              🌸 2026 清明連假：心靈平衡與傳統傳承旅遊企劃
            </h1>
            <p className="text-slate-500 font-medium mb-8">
              <strong>對象：</strong> 4人家庭 | <strong>日期：</strong> 2026/04/03 (五) – 2026/04/06 (一)
            </p>

            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mt-8">
              📑 企劃核心
            </h2>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="m-0 text-slate-700 leading-relaxed font-medium">
                本次假期規劃旨在達成<strong className="text-[#2b579a]">「傳統祭祀」、「信仰淨化」與「居家修復」</strong>的平衡。透過前兩日的高能量活動與後兩日的極致放鬆，讓全家人在收假前獲得真正的能量補充。
              </p>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-l-4 border-[#2b579a] pl-3 mt-10">
              🗓️ 四日詳細行程與餐點規劃
            </h2>

            {/* Day 1 */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-[#2b579a] bg-blue-50 py-2 px-3 rounded-md">
                Day 1: 🌿 慎終追遠・祭祖傳承日
              </h3>
              <p className="mb-2 mt-3">
                <strong>📍 地點：</strong> 家族墓園/納骨塔、家中<br/>
                <strong>✨ 行程亮點：</strong> 早晨進行傳統祭掃，午後返家享受靜謐時光，傳承家族歷史。
              </p>
              <div className="pl-4 border-l-2 border-slate-200 py-2 my-4">
                <p className="m-0 mb-1"><strong>🍴 三餐規劃：</strong></p>
                <ul className="m-0 mt-2 list-disc pl-5 text-slate-700">
                  <li><strong>早餐：</strong> 出發前家中簡單輕食（吐司、咖啡）。</li>
                  <li><strong>午餐：</strong> DIY 家族潤餅派對 (自製潤餅皮、花生粉、糖粉、高麗菜絲、五花肉)。</li>
                  <li><strong>晚餐：</strong> 祭祀後全家聚餐（家常熱炒或簡易自煮）。</li>
                </ul>
              </div>
              <p className="m-0 text-sm text-slate-600 bg-slate-50 py-2 px-3 rounded">
                <strong>💰 預估花費：</strong> NT$ 3,000 (含祭祀備品與潤餅食材)。<br/>
                <strong>⚡ 體力消耗：</strong> ⭐⭐⭐ (中)
              </p>
            </div>

            {/* Day 2 */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#2b579a] bg-blue-50 py-2 px-3 rounded-md">
                Day 2: 🛕 靜心祈福・佛光山知性之旅
              </h3>
              <p className="mb-2 mt-3">
                <strong>📍 地點：</strong> 高雄佛光山佛陀紀念館、大樹舊鐵橋<br/>
                <strong>✨ 行程亮點：</strong> 參觀建築之美，於本館靜坐參拜，傍晚至舊鐵橋看夕陽與火車。
              </p>
              <div className="pl-4 border-l-2 border-slate-200 py-2 my-4">
                <p className="m-0 mb-1"><strong>🍴 三餐規劃：</strong></p>
                <ul className="m-0 mt-2 list-disc pl-5 text-slate-700">
                  <li><strong>早餐：</strong> 路上外帶特色飯糰。</li>
                  <li><strong>午餐：</strong> 佛光山滴水坊 (必嚐：豆漿麵、吉祥飯)。</li>
                  <li><strong>晚餐：</strong> 大樹區在地小吃（肉圓、黑輪）。</li>
                </ul>
              </div>
              <p className="m-0 text-sm text-slate-600 bg-slate-50 py-2 px-3 rounded">
                <strong>💰 預估花費：</strong> NT$ 1,800 (含油錢、供花點燈、餐飲)。<br/>
                <strong>⚡ 體力消耗：</strong> ⭐⭐⭐⭐⭐ (高)
              </p>
            </div>

            {/* Day 3 */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#2b579a] bg-blue-50 py-2 px-3 rounded-md">
                Day 3: 🛌 極致放鬆・居家充電日
              </h3>
              <p className="mb-2 mt-3">
                <strong>📍 地點：</strong> 溫馨的家<br/>
                <strong>✨ 行程亮點：</strong> 全日「數位斷捨離」。早午餐後午睡，下午閱讀或進行家庭電影院。
              </p>
              <div className="pl-4 border-l-2 border-slate-200 py-2 my-4">
                <p className="m-0 mb-1"><strong>🍴 三餐規劃：</strong></p>
                <ul className="m-0 mt-2 list-disc pl-5 text-slate-700">
                  <li><strong>早午餐：</strong> 豪華外送拼盤 (班尼迪克蛋、法式吐司、新鮮果汁)。</li>
                  <li><strong>下午茶：</strong> 精緻甜點與熱茶。</li>
                  <li><strong>晚餐：</strong> 慶祝連假大餐 (精緻外帶餐盒或披薩分享餐)。</li>
                </ul>
              </div>
              <p className="m-0 text-sm text-slate-600 bg-slate-50 py-2 px-3 rounded">
                <strong>💰 預估花費：</strong> NT$ 4,500 (主預算投資在高品質餐飲)。<br/>
                <strong>⚡ 體力消耗：</strong> ⭐ (極低)
              </p>
            </div>

            {/* Day 4 */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#2b579a] bg-blue-50 py-2 px-3 rounded-md">
                Day 4: ☕ 慢活收心・回歸儀式日
              </h3>
              <p className="mb-2 mt-3">
                <strong>📍 地點：</strong> 巷弄咖啡廳、社區超市<br/>
                <strong>✨ 行程亮點：</strong> 在安靜的咖啡廳整理心境。下午至超市補給下週生活必需品，早睡收假。
              </p>
              <div className="pl-4 border-l-2 border-slate-200 py-2 my-4">
                <p className="m-0 mb-1"><strong>🍴 三餐規劃：</strong></p>
                <ul className="m-0 mt-2 list-disc pl-5 text-slate-700">
                  <li><strong>早餐：</strong> 咖啡廳輕食與拿鐵。</li>
                  <li><strong>午餐：</strong> 自製健康蔬果沙拉與雞肉。</li>
                  <li><strong>晚餐：</strong> 居家清淡料理，減輕腸胃負擔。</li>
                </ul>
              </div>
              <p className="m-0 text-sm text-slate-600 bg-slate-50 py-2 px-3 rounded">
                <strong>💰 預估花費：</strong> NT$ 700 (咖啡與微量採買)。<br/>
                <strong>⚡ 體力消耗：</strong> ⭐⭐ (低)
              </p>
            </div>

            <hr className="my-10" />

            <h2 className="text-xl font-bold text-slate-800 border-l-4 border-[#2b579a] pl-3 mt-10">
              📊 總體預算分析 (NT$ 10,000)
            </h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2b579a] text-white">
                    <th className="border p-3 rounded-tl">類別</th>
                    <th className="border p-3">分項目</th>
                    <th className="border p-3 rounded-tr">金額估計</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="bg-blue-50/50">
                    <td className="border p-3 font-medium">餐飲美食</td>
                    <td className="border p-3 text-sm">潤餅食材、佛光山午齋、大餐、早午餐</td>
                    <td className="border p-3 font-bold">$ 6,000</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">信仰與傳統</td>
                    <td className="border p-3 text-sm">祭祀金紙/鮮花、佛前點燈</td>
                    <td className="border p-3 font-bold">$ 2,000</td>
                  </tr>
                  <tr className="bg-blue-50/50">
                    <td className="border p-3 font-medium">交通與雜支</td>
                    <td className="border p-3 text-sm">汽油費、停車費、超市採買</td>
                    <td className="border p-3 font-bold">$ 2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-l-4 border-yellow-400 pl-3 mt-12 mb-4">
              💡 旅人備忘錄
            </h2>
            <div className="bg-[#fffbeb] p-5 rounded-lg border border-yellow-200">
              <ul className="m-0 list-disc pl-4 space-y-3 text-slate-700">
                <li>
                  <strong className="text-yellow-800">潤餅皮預訂：</strong> 清明當日潤餅皮極難買，建議 4/2 (四) 先向店家預訂。
                </li>
                <li>
                  <strong className="text-yellow-800">佛館著裝：</strong> 園區廣大，建議著深色運動鞋，且館內空調強，需帶薄外套。
                </li>
                <li>
                  <strong className="text-yellow-800">居家日宗旨：</strong> 將手機關機 <span className="underline decoration-yellow-400 decoration-2 underline-offset-2">4 小時</span>，您會發現體力恢復速度快一倍。
                </li>
              </ul>
            </div>
            
          </div>
        </motion.div>
      </div>
      
      {/* Status Bar */}
      <div className="bg-[#2b579a] text-white/90 text-xs flex justify-between px-4 py-1 select-none">
        <div className="flex gap-4">
          <span>第 1 頁，共 1 頁</span>
          <span>724 個字</span>
          <span>中文 (台灣)</span>
        </div>
        <div className="flex gap-4">
          <span>網頁版面配置</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}

function ToolbarButton({ icon, active = false }) {
  return (
    <button className={`p-1.5 rounded transition-colors ${active ? 'bg-gray-300 shadow-inner' : 'hover:bg-gray-200'}`}>
      <div className={active ? 'text-blue-700' : 'text-gray-700'}>
        {icon}
      </div>
    </button>
  );
}
