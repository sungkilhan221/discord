import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full items-center justify-center">{children}</div>
  )
}

export default Layout
