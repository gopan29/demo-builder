// エステサロン デモ用サンプルデータ

export const estheticCustomers = [
  { id: 'ec1', name: '田中 美咲', phone: '090-1234-5678', age: 32, skin_type: '混合肌', visit_count: 14, registered_at: '2024-02-10', notes: '敏感肌注意、香料NG' },
  { id: 'ec2', name: '山本 恵', phone: '090-2345-6789', age: 28, skin_type: '乾燥肌', visit_count: 8, registered_at: '2024-06-15', notes: '' },
  { id: 'ec3', name: '佐藤 由美', phone: '080-3456-7890', age: 40, skin_type: '普通肌', visit_count: 26, registered_at: '2023-10-01', notes: '月1回定期来店' },
  { id: 'ec4', name: '鈴木 麻衣', phone: '070-4567-8901', age: 25, skin_type: 'オイリー肌', visit_count: 4, registered_at: '2025-11-20', notes: '' },
  { id: 'ec5', name: '中村 春香', phone: '090-5678-9012', age: 35, skin_type: '混合肌', visit_count: 18, registered_at: '2024-01-08', notes: '脱毛コース継続中' },
  { id: 'ec6', name: '小林 なつ', phone: '080-6789-0123', age: 30, skin_type: '乾燥肌', visit_count: 6, registered_at: '2025-03-22', notes: '' },
  { id: 'ec7', name: '加藤 里奈', phone: '090-7890-1234', age: 27, skin_type: '普通肌', visit_count: 11, registered_at: '2024-08-05', notes: 'ポイント会員 GOLD' },
]

export const estheticReservations = [
  { id: 'er1', date: '2026-04-27', time: '10:00', customer_name: '田中 美咲', service: 'プレミアムフェイシャル', duration: 90, price: 18000, status: 'confirmed', staff_name: '木村 あい' },
  { id: 'er2', date: '2026-04-27', time: '11:30', customer_name: '佐藤 由美', service: 'ボディリンパドレナージュ', duration: 60, price: 14000, status: 'confirmed', staff_name: '中島 さくら' },
  { id: 'er3', date: '2026-04-27', time: '13:00', customer_name: '中村 春香', service: '全身脱毛（VIO込み）', duration: 120, price: 22000, status: 'confirmed', staff_name: '木村 あい' },
  { id: 'er4', date: '2026-04-27', time: '15:00', customer_name: '加藤 里奈', service: 'ハイフ（HIFU）リフトアップ', duration: 60, price: 28000, status: 'pending', staff_name: '中島 さくら' },
  { id: 'er5', date: '2026-04-28', time: '10:00', customer_name: '山本 恵', service: '保湿フェイシャル', duration: 60, price: 10000, status: 'confirmed', staff_name: '木村 あい' },
  { id: 'er6', date: '2026-04-28', time: '13:00', customer_name: '鈴木 麻衣', service: 'ニキビケアフェイシャル', duration: 75, price: 13000, status: 'confirmed', staff_name: '中島 さくら' },
  { id: 'er7', date: '2026-04-28', time: '15:00', customer_name: '小林 なつ', service: '痩身キャビテーション', duration: 60, price: 12000, status: 'confirmed', staff_name: '木村 あい' },
  { id: 'er8', date: '2026-04-29', time: '11:00', customer_name: '田中 美咲', service: '眉・まつ毛トリートメント', duration: 90, price: 16000, status: 'confirmed', staff_name: '中島 さくら' },
  { id: 'er9', date: '2026-04-30', time: '10:00', customer_name: '佐藤 由美', service: 'プレミアムフェイシャル', duration: 90, price: 18000, status: 'pending', staff_name: '木村 あい' },
]

export const estheticLineCandidates = [
  { id: 'el1', received_at: '2026-04-26 10:15', sender_name: '田中 美咲', message: 'こんにちは！次回のフェイシャルを5月上旬でお願いしたいのですが、空いている日はありますか？', status: 'pending' },
  { id: 'el2', received_at: '2026-04-26 13:40', sender_name: '新規のお客様', message: 'はじめまして。友人の紹介です。脱毛について相談したいのですが、カウンセリングの予約はできますか？', status: 'pending' },
  { id: 'el3', received_at: '2026-04-25 15:20', sender_name: '小林 なつ', message: '4/28のキャビテーションの予約時間を15時から16時に変更できますか？', status: 'pending' },
  { id: 'el4', received_at: '2026-04-25 09:00', sender_name: '加藤 里奈', message: '4/27 15時のハイフの予約、確認お願いします！', status: 'registered' },
]

export const estheticRecords = [
  { id: 'erc1', customer_name: '田中 美咲', visit_date: '2026-04-10', service: 'プレミアムフェイシャル', skin_condition: '乾燥やや改善。Tゾーンのテカリ残る。', treatment_notes: '超音波導入・美白美容液使用。ホームケアでビタミンC誘導体を推奨。', next_visit: '2026-05-10', staff_name: '木村 あい', price: 18000 },
  { id: 'erc2', customer_name: '佐藤 由美', visit_date: '2026-04-05', service: 'ボディリンパドレナージュ', skin_condition: '下半身のむくみ改善。太もも周囲-1.5cm。', treatment_notes: 'リンパ流れ良好。次回はキャビテーション追加を提案。', next_visit: '2026-05-05', staff_name: '中島 さくら', price: 14000 },
  { id: 'erc3', customer_name: '中村 春香', visit_date: '2026-04-15', service: '全身脱毛（VIO込み）', skin_condition: '毛の減少確認（6回目）。VIO残毛少し。', treatment_notes: '照射出力を上げてVIO集中。次回で完了見込み。', next_visit: '2026-05-15', staff_name: '木村 あい', price: 22000 },
  { id: 'erc4', customer_name: '山本 恵', visit_date: '2026-04-20', service: '保湿フェイシャル', skin_condition: '乾燥改善傾向。赤みが若干残る。', treatment_notes: '鎮静パック使用。バリア機能改善のため低刺激コースを継続。', next_visit: '2026-05-20', staff_name: '中島 さくら', price: 10000 },
  { id: 'erc5', customer_name: '加藤 里奈', visit_date: '2026-04-08', service: 'ハイフ（HIFU）リフトアップ', skin_condition: 'フェイスラインに引き上げ感。効果は3週間後に最大化。', treatment_notes: '600ショット施術。次回は6ヶ月後推奨。', next_visit: '2026-10-08', staff_name: '中島 さくら', price: 28000 },
]

export const estheticStaff = [
  { id: 'est1', name: '木村 あい', role: 'オーナーセラピスト', specialty: 'フェイシャル・脱毛', days: '火水木金土', color: '#ec4899' },
  { id: 'est2', name: '中島 さくら', role: 'シニアセラピスト', specialty: 'ボディ・HIFU', days: '月火水木金', color: '#8b5cf6' },
  { id: 'est3', name: '田村 みく', role: 'セラピスト', specialty: 'まつ毛・眉', days: '水木金土', color: '#f59e0b' },
]

export const estheticStatusMap: Record<string, { label: string; color: string }> = {
  confirmed: { label: '確定', color: 'bg-green-100 text-green-700' },
  pending:   { label: '仮予約', color: 'bg-yellow-100 text-yellow-700' },
}
