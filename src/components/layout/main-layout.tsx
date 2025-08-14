type Props = {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return <main className="p-8">{children}</main>
}
