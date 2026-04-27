import { createClient } from '@/lib/supabase-server'
import { notFound } from 'next/navigation'
import BeautySalonStaff from '@/components/demo/beauty-salon/StaffContent'
import DentalStaff from '@/components/demo/dental-clinic/StaffContent'
import RestaurantStaff from '@/components/demo/restaurant/StaffContent'
import EstheticStaff from '@/components/demo/esthetic-salon/StaffContent'
import OsteopathicStaff from '@/components/demo/osteopathic-clinic/StaffContent'
import JukuStaff from '@/components/demo/juku/StaffContent'
import YogaInstructors from '@/components/demo/yoga-fitness/InstructorsContent'

type Props = { params: Promise<{ slug: string }> }

export default async function StaffPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: demo } = await supabase.from('demos').select('industry_template').eq('slug', slug).single()
  if (!demo) notFound()

  if (demo.industry_template === 'beauty_salon') return <BeautySalonStaff />
  if (demo.industry_template === 'dental_clinic') return <DentalStaff />
  if (demo.industry_template === 'restaurant') return <RestaurantStaff />
  if (demo.industry_template === 'esthetic_salon') return <EstheticStaff />
  if (demo.industry_template === 'osteopathic_clinic') return <OsteopathicStaff />
  if (demo.industry_template === 'juku') return <JukuStaff />
  if (demo.industry_template === 'yoga_fitness') return <YogaInstructors />

  notFound()
}
