export default function Hero() {
  return (
    <section className="bg-[#090932] text-white min-h-[80vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transforming
          <br />
          Moments Into
          <br />
          Memories
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Wedding Decorations, Birthday Celebrations,
          Engagement Ceremonies, Naming Ceremonies
          and Corporate Events.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-[#090932] px-6 py-3 rounded-lg font-semibold">
            Book Event
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            View Gallery
          </button>
        </div>

      </div>

    </section>
  );
}