// ヨガ・フィットネス デモ用サンプルデータ

export const yogaMembers = [
  { id: 'ym1', name: '田中 美咲', phone: '090-1234-5678', age: 38, plan: '月4回プラン', fee: 8800, joined_at: '2024-06-01', visit_count: 32, status: 'active', notes: '妊娠経験あり。バックベンド注意' },
  { id: 'ym2', name: '山本 恵', phone: '090-2345-6789', age: 29, plan: '月8回プラン', fee: 14800, joined_at: '2025-01-15', visit_count: 18, status: 'active', notes: '' },
  { id: 'ym3', name: '佐藤 由美', phone: '080-3456-7890', age: 45, plan: '通い放題', fee: 19800, joined_at: '2023-09-01', visit_count: 86, status: 'active', notes: '常連。インストラクター志望' },
  { id: 'ym4', name: '鈴木 麻衣', phone: '070-4567-8901', age: 26, plan: '月4回プラン', fee: 8800, joined_at: '2026-03-01', visit_count: 5, status: 'active', notes: '3月新規入会' },
  { id: 'ym5', name: '中村 春香', phone: '090-5678-9012', age: 41, plan: '月8回プラン', fee: 14800, joined_at: '2024-11-01', visit_count: 24, status: 'active', notes: '産後ヨガ継続希望' },
  { id: 'ym6', name: '小林 なつ', phone: '080-6789-0123', age: 33, plan: '通い放題', fee: 19800, joined_at: '2024-04-01', visit_count: 58, status: 'active', notes: '' },
  { id: 'ym7', name: '加藤 里奈', phone: '090-7890-1234', age: 52, plan: '月4回プラン', fee: 8800, joined_at: '2025-07-01', visit_count: 14, status: 'active', notes: '膝に既往。正座不可' },
  { id: 'ym8', name: '渡辺 みき', phone: '080-9012-3456', age: 31, plan: '月8回プラン', fee: 14800, joined_at: '2025-04-01', visit_count: 22, status: 'trial', notes: '体験中→本入会予定' },
]

export const yogaClasses = [
  { id: 'yc1', date: '2026-04-27', time: '07:00', name: '朝ヨガ（ベーシック）', instructor: '木村 あい', capacity: 10, booked: 7, duration: 60, level: '初級〜中級', room: 'メインスタジオ' },
  { id: 'yc2', date: '2026-04-27', time: '10:00', name: '産後ヨガ', instructor: '田村 みく', capacity: 8, booked: 6, duration: 60, level: '初級', room: 'サブスタジオ' },
  { id: 'yc3', date: '2026-04-27', time: '19:00', name: 'ハタヨガ（中級）', instructor: '木村 あい', capacity: 12, booked: 11, duration: 75, level: '中級', room: 'メインスタジオ' },
  { id: 'yc4', date: '2026-04-27', time: '20:30', name: 'ピラティス', instructor: '中島 さくら', capacity: 8, booked: 5, duration: 60, level: '初級〜中級', room: 'メインスタジオ' },
  { id: 'yc5', date: '2026-04-28', time: '07:00', name: '朝ヨガ（ベーシック）', instructor: '田村 みく', capacity: 10, booked: 8, duration: 60, level: '初級〜中級', room: 'メインスタジオ' },
  { id: 'yc6', date: '2026-04-28', time: '10:00', name: 'ストレッチヨガ', instructor: '木村 あい', capacity: 12, booked: 9, duration: 60, level: '初級', room: 'メインスタジオ' },
  { id: 'yc7', date: '2026-04-28', time: '19:00', name: 'アシュタンガ（上級）', instructor: '木村 あい', capacity: 8, booked: 6, duration: 90, level: '上級', room: 'メインスタジオ' },
  { id: 'yc8', date: '2026-04-29', time: '10:00', name: 'リラックスヨガ', instructor: '中島 さくら', capacity: 10, booked: 4, duration: 60, level: '初級', room: 'メインスタジオ' },
  { id: 'yc9', date: '2026-04-29', time: '19:00', name: 'ハタヨガ（中級）', instructor: '田村 みく', capacity: 12, booked: 10, duration: 75, level: '中級', room: 'メインスタジオ' },
]

export const yogaRevenueRecords = [
  { id: 'yr1', month: '2026年3月', members: 42, new_members: 4, churned: 1, monthly_revenue: 572000, class_revenue: 45000, total_revenue: 617000 },
  { id: 'yr2', month: '2026年2月', members: 39, new_members: 3, churned: 2, monthly_revenue: 530000, class_revenue: 38000, total_revenue: 568000 },
  { id: 'yr3', month: '2026年1月', members: 38, new_members: 5, churned: 1, monthly_revenue: 518000, class_revenue: 42000, total_revenue: 560000 },
  { id: 'yr4', month: '2025年12月', members: 34, new_members: 2, churned: 3, monthly_revenue: 462000, class_revenue: 35000, total_revenue: 497000 },
  { id: 'yr5', month: '2025年11月', members: 35, new_members: 4, churned: 1, monthly_revenue: 476000, class_revenue: 40000, total_revenue: 516000 },
]

export const yogaInstructors = [
  { id: 'yi1', name: '木村 あい', role: 'オーナー・主任インストラクター', specialty: 'ハタヨガ・アシュタンガ・アライメント', certification: 'RYT500', days: '月火水木金土', color: '#8b5cf6' },
  { id: 'yi2', name: '中島 さくら', role: 'インストラクター', specialty: 'ピラティス・ストレッチ', certification: 'Stott Pilates', days: '月水木金', color: '#ec4899' },
  { id: 'yi3', name: '田村 みく', role: 'インストラクター', specialty: '産後ヨガ・リストラティブ', certification: 'RYT200', days: '火水木土', color: '#f59e0b' },
]

export const yogaMemberPlans = [
  { name: '月4回プラン', fee: 8800, classes_per_month: 4 },
  { name: '月8回プラン', fee: 14800, classes_per_month: 8 },
  { name: '通い放題', fee: 19800, classes_per_month: 999 },
  { name: '体験（単発）', fee: 2200, classes_per_month: 1 },
]
