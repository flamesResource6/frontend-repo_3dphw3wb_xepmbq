import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4">
        <div className="bg-white/70 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)]">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-purple-700 leading-tight">
            Learn English the Fun Way!
          </h1>
          <p className="mt-3 sm:mt-4 text-purple-800/80 text-base sm:text-lg max-w-xl">
            Colorful lessons, friendly characters, and playful games that help kids grow their English every day.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#courses" className="px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.15)] transition-all">Start Learning</a>
            <a href="/test" className="px-5 py-3 bg-white text-purple-700 font-bold rounded-lg border-2 border-purple-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:bg-purple-50 transition-all">Check System</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
