import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="bg-purple-900/20 border-b border-purple-500/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="w-10 h-10" />
              <span className="text-xl font-bold text-purple-200">
                Harry Potter Name Generator
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
