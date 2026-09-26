export default function HomePage() {
  return (
    <div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-[#121318] border border-[#1e2029] rounded-2xl p-8 sm:p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[420px]">

          <div>
            <span className="text-[#ccff00] font-bold tracking-widest text-xs uppercase mb-3 block">
              WORKOUT LIBRARY
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase text-white tracking-tight mb-4 leading-tight">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock
              it into todays plan, and watch the weeks work add up.
            </p>


            <a>
              href="#library"
              className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg hover:bg-lime-400 transition"
            </a>

            <span>Browse Workouts</span>
            <span>↓</span>

          </div>

          <div className="flex justify-center md:justify-end items-center h-full">
            <div className="w-full max-w-sm h-72 sm:h-80 md:h-96 flex items-center justify-center">
              <img
                src="/banner.png"
                alt="Gym Companion Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}