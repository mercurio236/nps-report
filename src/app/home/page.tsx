import { ListCompany } from '@/components/list-company'
import { listCompany } from '@/data/list-company'

export default function HomePage() {
  return (
    <main>
      <ListCompany data={listCompany} />
    </main>
  )
}
