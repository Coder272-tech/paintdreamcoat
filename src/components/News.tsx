import { siteContent } from "@/lib/content";

export default function News() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-site">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <h2 className="mb-10 text-3xl font-bold">
              Dreamcoat News
            </h2>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {siteContent.news.map((article) => (
                <article key={article.title} className="border-t-4 pt-6">
                  <h3 className="text-2xl font-bold">
                    {article.title}
                  </h3>

                  {article.heading && (
                    <h4 className="mt-4 text-xl font-semibold">
                      {article.heading}
                    </h4>
                  )}

                  {article.subtitle && (
                    <p className="mt-4 font-semibold text-gray-700">
                      {article.subtitle}
                    </p>
                  )}

                  <p className="mt-5 leading-7 text-gray-700">
                    {article.body}
                  </p>

                  <a
                    href={article.href}
                    className="mt-5 inline-block font-bold underline"
                  >
                    Read more
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}