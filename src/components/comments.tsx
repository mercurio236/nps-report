'use client'

import { Comment, CommentProps } from './comment'

interface CommentsProps {
  data: CommentProps[]
}

export function Comments({ data }: CommentsProps) {
  return (
    <div className='flex flex-col gap-2 m-3'>
      {data.map((comment, index) => (
        <Comment key={index} comment={comment.comment} stars={comment.stars} />
      ))}
    </div>
  )
}
