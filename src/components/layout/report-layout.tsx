type Props = {
  children: React.ReactNode
}

export function ReportLayout({ children }: Props) {
  return (
    <main>
      <div className="grid grid-cols-2 gap-2">{children}</div>
      <section></section>
    </main>
  )
}
