// ドッグサロン デモ用サンプルデータ

export const customers = [
  { id: 'c1', name: '田中 美咲', phone: '090-1234-5678', email: 'misaki@example.com', address: '大阪府高槻市城西町1-1', visit_count: 12, registered_at: '2023-04-10' },
  { id: 'c2', name: '山本 健太', phone: '090-2345-6789', email: 'kenta@example.com', address: '大阪府高槻市栄町2-3', visit_count: 8, registered_at: '2023-07-22' },
  { id: 'c3', name: '佐藤 由美', phone: '080-3456-7890', email: 'yumi@example.com', address: '大阪府高槻市富田町3-5', visit_count: 24, registered_at: '2022-11-05' },
  { id: 'c4', name: '鈴木 拓也', phone: '070-4567-8901', email: 'takuya@example.com', address: '大阪府高槻市古曽部町4-2', visit_count: 5, registered_at: '2024-01-18' },
  { id: 'c5', name: '中村 春香', phone: '090-5678-9012', email: 'haruka@example.com', address: '大阪府高槻市南平台5-8', visit_count: 16, registered_at: '2023-02-14' },
  { id: 'c6', name: '小林 誠', phone: '080-6789-0123', email: 'makoto@example.com', address: '大阪府高槻市松川町6-1', visit_count: 3, registered_at: '2024-03-01' },
  { id: 'c7', name: '加藤 里奈', phone: '090-7890-1234', email: 'rina@example.com', address: '大阪府高槻市氷室町7-4', visit_count: 19, registered_at: '2022-08-30' },
]

export const dogs = [
  { id: 'd1', customer_id: 'c1', name: 'モカ', breed: 'トイプードル', gender: '女の子', birth_date: '2020-05-15', weight: 3.2, color: 'アプリコット', notes: 'シャンプー後に耳掃除必須' },
  { id: 'd2', customer_id: 'c2', name: 'ハル', breed: 'ミニチュアダックスフント', gender: '男の子', birth_date: '2019-08-20', weight: 5.1, color: 'ブラック＆タン', notes: '耳が敏感なため優しく扱う' },
  { id: 'd3', customer_id: 'c3', name: 'ルナ', breed: 'チワワ', gender: '女の子', birth_date: '2021-02-10', weight: 1.8, color: 'クリーム', notes: 'アレルギーあり（小麦系シャンプー不可）' },
  { id: 'd4', customer_id: 'c3', name: 'ソラ', breed: 'ポメラニアン', gender: '男の子', birth_date: '2018-11-30', weight: 2.5, color: 'オレンジ', notes: '' },
  { id: 'd5', customer_id: 'c4', name: 'レオ', breed: 'ゴールデンレトリバー', gender: '男の子', birth_date: '2022-03-08', weight: 28.0, color: 'ゴールデン', notes: '大型犬用台使用' },
  { id: 'd6', customer_id: 'c5', name: 'ここ', breed: 'マルチーズ', gender: '女の子', birth_date: '2020-09-25', weight: 2.9, color: 'ホワイト', notes: '' },
  { id: 'd7', customer_id: 'c6', name: 'チョコ', breed: 'シーズー', gender: '男の子', birth_date: '2021-06-12', weight: 6.3, color: 'ブラウン＆ホワイト', notes: '目元のカットを丁寧に' },
  { id: 'd8', customer_id: 'c7', name: 'ラテ', breed: 'トイプードル', gender: '女の子', birth_date: '2019-12-01', weight: 3.8, color: 'シルバー', notes: '前回カット: テディベアカット' },
]

export const reservations = [
  { id: 'r1', date: '2026-04-27', time: '10:00', customer_name: '田中 美咲', dog_name: 'モカ', service_type: 'シャンプー＆トリミング', status: 'confirmed', source: '電話', notes: '' },
  { id: 'r2', date: '2026-04-27', time: '13:00', customer_name: '佐藤 由美', dog_name: 'ルナ', service_type: 'シャンプーのみ', status: 'confirmed', source: 'LINE', notes: 'アレルギー対応シャンプー使用' },
  { id: 'r3', date: '2026-04-27', time: '15:00', customer_name: '中村 春香', dog_name: 'ここ', service_type: 'フルコース', status: 'pending', source: 'eパーク', notes: '' },
  { id: 'r4', date: '2026-04-28', time: '10:00', customer_name: '山本 健太', dog_name: 'ハル', service_type: 'シャンプー＆トリミング', status: 'confirmed', source: '窓口', notes: '' },
  { id: 'r5', date: '2026-04-28', time: '11:30', customer_name: '鈴木 拓也', dog_name: 'レオ', service_type: 'シャンプーのみ', status: 'confirmed', source: 'LINE', notes: '大型犬' },
  { id: 'r6', date: '2026-04-28', time: '14:00', customer_name: '佐藤 由美', dog_name: 'ソラ', service_type: 'トリミングのみ', status: 'confirmed', source: '電話', notes: '' },
  { id: 'r7', date: '2026-04-29', time: '09:30', customer_name: '加藤 里奈', dog_name: 'ラテ', service_type: 'フルコース', status: 'confirmed', source: '電話', notes: 'テディベアカット希望' },
  { id: 'r8', date: '2026-04-29', time: '13:00', customer_name: '小林 誠', dog_name: 'チョコ', service_type: 'シャンプー＆トリミング', status: 'pending', source: 'eパーク', notes: '' },
  { id: 'r9', date: '2026-04-30', time: '10:00', customer_name: '田中 美咲', dog_name: 'モカ', service_type: 'フルコース', status: 'confirmed', source: 'LINE', notes: '' },
  { id: 'r10', date: '2026-04-30', time: '14:30', customer_name: '中村 春香', dog_name: 'ここ', service_type: 'シャンプーのみ', status: 'confirmed', source: '電話', notes: '' },
]

export const lineCandidates = [
  { id: 'l1', received_at: '2026-04-26 09:12', sender_name: '田中 美咲', message: 'こんにちは！モカのシャンプーをお願いしたいのですが、4/29（水）の午後は空いていますか？', requested_date: '2026-04-29', status: 'pending' },
  { id: 'l2', received_at: '2026-04-26 11:45', sender_name: '新規のお客様', message: 'はじめまして。トイプードル（2歳・女の子）のトリミングをお願いしたいです。来週あたりで空いている日はありますか？', requested_date: null, status: 'pending' },
  { id: 'l3', received_at: '2026-04-25 16:30', sender_name: '山本 健太', message: 'ハルの次回予約を5月上旬でお願いしたいです。いつが空いていますか？', requested_date: null, status: 'pending' },
  { id: 'l4', received_at: '2026-04-25 10:00', sender_name: '加藤 里奈', message: 'ラテのカット、4/27の午後にお願いできますか？', requested_date: '2026-04-27', status: 'registered' },
]

export const eparkEntries = [
  { id: 'e1', epark_id: 'EP-20260426-001', reservation_date: '2026-04-27', reservation_time: '15:00', customer_name: '中村 春香', dog_name: 'ここ', service_type: 'フルコース', is_transferred: false },
  { id: 'e2', epark_id: 'EP-20260426-002', reservation_date: '2026-04-29', reservation_time: '13:00', customer_name: '小林 誠', dog_name: 'チョコ', service_type: 'シャンプー＆トリミング', is_transferred: false },
  { id: 'e3', epark_id: 'EP-20260425-003', reservation_date: '2026-04-28', reservation_time: '10:00', customer_name: '山本 健太', dog_name: 'ハル', service_type: 'シャンプー＆トリミング', is_transferred: true },
  { id: 'e4', epark_id: 'EP-20260424-004', reservation_date: '2026-04-26', reservation_time: '11:00', customer_name: '田中 美咲', dog_name: 'モカ', service_type: 'シャンプーのみ', is_transferred: true },
]

export const medicalRecords = [
  { id: 'm1', dog_id: 'd1', dog_name: 'モカ', customer_name: '田中 美咲', visit_date: '2026-04-10', service_type: 'フルコース', condition: '毛並み良好。少し絡まり有り。', groomer_notes: 'テディベアカット。耳掃除実施。', next_visit_scheduled: '2026-05-10', price: 7500 },
  { id: 'm2', dog_id: 'd8', dog_name: 'ラテ', customer_name: '加藤 里奈', visit_date: '2026-04-08', service_type: 'シャンプー＆トリミング', condition: '皮膚乾燥気味。保湿シャンプー使用。', groomer_notes: 'サマーカット。次回は保湿トリートメント推奨。', next_visit_scheduled: '2026-05-08', price: 6800 },
  { id: 'm3', dog_id: 'd3', dog_name: 'ルナ', customer_name: '佐藤 由美', visit_date: '2026-04-05', service_type: 'シャンプーのみ', condition: '皮膚問題なし。アレルギー対応済み。', groomer_notes: 'アレルギー対応シャンプー使用。異常なし。', next_visit_scheduled: '2026-05-05', price: 4000 },
  { id: 'm4', dog_id: 'd2', dog_name: 'ハル', customer_name: '山本 健太', visit_date: '2026-03-28', service_type: 'フルコース', condition: '耳に少し汚れ。毛玉あり（脇の下）。', groomer_notes: '毛玉除去。耳掃除丁寧に実施。', next_visit_scheduled: '2026-04-28', price: 6500 },
  { id: 'm5', dog_id: 'd6', dog_name: 'ここ', customer_name: '中村 春香', visit_date: '2026-03-25', service_type: 'シャンプー＆トリミング', condition: '状態良好。', groomer_notes: 'ナチュラルカット。爪切り実施。', next_visit_scheduled: '2026-04-25', price: 5500 },
  { id: 'm6', dog_id: 'd7', dog_name: 'チョコ', customer_name: '小林 誠', visit_date: '2026-03-20', service_type: 'シャンプー＆トリミング', condition: '目元に目やに。毛並み問題なし。', groomer_notes: '目元のカットを丁寧に。次回も同じスタイル希望。', next_visit_scheduled: '2026-04-20', price: 6000 },
]

export const serviceTypes = ['シャンプーのみ', 'トリミングのみ', 'シャンプー＆トリミング', 'フルコース', '爪切りのみ']
export const statusMap: Record<string, { label: string; color: string }> = {
  confirmed: { label: '確定', color: 'bg-green-100 text-green-700' },
  pending:   { label: '仮予約', color: 'bg-yellow-100 text-yellow-700' },
  cancelled: { label: 'キャンセル', color: 'bg-red-100 text-red-600' },
}
