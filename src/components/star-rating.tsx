'use client'

import { useState } from 'react'

type Props = {
  max?: number
  value?: number
  onChange?: (rating: number) => void
  size?: number
}

export default function StarRating({
  max = 5,
  value,
  onChange,
  size = 28,
}: Props) {
  const [hover, setHover] = useState<number | null>(null)
  const [rating, setRating] = useState<number>(value || 0)

  const handleClick = (score: number) => {
    setRating(score)
    onChange?.(score)
  }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => {
        const score = i + 1
        const filled = hover ? score <= hover : score <= rating

        return (
          <svg
            key={score}
            onMouseEnter={() => setHover(score)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleClick(score)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={filled ? '#facc15' : 'none'}
            stroke="#fbbf24"
            strokeWidth={2}
            className="cursor-pointer transition-colors"
            style={{ width: size, height: size }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.977 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.977-2.888a1 1 0 00-1.176 0l-3.977 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.979 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.517-4.674z"
            />
          </svg>
        )
      })}
    </div>
  )
}
