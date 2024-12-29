import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children, analytics, team }) {
  return (
    <html lang="en">
      <body className="p-6">
        <div className="p-10 mb-6 bg-sky-600 text-white rounded-xl">Parallel Routes Examples</div>
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/">Home</Link>
          <Link href="/page-views">Page Views</Link>
          <Link href="/visitors">Visitors</Link>
        </nav>
        <div className="flex gap-6">
          <div className="flex-1">{team}</div>
          <div className="flex-1">{analytics}</div>
        </div>
        {children}
      </body>
    </html>
  )
}
