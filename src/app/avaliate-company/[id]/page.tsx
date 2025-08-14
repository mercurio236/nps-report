import { FormAvaliation } from '@/components/form-avaliation'
import StarRating from '@/components/star-rating'

export default function AvaliateCompanyPage() {
  return (
    <main className="flex flex-col gap-8">
      <div className='flex flex-col justify-start gap-1'>
        <h2 className='text-[20px] font-bold'>Empresa 01</h2>
        <StarRating />
      </div>
      <article>
        <h5 className='text-[16px] mb-2 font-bold'>Sobre a empresa</h5>
        <section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quibusdam veniam ducimus quisquam sapiente non voluptatibus nihil
          temporibus placeat minus minima fugit quas molestias a, eum esse
          asperiores nemo perferendis.
        </section>
      </article>
      <div>
        <FormAvaliation />
      </div>
    </main>
  )
}
