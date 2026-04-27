// 学習塾 デモ用サンプルデータ

export const jukuStudents = [
  { id: 'js1', name: '田中 翔太', grade: '中学3年', phone: '090-1234-5678', guardian: '田中 美咲', enrolled_at: '2024-04-01', subjects: ['英語', '数学', '国語'], billing_plan: '3教科プラン', fee: 28000, status: 'active', notes: '高校受験志望校：大阪府立北野高校' },
  { id: 'js2', name: '山本 さくら', grade: '中学2年', phone: '090-2345-6789', guardian: '山本 健太', enrolled_at: '2024-09-01', subjects: ['英語', '数学'], billing_plan: '2教科プラン', fee: 22000, status: 'active', notes: '' },
  { id: 'js3', name: '佐藤 けい', grade: '小学6年', phone: '080-3456-7890', guardian: '佐藤 由美', enrolled_at: '2025-04-01', subjects: ['算数', '国語'], billing_plan: '2教科プラン（小学生）', fee: 16000, status: 'active', notes: '中学受験対策中' },
  { id: 'js4', name: '鈴木 りく', grade: '中学1年', phone: '070-4567-8901', guardian: '鈴木 拓也', enrolled_at: '2026-04-01', subjects: ['英語', '数学', '理科'], billing_plan: '3教科プラン', fee: 28000, status: 'active', notes: '4月新入塾' },
  { id: 'js5', name: '中村 はな', grade: '高校1年', phone: '090-5678-9012', guardian: '中村 春香', enrolled_at: '2025-04-01', subjects: ['英語', '数学'], billing_plan: '高校2教科プラン', fee: 32000, status: 'active', notes: '大学受験希望（文系）' },
  { id: 'js6', name: '小林 たろう', grade: '中学3年', phone: '080-6789-0123', guardian: '小林 誠', enrolled_at: '2024-04-01', subjects: ['英語', '数学', '理科', '社会'], billing_plan: '4教科プラン', fee: 34000, status: 'active', notes: '第一志望：高槻高校' },
  { id: 'js7', name: '加藤 みく', grade: '小学5年', phone: '090-7890-1234', guardian: '加藤 里奈', enrolled_at: '2025-10-01', subjects: ['算数'], billing_plan: '1教科プラン（小学生）', fee: 10000, status: 'active', notes: '' },
]

export const jukuClasses = [
  { id: 'jc1', name: '中3英語A', subject: '英語', grade: '中学3年', day: '月・木', time: '19:00〜20:30', teacher: '山田先生', capacity: 8, enrolled: 5, room: '第1教室' },
  { id: 'jc2', name: '中3数学A', subject: '数学', grade: '中学3年', day: '火・金', time: '19:00〜20:30', teacher: '木村先生', capacity: 8, enrolled: 6, room: '第2教室' },
  { id: 'jc3', name: '中1・2英語', subject: '英語', grade: '中学1〜2年', day: '月・水', time: '17:30〜19:00', teacher: '山田先生', capacity: 10, enrolled: 4, room: '第1教室' },
  { id: 'jc4', name: '小学算数（高学年）', subject: '算数', grade: '小学5〜6年', day: '土', time: '10:00〜12:00', teacher: '木村先生', capacity: 8, enrolled: 5, room: '第2教室' },
  { id: 'jc5', name: '高校英語', subject: '英語', grade: '高校生', day: '火・土', time: '20:30〜22:00', teacher: '山田先生', capacity: 6, enrolled: 3, room: '第1教室' },
  { id: 'jc6', name: '中3国語A', subject: '国語', grade: '中学3年', day: '水', time: '19:00〜20:30', teacher: '田村先生', capacity: 8, enrolled: 4, room: '第3教室' },
]

export const jukuAttendance = [
  { id: 'ja1', date: '2026-04-24', class_name: '中3英語A', records: [
    { student: '田中 翔太', status: 'present' },
    { student: '小林 たろう', status: 'present' },
    { student: '渡辺 れん', status: 'absent', reason: '体調不良' },
    { student: '高橋 ゆい', status: 'present' },
    { student: '伊藤 こう', status: 'late', reason: '部活延長' },
  ]},
  { id: 'ja2', date: '2026-04-22', class_name: '中3数学A', records: [
    { student: '田中 翔太', status: 'present' },
    { student: '小林 たろう', status: 'present' },
    { student: '渡辺 れん', status: 'present' },
    { student: '高橋 ゆい', status: 'absent', reason: '学校行事' },
    { student: '伊藤 こう', status: 'present' },
    { student: '中山 あき', status: 'present' },
  ]},
  { id: 'ja3', date: '2026-04-26', class_name: '小学算数（高学年）', records: [
    { student: '佐藤 けい', status: 'present' },
    { student: '加藤 みく', status: 'present' },
    { student: '松本 たく', status: 'present' },
    { student: '井上 ひな', status: 'absent', reason: '' },
    { student: '木村 そら', status: 'present' },
  ]},
]

export const jukuBillings = [
  { id: 'jb1', month: '2026年4月', student_name: '田中 翔太', plan: '3教科プラン', fee: 28000, paid: true, paid_date: '2026-04-05' },
  { id: 'jb2', month: '2026年4月', student_name: '山本 さくら', plan: '2教科プラン', fee: 22000, paid: true, paid_date: '2026-04-08' },
  { id: 'jb3', month: '2026年4月', student_name: '佐藤 けい', plan: '2教科プラン（小学生）', fee: 16000, paid: true, paid_date: '2026-04-03' },
  { id: 'jb4', month: '2026年4月', student_name: '鈴木 りく', plan: '3教科プラン', fee: 28000, paid: false, paid_date: null },
  { id: 'jb5', month: '2026年4月', student_name: '中村 はな', plan: '高校2教科プラン', fee: 32000, paid: true, paid_date: '2026-04-10' },
  { id: 'jb6', month: '2026年4月', student_name: '小林 たろう', plan: '4教科プラン', fee: 34000, paid: false, paid_date: null },
  { id: 'jb7', month: '2026年4月', student_name: '加藤 みく', plan: '1教科プラン（小学生）', fee: 10000, paid: true, paid_date: '2026-04-06' },
]

export const jukuStaff = [
  { id: 'jst1', name: '山田 裕介', role: '塾長・英語講師', subjects: ['英語'], days: '月火水木金土', color: '#3b82f6' },
  { id: 'jst2', name: '木村 健一', role: '数学・理科講師', subjects: ['数学', '理科'], days: '月火水木金', color: '#10b981' },
  { id: 'jst3', name: '田村 さくら', role: '国語・社会講師', subjects: ['国語', '社会'], days: '水木金土', color: '#8b5cf6' },
  { id: 'jst4', name: '中島 陽子', role: '受付・事務', subjects: [], days: '月火水木金', color: '#6b7280' },
]
