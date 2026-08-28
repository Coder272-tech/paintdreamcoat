import { siteContent } from "@/lib/content";

const missionGradients = [
  "from-red-600 to-blue-800",
  "from-yellow-500 to-orange-600",
  "from-blue-600 to-indigo-800"
];

const missionIcons = ["🇺🇸", "🏆", "🤝"];

export default function Mission() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-site">
        <div className="grid-12 mb-12">
          <div className="col-span-12">
            <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
              Community & Mission
            </h2>
            <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to serving our community and giving second chances
            </p>
          </div>
        </div>

        <div className="grid-12">
          {siteContent.mission.map((section, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <article className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className={`aspect-[8/5] bg-gradient-to-br ${missionGradients[index]} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl opacity-80">
                      {missionIcons[index]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="p-6 border-l-4 border-red-700">
                  <p className="leading-7 text-gray-700 text-base">
                    {section.body}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
