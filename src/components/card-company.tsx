'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import StarRating from './star-rating'

export type DataCompanyProps = {
  id: number
  name: string
  description: string
  starsRounded: number
}

export function CardCompany({
  name,
  description,
  starsRounded,
  id,
}: DataCompanyProps) {
  const router = useRouter()
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <Separator />
      <CardFooter className="flex justify-between">
        <StarRating value={starsRounded} />
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
