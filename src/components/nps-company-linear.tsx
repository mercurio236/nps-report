'use client'

import { compareAsc, format, isValid, parseISO } from 'date-fns'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts'
import { ptBR } from 'date-fns/locale'
import colors from 'tailwindcss/colors'
import { Card, CardContent } from './ui/card'

type Row = { company: string; date: string | Date; nps: number | null }

export default function NpsTrendLine({ rows }: { rows: Row[] }) {
  const companies = Array.from(new Set(rows.map((r) => r.company)))

  type Bucket = { date: string; series: Record<string, number | null> }

  const map = rows.reduce<Record<string, Bucket>>((acc, r) => {
    const d = r.date instanceof Date ? r.date : parseISO(String(r.date))
    if (!isValid(d)) return acc

    const key = format(d, 'yyyy-MM-dd')
    if (!acc[key]) acc[key] = { date: key, series: {} }
    acc[key].series[r.company] = r.nps ?? null
    return acc
  }, {})

  const data = Object.values(map)
    .sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)))
    .map((row) => ({ date: row.date, ...row.series }))

  const fmtDate = (iso: string) =>
    format(parseISO(iso), 'dd/MM', { locale: ptBR })

  const palette = [
    colors.violet[500],
    colors.emerald[500],
    colors.amber[500],
    colors.sky[500],
    colors.rose[500],
  ]

  return (
    <Card className="w-full h-100">
      <CardContent>
        <ResponsiveContainer width="100%" height={340}>
          <LineChart
            data={data}
            margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
          >
            <CartesianGrid vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => fmtDate(v)}
              minTickGap={16}
              dy={8}
            />
            <YAxis
              domain={[-100, 100]}
              tickFormatter={(v) => `${v}`}
              tickLine={false}
              axisLine={false}
              width={40}
            />
            <Tooltip<number, string>
              formatter={(_value, name, { payload }) => {
                const raw = payload?.[String(name)] as number | undefined
                return [raw ?? '—', String(name)]
              }}
            />
            <Legend />
            <ReferenceLine y={0} stroke="#9CA3AF" strokeDasharray="3 3" />

            {companies.map((company, i) => (
              <Line
                key={company}
                type="monotone"
                dataKey={company}
                name={company}
                stroke={palette[i % palette.length]}
                strokeWidth={2}
                dot={{ r: 2 }}
                activeDot={{ r: 4 }}
                connectNulls
                strokeLinecap="round"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
