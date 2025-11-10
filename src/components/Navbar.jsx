import { Menu, Book, Gamepad2, Video, Users, Home, LogIn } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-purple-500 rounded-md shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] grid place-items-center text-white font-black select-none">
            🌸
          </div>
          <span className="text-xl font-extrabold text-purple-700 tracking-tight">Bloom English</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-purple-700 font-semibold">
          <a href="#home" className="flex items-center gap-2 hover:text-purple-900 transition-colors"><Home size={18}/> Home</a>
          <a href="#courses" className="flex items-center gap-2 hover:text-purple-900 transition-colors"><Book size={18}/> Courses</a>
          <a href="#games" className="flex items-center gap-2 hover:text-purple-900 transition-colors"><Gamepad2 size={18}/> Games</a>
          <a href="#videos" className="flex items-center gap-2 hover:text-purple-900 transition-colors"><Video size={18}/> Videos</a>
          <a href="#parents" className="flex items-center gap-2 hover:text-purple-900 transition-colors"><Users size={18}/> Parents</a>
        </nav>

        <div className="hidden md:block">
          <a href="#login" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-md shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.15)] transition-all">
            <LogIn size={18}/> Login / Sign Up
          </a>
        </div>

        <button className="md:hidden p-2 rounded bg-purple-50 text-purple-700" aria-label="Menu">
          <Menu/>
        </button>
      </div>
    </header>
  )
}
