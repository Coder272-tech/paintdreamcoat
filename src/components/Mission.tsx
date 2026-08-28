import { siteContent } from "@/lib/content";

export default function Mission() {
  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.mission.map((section, index) => (
            <article key={index} className="bg-white">
              <div className="aspect-[8/5] bg-gray-300">
                <div className="flex h-full items-center justify-center text-sm text-gray-500">
                  IMAGE
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-gray-700">
                  {section.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}