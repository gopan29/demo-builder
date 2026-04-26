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
}
