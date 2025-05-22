import type { ReactNode } from 'react'

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-6 overflow-hidden">
      <div className="w-full max-w-xl">{children}</div>
    </div>
  )
}
