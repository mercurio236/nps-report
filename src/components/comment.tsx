import StarRating from './star-rating'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export interface CommentProps {
  comment: string
  stars: number
}

export function Comment({ comment, stars }: CommentProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <StarRating value={stars} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="font-bold text-[18]">Comentario: </p>
            <p>{comment}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
