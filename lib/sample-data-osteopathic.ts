// 整骨院・接骨院 デモ用サンプルデータ

export const osteoPatients = [
  { id: 'op1', name: '田中 美咲', phone: '090-1234-5678', age: 42, insurance: '健康保険', main_complaint: '腰痛', visit_count: 22, last_visit: '2026-04-20', notes: '第3・4腰椎ヘルニア既往' },
  { id: 'op2', name: '山本 健太', phone: '090-2345-6789', age: 35, insurance: '自費', main_complaint: '肩こり・頸部痛', visit_count: 8, last_visit: '2026-04-15', notes: 'デスクワーク、猫背姿勢' },
  { id: 'op3', name: '佐藤 由美', phone: '080-3456-7890', age: 58, insurance: '健康保険', main_complaint: '膝痛', visit_count: 36, last_visit: '2026-04-22', notes: '変形性膝関節症。左膝主訴' },
  { id: 'op4', name: '鈴木 拓也', phone: '070-4567-8901', age: 28, insurance: '自賠責', main_complaint: '頸椎捻挫（交通事故）', visit_count: 14, last_visit: '2026-04-24', notes: '2026/3/10 事故。保険会社：〇〇損保' },
  { id: 'op5', name: '中村 春香', phone: '090-5678-9012', age: 45, insurance: '健康保険', main_complaint: '五十肩', visit_count: 18, last_visit: '2026-04-18', notes: '右肩外転制限あり' },
  { id: 'op6', name: '小林 誠', phone: '080-6789-0123', age: 62, insurance: '健康保険', main_complaint: '腰痛・坐骨神経痛', visit_count: 41, last_visit: '2026-04-23', notes: '長期通院。電気治療+手技' },
  { id: 'op7', name: '加藤 里奈', phone: '090-7890-1234', age: 31, insurance: '自費', main_complaint: '産後骨盤矯正', visit_count: 6, last_visit: '2026-04-10', notes: '産後4ヶ月。骨盤矯正コース中' },
]

export const osteoReservations = [
  { id: 'or1', date: '2026-04-27', time: '09:00', patient_name: '田中 美咲', treatment: '腰部電気治療＋手技', duration: 30, insurance: '健康保険', status: 'confirmed', staff_name: '山田先生' },
  { id: 'or2', date: '2026-04-27', time: '09:30', patient_name: '佐藤 由美', treatment: '膝部温熱＋超音波', duration: 30, insurance: '健康保険', status: 'confirmed', staff_name: '木村先生' },
  { id: 'or3', date: '2026-04-27', time: '10:00', patient_name: '鈴木 拓也', treatment: '頸部牽引＋電気', duration: 40, insurance: '自賠責', status: 'confirmed', staff_name: '山田先生' },
  { id: 'or4', date: '2026-04-27', time: '11:00', patient_name: '中村 春香', treatment: '肩部マッサージ＋可動域訓練', duration: 40, insurance: '健康保険', status: 'confirmed', staff_name: '木村先生' },
  { id: 'or5', date: '2026-04-27', time: '14:00', patient_name: '小林 誠', treatment: '腰部電気＋手技＋牽引', duration: 40, insurance: '健康保険', status: 'confirmed', staff_name: '山田先生' },
  { id: 'or6', date: '2026-04-27', time: '15:00', patient_name: '加藤 里奈', treatment: '骨盤矯正', duration: 50, insurance: '自費', status: 'pending', staff_name: '木村先生' },
  { id: 'or7', date: '2026-04-28', time: '09:00', patient_name: '山本 健太', treatment: '頸肩部電気＋手技', duration: 30, insurance: '自費', status: 'confirmed', staff_name: '山田先生' },
  { id: 'or8', date: '2026-04-28', time: '10:00', patient_name: '田中 美咲', treatment: '腰部電気治療＋手技', duration: 30, insurance: '健康保険', status: 'confirmed', staff_name: '木村先生' },
  { id: 'or9', date: '2026-04-29', time: '09:30', patient_name: '佐藤 由美', treatment: '膝部温熱＋超音波', duration: 30, insurance: '健康保険', status: 'confirmed', staff_name: '山田先生' },
  { id: 'or10', date: '2026-04-30', time: '14:00', patient_name: '鈴木 拓也', treatment: '頸部牽引＋電気', duration: 40, insurance: '自賠責', status: 'confirmed', staff_name: '山田先生' },
]

export const osteoRecords = [
  { id: 'orc1', patient_name: '田中 美咲', visit_date: '2026-04-20', treatment: '腰部電気治療＋手技', insurance: '健康保険', findings: 'L4/5周囲筋緊張やや軽減。前屈痛VAS 6→4。', memo: 'ホットパック追加。次回は牽引試行予定。', fee: 850, staff_name: '山田先生' },
  { id: 'orc2', patient_name: '佐藤 由美', visit_date: '2026-04-22', treatment: '膝部温熱＋超音波', insurance: '健康保険', findings: '左膝内側の浮腫軽減。階段昇降痛VAS 7→5。', memo: '自宅でアイシング指導。次回ROM測定予定。', fee: 850, staff_name: '木村先生' },
  { id: 'orc3', patient_name: '鈴木 拓也', visit_date: '2026-04-24', treatment: '頸部牽引＋電気', insurance: '自賠責', findings: '頸部回旋制限改善。後頭部痛VAS 5→3。', memo: '保険会社への月次報告書作成済み。', fee: 0, staff_name: '山田先生' },
  { id: 'orc4', patient_name: '中村 春香', visit_date: '2026-04-18', treatment: '肩部マッサージ＋可動域訓練', insurance: '健康保険', findings: '右肩外転90°→110°に改善。夜間痛は軽減。', memo: '自主訓練（振り子運動）継続指導。', fee: 850, staff_name: '木村先生' },
  { id: 'orc5', patient_name: '加藤 里奈', visit_date: '2026-04-10', treatment: '骨盤矯正（産後）', insurance: '自費', findings: '骨盤前傾改善。腰背部の緊張軽減。', memo: '5回目完了。あと3回で目標達成見込み。', fee: 6500, staff_name: '木村先生' },
]

export const osteoStaff = [
  { id: 'ost1', name: '山田 太郎', role: '院長・柔道整復師', specialty: '腰部・スポーツ障害', days: '月火水木金', color: '#3b82f6' },
  { id: 'ost2', name: '木村 あい', role: '柔道整復師', specialty: '骨盤矯正・産後ケア', days: '月火水木金土', color: '#ec4899' },
  { id: 'ost3', name: '佐藤 健一', role: '鍼灸師', specialty: '鍼灸・慢性疼痛', days: '火水木金土', color: '#f59e0b' },
  { id: 'ost4', name: '田村 陽子', role: '受付・医療事務', specialty: '保険請求・レセプト', days: '月火水木金', color: '#6b7280' },
]

export const osteoInsuranceMap: Record<string, { color: string }> = {
  '健康保険': { color: 'bg-blue-100 text-blue-700' },
  '自費':     { color: 'bg-gray-100 text-gray-700' },
  '自賠責':   { color: 'bg-orange-100 text-orange-700' },
  '労災':     { color: 'bg-red-100 text-red-700' },
}

export const osteoStatusMap: Record<string, { label: string; color: string }> = {
  confirmed: { label: '確定', color: 'bg-green-100 text-green-700' },
  pending:   { label: '仮予約', color: 'bg-yellow-100 text-yellow-700' },
}
