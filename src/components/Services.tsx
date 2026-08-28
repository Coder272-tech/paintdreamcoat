import { siteContent } from "@/lib/content";

const serviceColors = [
  "from-blue-500 to-blue-700",
  "from-purple-500 to-purple-700",
  "from-green-500 to-green-700",
  "from-orange-500 to-orange-700",
  "from-teal-500 to-teal-700",
  "from-red-500 to-red-700"
];

const serviceIcons = ["🎨", "🧱", "🔨", "🚪", "🏡", "🔧"];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container-site">
        <div className="grid-12">
          <div className="col-span-12">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
              Our Services
            </h2>
          </div>

          {siteContent.services.map((service, index) => (
            <div
              key={service.title}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <a
                href={service.href}
                className="group block h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${serviceColors[index]} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-90 group-hover:scale-110 transition-transform duration-300">
                      {serviceIcons[index]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <div className="mt-3 h-1 w-12 bg-red-700 rounded-full group-hover:w-20 transition-all duration-300"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
