import { phases } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

const journeyLabels: Record<number, { text: string; icon: string }> = {
  2: { text: 'أساسيات البايثون انتهت', icon: '📚' },
  3: { text: 'الآن تبدأ المفاهيم المهمة', icon: '⚡' },
  4: { text: 'ممتاز، أنت وصلت لمنتصف الطريق', icon: '🔥' },
  5: { text: 'استمر يا يحيى', icon: '🚶‍♂️' },
  6: { text: 'اقتربت من النهاية', icon: '🚀' },
  7: { text: 'أصبحت جاهزًا للانتقال للمرحلة التالية', icon: '🏆' },
};

export function Roadmap() {
  const { phaseStats } = useProgress();

  const totalLessons = phases.reduce((sum, p) => sum + p.lessons.length, 0);
  const totalCompleted = phases.reduce(
    (sum, p) => sum + (phaseStats[p.id]?.completed || 0),
    0
  );
  const allDone = totalCompleted === totalLessons;

  return (
    <section id="roadmap" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          🚀 رحلة يحيى لتعلم Python
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          كل مرحلة محطة في طريقك — تجاوزها بنجاح وانتقل للأقوى
        </p>
      </div>

      <div className="relative">
        <div className="absolute right-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-amber-400 rounded-full hidden md:block opacity-40" />

        <div className="relative space-y-6">
          {phases.map((phase, index) => {
            const stats = phaseStats[phase.id] || { total: 0, completed: 0 };
            const isComplete = stats.total > 0 && stats.completed === stats.total;
            const numLessons = phase.lessons.length;
            const label = journeyLabels[phase.id];

            return (
              <div key={phase.id}>
                {label && (
                  <div className="relative flex items-center gap-3 mr-14 mb-6 py-3 px-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="text-2xl">{label.icon}</span>
                    <span className="text-base font-medium text-slate-600 dark:text-slate-300">
                      {label.text}
                    </span>
                  </div>
                )}

                <div className="relative group">
                  <div
                    className={`absolute right-2.5 top-6 w-1.5 h-1.5 rounded-full ring-4 ring-white dark:ring-slate-900 hidden md:block ${
                      isComplete
                        ? 'bg-green-500'
                        : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />

                  <div
                    className={`bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-md border-2 transition-all ${
                      isComplete
                        ? 'border-green-300 dark:border-green-700'
                        : 'border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800'
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0 shadow-sm ${
                          isComplete ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                      >
                        <span>{phase.id}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-blue-500 tracking-wider uppercase">
                            📍 المرحلة {phase.id}
                          </span>
                          {isComplete && (
                            <span className="text-sm bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">
                              مكتملة ✅
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-1">
                          {phase.name}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
                          <span className="font-semibold">{numLessons}</span> دروس
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-700/40 rounded-xl p-4 sm:p-5 border border-slate-100 dark:border-slate-600/50">
                          <p className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-2">
                            <span>📦</span>
                            <span>المطلوب تسليمه</span>
                          </p>
                          <div className="space-y-2.5">
                            {[
                              `${numLessons} Folder`,
                              `${numLessons} code.py`,
                              `${numLessons} README.md`,
                              'ملخص لكل درس',
                              'تطبيق جميع الأكواد',
                            ].map((item) => (
                              <div key={item} className="flex items-center gap-2.5">
                                <span className="flex-shrink-0 text-sm">
                                  {isComplete ? '✅' : '□'}
                                </span>
                                <span
                                  className={`text-sm ${
                                    isComplete
                                      ? 'text-green-700 dark:text-green-300 line-through opacity-70'
                                      : 'text-slate-600 dark:text-slate-300'
                                  }`}
                                >
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {index < phases.length - 1 && (
                  <div className="flex justify-center py-4">
                    <span className="text-2xl text-slate-300 dark:text-slate-600 animate-bounce">
                      ↓
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Destination */}
        <div className="mt-14">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-3xl shadow-md">
              🏁
            </div>
          </div>
          <div
            className={`bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 rounded-2xl p-8 text-center ${
              allDone
                ? 'border-green-400 dark:border-green-600'
                : 'border-amber-200 dark:border-amber-800'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              خط النهاية
            </h3>
            <p className="text-base text-slate-500 dark:text-slate-400 mb-6">
              يا يحيى، إذا وصلت إلى هنا فهذا يعني أنك أنهيت:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
              {[
                `${totalLessons} درس`,
                `${totalLessons} Folder`,
                `${totalLessons} code.py`,
                `${totalLessons} README.md`,
                'مئات الأسطر البرمجية',
                'أساس قوي جدًا في Python',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 dark:bg-slate-800/60"
                >
                  <span className="flex-shrink-0">
                    {allDone ? '✅' : '⬜'}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      allDone
                        ? 'text-green-700 dark:text-green-300'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-amber-200 dark:border-amber-800">
              <p className="text-lg font-bold text-amber-700 dark:text-amber-300">
                وهنا تبدأ رحلتك الحقيقية في بناء المشاريع.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
