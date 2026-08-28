import { siteContent } from "@/lib/content";

export default function Introduction() {
  const { introduction } = siteContent;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-site">
        <div className="grid-12">
          <div className="col-span-12 mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl text-gray-900 mb-8">
              {introduction.title}
            </h2>
            
            <div className="h-1 w-24 bg-red-700 mx-auto mb-8 rounded-full"></div>

            {introduction.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mt-6 text-lg leading-8 text-gray-700"
              >
                {paragraph}
              </p>
            ))}

            <a
              href={introduction.buttonHref}
              className="mt-10 inline-block bg-blue-900 hover:bg-blue-800 px-10 py-4 font-bold text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {introduction.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
