// 歯科クリニック デモ用サンプルデータ

export const dentalPatients = [
  { id: 'p1', name: '田中 美咲', phone: '090-1234-5678', birth_date: '1985-06-15', gender: '女性', last_visit: '2026-04-10', visit_count: 18, notes: '歯肉炎ケア中' },
  { id: 'p2', name: '山本 健太', phone: '090-2345-6789', birth_date: '1978-11-22', gender: '男性', last_visit: '2026-03-28', visit_count: 6, notes: '' },
  { id: 'p3', name: '佐藤 由美', phone: '080-3456-7890', birth_date: '1992-03-08', gender: '女性', last_visit: '2026-04-15', visit_count: 24, notes: '矯正治療中（ワイヤー）' },
  { id: 'p4', name: '鈴木 拓也', phone: '070-4567-8901', birth_date: '1990-09-30', gender: '男性', last_visit: '2026-02-20', visit_count: 3, notes: '親知らず抜歯後経過観察' },
  { id: 'p5', name: '中村 春香', phone: '090-5678-9012', birth_date: '1988-01-14', gender: '女性', last_visit: '2026-04-05', visit_count: 12, notes: '' },
  { id: 'p6', name: '小林 誠', phone: '080-6789-0123', birth_date: '1975-07-20', gender: '男性', last_visit: '2026-03-15', visit_count: 9, notes: '根管治療完了' },
  { id: 'p7', name: '加藤 里奈', phone: '090-7890-1234', birth_date: '1995-12-01', gender: '女性', last_visit: '2026-04-20', visit_count: 5, notes: '' },
  { id: 'p8', name: '伊藤 浩二', phone: '080-8901-2345', birth_date: '1968-04-17', gender: '男性', last_visit: '2026-01-30', visit_count: 31, notes: 'インプラント検討中' },
]

export const dentalReservations = [
  { id: 'r1', date: '2026-04-27', time: '09:00', patient_name: '田中 美咲', treatment: '定期検診・クリーニング', duration: 60, status: 'confirmed', staff_name: '山田Dr' },
  { id: 'r2', date: '2026-04-27', time: '10:30', patient_name: '佐藤 由美', treatment: '矯正ワイヤー調整', duration: 30, status: 'confirmed', staff_name: '佐藤Dr' },
  { id: 'r3', date: '2026-04-27', time: '13:00', patient_name: '中村 春香', treatment: '虫歯治療（C2）', duration: 60, status: 'confirmed', staff_name: '山田Dr' },
  { id: 'r4', date: '2026-04-27', time: '15:00', patient_name: '小林 誠', treatment: 'クリーニング', duration: 45, status: 'pending', staff_name: '佐藤Dr' },
  { id: 'r5', date: '2026-04-28', time: '09:30', patient_name: '山本 健太', treatment: '定期検診', duration: 45, status: 'confirmed', staff_name: '山田Dr' },
  { id: 'r6', date: '2026-04-28', time: '11:00', patient_name: '加藤 里奈', treatment: '虫歯治療（C1）', duration: 30, status: 'confirmed', staff_name: '佐藤Dr' },
  { id: 'r7', date: '2026-04-28', time: '14:00', patient_name: '伊藤 浩二', treatment: 'インプラント相談', duration: 60, status: 'confirmed', staff_name: '山田Dr' },
  { id: 'r8', date: '2026-04-29', time: '10:00', patient_name: '鈴木 拓也', treatment: '抜歯後経過確認', duration: 20, status: 'confirmed', staff_name: '山田Dr' },
  { id: 'r9', date: '2026-04-30', time: '09:00', patient_name: '田中 美咲', treatment: 'ホワイトニング', duration: 90, status: 'pending', staff_name: '佐藤Dr' },
  { id: 'r10', date: '2026-04-30', time: '14:00', patient_name: '佐藤 由美', treatment: '矯正ワイヤー調整', duration: 30, status: 'confirmed', staff_name: '佐藤Dr' },
]

export const dentalRecords = [
  { id: 'dr1', patient_name: '田中 美咲', visit_date: '2026-04-10', treatment: '定期検診・クリーニング', findings: 'PCR 25%。歯肉炎は改善傾向。左下6番に初期う蝕の疑い。', next_treatment: '経過観察。次回X線撮影予定。', staff_name: '山田Dr', fee: 3200 },
  { id: 'dr2', patient_name: '佐藤 由美', visit_date: '2026-04-15', treatment: '矯正ワイヤー調整', findings: '上顎前歯の排列良好。下顎犬歯部に若干の隙間。', next_treatment: '3週間後に再調整。ゴム使用継続。', staff_name: '佐藤Dr', fee: 5500 },
  { id: 'dr3', patient_name: '中村 春香', visit_date: '2026-04-05', treatment: 'クリーニング', findings: '歯石少量。歯肉状態良好。着色（コーヒー）あり。', next_treatment: '3ヶ月後に定期検診予定。', staff_name: '佐藤Dr', fee: 2800 },
  { id: 'dr4', patient_name: '小林 誠', visit_date: '2026-03-15', treatment: '根管充填', findings: '根管充填完了。根尖部炎症消退確認。', next_treatment: 'クラウン装着（次回型取り）。', staff_name: '山田Dr', fee: 12000 },
  { id: 'dr5', patient_name: '加藤 里奈', visit_date: '2026-04-20', treatment: '初診', findings: '全顎X線撮影。上顎左1番にC1。歯肉炎なし。', next_treatment: 'C1処置（次回）。ブラッシング指導済み。', staff_name: '山田Dr', fee: 4500 },
]

export const dentalStaff = [
  { id: 's1', name: '山田 太郎', role: '院長・歯科医師', specialty: '口腔外科・インプラント', days: '月火水木金', color: '#3b82f6' },
  { id: 's2', name: '佐藤 花子', role: '歯科医師', specialty: '矯正歯科・審美歯科', days: '月水木土', color: '#8b5cf6' },
  { id: 's3', name: '木村 あい', role: '歯科衛生士', specialty: 'クリーニング・予防', days: '月火水木金', color: '#10b981' },
  { id: 's4', name: '中島 さくら', role: '歯科衛生士', specialty: 'クリーニング・ホワイトニング', days: '火水木金土', color: '#f59e0b' },
  { id: 's5', name: '田村 陽子', role: '歯科助手・受付', specialty: '受付・会計', days: '月火水木金', color: '#6b7280' },
]

export const dentalStatusMap: Record<string, { label: string; color: string }> = {
  confirmed: { label: '確定', color: 'bg-green-100 text-green-700' },
  pending:   { label: '仮予約', color: 'bg-yellow-100 text-yellow-700' },
}
