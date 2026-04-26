// 美容室 デモ用サンプルデータ

export const beautyCustomers = [
  { id: 'bc1', name: '松本 彩花', phone: '090-1111-2222', email: 'ayaka@example.com', address: '大阪府高槻市城西町1-1', visit_count: 18, registered_at: '2023-01-15', memo: 'カラーアレルギーなし。細い髪質。' },
  { id: 'bc2', name: '伊藤 麻衣', phone: '080-2222-3333', email: 'mai@example.com', address: '大阪府高槻市栄町2-4', visit_count: 9, registered_at: '2023-06-20', memo: 'パーマ希望多い。剛毛気味。' },
  { id: 'bc3', name: '渡辺 真由', phone: '090-3333-4444', email: 'mayu@example.com', address: '大阪府高槻市富田町3-8', visit_count: 31, registered_at: '2022-04-10', memo: 'VIPお客様。毎月来店。' },
  { id: 'bc4', name: '高橋 さくら', phone: '070-4444-5555', email: 'sakura@example.com', address: '大阪府高槻市古曽部町4-3', visit_count: 5, registered_at: '2024-02-01', memo: '初めてのカラー希望。' },
  { id: 'bc5', name: '中島 優奈', phone: '090-5555-6666', email: 'yuna@example.com', address: '大阪府高槻市南平台5-2', visit_count: 22, registered_at: '2022-10-05', memo: 'ショートボブ定期メンテ。' },
  { id: 'bc6', name: '吉田 里佳', phone: '080-6666-7777', email: 'rika@example.com', address: '大阪府高槻市松川町6-9', visit_count: 7, registered_at: '2023-09-14', memo: '' },
  { id: 'bc7', name: '木村 はな', phone: '090-7777-8888', email: 'hana@example.com', address: '大阪府高槻市氷室町7-1', visit_count: 14, registered_at: '2023-03-22', memo: 'トリートメント毎回必須。' },
]

export const beautyStaff = [
  { id: 'bs1', name: '田村 けいこ', role: 'トップスタイリスト', experience: '12年', specialty: 'カラー・パーマ', reservations_today: 5, color: '#6366f1' },
  { id: 'bs2', name: '西村 あおい', role: 'スタイリスト', experience: '6年', specialty: 'カット・ヘアセット', reservations_today: 4, color: '#ec4899' },
  { id: 'bs3', name: '林 りな', role: 'アシスタント', experience: '2年', specialty: 'シャンプー・トリートメント', reservations_today: 3, color: '#f59e0b' },
]

export const beautyReservations = [
  { id: 'br1', date: '2026-04-27', time: '10:00', customer_name: '松本 彩花', service_type: 'カット＋カラー', staff_name: '田村 けいこ', status: 'confirmed', duration: 120, price: 12000 },
  { id: 'br2', date: '2026-04-27', time: '11:00', customer_name: '渡辺 真由', service_type: 'ヘッドスパ＋トリートメント', staff_name: '西村 あおい', status: 'confirmed', duration: 90, price: 8500 },
  { id: 'br3', date: '2026-04-27', time: '14:00', customer_name: '中島 優奈', service_type: 'カット', staff_name: '西村 あおい', status: 'confirmed', duration: 60, price: 5500 },
  { id: 'br4', date: '2026-04-27', time: '15:30', customer_name: '高橋 さくら', service_type: 'カラー', staff_name: '田村 けいこ', status: 'pending', duration: 90, price: 9000 },
  { id: 'br5', date: '2026-04-28', time: '10:00', customer_name: '伊藤 麻衣', service_type: 'パーマ', staff_name: '田村 けいこ', status: 'confirmed', duration: 150, price: 14000 },
  { id: 'br6', date: '2026-04-28', time: '13:00', customer_name: '吉田 里佳', service_type: 'カット＋トリートメント', staff_name: '西村 あおい', status: 'confirmed', duration: 90, price: 9500 },
  { id: 'br7', date: '2026-04-29', time: '11:00', customer_name: '木村 はな', service_type: 'カラー＋トリートメント', staff_name: '田村 けいこ', status: 'confirmed', duration: 120, price: 13500 },
  { id: 'br8', date: '2026-04-29', time: '14:00', customer_name: '渡辺 真由', service_type: 'カット', staff_name: '西村 あおい', status: 'confirmed', duration: 60, price: 5500 },
]

export const beautyLineCandidates = [
  { id: 'bl1', received_at: '2026-04-26 10:20', sender_name: '新規のお客様', message: 'はじめまして！友達に紹介してもらいました。カット＋カラーをお願いしたいのですが、今週末は空いていますか？', requested_date: null, status: 'pending' },
  { id: 'bl2', received_at: '2026-04-26 14:35', sender_name: '伊藤 麻衣', message: '次回のパーマ、5月中旬でお願いしたいです。田村さんの予約を押さえてもらえますか？', requested_date: null, status: 'pending' },
  { id: 'bl3', received_at: '2026-04-25 09:00', sender_name: '高橋 さくら', message: '4/27の15時半、予約できますか？初めてのカラーなのでドキドキしてます！', requested_date: '2026-04-27', status: 'registered' },
]

export const beautyRecords = [
  { id: 'bm1', customer_name: '渡辺 真由', visit_date: '2026-04-10', service_type: 'カット＋カラー', staff_name: '田村 けいこ', color_used: 'アッシュブラウン 8トーン', condition: '毛先のダメージあり。トリートメント併用。', next_visit_scheduled: '2026-05-10', price: 13000 },
  { id: 'bm2', customer_name: '松本 彩花', visit_date: '2026-04-08', service_type: 'ヘアカラー', staff_name: '田村 けいこ', color_used: 'ミルクティーベージュ 10トーン', condition: '根本リタッチ。毛先は既染部をケア。', next_visit_scheduled: '2026-05-08', price: 9500 },
  { id: 'bm3', customer_name: '中島 優奈', visit_date: '2026-04-05', service_type: 'カット', staff_name: '西村 あおい', color_used: 'なし', condition: '毛量多め。すきバサミ多用。ボブラインで仕上げ。', next_visit_scheduled: '2026-05-05', price: 5500 },
  { id: 'bm4', customer_name: '木村 はな', visit_date: '2026-03-28', service_type: 'トリートメント', staff_name: '林 りな', color_used: 'なし', condition: '毛先パサつき。酸熱トリートメント施術。', next_visit_scheduled: '2026-04-28', price: 8000 },
  { id: 'bm5', customer_name: '伊藤 麻衣', visit_date: '2026-03-20', service_type: 'パーマ', staff_name: '田村 けいこ', color_used: 'なし', condition: 'ゆるふわウェーブ。ロッド：細め全体。仕上がり良好。', next_visit_scheduled: '2026-04-20', price: 14000 },
]

export const beautyStatusMap: Record<string, { label: string; color: string }> = {
  confirmed: { label: '確定', color: 'bg-green-100 text-green-700' },
  pending:   { label: '仮予約', color: 'bg-yellow-100 text-yellow-700' },
  cancelled: { label: 'キャンセル', color: 'bg-red-100 text-red-600' },
}
