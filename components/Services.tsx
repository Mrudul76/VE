import { services } from "../data/services";

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#090932] mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((services, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#090932]">
                {services.title}
              </h3>

              <p className="text-gray-600">
                {services.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}