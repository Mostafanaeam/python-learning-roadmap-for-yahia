import { ChevronDown } from 'lucide-react';
import { phases } from '../data/lessons';

const totalLessons = phases.reduce((sum, p) => sum + p.lessons.length, 0);

const floatingElements = [
  { text: 'def', x: '8%', y: '18%', duration: 6 },
  { text: 'class', x: '88%', y: '28%', duration: 8 },
  { text: 'import', x: '14%', y: '68%', duration: 7 },
  { text: '->', x: '80%', y: '55%', duration: 5 },
  { text: '()', x: '92%', y: '15%', duration: 9 },
  { text: '{}', x: '5%', y: '48%', duration: 7.5 },
  { text: '#', x: '74%', y: '80%', duration: 6.5 },
  { text: 'lambda', x: '48%', y: '7%', duration: 10 },
  { text: 'return', x: '22%', y: '82%', duration: 8.5 },
  { text: 'if', x: '86%', y: '72%', duration: 7.2 },
  { text: 'for', x: '38%', y: '92%', duration: 6.8 },
  { text: 'True', x: '62%', y: '88%', duration: 9.5 },
  { text: ':', x: '30%', y: '35%', duration: 11 },
  { text: '=', x: '70%', y: '40%', duration: 4.5 },
];

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${3 + Math.random() * 5}s`,
  size: `${2 + Math.random() * 4}px`,
}));

export function Hero() {
  const scrollToRoadmap = () => {
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40" />

      {/* Curved road path SVG */}
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-3/4 opacity-[0.12]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="roadPath" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M600 800 C400 700 350 550 450 400 C520 300 560 200 600 100 C640 50 700 0 750 -50"
          fill="none"
          stroke="url(#roadPath)"
          strokeWidth="3"
          strokeDasharray="6 8"
        />
        <path
          d="M600 800 C400 700 350 550 450 400 C520 300 560 200 600 100 C640 50 700 0 750 -50"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="2 12"
          className="opacity-60"
        />
        <circle cx="450" cy="400" r="4" fill="#8b5cf6" opacity="0.8" />
        <circle cx="520" cy="300" r="3" fill="#3b82f6" opacity="0.6" />
        <circle cx="600" cy="100" r="2" fill="#06b6d4" opacity="0.4" />
      </svg>

      {/* Glowing particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20 animate-ping"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Floating code elements */}
      {floatingElements.map((el, i) => (
        <div
          key={i}
          className="absolute text-blue-300/10 dark:text-blue-200/5 font-mono font-bold animate-float pointer-events-none select-none"
          style={{
            left: el.x,
            top: el.y,
            animationDuration: `${el.duration}s`,
            animationDelay: `${(i * 0.3) % 4}s`,
            fontSize:
              el.text.length > 4
                ? 'clamp(0.75rem, 1.2vw, 1.125rem)'
                : 'clamp(1rem, 2vw, 2rem)',
          }}
        >
          {el.text}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white/90 mb-8">
            <span>🐍</span>
            <span>Python Learning Journey</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight mb-6">
            <span className="block">يا يحيى...</span>
            <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              دي بداية رحلتك الحقيقية في البرمجة
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-lg sm:text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed mb-10 space-y-1">
            <p>مش المطلوب إنك تتفرج على 53 فيديو.</p>
            <p>
              المطلوب إنك <strong className="text-white">تكتب</strong>،
              و<strong className="text-white">تجرب</strong>،
              و<strong className="text-white">تغلط</strong>،
              و<strong className="text-white">تتعلم</strong>.
            </p>
            <p className="text-blue-200/90 pt-2">
              وفي نهاية الطريق هيكون عندك أساس قوي جدًا في Python.
            </p>
          </div>

          {/* Mission card */}
          <div className="max-w-lg mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 text-right shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🎯</span>
                <h3 className="text-lg font-bold text-white">مهمتك</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-sm shrink-0">✦</span>
                  <span className="text-blue-100 text-sm sm:text-base">إكمال جميع الدروس</span>
                  <span className="text-white font-bold text-sm mr-auto">
                    {totalLessons} درس
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-sm shrink-0">✦</span>
                  <span className="text-blue-100 text-sm sm:text-base">إنشاء Folder</span>
                  <span className="text-white font-bold text-sm mr-auto">
                    {totalLessons} مجلد
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-sm shrink-0">✦</span>
                  <span className="text-blue-100 text-sm sm:text-base">كتابة code.py</span>
                  <span className="text-white font-bold text-sm mr-auto">
                    {totalLessons} ملف
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-sm shrink-0">✦</span>
                  <span className="text-blue-100 text-sm sm:text-base">كتابة README.md</span>
                  <span className="text-white font-bold text-sm mr-auto">
                    {totalLessons} ملف
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-sm shrink-0">✦</span>
                  <span className="text-blue-100 text-sm sm:text-base">تطبيق جميع الأكواد بنفسك</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-300 text-sm shrink-0">✦</span>
                  <span className="text-blue-100 text-sm sm:text-base">توثيق كل ما تعلمته</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress preview */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
            {[
              { icon: '📚', label: 'درس', value: totalLessons },
              { icon: '📁', label: 'Folder', value: totalLessons },
              { icon: '📄', label: 'README', value: totalLessons },
              { icon: '💻', label: 'Code', value: totalLessons },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 text-center min-w-[90px] sm:min-w-[100px] backdrop-blur-sm"
              >
                <div className="text-xl sm:text-2xl mb-1">{item.icon}</div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {item.value}
                </div>
                <div className="text-[10px] sm:text-xs text-blue-200/60 mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToRoadmap}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white text-lg font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>🚀 ابدأ الرحلة</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
