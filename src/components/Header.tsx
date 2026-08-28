import { siteContent } from "@/lib/content";

export default function Header() {
  const { brand } = siteContent;

  return (
    <>
      <div className="border-b bg-blue-900 py-2 text-center text-sm italic text-white">
        {siteContent.notice}
      </div>

      <header className="bg-white shadow-md">
        <div className="container-site grid-12 items-center py-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg">
                <span className="text-2xl font-bold text-white">DC</span>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {brand.name}
                </h1>
              </div>
            </div>
          </div>

          <div className="col-span-12 text-left lg:col-span-7 lg:text-right mt-4 lg:mt-0">
            <a
              href={`tel:${brand.phone.replace(/-/g, "")}`}
              className="text-2xl font-bold text-red-700 hover:text-red-800 transition-colors"
            >
              📞 Call {brand.phone} today
            </a>

            <p className="mt-1 font-semibold text-gray-800">
              {brand.tagline}
            </p>

            <p className="mt-1 text-sm text-gray-600">
              {brand.secondaryTagline}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
