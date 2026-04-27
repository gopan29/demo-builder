// 飲食店 デモ用サンプルデータ

export const restaurantTables = [
  { id: 't1', name: 'テーブルA', capacity: 4, location: 'フロア' },
  { id: 't2', name: 'テーブルB', capacity: 4, location: 'フロア' },
  { id: 't3', name: 'テーブルC', capacity: 2, location: 'フロア' },
  { id: 't4', name: 'テーブルD', capacity: 6, location: 'フロア' },
  { id: 't5', name: '個室1', capacity: 8, location: '個室' },
  { id: 't6', name: '個室2', capacity: 6, location: '個室' },
  { id: 't7', name: 'カウンター', capacity: 6, location: 'カウンター' },
]

export const restaurantReservations = [
  { id: 'r1', date: '2026-04-27', time: '11:30', customer_name: '田中 様', guests: 2, table_name: 'テーブルC', course: 'ランチコース A', status: 'confirmed', notes: '' },
  { id: 'r2', date: '2026-04-27', time: '12:00', customer_name: '山本 様', guests: 4, table_name: 'テーブルA', course: 'ランチコース B', status: 'confirmed', notes: 'アレルギー：甲殻類' },
  { id: 'r3', date: '2026-04-27', time: '18:30', customer_name: '佐藤 様', guests: 6, table_name: 'テーブルD', course: 'ディナーコース', status: 'confirmed', notes: '誕生日サプライズ希望' },
  { id: 'r4', date: '2026-04-27', time: '19:00', customer_name: '鈴木 様', guests: 8, table_name: '個室1', course: '接待コース', status: 'confirmed', notes: '領収書必要' },
  { id: 'r5', date: '2026-04-27', time: '20:00', customer_name: '中村 様', guests: 2, table_name: 'カウンター', course: 'お任せコース', status: 'pending', notes: '' },
  { id: 'r6', date: '2026-04-28', time: '12:00', customer_name: '小林 様', guests: 3, table_name: 'テーブルB', course: 'ランチコース A', status: 'confirmed', notes: '' },
  { id: 'r7', date: '2026-04-28', time: '19:00', customer_name: '加藤 様', guests: 6, table_name: '個室2', course: '接待コース', status: 'confirmed', notes: '' },
  { id: 'r8', date: '2026-04-28', time: '19:30', customer_name: '伊藤 様', guests: 4, table_name: 'テーブルA', course: 'ディナーコース', status: 'pending', notes: '記念日' },
  { id: 'r9', date: '2026-04-29', time: '11:30', customer_name: '渡辺 様', guests: 2, table_name: 'テーブルC', course: 'ランチコース A', status: 'confirmed', notes: '' },
  { id: 'r10', date: '2026-04-30', time: '18:30', customer_name: '高橋 様', guests: 10, table_name: '個室1', course: '接待コース', status: 'confirmed', notes: '乾杯シャンパン手配済み' },
]

export const restaurantSalesRecords = [
  { id: 's1', date: '2026-04-26', lunch_count: 28, dinner_count: 34, lunch_revenue: 112000, dinner_revenue: 408000, total_revenue: 520000, top_course: '接待コース', staff_count: 8 },
  { id: 's2', date: '2026-04-25', lunch_count: 22, dinner_count: 29, lunch_revenue: 88000, dinner_revenue: 348000, total_revenue: 436000, top_course: 'ディナーコース', staff_count: 7 },
  { id: 's3', date: '2026-04-24', lunch_count: 30, dinner_count: 38, lunch_revenue: 120000, dinner_revenue: 456000, total_revenue: 576000, top_course: '接待コース', staff_count: 9 },
  { id: 's4', date: '2026-04-23', lunch_count: 18, dinner_count: 22, lunch_revenue: 72000, dinner_revenue: 264000, total_revenue: 336000, top_course: 'ディナーコース', staff_count: 6 },
  { id: 's5', date: '2026-04-22', lunch_count: 25, dinner_count: 31, lunch_revenue: 100000, dinner_revenue: 372000, total_revenue: 472000, top_course: 'ディナーコース', staff_count: 8 },
  { id: 's6', date: '2026-04-21', lunch_count: 32, dinner_count: 40, lunch_revenue: 128000, dinner_revenue: 480000, total_revenue: 608000, top_course: '接待コース', staff_count: 10 },
]

export const restaurantStaff = [
  { id: 'st1', name: '山田 裕介', role: '店長・シェフ', section: 'キッチン', days: '月火水木金', color: '#ef4444' },
  { id: 'st2', name: '佐藤 健一', role: 'スーシェフ', section: 'キッチン', days: '火水木金土', color: '#f97316' },
  { id: 'st3', name: '木村 亮', role: 'キッチンスタッフ', section: 'キッチン', days: '月水木金土', color: '#eab308' },
  { id: 'st4', name: '中島 美希', role: 'ホールリーダー', section: 'ホール', days: '月火水木金', color: '#22c55e' },
  { id: 'st5', name: '田村 さくら', role: 'ホールスタッフ', section: 'ホール', days: '火水木金土', color: '#06b6d4' },
  { id: 'st6', name: '渡辺 陸', role: 'ホールスタッフ', section: 'ホール', days: '月火木土', color: '#8b5cf6' },
]

export const restaurantCourses = [
  { name: 'ランチコース A', price: 4000, duration: 90 },
  { name: 'ランチコース B', price: 6000, duration: 90 },
  { name: 'ディナーコース', price: 12000, duration: 120 },
  { name: '接待コース', price: 18000, duration: 150 },
  { name: 'お任せコース', price: 25000, duration: 180 },
]

export const restaurantStatusMap: Record<string, { label: string; color: string }> = {
  confirmed: { label: '確定', color: 'bg-green-100 text-green-700' },
  pending:   { label: '仮予約', color: 'bg-yellow-100 text-yellow-700' },
}
