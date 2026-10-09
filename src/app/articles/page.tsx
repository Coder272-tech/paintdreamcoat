import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteContent } from "@/lib/content";
import Link from "next/link";

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="bg-gray-50 py-16 md:py-20">
        <div className="container-site max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dreamcoat Articles & News
            </h1>
            <p className="text-xl text-gray-600">
              Recent highlights, community recognition, and stories
            </p>
          </div>

          <div className="grid gap-8">
            {siteContent.news.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-xl shadow-md p-8 border-l-8 border-red-700 hover:shadow-xl transition-all"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h2>

                {article.heading && (
                  <span className="inline-block bg-blue-50 text-blue-800 font-semibold px-3 py-1 rounded-lg text-sm mb-3">
                    {article.heading}
                  </span>
                )}

                {article.subtitle && (
                  <p className="font-semibold text-gray-700 italic mb-3">
                    {article.subtitle}
                  </p>
                )}

                <p className="text-gray-700 leading-relaxed mb-6">
                  {article.body}
                </p>

                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 font-bold text-red-700 hover:text-red-800 transition-colors"
                >
                  Read full article &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}