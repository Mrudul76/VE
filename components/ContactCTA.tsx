export default function ContactCTA() {
  return (
    <section className="py-20 bg-[#090932] text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Let's Plan Your Dream Event
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Contact us today and make your special moments unforgettable.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <button className="bg-white text-[#090932] px-6 py-3 rounded-lg font-semibold">
            Call Now
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            WhatsApp Us
          </button>

        </div>

      </div>
    </section>
  );
}