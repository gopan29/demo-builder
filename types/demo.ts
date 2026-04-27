export type Demo = {
  id: string
  slug: string
  client_name: string
  industry_template: string
  theme_color: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export const INDUSTRY_TEMPLATES = [
  { value: 'dog_salon', label: 'ドッグサロン' },
  { value: 'beauty_salon', label: '美容室' },
  { value: 'dental_clinic', label: '歯科クリニック' },
  { value: 'restaurant', label: '飲食店' },
  { value: 'esthetic_salon', label: 'エステサロン' },
  { value: 'osteopathic_clinic', label: '整骨院・接骨院' },
  { value: 'juku', label: '学習塾' },
  { value: 'yoga_fitness', label: 'ヨガ・フィットネス' },
] as const

export type IndustryTemplate = typeof INDUSTRY_TEMPLATES[number]['value']

export const TEMPLATE_NAV: Record<string, { label: string; path: string }[]> = {
  dog_salon: [
    { label: 'ダッシュボード', path: '' },
    { label: '予約管理', path: '/reservations' },
    { label: 'LINE予約候補', path: '/line' },
    { label: 'eパーク転記', path: '/epark' },
    { label: '顧客管理', path: '/customers' },
    { label: 'ワンちゃん管理', path: '/dogs' },
    { label: '簡易カルテ', path: '/records' },
  ],
  beauty_salon: [
    { label: 'ダッシュボード', path: '' },
    { label: '予約管理', path: '/reservations' },
    { label: 'LINE予約候補', path: '/line' },
    { label: '顧客管理', path: '/customers' },
    { label: '施術記録', path: '/records' },
    { label: 'スタッフ管理', path: '/staff' },
  ],
  dental_clinic: [
    { label: 'ダッシュボード', path: '' },
    { label: '予約管理', path: '/reservations' },
    { label: '患者管理', path: '/customers' },
    { label: '診療記録', path: '/records' },
    { label: 'スタッフ管理', path: '/staff' },
  ],
  restaurant: [
    { label: 'ダッシュボード', path: '' },
    { label: '予約管理', path: '/reservations' },
    { label: '売上記録', path: '/records' },
    { label: 'スタッフ管理', path: '/staff' },
  ],
  esthetic_salon: [
    { label: 'ダッシュボード', path: '' },
    { label: '予約管理', path: '/reservations' },
    { label: 'LINE予約候補', path: '/line' },
    { label: '顧客管理', path: '/customers' },
    { label: '施術記録', path: '/records' },
    { label: 'スタッフ管理', path: '/staff' },
  ],
  osteopathic_clinic: [
    { label: 'ダッシュボード', path: '' },
    { label: '予約管理', path: '/reservations' },
    { label: '患者管理', path: '/customers' },
    { label: '施術記録', path: '/records' },
    { label: 'スタッフ管理', path: '/staff' },
  ],
  juku: [
    { label: 'ダッシュボード', path: '' },
    { label: '生徒管理', path: '/customers' },
    { label: 'クラス管理', path: '/reservations' },
    { label: '出欠記録', path: '/records' },
    { label: '講師管理', path: '/staff' },
  ],
  yoga_fitness: [
    { label: 'ダッシュボード', path: '' },
    { label: 'クラス予約', path: '/reservations' },
    { label: '会員管理', path: '/customers' },
    { label: '売上・会費', path: '/records' },
    { label: 'インストラクター', path: '/staff' },
  ],
}
