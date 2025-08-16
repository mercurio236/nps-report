import { ReportLayout } from '@/components/layout/report-layout'
import NpsTrendLine from '@/components/nps-company-linear'
import NpsRadarCompanies from '@/components/nps-radar-company'

const companies = [
  {
    company: 'Empresa A',
    pct: { promoters: 62.5, passives: 25, detractors: 12.5 },
  },
  {
    company: 'Empresa B',
    pct: { promoters: 40, passives: 35, detractors: 25 },
  },
  {
    company: 'Empresa C',
    pct: { promoters: 20, passives: 30, detractors: 50 },
  },
  {
    company: 'Empresa D',
    pct: { promoters: 10, passives: 3, detractors: 50 },
  },
]

const dateNpsCompany = [
  { company: 'Empresa A', date: '2025-01-01', nps: 5 },
  { company: 'Empresa B', date: '2025-01-01', nps: 40 },
  { company: 'Empresa C', date: '2025-02-01', nps: 10 },
  { company: 'Empresa D', date: '2025-02-01', nps: 32 },
  { company: 'Empresa A', date: '2025-03-01', nps: 28 },
  { company: 'Empresa B', date: '2025-03-01', nps: 38 },
]

const responseData = [
  {
    id: 'a1',
    nameCompany: 'Empresa A',
    responseCompany:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt unde delectus quia! Minima itaque molestias dolores recusandae maiores obcaecati! Omnis harum fugit explicabo nam, sunt blanditiis ipsum sequi fugiat.',
    avaliationStars: 3,
  },
  {
    id: 'a2',
    nameCompany: 'Empresa B',
    responseCompany:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt unde delectus quia! Minima itaque molestias dolores recusandae maiores obcaecati! Omnis harum fugit explicabo nam, sunt blanditiis ipsum sequi fugiat.',
    avaliationStars: 2,
  },
  {
    id: 'a3',
    nameCompany: 'Empresa B',
    responseCompany:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt unde delectus quia! Minima itaque molestias dolores recusandae maiores obcaecati! Omnis harum fugit explicabo nam, sunt blanditiis ipsum sequi fugiat.',
    avaliationStars: 1,
  },
  {
    id: 'a4',
    nameCompany: 'Empresa B',
    responseCompany:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt unde delectus quia! Minima itaque molestias dolores recusandae maiores obcaecati! Omnis harum fugit explicabo nam, sunt blanditiis ipsum sequi fugiat.',
    avaliationStars: 2,
  },
]

export default function ReportsPage() {
  return (
    <ReportLayout data={responseData}>
      <NpsRadarCompanies rows={companies} />
      <NpsTrendLine rows={dateNpsCompany} />
    </ReportLayout>
  )
}
