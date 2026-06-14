export default function About() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-[#090932] mb-6">
              About Vidhate Events
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              Vidhate Events specializes in creating unforgettable
              celebrations and memorable experiences. From elegant
              weddings and engagements to birthday parties, naming
              ceremonies, and corporate events, we bring creativity,
              professionalism, and attention to detail to every event.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-4">
              Our mission is to transform your vision into reality and
              make every occasion extraordinary.
            </p>
          </div>

          <div className="bg-[#090932] rounded-2xl p-10 text-white">

            <h3 className="text-3xl font-bold mb-6">
              Why Choose Us?
            </h3>

            <ul className="space-y-4">
              <li>✓ Professional Event Planning</li>
              <li>✓ Creative Decoration Ideas</li>
              <li>✓ Affordable Packages</li>
              <li>✓ Experienced Team</li>
              <li>✓ Customer Satisfaction</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}