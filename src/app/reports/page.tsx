import { ReportLayout } from '@/components/layout/report-layout'
import NpsTrendLine from '@/components/nps-company-linear'
import NpsRadarCompanies from '@/components/nps-radar-company'
import { api } from '@/services/api'

async function getNps() {
  try {
    const response = await api('/reports/nps')
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function ReportsPage() {
  const nps = await getNps()
  return (
    <ReportLayout data={nps}>
      <NpsRadarCompanies rows={nps} />
      <NpsTrendLine rows={nps} />
    </ReportLayout>
  )
}
