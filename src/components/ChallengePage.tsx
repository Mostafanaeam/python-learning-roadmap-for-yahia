import { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy, Code2 } from 'lucide-react';
import { challenges } from '../data/challenges';

const missionIcons = ['🌟', '🔢', '🔤', '🎯', '🛒', '✖️', '🔧', '📖', '📝', '🏆'];

export function ChallengePage() {
  const [expandedMission, setExpandedMission] = useState<number | null>(null);

  const scrollToMissions = () => {
    document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* ===== SECTION 1: Hero ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-500 dark:from-slate-950 dark:via-amber-950 dark:to-orange-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-6xl animate-bounce">🐍</div>
          <div className="absolute top-40 right-20 text-4xl animate-pulse">💻</div>
          <div className="absolute bottom-32 left-1/4 text-5xl animate-bounce" style={{ animationDelay: '0.3s' }}>⚡</div>
          <div className="absolute top-1/3 left-1/2 text-3xl animate-pulse" style={{ animationDelay: '0.6s' }}>🔥</div>
          <div className="absolute bottom-40 right-1/4 text-5xl animate-bounce" style={{ animationDelay: '0.9s' }}>🚀</div>
          <div className="absolute top-1/4 right-1/3 text-4xl animate-pulse" style={{ animationDelay: '1.2s' }}>🎯</div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-bold mb-6 shadow-lg border border-white/20">
            <Trophy className="w-4 h-4" />
            أول تحدٍ برمجي حقيقي ليحيى
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white mb-6 leading-tight">
            🔥 تحدي الـ 40 يوم
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed">
            يا يحيى...
          </p>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            خلال الأربعين يوم القادمين هدفك ليس مشاهدة الدروس فقط.
            <br />
            هدفك أن تبني مشاريع حقيقية، وترفعها على GitHub، وتتعلم كيف يفكر المبرمجون.
          </p>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-10 text-right">
            <h3 className="text-white font-bold text-lg mb-4">في نهاية التحدي سيكون لديك:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                '✅ 10 مشاريع',
                '✅ 10 Repositories',
                '✅ 10 README Files',
                '✅ عشرات الساعات من التطبيق العملي',
                '✅ ثقة أكبر في كتابة الكود بنفسك',
              ].map((item) => (
                <div key={item} className="text-white/90 text-sm sm:text-base flex items-center gap-2">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToMissions}
              className="px-8 py-4 bg-white text-amber-600 font-bold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              🚀 ابدأ أول مهمة
            </button>
            <button
              onClick={scrollToMissions}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all"
            >
              📂 استعرض جميع المهام
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Challenge Overview ===== */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-10">
            نظرة عامة على التحدي
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 mb-8">
            <div className="text-center p-4 bg-gradient-to-b from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl">
              <div className="text-3xl font-extrabold text-amber-500">40</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">يوم</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">مدة التحدي</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
              <div className="text-3xl font-extrabold text-blue-500">10</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">مشاريع</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">عدد المشاريع</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
              <div className="text-3xl font-extrabold text-green-500">10</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">مستودعات</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">عدد المستودعات</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
              <div className="text-3xl font-extrabold text-purple-500">مبتدئ</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">المستوى</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">صعوبة التحدي</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-2xl sm:col-span-2 lg:col-span-3">
              <div className="text-3xl font-extrabold text-cyan-500">Python</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">اللغة المستخدمة</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">اللغة البرمجية الوحيدة اللي هتستخدمها</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-2xl p-6 text-center border border-amber-200 dark:border-amber-800">
            <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
              🎯 الهدف النهائي:
            </p>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              بناء أساس عملي قوي من خلال تنفيذ مشاريع حقيقية
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: The 10 Missions ===== */}
      <section id="missions" className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            المهام العشرة
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            كل مهمة عبارة عن مشروع مستقل. تصفحهم كلهم، وابدأ من أي مهمة تحبها
          </p>
        </div>

        <div className="relative">
          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-orange-300 to-yellow-300 dark:from-amber-700 dark:via-orange-700 dark:to-yellow-700 hidden md:block" />

          <div className="space-y-6">
            {challenges.map((challenge, index) => {
              const expanded = expandedMission === challenge.id;

              return (
                <div key={challenge.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute right-6 top-8 w-4 h-4 rounded-full bg-amber-400 dark:bg-amber-500 border-4 border-white dark:border-slate-900 hidden md:block z-10" />

                  <div
                    className={`bg-white dark:bg-slate-800 rounded-2xl border-2 transition-all mr-0 md:mr-16 ${
                      expanded
                        ? 'border-amber-400 dark:border-amber-600 shadow-xl'
                        : 'border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-lg'
                    }`}
                  >
                    {/* Mission Header */}
                    <div
                      className="p-5 sm:p-6 cursor-pointer"
                      onClick={() => setExpandedMission(expanded ? null : challenge.id)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40">
                          {missionIcons[index]}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                              المهمة {challenge.id}
                            </span>
                            <span className="text-xs text-slate-400">
                              {challenge.dayRange}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                            {challenge.taskName}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {challenge.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-500">
                              {challenge.repoName}
                            </span>
                            {challenge.requiredConcepts.slice(0, 3).map((c) => (
                              <span
                                key={c}
                                className="text-[10px] bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedMission(expanded ? null : challenge.id);
                          }}
                          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 transition-colors flex-shrink-0"
                        >
                          {expanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* ===== SECTION 4: Mission Details ===== */}
                    {expanded && (
                      <div className="border-t border-slate-100 dark:border-slate-700 px-5 sm:px-6 pb-6 pt-5 space-y-6">
                        {/* Repository Name */}
                        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
                          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 flex items-center gap-2">
                            <Code2 className="w-4 h-4" />
                            اسم الـ Repository
                          </h4>
                          <code className="text-sm font-mono bg-slate-900 text-green-400 px-3 py-1.5 rounded-lg inline-block">
                            {challenge.repoName}
                          </code>
                        </div>

                        {/* Project Description */}
                        <div>
                          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                            📋 وصف المشروع
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {challenge.description}
                          </p>
                        </div>

                        {/* Final Expected Output */}
                        <div>
                          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                            🎯 الناتج المتوقع
                          </h4>
                          <pre className="bg-slate-900 text-green-400 text-sm font-mono rounded-xl p-4 overflow-x-auto leading-relaxed">
                            {challenge.expectedOutput}
                          </pre>
                        </div>

                        {/* Required Concepts */}
                        <div>
                          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                            📚 المفاهيم المطلوبة
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {challenge.requiredConcepts.map((c) => (
                              <span
                                key={c}
                                className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg font-medium"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Implementation Instructions */}
                        <div>
                          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                            📝 خطوات التنفيذ
                          </h4>
                          <ol className="space-y-2">
                            {challenge.implementationInstructions.map((step, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                              >
                                <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Challenge Requirements */}
                        <div>
                          <h4 className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">
                            💪 التحديات الإضافية
                          </h4>
                          <ul className="space-y-2">
                            {challenge.challengeRequirements.map((req, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-purple-600 dark:text-purple-300"
                              >
                                <span className="text-sm">⭐</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Common Mistakes */}
                        <div>
                          <h4 className="text-sm font-bold text-red-600 dark:text-red-400 mb-2">
                            ⚠️ أخطاء شائعة
                          </h4>
                          <ul className="space-y-2">
                            {challenge.commonMistakes.map((mistake, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-red-500 dark:text-red-300"
                              >
                                <span>•</span>
                                {mistake}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Bonus Ideas */}
                        <div>
                          <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                            💡 أفكار إضافية للتطوير
                          </h4>
                          <ul className="space-y-2">
                            {challenge.bonusIdeas.map((idea, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-300"
                              >
                                <span>✨</span>
                                {idea}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Development Rules */}
                        <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-xl p-4">
                          <h4 className="text-sm font-bold text-amber-800 dark:text-amber-200 mb-3">
                            📏 قوانين أثناء التطوير
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div className="text-green-700 dark:text-green-300 flex items-center gap-2">
                              <span>✅</span> اكتب الكود بنفسك
                            </div>
                            <div className="text-green-700 dark:text-green-300 flex items-center gap-2">
                              <span>✅</span> جرّب أكثر من مرة
                            </div>
                            <div className="text-green-700 dark:text-green-300 flex items-center gap-2">
                              <span>✅</span> اقرأ الخطأ إذا ظهر
                            </div>
                            <div className="text-green-700 dark:text-green-300 flex items-center gap-2">
                              <span>✅</span> عدّل البرنامج بعد تشغيله
                            </div>
                            <div className="text-red-600 dark:text-red-400 flex items-center gap-2">
                              <span>❌</span> لا تنسخ الكود من الإنترنت
                            </div>
                            <div className="text-red-600 dark:text-red-400 flex items-center gap-2">
                              <span>❌</span> لا تطلب من AI كتابة المشروع كاملاً
                            </div>
                          </div>
                        </div>

                        {/* GitHub Upload Structure */}
                        <div>
                          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 flex items-center gap-2">
                            <Code2 className="w-4 h-4" />
                            هيكل الملفات على GitHub
                          </h4>
                          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 overflow-x-auto">
                            <pre className="text-sm text-slate-200 font-mono leading-relaxed">
                              {`${challenge.repoName}/
│
├── main.py
│
└── README.md`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: GitHub Rules ===== */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold text-white">
              قواعد رفع المشاريع على GitHub
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { text: 'اسم الـ Repository كما هو مطلوب بالضبط', ok: true },
              { text: 'ارفع ملف الكود main.py', ok: true },
              { text: 'ارفع ملف README.md', ok: true },
              { text: 'اكتب commit messages مفهومة', ok: true },
              { text: 'اكتب وصف للمشروع على GitHub', ok: true },
              { text: 'تأكد أن الكود شغال قبل الرفع', ok: true },
            ].map((rule) => (
              <div key={rule.text} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                <span className="text-green-400 text-xl">{rule.ok ? '✅' : '❌'}</span>
                <span className="text-white/90 text-sm">{rule.text}</span>
              </div>
            ))}
          </div>

          {/* Example */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h4 className="text-white font-bold mb-3 text-sm">مثال للـ Repository:</h4>
            <pre className="text-sm text-green-400 font-mono leading-relaxed">{`python-greeting-app/
│
├── main.py
│
└── README.md`}</pre>
            <div className="mt-4 text-white/70 text-xs space-y-1">
              <p>📝 Commit messages مقترحة:</p>
              <code className="block bg-white/5 px-3 py-1 rounded text-green-400 mt-1">Initial commit: greeting app</code>
              <code className="block bg-white/5 px-3 py-1 rounded text-green-400 mt-1">Added name input feature</code>
              <code className="block bg-white/5 px-3 py-1 rounded text-green-400 mt-1">Fixed error handling</code>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: README Guide ===== */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            📄 قالب README لكل مشروع
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            هذا هو القالب اللي هتستخدمه في كل مشروع. املأه بنفسك بعد كل مهمة.
          </p>
          <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 overflow-x-auto shadow-inner" dir="ltr">
            <pre className="text-sm text-slate-200 font-mono leading-relaxed whitespace-pre-wrap">{`# اسم المشروع

## فكرة المشروع
- اكتب بجملة واحدة فكرة المشروع

## ما تعلمته من هذا المشروع
-
-
-

## المميزات
- قائمة بالمميزات اللي أضفتها

## التحديات التي واجهتني
-
-
-

## التحسينات المستقبلية
-
-
-`}</pre>
          </div>
          <div className="mt-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
            <p className="text-sm text-emerald-700 dark:text-emerald-300">
              💡 <strong>نصيحة:</strong> كل ما كتبت README أفضل، كل ما كان مشروعك يبان أحترم. تخيل إنك بتقدم نفسك لشركة برمجية.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: Rules of the Challenge ===== */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-10">
            📏 قوانين التحدي
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700 rounded-xl p-5">
              <h3 className="text-green-700 dark:text-green-300 font-bold mb-4 text-center">✅ مسموح</h3>
              <ul className="space-y-3">
                {[
                  '✅ اكتب الكود بنفسك',
                  '✅ جرّب حلولك الخاصة',
                  '✅ اقرأ رسائل الخطأ',
                  '✅ ابحث عن المعلومات',
                  '✅ حسّن مشاريعك',
                  '✅ ارفع كل مشروع على GitHub',
                ].map((rule) => (
                  <li key={rule} className="text-green-800 dark:text-green-200 text-sm flex items-center gap-2">
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-xl p-5">
              <h3 className="text-red-700 dark:text-red-300 font-bold mb-4 text-center">❌ ممنوع</h3>
              <ul className="space-y-3">
                {[
                  '❌ لا تنسخ المشاريع',
                  '❌ لا تطلب الحل الكامل',
                  '❌ لا تتجاوز مرحلة التطبيق',
                  '❌ لا ترفع مشروعاً لم تجربه بنفسك',
                  '❌ لا تستسلم إذا واجهتك مشكلة',
                  '❌ لا تقارن نفسك بغيرك',
                ].map((rule) => (
                  <li key={rule} className="text-red-800 dark:text-red-200 text-sm flex items-center gap-2">
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: Final Goal ===== */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 dark:from-purple-950/30 dark:via-pink-950/20 dark:to-amber-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 sm:p-12 text-center">
          <div className="text-6xl mb-6">🏆</div>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            بعد إنهاء التحدي
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            إذا أنهيت المشاريع العشرة كاملة فسيكون لديك:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">📦</div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">10</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">GitHub Repositories</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">📄</div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">10</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">README Files</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">🐍</div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">خبرة</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Python عملية</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">💻</div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">أول</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Portfolio برمجي</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow col-span-2 md:col-span-1">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">جاهز</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">لمشاريع أكبر</div>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="px-8 py-4 bg-gradient-to-l from-amber-500 to-orange-500 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            🔥 ابدأ التحدي الآن
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            🔥 تحدي الـ 40 يوم - من م. مصطفى إلى يحيى
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            كل مشروع تبنيه يقرّبك من هدفك
          </p>
        </div>
      </footer>
    </div>
  );
}
