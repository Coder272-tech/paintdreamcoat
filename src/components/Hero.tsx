import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-800">
      <div className="container-site">
        <div className="grid-12">
          <div className="col-span-12 relative flex min-h-[480px] items-center justify-center overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white blur-3xl"></div>
              <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-blue-300 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 h-24 w-24 rounded-full bg-red-400 blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl px-6 py-20 text-center text-white">
              <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl drop-shadow-lg">
                {hero.title}
              </h2>

              <p className="mt-6 text-xl md:text-2xl font-light drop-shadow-md">
                {hero.subtitle}
              </p>

              <a
                href={hero.buttonHref}
                className="mt-8 inline-block bg-red-700 hover:bg-red-800 px-10 py-4 font-bold text-white rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {hero.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
