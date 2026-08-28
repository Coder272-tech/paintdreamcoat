import { siteContent } from "@/lib/content";

export default function Header() {
  const { brand } = siteContent;

  return (
    <>
      <div className="border-b bg-gray-100 py-2 text-center text-sm italic">
        {siteContent.notice}
      </div>

      <header className="bg-white">
        <div className="container-site grid grid-cols-12 items-center gap-6 py-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <span className="text-xs">LOGO</span>
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  {brand.name}
                </h1>
              </div>
            </div>
          </div>

          <div className="col-span-12 text-left lg:col-span-7 lg:text-right">
            <a
              href={`tel:${brand.phone.replace(/-/g, "")}`}
              className="text-2xl font-bold"
            >
              Call {brand.phone} today
            </a>

            <p className="mt-1 font-semibold">
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