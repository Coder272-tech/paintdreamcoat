import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative bg-gray-700">
      <div className="container-site">
        <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gray-700" />

          <div className="relative z-10 max-w-3xl px-6 py-20 text-center text-white">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              {hero.title}
            </h2>

            <p className="mt-6 text-xl">
              {hero.subtitle}
            </p>

            <a
              href={hero.buttonHref}
              className="mt-8 inline-block bg-white px-8 py-4 font-bold text-gray-900"
            >
              {hero.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}