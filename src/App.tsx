import { useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Roadmap } from './components/Roadmap';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('python-roadmap-darkmode', false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Hero />

      <Roadmap />

      {/* نظام تنظيم الملفات */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
          نظام تنظيم الملفات
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          لكل درس مجلد منفصل يحتوي على ملف الكود وملخص الشرح
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 shadow-xl overflow-x-auto" dir="ltr">
            <pre className="text-sm text-slate-200 font-mono leading-relaxed">{`python-abdelrahman-gamal/
│
├── README.md
│
├── lesson-01/
│   ├── code.py
│   └── README.md
│
├── lesson-02/
│   ├── code.py
│   └── README.md
│
├── lesson-03/
│   ├── code.py
│   └── README.md
│
...
│
├── lesson-53/
│   ├── code.py
│   └── README.md`}</pre>
          </div>
        </div>
      </section>

      {/* ماذا أكتب داخل code.py ؟ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-2 border-blue-100 dark:border-blue-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            ماذا أكتب داخل code.py ؟
          </h2>
          <div className="text-lg text-slate-700 dark:text-slate-200 space-y-4 leading-relaxed">
            <p>داخل ملف <code className="bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 rounded text-blue-700 dark:text-blue-300 font-mono">code.py</code> يجب أن تكتب بنفسك كل الأكواد الموجودة في الفيديو.</p>
            <p className="font-bold text-red-600 dark:text-red-400">ممنوع نسخ الكود بدون فهم.</p>
            <p>إذا شرح الفيديو:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>Variables</strong> → اكتب أمثلة إضافية من عندك.</li>
              <li><strong>Strings</strong> → جرّب دوال جديدة.</li>
              <li><strong>Loops</strong> → أنشئ تمارين إضافية.</li>
              <li><strong>Functions</strong> → أنشئ Functions خاصة بك.</li>
            </ul>
            <div className="bg-amber-50 dark:bg-amber-900/20 border-r-4 border-amber-500 pr-4 py-3 mt-4">
              <p className="text-amber-800 dark:text-amber-200 font-semibold">الهدف ليس مشاهدة الفيديو.</p>
              <p className="text-amber-700 dark:text-amber-300">الهدف هو كتابة الكود بيدك.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ماذا أكتب داخل README.md ؟ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-2 border-emerald-100 dark:border-emerald-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            ماذا أكتب داخل README.md ؟
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
            لكل درس اكتب ملف <code className="bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded text-emerald-700 dark:text-emerald-300 font-mono">README.md</code> باستخدام هذا القالب:
          </p>
          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 overflow-x-auto shadow-lg" dir="ltr">
            <pre className="text-sm text-slate-200 font-mono leading-relaxed whitespace-pre-wrap">{`# اسم الدرس

## ماذا تعلمت؟
-

## أهم الملاحظات
-

## شرح الكود بكلماتك
-

## أمثلة إضافية جربتها
-

## الأخطاء التي واجهتني
-

## كيف قمت بحلها؟
-

## أسئلة أريد البحث عنها لاحقًا
-`}</pre>
          </div>
        </div>
      </section>

      {/* قوانين الرحلة */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
          قوانين الرحلة
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700 rounded-xl p-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">✅</span>
                شاهد الفيديو بالكامل.
              </li>
              <li className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">✅</span>
                اكتب جميع الأكواد بنفسك.
              </li>
              <li className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">✅</span>
                اكتب ملخص الدرس داخل README.
              </li>
              <li className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">✅</span>
                لا تنتقل للفيديو التالي قبل إنهاء الحالي.
              </li>
              <li className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">✅</span>
                جرّب تعديل الكود بنفسك.
              </li>
              <li className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">✅</span>
                ابحث عن أي خطأ يظهر لك.
              </li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-xl p-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-red-800 dark:text-red-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">❌</span>
                ممنوع المشاهدة فقط.
              </li>
              <li className="flex items-center gap-2 text-red-800 dark:text-red-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">❌</span>
                ممنوع نسخ الكود بدون فهم.
              </li>
              <li className="flex items-center gap-2 text-red-800 dark:text-red-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">❌</span>
                ممنوع تخطي الدروس.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Progress Goal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-100 dark:border-purple-900 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            🎯 هدفك النهائي
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-200 mb-8">
            عندما تنتهي من جميع الدروس الـ 53 سيكون لديك:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-500">53</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Folder</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
              <div className="text-3xl font-bold text-emerald-500">53</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Code Files</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
              <div className="text-3xl font-bold text-purple-500">53</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">README Files</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
              <div className="text-3xl font-bold text-amber-500">∞</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">مئات الأسطر</div>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
            مرجع شخصي كامل لمراجعة Python مستقبلاً
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-700 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            🚀 رحلة تعلم Python - من م. مصطفى إلى يحيى
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            بالتعلم والممارسة تبني مستقبلك البرمجي
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
