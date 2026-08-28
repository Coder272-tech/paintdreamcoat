import { siteContent } from "@/lib/content";

export default function Services() {
  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="container-site">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Our Services
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {siteContent.services.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="group bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[4/3] bg-gray-300">
                    <div className="flex h-full items-center justify-center text-sm text-gray-500">
                      IMAGE
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold group-hover:underline">
                      {service.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}