import type { Lesson, Phase } from '../types';

const allLessons: Lesson[] = [
  // Phase 1: Python Fundamentals
  { id: 1, title: 'ليه لازم تتعلم بايثون ؟', phaseId: 1, videoNumber: '#1', folderName: '01-ليه-لازم-تتعلم-بايثون', codeFilePath: '01-ليه-لازم-تتعلم-بايثون/code.py', readmeFilePath: '01-ليه-لازم-تتعلم-بايثون/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 2, title: '#2 كورس بايثون بالعربي | ماذا تحتاج لكي تتعلم بايثون', phaseId: 1, videoNumber: '#2', folderName: '02-ماذا-تحتاج-لكي-تتعلم-بايثون', codeFilePath: '02-ماذا-تحتاج-لكي-تتعلم-بايثون/code.py', readmeFilePath: '02-ماذا-تحتاج-لكي-تتعلم-بايثون/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 3, title: '#3 كورس بايثون بالعربي | كتابة اول كود بايثون', phaseId: 1, videoNumber: '#3', folderName: '03-كتابة-اول-كود-بايثون', codeFilePath: '03-كتابة-اول-كود-بايثون/code.py', readmeFilePath: '03-كتابة-اول-كود-بايثون/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 4, title: '#4 كورس بايثون بالعربي | Python Print() Function', phaseId: 1, videoNumber: '#4', folderName: '04-python-print-function', codeFilePath: '04-python-print-function/code.py', readmeFilePath: '04-python-print-function/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 5, title: '#5 كورس بايثون بالعربي | قاعدة كتابة اكواد البايثون', phaseId: 1, videoNumber: '#5', folderName: '05-قاعدة-كتابة-اكواد-البايثون', codeFilePath: '05-قاعدة-كتابة-اكواد-البايثون/code.py', readmeFilePath: '05-قاعدة-كتابة-اكواد-البايثون/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 6, title: '#6 كورس بايثون بالعربي | المتغيرات', phaseId: 1, videoNumber: '#6', folderName: '06-المتغيرات', codeFilePath: '06-المتغيرات/code.py', readmeFilePath: '06-المتغيرات/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 7, title: '#7 كورس بايثون بالعربي | التعليقات في لغة البايثون', phaseId: 1, videoNumber: '#7', folderName: '07-التعليقات-في-لغة-البايثون', codeFilePath: '07-التعليقات-في-لغة-البايثون/code.py', readmeFilePath: '07-التعليقات-في-لغة-البايثون/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 8, title: '#8 كورس بايثون بالعربي | كيفية ربط النصوص concatenation في البايثون', phaseId: 1, videoNumber: '#8', folderName: '08-كيفية-ربط-النصوص-concatenation', codeFilePath: '08-كيفية-ربط-النصوص-concatenation/code.py', readmeFilePath: '08-كيفية-ربط-النصوص-concatenation/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 9, title: '#9 كورس بايثون بالعربي | انواع البيانات', phaseId: 1, videoNumber: '#9', folderName: '09-انواع-البيانات', codeFilePath: '09-انواع-البيانات/code.py', readmeFilePath: '09-انواع-البيانات/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 10, title: '#10 كورس بايثون بالعربي | string النصوص', phaseId: 1, videoNumber: '#10', folderName: '10-string-النصوص', codeFilePath: '10-string-النصوص/code.py', readmeFilePath: '10-string-النصوص/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 11, title: '#11 كورس بايثون بالعربي | string methods النصوص', phaseId: 1, videoNumber: '#11', folderName: '11-string-methods-النصوص', codeFilePath: '11-string-methods-النصوص/code.py', readmeFilePath: '11-string-methods-النصوص/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 12, title: '#12 كورس بايثون بالعربي | string methods النصوص الجزء الثاني', phaseId: 1, videoNumber: '#12', folderName: '12-string-methods-النصوص-الجزء-الثاني', codeFilePath: '12-string-methods-النصوص-الجزء-الثاني/code.py', readmeFilePath: '12-string-methods-النصوص-الجزء-الثاني/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 13, title: '#13 كورس بايثون بالعربي | string methods النصوص الجزء الثالث', phaseId: 1, videoNumber: '#13', folderName: '13-string-methods-النصوص-الجزء-الثالث', codeFilePath: '13-string-methods-النصوص-الجزء-الثالث/code.py', readmeFilePath: '13-string-methods-النصوص-الجزء-الثالث/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 14, title: '#14 كورس بايثون بالعربي | string methods النصوص الجزء الرابع', phaseId: 1, videoNumber: '#14', folderName: '14-string-methods-النصوص-الجزء-الرابع', codeFilePath: '14-string-methods-النصوص-الجزء-الرابع/code.py', readmeFilePath: '14-string-methods-النصوص-الجزء-الرابع/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 15, title: '#15 كورس بايثون بالعربي | numbers الارقام', phaseId: 1, videoNumber: '#15', folderName: '15-numbers-الارقام', codeFilePath: '15-numbers-الارقام/code.py', readmeFilePath: '15-numbers-الارقام/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 16, title: '#16 كورس بايثون بالعربي | numbers methods الارقام', phaseId: 1, videoNumber: '#16', folderName: '16-numbers-methods-الارقام', codeFilePath: '16-numbers-methods-الارقام/code.py', readmeFilePath: '16-numbers-methods-الارقام/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 17, title: '#17 كورس بايثون بالعربي | numbers الارقام', phaseId: 1, videoNumber: '#17', folderName: '17-numbers-الارقام-2', codeFilePath: '17-numbers-الارقام-2/code.py', readmeFilePath: '17-numbers-الارقام-2/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 18, title: '#18 كورس بايثون بالعربي | input ادخال البيانات من قبل المستخدم', phaseId: 1, videoNumber: '#18', folderName: '18-input-ادخال-البيانات', codeFilePath: '18-input-ادخال-البيانات/code.py', readmeFilePath: '18-input-ادخال-البيانات/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 19, title: '#19 كورس بايثون بالعربي | صنع أله حاسبة بسيطة بالبايثون الجزء الاول', phaseId: 1, videoNumber: '#19', folderName: '19-الة-حاسبة-بسيطة-الجزء-الاول', codeFilePath: '19-الة-حاسبة-بسيطة-الجزء-الاول/code.py', readmeFilePath: '19-الة-حاسبة-بسيطة-الجزء-الاول/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 20, title: '#20 كورس بايثون بالعربي | input مع النصوص', phaseId: 1, videoNumber: '#20', folderName: '20-input-مع-النصوص', codeFilePath: '20-input-مع-النصوص/code.py', readmeFilePath: '20-input-مع-النصوص/README.md', status: 'not-started', notes: '', practiceTasks: [] },

  // Phase 2: Data Structures
  { id: 21, title: '#21 كورس بايثون بالعربي | list القائمة', phaseId: 2, videoNumber: '#21', folderName: '21-list-القائمة', codeFilePath: '21-list-القائمة/code.py', readmeFilePath: '21-list-القائمة/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 22, title: '#22 كورس بايثون بالعربي | list methods القائمة', phaseId: 2, videoNumber: '#22', folderName: '22-list-methods-القائمة', codeFilePath: '22-list-methods-القائمة/code.py', readmeFilePath: '22-list-methods-القائمة/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 23, title: '#23 كورس بايثون بالعربي | tuples المجموعات', phaseId: 2, videoNumber: '#23', folderName: '23-tuples-المجموعات', codeFilePath: '23-tuples-المجموعات/code.py', readmeFilePath: '23-tuples-المجموعات/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 24, title: '#24 كورس بايثون بالعربي | dictionary المعاجم', phaseId: 2, videoNumber: '#24', folderName: '24-dictionary-المعاجم', codeFilePath: '24-dictionary-المعاجم/code.py', readmeFilePath: '24-dictionary-المعاجم/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 25, title: '#25 كورس بايثون بالعربي | set في البايثون', phaseId: 2, videoNumber: '#25', folderName: '25-set-في-البايثون', codeFilePath: '25-set-في-البايثون/code.py', readmeFilePath: '25-set-في-البايثون/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 26, title: '#26 كورس بايثون بالعربي | set methods في البايثون', phaseId: 2, videoNumber: '#26', folderName: '26-set-methods-في-البايثون', codeFilePath: '26-set-methods-في-البايثون/code.py', readmeFilePath: '26-set-methods-في-البايثون/README.md', status: 'not-started', notes: '', practiceTasks: [] },

  // Phase 3: Functions & Logic
  { id: 27, title: '#27 كورس بايثون بالعربي | function في البايثون', phaseId: 3, videoNumber: '#27', folderName: '27-function-في-البايثون', codeFilePath: '27-function-في-البايثون/code.py', readmeFilePath: '27-function-في-البايثون/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 28, title: '#28 كورس بايثون بالعربي | function return في البايثون', phaseId: 3, videoNumber: '#28', folderName: '28-function-return', codeFilePath: '28-function-return/code.py', readmeFilePath: '28-function-return/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 29, title: '#29 كورس بايثون بالعربي | انشاء لعبة احسب عمرك بالايام', phaseId: 3, videoNumber: '#29', folderName: '29-لعبة-احسب-عمرك-بالايام', codeFilePath: '29-لعبة-احسب-عمرك-بالايام/code.py', readmeFilePath: '29-لعبة-احسب-عمرك-بالايام/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 30, title: '#30 كورس بايثون بالعربي | الاداة الشرطية if في لغة البايثون', phaseId: 3, videoNumber: '#30', folderName: '30-if-الاداة-الشرطية', codeFilePath: '30-if-الاداة-الشرطية/code.py', readmeFilePath: '30-if-الاداة-الشرطية/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 31, title: '#31 كورس بايثون بالعربي | انشاء تطبيق احسب نتيجتك باستخدام البايثون', phaseId: 3, videoNumber: '#31', folderName: '31-تطبيق-احسب-نتيجتك', codeFilePath: '31-تطبيق-احسب-نتيجتك/code.py', readmeFilePath: '31-تطبيق-احسب-نتيجتك/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 32, title: '#32 كورس بايثون بالعربي | المقارنات if في لغة البايثون', phaseId: 3, videoNumber: '#32', folderName: '32-المقارنات-if', codeFilePath: '32-المقارنات-if/code.py', readmeFilePath: '32-المقارنات-if/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 33, title: '#33 كورس بايثون بالعربي | بناء ألة حاسبة الجزء الثاني بالبايثون', phaseId: 3, videoNumber: '#33', folderName: '33-الة-حاسبة-الجزء-الثاني', codeFilePath: '33-الة-حاسبة-الجزء-الثاني/code.py', readmeFilePath: '33-الة-حاسبة-الجزء-الثاني/README.md', status: 'not-started', notes: '', practiceTasks: [] },

  // Phase 4: Loops & Problem Solving
  { id: 34, title: '#34 كورس بايثون بالعربي | while loop في لغة البايثون', phaseId: 4, videoNumber: '#34', folderName: '34-while-loop', codeFilePath: '34-while-loop/code.py', readmeFilePath: '34-while-loop/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 35, title: '#35 كورس بايثون بالعربي | انشاء لعبة الاسئلة بالبايثون', phaseId: 4, videoNumber: '#35', folderName: '35-لعبة-الاسئلة', codeFilePath: '35-لعبة-الاسئلة/code.py', readmeFilePath: '35-لعبة-الاسئلة/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 36, title: '#36 كورس بايثون بالعربي | for loop في لغة البايثون', phaseId: 4, videoNumber: '#36', folderName: '36-for-loop', codeFilePath: '36-for-loop/code.py', readmeFilePath: '36-for-loop/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 37, title: '#37 كورس بايثون بالعربي | for loop range في لغة البايثون', phaseId: 4, videoNumber: '#37', folderName: '37-for-loop-range', codeFilePath: '37-for-loop-range/code.py', readmeFilePath: '37-for-loop-range/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 38, title: '#38 كورس بايثون بالعربي | loop for dictionary في لغة البايثون', phaseId: 4, videoNumber: '#38', folderName: '38-loop-for-dictionary', codeFilePath: '38-loop-for-dictionary/code.py', readmeFilePath: '38-loop-for-dictionary/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 39, title: '#39 كورس بايثون بالعربي | شرح try except في البايثون', phaseId: 4, videoNumber: '#39', folderName: '39-try-except', codeFilePath: '39-try-except/code.py', readmeFilePath: '39-try-except/README.md', status: 'not-started', notes: '', practiceTasks: [] },

  // Phase 5: Files & Formatting
  { id: 40, title: '#40 كورس بايثون بالعربي | شرح read files في البايثون', phaseId: 5, videoNumber: '#40', folderName: '40-read-files', codeFilePath: '40-read-files/code.py', readmeFilePath: '40-read-files/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 41, title: '#41 كورس بايثون بالعربي | شرح files في البايثون', phaseId: 5, videoNumber: '#41', folderName: '41-files', codeFilePath: '41-files/code.py', readmeFilePath: '41-files/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 42, title: '#42 كورس بايثون بالعربي | شرح formating 1 في البايثون', phaseId: 5, videoNumber: '#42', folderName: '42-formating-1', codeFilePath: '42-formating-1/code.py', readmeFilePath: '42-formating-1/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 43, title: '#43 كورس بايثون بالعربي | شرح formating 2 في البايثون', phaseId: 5, videoNumber: '#43', folderName: '43-formating-2', codeFilePath: '43-formating-2/code.py', readmeFilePath: '43-formating-2/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 44, title: '#44 كورس بايثون بالعربي | شرح formating 3 في البايثون', phaseId: 5, videoNumber: '#44', folderName: '44-formating-3', codeFilePath: '44-formating-3/code.py', readmeFilePath: '44-formating-3/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 45, title: '#45 كورس بايثون بالعربي | شرح formating 4 في البايثون', phaseId: 5, videoNumber: '#45', folderName: '45-formating-4', codeFilePath: '45-formating-4/code.py', readmeFilePath: '45-formating-4/README.md', status: 'not-started', notes: '', practiceTasks: [] },

  // Phase 6: Modules
  { id: 46, title: '#46 كورس بايثون بالعربي | شرح MODULES 1 في البايثون', phaseId: 6, videoNumber: '#46', folderName: '46-modules-1', codeFilePath: '46-modules-1/code.py', readmeFilePath: '46-modules-1/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 47, title: '#47 كورس بايثون بالعربي | شرح MODULES 2 في البايثون', phaseId: 6, videoNumber: '#47', folderName: '47-modules-2', codeFilePath: '47-modules-2/code.py', readmeFilePath: '47-modules-2/README.md', status: 'not-started', notes: '', practiceTasks: [] },

  // Phase 7: Object Oriented Programming (OOP)
  { id: 48, title: 'شرح OOP ما هي البرمجة الكائنية و ما هو ال object', phaseId: 7, videoNumber: '#48', folderName: '48-oop-object', codeFilePath: '48-oop-object/code.py', readmeFilePath: '48-oop-object/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 49, title: 'شرح OOP ما هي البرمجة الكائنية و ما هو ال class', phaseId: 7, videoNumber: '#49', folderName: '49-oop-class', codeFilePath: '49-oop-class/code.py', readmeFilePath: '49-oop-class/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 50, title: 'كورس بايثون بالعربي | شرح oop 3 في البايثون', phaseId: 7, videoNumber: '#50', folderName: '50-oop-3', codeFilePath: '50-oop-3/code.py', readmeFilePath: '50-oop-3/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 51, title: 'كورس بايثون بالعربي | شرح oop 4 في البايثون', phaseId: 7, videoNumber: '#51', folderName: '51-oop-4', codeFilePath: '51-oop-4/code.py', readmeFilePath: '51-oop-4/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 52, title: 'كورس بايثون بالعربي | شرح oop 5 في البايثون', phaseId: 7, videoNumber: '#52', folderName: '52-oop-5', codeFilePath: '52-oop-5/code.py', readmeFilePath: '52-oop-5/README.md', status: 'not-started', notes: '', practiceTasks: [] },
  { id: 53, title: 'كورس بايثون بالعربي | شرح oop 6 في البايثون', phaseId: 7, videoNumber: '#53', folderName: '53-oop-6', codeFilePath: '53-oop-6/code.py', readmeFilePath: '53-oop-6/README.md', status: 'not-started', notes: '', practiceTasks: [] },
];

export const phases: Phase[] = [
  {
    id: 1,
    name: 'Python Fundamentals',
    description: 'أساسيات لغة البايثون - من الصفر حتى الاحتراف',
    color: '#3b82f6',
    lessons: allLessons.filter(l => l.phaseId === 1),
  },
  {
    id: 2,
    name: 'Data Structures',
    description: 'هياكل البيانات في البايثون',
    color: '#10b981',
    lessons: allLessons.filter(l => l.phaseId === 2),
  },
  {
    id: 3,
    name: 'Functions & Logic',
    description: 'الدوال والمنطق الشرطي',
    color: '#8b5cf6',
    lessons: allLessons.filter(l => l.phaseId === 3),
  },
  {
    id: 4,
    name: 'Loops & Problem Solving',
    description: 'الحلقات التكرارية وحل المشكلات',
    color: '#f59e0b',
    lessons: allLessons.filter(l => l.phaseId === 4),
  },
  {
    id: 5,
    name: 'Files & Formatting',
    description: 'التعامل مع الملفات وتنسيق النصوص',
    color: '#ef4444',
    lessons: allLessons.filter(l => l.phaseId === 5),
  },
  {
    id: 6,
    name: 'Modules',
    description: 'المكتبات والوحدات في البايثون',
    color: '#ec4899',
    lessons: allLessons.filter(l => l.phaseId === 6),
  },
  {
    id: 7,
    name: 'Object Oriented Programming (OOP)',
    description: 'البرمجة كائنية التوجه',
    color: '#06b6d4',
    lessons: allLessons.filter(l => l.phaseId === 7),
  },
];

export const lessons = allLessons;
