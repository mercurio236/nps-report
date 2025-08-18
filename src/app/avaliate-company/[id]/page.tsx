import { DataCompanyProps } from '@/components/card-company'
import { FormAvaliation } from '@/components/form-avaliation'
import StarRating from '@/components/star-rating'
import { api } from '@/services/api'

type ActionParams = {
  id: string
}
interface CompanyProps {
  params: Promise<ActionParams>
}

async function getCompany(id: string): Promise<DataCompanyProps> {
  const response = await api(`/companies?id=${id}`, { cache: 'no-store' })

  const company = await response.json()

  return company
}

export default async function AvaliateCompanyPage({ params }: CompanyProps) {
  const result = await params
  const company = await getCompany(result.id)

  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col justify-start gap-1">
        <h2 className="text-[20px] font-bold">{company.name}</h2>
        <StarRating value={company.starsRounded} />
      </div>
      <article>
        <h5 className="text-[16px] mb-2 font-bold">Sobre a empresa</h5>
        <section>{company.description}</section>
      </article>
      <div>
        <FormAvaliation />
      </div>
    </main>
  )
}
