import { ListCompany } from '@/components/list-company'
import { api } from '@/services/api'

async function getComapany() {
  try {
    const response = await api('/companies')
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function HomePage() {
  const listCompany = await getComapany()
  return (
    <main>
      <ListCompany data={listCompany}/>
    </main>
  )
}
