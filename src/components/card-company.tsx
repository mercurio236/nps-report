'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import StarRating from './star-rating'

export type DataCompanyProps = {
  id: number
  nameCompany: string
  avaliation: string
  stars: number
}

export function CardCompany({
  nameCompany,
  avaliation,
  stars,
  id,
}: DataCompanyProps) {
  const router = useRouter()
  return (
    <Card>
      <CardHeader>
        <CardTitle>{nameCompany}</CardTitle>
      </CardHeader>
      <CardContent>{avaliation}</CardContent>
      <Separator />
      <CardFooter className="flex justify-between">
        <StarRating value={stars} />
        <Button
          onClick={() => router.push(`/avaliate-company/${id}`)}
          variant="company"
          size="lg"
        >
          Avaliar
        </Button>
      </CardFooter>
    </Card>
  )
}
