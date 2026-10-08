import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ChamberAwardPage() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="bg-gray-50 py-16">
        <div className="container-site max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Chamber of Commerce Awards Ceremony
          </h1>
          <h2 className="text-xl font-semibold text-blue-800 mb-6">
            Veteran Community Service Award - The Greater Springfield Chamber of Commerce
          </h2>

          <div className="my-8 flex justify-center">
            <div className="overflow-hidden rounded-lg shadow-md" style={{ width: "469px", maxWidth: "100%" }}>
              <Image
                src="/images/david-chamber-award.jpg"
                alt="David Druitt receiving the award / playing music"
                width={469}
                height={352}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              On behalf of the Greater Springfield Chamber of Commerce Veterans Committee, it is my honor to present the Veteran Community Service Award to David Druitt for his dedicated service to the Greater Springfield community.
            </p>
            <p>
              David’s story begins a few years back: after graduating from Episcopal High School in Alexandria with honors, he decided to study computer science. He had been in college little more than a semester when he was &quot;yanked out to go to war.&quot; That war was Vietnam. He underwent training for about a year before he stepped foot in Indochina (today&apos;s Vietnam, Cambodia and Laos). Though David came out alive, he clung to the idea that his time was short, so when he returned to the United States, he committed himself to &quot;drinking and trouble.&quot; He worked for a national security team for 25 years — until his PTSD flared up in a way that pushed him to seek a spiritual solution. A near fatal auto accident in 2001 finalized his decision.
            </p>
            <p>
              Soon his life revolved around church, prayer groups, prison ministries and Alcoholics Anonymous. With his military background, struggles with PTSD and alcohol, David was an immediate hit with the men he was meeting in prison. He had experienced much of their pain in his own life and worked his way through it. His was a success story that could motivate many of these men to start or continue their own lives of transformation. One of the major needs of people in recovery or coming out of prison/jail is work. Men and women being released from jail or prison in Virginia generally walk out the door with the clothes on their backs and $25 in their pocket. Often they have no place to go and no job or family support.
            </p>
            <p>
              Since he could no longer work in an office due to his own extreme anxiety, David went door to door around his neighborhood and offered painting services. Little by little, he asked some of the ex-convicts he met to join him. Then, in 2012, he started DreamCoat Quality Painting, a home improvement company that employs male and female ex-convicts. Needless to say, this is a very risky business adventure. It is one thing to have one or two marginal employees on the payroll, but to have a business venture in which the entire operation is made up of marginal people is a tremendous risk. It requires an amazing amount of faith on the part of the employer. But that is precisely what David has done.
            </p>
            <p>
              David recently celebrated 17 years of sobriety with AA and has a lovely wife, Kathleen, and two daughters for whom he cares deeply. They lost their house to fire recently and then David had a paralyzing stroke — but through it all he has been a rock for his family, for the Veterans and convicts he works with and ministers to, and all with whom he comes in contact. According to long-time friend, Jim Bayne, &quot;This is perhaps a good way to describe Dave Druitt: a man dedicated to saving lives; one person and one day at a time. I am grateful for having Dave in my life. He is a very special person to me and a whole lot of other people.&quot;
            </p>
            <p>
              Through his hard work, dedication and selfless giving, David exemplifies the spirit behind the Greater Springfield Chamber Community Service Award and is most deserving of this recognition. Congratulations!
            </p>
          </div>

          {/* Quotations Section */}
          <div className="mt-12 border-t border-gray-200 pt-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Inspirational Reflections</h3>
            
            <blockquote className="border-l-4 border-red-700 pl-4 italic text-gray-700">
              &quot;Everyone you meet is fighting a battle you know nothing about. Be kind. Always.&quot; 
              <span className="block not-italic font-semibold text-gray-900 mt-1">— Robin Williams</span>
            </blockquote>

            <blockquote className="border-l-4 border-blue-900 pl-4 italic text-gray-700">
              &quot;I did not seek a new worldview; rather I went in search of truth and found love at the heart of all things. All knowledge is true knowledge—whether in the sciences or in the humanities—if it moves one to fall more deeply in love.&quot;
              <span className="block not-italic font-semibold text-gray-900 mt-1">— Ilia Delio</span>
            </blockquote>

            <blockquote className="border-l-4 border-red-700 pl-4 italic text-gray-700">
              &quot;Love cures people, both the ones who give it and the ones who receive it.&quot;
              <span className="block not-italic font-semibold text-gray-900 mt-1">— Dr. Karl Menninger</span>
            </blockquote>

            <blockquote className="border-l-4 border-blue-900 pl-4 italic text-gray-700">
              &quot;We are not held back by the love we didn&apos;t receive in the past, but by the love we&apos;re not extending in the present.&quot;
              <span className="block not-italic font-semibold text-gray-900 mt-1">— Marianne Williamson</span>
            </blockquote>

            <blockquote className="border-l-4 border-red-700 pl-4 italic text-gray-700">
              &quot;In every community, there is work to be done. In every nation, there are wounds to heal. In every heart, there is the power to do it.&quot;
              <span className="block not-italic font-semibold text-gray-900 mt-1">— Marianne Williamson</span>
            </blockquote>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}