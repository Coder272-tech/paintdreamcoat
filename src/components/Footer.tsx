import { siteContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12 text-white border-t-4 border-red-700">
      <div className="container-site">
        <div className="grid-12 mb-8">
          <div className="col-span-12 text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl mb-4">
              <span className="text-3xl font-bold text-white">DC</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Dreamcoat Home Improvement</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {siteContent.brand.secondaryTagline}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          {siteContent.navigation
            .filter((item) => item.label !== "News")
            .map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-red-400 transition-colors font-semibold"
              >
                {item.label === "Services"
                  ? "Our Services"
                  : item.label}
              </a>
            ))}
        </div>

        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dreamcoat Home Improvement. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            God, Family & Country
          </p>
        </div>
      </div>
    </footer>
  );
}
