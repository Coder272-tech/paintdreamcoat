import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TheSeedPage() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="bg-gray-50 py-16 md:py-20">
        <div className="container-site max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Seed is Sprouting
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p className="font-semibold text-xl text-blue-900 border-l-4 border-blue-900 pl-4 py-1">
              Dreamcoat is being honored by the annual Chamber of Commerce award for civic contribution at the annual dinner Dec 14 at the Hilton Springfield.
            </p>

            <p>
              The company exists to give second chances to the down and out, specifically combat veterans and others incarcerated due to drugs and alcohol, and partners with Catholic Charities and Knights of Columbus.
            </p>

            <p className="italic bg-gray-50 p-4 rounded-lg border border-gray-200">
              Our corporate motto is <span className="font-semibold text-gray-900">&ldquo;We aren’t asking for a handout. We are asking for work.&rdquo;</span> Is being honored for our contributions to the community.
            </p>

            <p>
              In this day of disability, opioid addiction, and marginalization of people who still have good hearts and just need 2 or 3 others gathered with them in the name of making a better life for themselves, DREAMCOAT stands in the gap and offers a second chance to do good work!
            </p>

            <p>
              The spiritual value of a man or woman standing on their own two feet (or one and a half, in my case) — the self-respect gained by being responsible and accountable for their own life and helping another with theirs is beyond question.
            </p>

            <p>
              I believe it is the answer to many of the disenfranchisements and disappointments of living a life of self-will without regard for God&apos;s will.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-2xl font-bold text-red-700">
                God blesses an effort of Love!
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}