import { CardCompany, DataCompanyProps } from './card-company'

interface ListCompanyProps {
  data: DataCompanyProps[]
}

export function ListCompany({ data }: ListCompanyProps) {
  return (
    <div>
      {data &&
        data.map((company) => (
          <div key={company.id} className="mb-4">
            <CardCompany
              name={company.name}
              description={company.description}
              starsRounded={company.starsRounded}
              id={company.id}
            />
          </div>
        ))}
    </div>
  )
}
