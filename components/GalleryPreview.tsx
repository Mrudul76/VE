export default function GalleryPreview() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#090932] mb-12">
          Our Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img) => (
            <div
              key={img}
              className="h-72 rounded-2xl bg-gray-300 hover:scale-105 transition duration-300"
            />
          ))}

        </div>

      </div>
    </section>
  );
}