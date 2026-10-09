import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="bg-gray-50 py-16 md:py-20">
        <div className="container-site max-w-3xl mx-auto space-y-12">
          
          {/* Contact Section */}
          <section className="bg-white p-8 md:p-12 rounded-xl shadow-lg space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Contact Dreamcoat
              </h1>
              <p className="text-lg text-gray-600 italic">
                &ldquo;Brightening Your World . . .&rdquo;
              </p>
            </div>

            <div className="flex justify-center pt-4">
              {/* Contact Details Card */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 space-y-6 w-full max-w-lg">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">David Druitt</h2>
                  <p className="text-gray-600 font-medium text-lg">Master Painter</p>
                </div>

                <div className="space-y-4 text-gray-700 text-lg">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">Phone:</span>
                    <a href="tel:7036266516" className="text-blue-700 hover:underline">
                      (703) 626-6516
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">Email:</span>
                    <a href="mailto:dcdave0@gmail.com" className="text-blue-700 hover:underline">
                      dcdave0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-red-700">
                    We aren&apos;t asking for a handout, we are asking for work.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}