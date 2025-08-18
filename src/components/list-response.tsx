import { Response, ResponseProps } from './reponse'
import { Separator } from './ui/separator'

type ListResponseProps = {
  data: ResponseProps[]
}

export function ListReponse({ data }: ListResponseProps) {
  return (
    <div className="h-96 overflow-y-auto border rounded-sm">
      {data &&
        data.map((response) => (
          <div key={response.companyId}>
            <Response
              companyId={response.companyId}
              company={response.company}
              responseCompany={response.responseCompany}
              starsRounded={response.starsRounded}
            />
            <Separator />
          </div>
        ))}
    </div>
  )
}
