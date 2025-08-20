import { DataCompanyProps } from '@/components/card-company'
import { Comments } from '@/components/comments'
import { FormAvaliation } from '@/components/form-avaliation'
import StarRating from '@/components/star-rating'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
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

async function getNpsComments(commentId: string) {
  const response = await api(`/reports/nps/${commentId}`, { cache: 'no-store' })

  const npsComments = await response.json()

  return npsComments
}

export default async function AvaliateCompanyPage({ params }: CompanyProps) {
  const result = await params
  const company = await getCompany(result.id)
  const comments = await getNpsComments(result.id)

  return (
    <main>
      <ResizablePanelGroup direction="horizontal" className="w-screen h-full">
        <ResizablePanel defaultSize={100} className="flex flex-col gap-8 m-2">
          <div className="flex flex-col justify-start gap-1">
            <h2 className="text-[20px] font-bold">{company.name}</h2>
            <StarRating value={company.starsRounded} />
          </div>
          <article>
            <h5 className="text-[16px] mb-2 font-bold">Sobre a empresa</h5>
            <section>{company.description}</section>
          </article>
          <div className="max-w-11/12">
            <FormAvaliation />
          </div>
        </ResizablePanel>
        <ResizableHandle className='h-screen'/>
        <ResizablePanel defaultSize={35}>
          <div>
            <Comments data={comments.comments} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
