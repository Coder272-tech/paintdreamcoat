import { siteContent } from "@/lib/content";

export default function Navigation() {
  return (
    <nav className="border-y bg-gray-900 text-white">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4">
          {siteContent.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-semibold transition-opacity hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}