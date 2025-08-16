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
          <div key={response.id}>
            <Response
              avaliationStars={response.avaliationStars}
              id={response.id}
              nameCompany={response.nameCompany}
              responseCompany={response.responseCompany}
            />
            <Separator />
          </div>
        ))}
    </div>
  )
}
