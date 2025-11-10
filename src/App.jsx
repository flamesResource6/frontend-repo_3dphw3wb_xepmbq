import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import CourseCard from './components/CourseCard'

function App() {
  return (
    <div className="min-h-screen bg-white text-purple-900">
      <Navbar />
      <Hero />

      <Section id="courses" title="Courses" subtitle="Fun, bite-sized lessons for every age.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard title="Alphabet" description="Learn A-Z with friendly characters and songs." icon="🔤" color="from-pink-400 to-purple-500" />
          <CourseCard title="Basic Words" description="Colors, foods, and things kids see every day." icon="🧸" color="from-green-400 to-teal-500" />
          <CourseCard title="Numbers" description="Count, add, and play with numbers 1-100." icon="🔢" color="from-sky-400 to-blue-500" />
          <CourseCard title="Animals" description="Roaring lions and tiny ants—learn their names!" icon="🐾" color="from-amber-400 to-orange-500" />
          <CourseCard title="Sentences" description="Put words together to talk about your world." icon="💬" color="from-fuchsia-400 to-pink-500" />
          <CourseCard title="Stories" description="Short tales with audio and highlighted text." icon="📖" color="from-violet-400 to-indigo-500" />
        </div>
      </Section>

      <Section id="games" title="Games & Quizzes" subtitle="Playful challenges to practice new skills.">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 bg-white border-2 border-purple-100 shadow-[6px_6px_0_0_rgba(0,0,0,0.1)]">
            <h3 className="text-xl font-extrabold text-purple-700">Matching Game</h3>
            <p className="mt-1 text-sm">Match pictures to words. Great for vocabulary!</p>
            <a href="#" className="inline-block mt-4 px-4 py-2 bg-pink-500 text-white rounded-md font-bold shadow-[3px_3px_0_0_rgba(0,0,0,0.15)]">Play</a>
          </div>
          <div className="rounded-xl p-6 bg-white border-2 border-purple-100 shadow-[6px_6px_0_0_rgba(0,0,0,0.1)]">
            <h3 className="text-xl font-extrabold text-purple-700">Word Builder</h3>
            <p className="mt-1 text-sm">Drag letters to form words. Perfect for beginners.</p>
            <a href="#" className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-md font-bold shadow-[3px_3px_0_0_rgba(0,0,0,0.15)]">Play</a>
          </div>
        </div>
      </Section>

      <Section id="videos" title="Videos" subtitle="Sing along and learn with our friendly hosts.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="aspect-video rounded-xl overflow-hidden border-2 border-purple-100 shadow-[6px_6px_0_0_rgba(0,0,0,0.1)] bg-gradient-to-br from-purple-100 to-pink-100 grid place-items-center text-4xl">🎬</div>
          ))}
        </div>
      </Section>

      <Section id="parents" title="For Parents" subtitle="Guidance, tips, and progress tracking.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 bg-white border-2 border-purple-100 shadow-[6px_6px_0_0_rgba(0,0,0,0.1)]">
            <h3 className="text-xl font-extrabold text-purple-700">How It Works</h3>
            <p className="mt-2 text-sm">Short daily lessons, playful practice, and a reward system keep kids motivated.</p>
          </div>
          <div className="rounded-xl p-6 bg-white border-2 border-purple-100 shadow-[6px_6px_0_0_rgba(0,0,0,0.1)]">
            <h3 className="text-xl font-extrabold text-purple-700">Progress & Rewards</h3>
            <p className="mt-2 text-sm">Kids earn pixel badges and stars for completing lessons. A cheerful trophy case celebrates milestones.</p>
          </div>
        </div>
      </Section>

      <footer className="bg-white border-t border-purple-100">
        <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="font-extrabold text-purple-700 text-lg">Bloom English</p>
            <p className="mt-2 text-purple-900/70">Playful English lessons for kids aged 4–12.</p>
          </div>
          <div>
            <p className="font-bold text-purple-700">Explore</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#courses" className="hover:text-purple-900">Courses</a></li>
              <li><a href="#games" className="hover:text-purple-900">Games</a></li>
              <li><a href="#videos" className="hover:text-purple-900">Videos</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-purple-700">Parents</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#parents" className="hover:text-purple-900">Tips</a></li>
              <li><a href="#" className="hover:text-purple-900">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-purple-700">Contact</p>
            <p className="mt-2">hello@bloomenglish.example</p>
            <div className="mt-3 flex gap-2 text-lg">
              <span>🌟</span><span>📘</span><span>🎮</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-purple-900/60 pb-6">© {new Date().getFullYear()} Bloom English</div>
      </footer>
    </div>
  )
}

export default App
