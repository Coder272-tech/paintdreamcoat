import { siteContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="container-site">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {siteContent.navigation
            .filter((item) => item.label !== "News")
            .map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:underline"
              >
                {item.label === "Services"
                  ? "Our Services"
                  : item.label}
              </a>
            ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Dreamcoat Home Improvement
        </p>
      </div>
    </footer>
  );
}