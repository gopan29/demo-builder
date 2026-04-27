export const INDUSTRY_TEMPLATES = [
  { value: 'dog_salon',          label: 'ドッグサロン' },
  { value: 'beauty_salon',       label: '美容室' },
  { value: 'dental_clinic',      label: '歯科クリニック' },
  { value: 'restaurant',         label: '飲食店' },
  { value: 'esthetic_salon',     label: 'エステサロン' },
  { value: 'osteopathic_clinic', label: '整骨院・接骨院' },
  { value: 'juku',               label: '学習塾' },
  { value: 'yoga_fitness',       label: 'ヨガ・フィットネス' },
] as const

export type IndustryTemplateValue = typeof INDUSTRY_TEMPLATES[number]['value']

export const TEMPLATE_LABEL = Object.fromEntries(
  INDUSTRY_TEMPLATES.map(t => [t.value, t.label])
) as Record<string, string>
