import { ListReponse } from '../list-response'
import { ResponseProps } from '../reponse'

type Props = {
  children: React.ReactNode
  data: ResponseProps[]
}

export function ReportLayout({ children, data }: Props) {
  return (
    <main>
      <h2 className="text-center text-[22px] mb-8 font-bold">NPS</h2>
      <div className="grid grid-cols-2 gap-2">{children}</div>
      <h2 className="text-center text-[22px] font-bold mt-10 mb-5">
        List de Respostas
      </h2>
      <section>
        <ListReponse data={data} />
      </section>
    </main>
  )
}
