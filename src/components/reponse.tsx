import StarRating from './star-rating'

export interface ResponseProps {
  companyId: string
  company: string
  responseCompany: string
  starsRounded: number
}

export function Response({
  company,
  responseCompany,
  starsRounded
}: ResponseProps) {
  return (
    <div className='p-5'>
      <div className='flex justify-between'>
        <p className='font-bold text-[18px]'>{company}</p>
        <StarRating value={starsRounded} />
      </div>
      <section>{responseCompany}</section>
    </div>
  )
}
