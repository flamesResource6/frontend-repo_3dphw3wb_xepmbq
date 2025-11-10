export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 bg-gradient-to-b from-white via-purple-50/40 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-700">{title}</h2>
          {subtitle && <p className="mt-1 text-purple-900/70">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
