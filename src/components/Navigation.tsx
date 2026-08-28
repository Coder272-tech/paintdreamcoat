import { siteContent } from "@/lib/content";

export default function Navigation() {
  return (
    <nav className="border-y bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4">
          {siteContent.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-semibold transition-all hover:text-red-400 hover:scale-110 px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
