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
] as const

export type IndustryTemplate = typeof INDUSTRY_TEMPLATES[number]['value']
