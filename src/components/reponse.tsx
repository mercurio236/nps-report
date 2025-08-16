import StarRating from './star-rating'

export interface ResponseProps {
  id: string
  nameCompany: string
  responseCompany: string
  avaliationStars: number
}

export function Response({
  nameCompany,
  avaliationStars,
  responseCompany,
}: ResponseProps) {
  return (
    <div className='p-5'>
      <div className='flex justify-between'>
        <p className='font-bold text-[18px]'>{nameCompany}</p>
        <StarRating value={avaliationStars} />
      </div>
      <section>{responseCompany}</section>
    </div>
  )
}
