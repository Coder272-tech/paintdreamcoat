import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="bg-gray-50 py-16 md:py-20">
        <div className="container-site max-w-4xl mx-auto space-y-12">
          
          {/* About / Mission Section */}
          <section className="bg-white p-8 md:p-12 rounded-xl shadow-lg space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Dreamcoat Home Improvement
            </h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="font-semibold text-gray-900 text-xl border-l-4 border-red-700 pl-4 py-1">
                The mission of Dreamcoat is to help people who have struggled or who are struggling with combat PTSD — whether the combat was in a war zone, a bottle, or a prison cell.
              </p>
              
              <p>
                PTSD is characterized by ‘damage or destruction of the belief system’.
              </p>

              <p>
                Dreamcoat enables those who are ready to work, to rebuild their spirits while they rebuild houses. Money is not our focus, but our employees are learning to pay their way in life. Dreamcoat’s work is always a spiritual vocation, focusing on high quality work for our customers while providing spiritual development and support for our employees.
              </p>

              <p className="italic bg-gray-50 p-4 rounded-lg border border-gray-200">
                Our Corporate Motto is: <span className="font-semibold text-gray-900">&ldquo;we aren’t asking for a handout, we are asking for work&rdquo;</span>, although we do accept contributions to make it possible for our workers to work and still pay bills.
              </p>
            </div>
			
			            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Dreamcoat Testimony
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Douglas Kozich</h3>
              
              <blockquote className="italic text-gray-700 text-lg leading-relaxed border-l-4 border-blue-900 pl-4 py-2 space-y-4">
                <p>
                  &ldquo;My name is Douglas and the following events are true: I met Dave Druitt of Dreamcoat at a meeting inside the Fairfax ADC. He amazed me with his life story and backed up every promise with real action.&rdquo;
                </p>
                <p>
                  &ldquo;He made sure that money was always on his phone so that I could call him to plan my departure or just talk recovery. And when it was time to work, I was pleasantly surprised. He paid me immediately because I was in dire straits, and even walked up to me two hours before quitting and put my day pay in my hand, giving a compliment to my performance, my work ethic and expressing his gratitude.&rdquo;
                </p>
                <p>
                  &ldquo;David says what he means and means what he says; in a world of question marks he&apos;s an exclamation point! Thank you.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Photo Gallery: Team & Community */}
            <div className="mt-10 space-y-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Our Community & Team</h2>

              {/* Grid 1: Team & Selfies */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/0E5EB6A8-BD6B-4AD6-AF90-1B2EC368EF2D.jpg"
                      alt="Team selfie outside"
                      width={3088}
                      height={2316}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center italic">Team selfie outside</p>
                </div>

                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/D7AF0A35-AA17-496A-998C-652F61DE2F0D.jpg"
                      alt="Dreamcoat team in tie-dye shirts"
                      width={4032}
                      height={3024}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center italic">Dreamcoat team tie-dye shirts</p>
                </div>
              </div>

              {/* Grid 2: Ministry & Partnerships */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/IMG_8110.jpg"
                      alt="Dave Druitt with priest partner"
                      width={3024}
                      height={4032}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center italic">Dave Druitt with priest partner</p>
                </div>

                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/IMG_3771.jpg"
                      alt="Foot-washing ministry event"
                      width={4032}
                      height={3024}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center italic">Foot-washing ministry event</p>
                </div>
              </div>

              {/* Grid 3: Personal Moments & Metaphors */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/IMG_5199.jpg"
                      alt="Touching moment in wheelchair"
                      width={3024}
                      height={4032}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center italic">Touching moment in wheelchair</p>
                </div>

                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/B7F514C3-6CDB-4F9F-93D7-1D5BDB1BD74D.jpg"
                      alt="Team member with heavy chains"
                      width={3024}
                      height={4032}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center italic">Team member with heavy chains</p>
                </div>
              </div>

              {/* Grid 4: Gatherings & Events */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/CABF4059-C6AE-4A1B-BF6E-BF6F8B821301.jpg"
                      alt="Dave in top hat"
                      width={4032}
                      height={3024}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center italic">Dave in top hat</p>
                </div>

                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/257A3201-B2E2-49D0-A752-7B72F7140472.jpg"
                      alt="Lunch and barbecue gathering"
                      width={3024}
                      height={4032}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center italic">Lunch/barbecue gathering</p>
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