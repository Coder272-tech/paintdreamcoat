import { siteContent } from "@/lib/content";

export default function Introduction() {
  const { introduction } = siteContent;

  return (
    <section className="py-16 md:py-20">
      <div className="container-site">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              {introduction.title}
            </h2>

            {introduction.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-lg leading-8 text-gray-700"
              >
                {paragraph}
              </p>
            ))}

            <a
              href={introduction.buttonHref}
              className="mt-8 inline-block bg-gray-900 px-8 py-4 font-bold text-white"
            >
              {introduction.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}