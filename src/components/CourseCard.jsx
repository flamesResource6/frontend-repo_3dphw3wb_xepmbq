import { Star } from 'lucide-react'

export default function CourseCard({ title, description, icon, color="from-pink-400 to-purple-500" }) {
  return (
    <div className="group relative rounded-xl p-5 bg-white border-2 border-purple-100 shadow-[6px_6px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[5px_5px_0_0_rgba(0,0,0,0.1)] transition-all">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} grid place-items-center text-2xl`}>
        {icon || '📘'}
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-purple-700">{title}</h3>
      <p className="mt-1 text-purple-900/70 text-sm">{description}</p>
      <div className="mt-4 flex items-center gap-1 text-yellow-400">
        <Star size={16} fill="#facc15"/><Star size={16} fill="#facc15"/><Star size={16} fill="#facc15"/>
      </div>
      <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md font-bold shadow-[3px_3px_0_0_rgba(0,0,0,0.15)]">Open</button>
      <div className="absolute -z-10 top-3 right-3 text-3xl opacity-20 select-none">✨</div>
    </div>
  )
}
