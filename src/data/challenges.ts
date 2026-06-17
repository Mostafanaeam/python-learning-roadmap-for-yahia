export interface Challenge {
  id: number;
  repoName: string;
  taskName: string;
  dayRange: string;
  description: string;
  expectedOutput: string;
  requiredConcepts: string[];
  implementationInstructions: string[];
  challengeRequirements: string[];
  commonMistakes: string[];
  bonusIdeas: string[];
  ghFiles: string[];
  readmeSections: string[];
}

export const challenges: Challenge[] = [
  {
    id: 1,
    repoName: 'python-greeting-app',
    taskName: 'برنامج الترحيب بالمستخدم',
    dayRange: 'اليوم 1 - 4',
    description:
      'في هذا المشروع هتطلب من المستخدم اسمه وبعدين ترحب بيه. أول برنامج ليك يتفاعل مع المستخدم.',
    expectedOutput: `ما اسمك ؟
يحيى

أهلاً يا يحيى
مرحباً بك في أول برنامج بايثون خاص بيك`,
    requiredConcepts: ['Variables', 'Input', 'Print', 'String Concatenation'],
    implementationInstructions: [
      'اطلب من المستخدم إدخال اسمه باستخدام input',
      'خزن الاسم في متغيّر',
      'اطبع رسالة ترحيب فيها اسم المستخدم',
      'أضف سطر ترحيب إضافي من اختيارك',
    ],
    challengeRequirements: [
      'اجعل البرنامج يرحب بالمستخدم مرتين',
      'أضف رسالة مختلفة لو كان الاسم "يحيى"',
      'استخدم متغيّرين مختلفين',
    ],
    commonMistakes: [
      'نسيان الأقواس () بعد print و input',
      'نسيان علامات التنصيص حول النصوص',
      'كتابة اسم متغير مختلف عن اللي استخدمته',
    ],
    bonusIdeas: [
      'أضف أكثر من لغة ترحيب (عربي، إنجليزي)',
      'اجعل البرنامج يسأل عن العمر ويطبع رسالة خاصة',
      'أضف ألوان للنصوص باستخدام escape sequences',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 2,
    repoName: 'python-simple-calculator',
    taskName: 'آلة حاسبة بسيطة',
    dayRange: 'اليوم 5 - 8',
    description:
      'حان وقت الرياضيات! هتبني آلة حاسبة بتجمع وتطرح عددين. هتستخدم الأرقام الحقيقية.',
    expectedOutput: `ادخل الرقم الأول: 10
ادخل الرقم الثاني: 5

10 + 5 = 15
10 - 5 = 5`,
    requiredConcepts: ['Variables', 'Input', 'Type Conversion (int)', 'Print', 'Arithmetic Operators'],
    implementationInstructions: [
      'اطلب رقمين من المستخدم',
      'حوّل الإدخال من نص إلى رقم باستخدام int()',
      'اجمع الرقمين وخزن الناتج',
      'اطبع ناتج الجمع والطرح',
    ],
    challengeRequirements: [
      'أضف عملية الضرب والقسمة',
      'اجعل البرنامج يطبع العملية الحسابية كاملة زي المثال',
      'جرّب إدخال أرقام عشرية واستخدم float',
    ],
    commonMistakes: [
      'نسيان تحويل input إلى int فينتج نص وليس رقم',
      'استخدام علامة × بدلاً من * في الضرب',
      'عدم تخزين النتيجة في متغير',
    ],
    bonusIdeas: [
      'أضف عملية حساب المساحة (الطول × العرض)',
      'اجعل البرنامج يعمل في حلقة لا نهائية حتى يكتب المستخدم "خروج"',
      'أضف دالة الجذر التربيعي باستخدام **',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 3,
    repoName: 'python-text-formatter',
    taskName: 'محوّل النصوص',
    dayRange: 'اليوم 9 - 12',
    description:
      'هتتعلم تتحكم في النصوص وتغير شكلها. تقدر تخلي النص كبير، صغير، أو منسق.',
    expectedOutput: `اكتب جملة: python is fun

النص الأصلي: python is fun
بحروف كبيرة: PYTHON IS FUN
بحروف صغيرة: python is fun
عدد الحروف: 14`,
    requiredConcepts: [
      'Strings',
      'String Methods (upper, lower)',
      'len()',
      'Variables',
      'Print',
    ],
    implementationInstructions: [
      'اطلب من المستخدم كتابة جملة',
      'خزن الجملة في متغير',
      'استخدم upper() لطباعتها بحروف كبيرة',
      'استخدم lower() لطباعتها بحروف صغيرة',
      'استخدم len() لمعرفة طول النص',
    ],
    challengeRequirements: [
      'أضف سطر يعرض أول 3 حروف من النص',
      'أضف سطر يعرض آخر 3 حروف',
      'استخدم strip() لإزالة المسافات قبل وبعد',
    ],
    commonMistakes: [
      'نسيان وضع الأقواس بعد اسم الدالة زي upper()',
      'الخلط بين upper و lower',
      'اعتبار المسافات مش حروف مع len',
    ],
    bonusIdeas: [
      'أضف عكس النص باستخدام [::-1]',
      'اجعل البرنامج يحسب عدد الكلمات مش الحروف',
      'أضف replace() لاستبدال كلمة بكلمة أخرى',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 4,
    repoName: 'python-number-guessing',
    taskName: 'لعبة تخمين الرقم',
    dayRange: 'اليوم 13 - 16',
    description:
      'لعبة شيقة! الكمبيوتر بيختار رقم وأنت تحاول تخمينه. هتستخدم if و else.',
    expectedOutput: `أهلاً بك في لعبة التخمين!
خمن رقم من 1 إلى 10: 5
للأسف، الرقم أكبر من كده
خمن تاني: 8
برافو! الرقم صح 🎉`,
    requiredConcepts: [
      'Variables',
      'Input',
      'Type Conversion',
      'If / Else',
      'Comparison Operators',
      'Print',
    ],
    implementationInstructions: [
      'خزن رقم سري في متغير (مثلاً 7)',
      'اطلب من المستخدم تخمين الرقم',
      'استخدم if لفحص إذا كان التخمين صح',
      'استخدم else لطباعة رسالة خطأ',
      'أضف رسالة تخبر المستخدم إذا الرقم أكبر أو أصغر',
    ],
    challengeRequirements: [
      'خلّي اللاعب يجرب مرتين قبل ما يقول له الرقم الصحيح',
      'أضف رسالة مختلفة لو التخمين قريب جداً (فارق 1)',
      'استخدم elif لإضافة أكثر من شرط',
    ],
    commonMistakes: [
      'نسيان النقطتين : بعد if و else',
      'مقارنة نص برقم بدون تحويل',
      'كتابة شرط منطقي غلط',
    ],
    bonusIdeas: [
      'أضف عدد المحاولات وقلّله بعد كل تخمين غلط',
      'استخدم random.randint() لتوليد رقم عشوائي',
      'اجعل المستخدم يختار مدى الأرقام (من — إلى)',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 5,
    repoName: 'python-shopping-list',
    taskName: 'قائمة التسوق',
    dayRange: 'اليوم 17 - 20',
    description:
      'هتبني قائمة تسوق تقدر تضيف فيها items وتشوفهم. أول استخدام للـ Lists.',
    expectedOutput: `قائمة التسوق بتاعتك:
1. تفاح
2. لبن
3. خبز

أول حاجة في القائمة: تفاح
آخر حاجة: خبز
عدد الحاجات: 3`,
    requiredConcepts: ['Lists', 'List Indexing', 'len()', 'Variables', 'Print'],
    implementationInstructions: [
      'أنشئ list فيها 3 حاجات تشتريها',
      'اطبع كل عنصر في سطر منفصل مع رقمه',
      'اطبع أول عنصر باستخدام [0]',
      'اطبع آخر عنصر باستخدام [-1]',
      'اطبع عدد العناصر باستخدام len',
    ],
    challengeRequirements: [
      'أضف عنصر جديد للقائمة باستخدام append',
      'غيّر عنصر في القائمة باستخدام الفهرس',
      'اطبع القائمة مرتبة أبجدياً باستخدام sorted',
    ],
    commonMistakes: [
      'نسيان أن فهرس أول عنصر هو 0 مش 1',
      'استخدام () بدلاً من [] مع القوائم',
      'نسيان علامات التنصيص حول النصوص داخل القائمة',
    ],
    bonusIdeas: [
      'أضف خاصية حذف عنصر من القائمة',
      'اجعل المستخدم يضيف items بنفسه',
      'اطبع القائمة بشكل أجمل باستخدام enumerate',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 6,
    repoName: 'python-multiplication-table',
    taskName: 'جدول الضرب',
    dayRange: 'اليوم 21 - 24',
    description:
      'حان وقت loops! هتكتب برنامج يطبع جدول ضرب أي رقم باستخدام for loop.',
    expectedOutput: `ادخل رقم عشان تشوف جدول ضربه: 5

5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
5 × 6 = 30
5 × 7 = 35
5 × 8 = 40
5 × 9 = 45
5 × 10 = 50`,
    requiredConcepts: ['For Loop', 'range()', 'Variables', 'Input', 'Print', 'Arithmetic Operators'],
    implementationInstructions: [
      'اطلب من المستخدم رقم',
      'استخدم for loop مع range(1, 11)',
      'في كل مرة اضرب الرقم في العداد',
      'اطبع العملية الحسابية كاملة',
    ],
    challengeRequirements: [
      'أضف خيار يعرض جدول الضرب من 1 إلى 10 كلهم',
      'استخدم nested loop (loop جوه loop)',
      'خلّي الناتج مصفوفة زي جدول الضرب الحقيقي',
    ],
    commonMistakes: [
      'نسيان range يبدأ من 1 وينتهي عند 11',
      'عدم تحويل input إلى int',
      'استخدام while بدون تحديث العداد (infinite loop)',
    ],
    bonusIdeas: [
      'أضف while loop لطباعة جداول ضرب أرقام متعددة',
      'استخدم f-string لتنسيق الناتج',
      'أضف خيار طباعة الناتج في ملف',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 7,
    repoName: 'python-calculator-functions',
    taskName: 'آلة حاسبة متطورة بالدوال',
    dayRange: 'اليوم 25 - 28',
    description:
      'هتتعلم ازاي تكتب Functions! هتبني آلة حاسبة كاملة كل عملية في function لوحدها.',
    expectedOutput: `=== الآلة الحاسبة ===
اختر العملية:
1 - جمع
2 - طرح
3 - ضرب
4 - قسمة
اختيارك: 1

ادخل الرقم الأول: 20
ادخل الرقم الثاني: 4

النتيجة: 20 + 4 = 24`,
    requiredConcepts: [
      'Functions',
      'Parameters',
      'Return',
      'If / Elif / Else',
      'Input',
      'Print',
    ],
    implementationInstructions: [
      'أنشئ function اسمها add تأخذ رقمين وتُرجع ناتج الجمع',
      'أنشئ function اسمها subtract للطرح',
      'أنشئ function اسمها multiply للضرب',
      'أنشئ function اسمها divide للقسمة',
      'اطلب من المستخدم اختيار العملية والرقمين',
      'استخدم if لاستدعاء الـ function المناسبة',
    ],
    challengeRequirements: [
      'أضف function للأس (power)',
      'أضف function لحساب باقي القسمة (modulus)',
      'خلّي المستخدم يقدر يستمر في العمليات لحد ما يكتب "خروج"',
    ],
    commonMistakes: [
      'نسيان كلمة return داخل الـ function',
      'استدعاء function بدون أقواس',
      'نسيان تمرير الـ parameters للـ function',
    ],
    bonusIdeas: [
      'أضف function لحساب باقي القسمة (modulus)',
      'استخدم *args لجعل الـ function تقبل أي عدد من الأرقام',
      'أضف قائمة بالعمليات السابقة (history)',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 8,
    repoName: 'python-friends-dictionary',
    taskName: 'قاموس الأصدقاء',
    dayRange: 'اليوم 29 - 32',
    description:
      'هتبني قاموس لأصدقائك! كل صديق له اسم ورقم وسنة ميلاد. أول استخدام لـ Dictionary.',
    expectedOutput: `قاموس أصدقائي:
Name: يحيى
Age: 12
City: القاهرة

Name: عمر
Age: 11
City: الإسكندرية

عدد الأصدقاء: 2`,
    requiredConcepts: [
      'Dictionaries',
      'Dictionary Methods (keys, values)',
      'Loops with Dictionaries',
      'Lists',
      'Print',
    ],
    implementationInstructions: [
      'أنشئ dictionary لكل صديق فيه name, age, city',
      'خزن كل الـ dictionaries في list',
      'استخدم for loop عشان تطبع بيانات كل صديق',
      'اطبع عدد الأصدقاء باستخدام len',
    ],
    challengeRequirements: [
      'أضف مفتاح (key) جديد لكل صديق زي phone أو email',
      'اطبع أسماء الأصدقاء فقط باستخدام keys()',
      'ابحث عن صديق باستخدام اسمه واطبع بياناته',
    ],
    commonMistakes: [
      'نسيان الفاصلة , بين عناصر الـ dictionary',
      'استخدام [] بدلاً من {} للـ dictionary',
      'محاولة الوصول لمفتاح مش موجود (KeyError)',
    ],
    bonusIdeas: [
      'أضف amd و avg لحساب متوسط الأعمار',
      'استخدم update() لدمج قاموسين',
      'احفظ البيانات في ملف JSON بدلاً من القاموس العادي',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 9,
    repoName: 'python-diary-app',
    taskName: 'مفكرة اليوميات',
    dayRange: 'اليوم 33 - 36',
    description:
      'هتتعلّم تتعامل مع الملفات! هتبني مفكرة تكتب فيها يومياتك وتقرأها.',
    expectedOutput: `=== مفكرتي اليومية ===
1 - كتابة يوم جديد
2 - قراءة اليوميات
3 - خروج
اختيارك: 1

اكتب يومياتك: النهارده اتعلمت حاجات كتير في Python

تم الحفظ ✅

1 - كتابة يوم جديد
2 - قراءة اليوميات
3 - خروج
اختيارك: 2

يومياتك:
النهارده اتعلمت حاجات كتير في Python`,
    requiredConcepts: [
      'File Handling (open, read, write)',
      'While Loop',
      'If / Else',
      'Functions',
      'Strings',
    ],
    implementationInstructions: [
      'أنشئ function للكتابة في ملف باستخدام open و "a"',
      'أنشئ function للقراءة من ملف باستخدام open و "r"',
      'استخدم while loop عشان تفضل في البرنامج',
      'استخدم if عشان تختار العملية',
    ],
    challengeRequirements: [
      'أضف تاريخ ووقت لكل يومية باستخدام datetime',
      'أضف feature لحذف اليوميات',
      'أضف خطأ مخصوص لو الملف مش موجود',
    ],
    commonMistakes: [
      'نسيان إغلاق الملف باستخدام close',
      'استخدام w بدلاً من a فيمسح المحتوى القديم',
      'عدم معالجة خطأ FileNotFoundError',
    ],
    bonusIdeas: [
      'أضف feature للبحث في اليوميات',
      'استخدم datetime لإضافة التاريخ تلقائياً',
      'أضف خيار تصدير اليوميات إلى ملف PDF (باستخدام مكتبة خارجية)',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
  {
    id: 10,
    repoName: 'python-quiz-game',
    taskName: 'لعبة الأسئلة الشاملة',
    dayRange: 'اليوم 37 - 40',
    description:
      'المشروع الختامي! لعبة أسئلة تجمع كل اللي اتعلمته. أسئلة وأجوبة وتقييم.',
    expectedOutput: `=== لعبة الأسئلة ===
سؤال 1: ما لون السماء؟
1 - أحمر
2 - أزرق
3 - أخضر
إجابتك: 2
✅ صح!

سؤال 2: كم شهر في السنة؟
1 - 10
2 - 11
3 - 12
إجابتك: 3
✅ صح!

سؤال 3: 2 + 2 = ؟
1 - 3
2 - 4
3 - 5
إجابتك: 1
❌ غلط. الإجابة الصحيحة: 4

نتيجتك: 2/3
تقديرك: ممتاز 🎉`,
    requiredConcepts: [
      'Lists',
      'Dictionaries',
      'Functions',
      'Loops',
      'If / Else',
      'Input / Print',
      'All Previous Concepts',
    ],
    implementationInstructions: [
      'أنشئ list من الـ dictionaries كل واحد فيه سؤال وإجابات',
      'أنشئ function تعرض السؤال والخيارات',
      'أنشئ function تفحص الإجابة وتحسب الدرجات',
      'استخدم for loop عشان تمر على كل الأسئلة',
      'في النهاية اطبع النتيجة والتقدير',
    ],
    challengeRequirements: [
      'أضف على الأقل 5 أسئلة متنوعة',
      'أضف تقديرات (ممتاز، جيد جداً، جيد، مقبول، ضعيف)',
      'خلّي الأسئلة تتخلط كل مرة باستخدام random.shuffle',
    ],
    commonMistakes: [
      'نسيان تحويل إجابة المستخدم من نص إلى رقم',
      'عدم مقارنة الإجابة بشكل صحيح',
      'نسيان زيادة العداد عند الإجابة الصحيحة',
    ],
    bonusIdeas: [
      'أضف مؤقت للأسئلة (كل سؤال له وقت محدد)',
      'اجعل الأسئلة تظهر بشكل عشوائي في كل مرة',
      'أضف أصوات للصح والغلط باستخدام winsound أو playsound',
    ],
    ghFiles: ['main.py', 'README.md'],
    readmeSections: ['اسم المشروع', 'فكرة المشروع', 'ما تعلمته', 'صورة أو مثال للناتج'],
  },
];
