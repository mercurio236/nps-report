'use client'

import React from 'react'
import {
  RadarChart,
  Radar,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Card, CardContent } from './ui/card'

type Row = {
  company: string
  pct: { promoters: number; passives: number; detractors: number }
}

export default function NpsRadarCompanies({ rows }: { rows: Row[] }) {
  const data = rows.map((r) => ({
    company: r.company,
    Promotores: +r.pct.promoters.toFixed(2),
    Neutros: +r.pct.passives.toFixed(2),
    Detratores: +r.pct.detractors.toFixed(2),
  }))

  return (
    <Card className="w-full h-100">
      <CardContent>
        <ResponsiveContainer width="100%" height={340}>
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
            <PolarGrid />
            <PolarAngleAxis dataKey="company" />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              formatter={(v: number, name: string) => [`${v}%`, name]}
              labelFormatter={(label) => `Empresa: ${label}`}
            />
            <Radar
              name="Promotores"
              dataKey="Promotores"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.35}
            />
            <Radar
              name="Neutros"
              dataKey="Neutros"
              stroke="#9ca3af"
              fill="#9ca3af"
              fillOpacity={0.3}
            />
            <Radar
              name="Detratores"
              dataKey="Detratores"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.3}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
