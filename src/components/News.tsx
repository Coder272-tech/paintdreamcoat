import { siteContent } from "@/lib/content";

const newsAccents = ["border-blue-600", "border-green-600"];
const newsIcons = ["📰", "🏅"];

export default function News() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="container-site">
        <div className="grid-12 mb-12">
          <div className="col-span-12">
            <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
              Dreamcoat News
            </h2>
            <p className="text-center text-xl text-gray-600">
              Recent highlights and community recognition
            </p>
          </div>
        </div>

        <div className="grid-12">
          {siteContent.news.map((article, index) => (
            <div
              key={article.title}
              className="col-span-12 lg:col-span-6"
            >
              <article className={`h-full bg-white rounded-xl shadow-lg overflow-hidden border-l-8 ${newsAccents[index]} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl flex-shrink-0">{newsIcons[index]}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  {article.heading && (
                    <h4 className="mt-4 text-xl font-semibold text-blue-800 bg-blue-50 px-4 py-2 rounded-lg inline-block">
                      {article.heading}
                    </h4>
                  )}

                  {article.subtitle && (
                    <p className="mt-4 font-semibold text-gray-700 italic">
                      {article.subtitle}
                    </p>
                  )}

                  <p className="mt-5 leading-7 text-gray-700">
                    {article.body}
                  </p>

                  <a
                    href={article.href}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-red-700 hover:text-red-800 transition-colors group"
                  >
                    Read more
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
