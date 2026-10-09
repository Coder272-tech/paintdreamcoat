import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="bg-gray-50 py-16">
        <div className="container-site max-w-5xl mx-auto space-y-16">
          
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Home Improvement & Painting Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional quality workmanship inside and outside your home. Certified, insured, and 100% guaranteed.
            </p>
          </div>

          {/* 1. Painting */}
          <section id="goto-painting" className="bg-white p-8 rounded-xl shadow-md scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Painting</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  From meticulous interior painting to durable exterior siding coats, our team provides full preparation, power washing, priming, and expert finishing. We ensure clean lines and long-lasting protection against the elements.
                </p>
                <p className="text-sm font-semibold text-red-700">
                  All work is fully guaranteed. If you are dissatisfied, then so are we.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-lg shadow" style={{ width: "403px", maxWidth: "100%" }}>
                  <Image
                    src="/images/1FA1A412-5D45-4866-87C2-DA1140E224F8.jpg" 
                    alt="Worker painting siding on a ladder"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 2. Custom Accent Walls, Concrete & Brick */}
          <section id="goto-sidewalk" className="bg-white p-8 rounded-xl shadow-md scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Accent Walls, Concrete & Brick</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Transform your living spaces with custom accent walls that add character and depth. We also handle specialized concrete repairs, masonry work, walkway maintenance, and brick upkeep around your property.
                </p>
                <p>
                  We combine skilled craftsmanship with rugged dependability to handle structural upgrades safely and precisely.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-lg shadow" style={{ width: "403px", maxWidth: "100%" }}>
                  <Image
                    src="/images/B8B3D90A-3332-4F00-A45A-F2727843BCC3.jpg" 
                    alt="Concrete and brick demolition and repair work"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Carpentry & Cabinetry */}
          <section id="goto-carpentry" className="bg-white p-8 rounded-xl shadow-md scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Carpentry & Cabinetry</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our carpentry team tackles custom woodwork, trim installation, framing repairs, and cabinetry restorations. Whether you need custom shelving or structural framing fixes, we build with precision and strength.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-lg shadow" style={{ width: "403px", maxWidth: "100%" }}>
                  <Image
                    src="/images/386BA1CB-97FC-453C-8653-E276CB4ACD4E.jpg" 
                    alt="Carpentry work and cutting wood"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Doors & Windows */}
          <section id="goto-windows" className="bg-white p-8 rounded-xl shadow-md scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Doors & Windows</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Enhance your home&apos;s security, energy efficiency, and curb appeal with professional door and window installation, wood staining, weatherproofing, and frame replacements.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-lg shadow" style={{ width: "403px", maxWidth: "100%" }}>
                  <Image
                    src="/images/IMG_5322.jpg" 
                    alt="Staining and finishing wooden doors"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 5. Deck & Patio */}
          <section id="goto-decks" className="bg-white p-8 rounded-xl shadow-md scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deck & Patio</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Enjoy your outdoor living spaces to the fullest. We build, stain, seal, and repair wooden decks, patios, railings, and outdoor structures to keep them safe and beautiful year-round.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-lg shadow" style={{ width: "403px", maxWidth: "100%" }}>
                  <Image
                    src="/images/17092FE0-1C1F-4E44-892A-F6A4C1734B40.jpg" 
                    alt="Completed deck and patio structure"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 6. Handyman Services */}
          <section id="goto-handyman" className="bg-white p-8 rounded-xl shadow-md scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Handyman Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Got a list of household repairs? Our reliable handyman services cover general maintenance, hardware fixes, fixture updates, gate repairs, and odd jobs around your property.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-lg shadow" style={{ width: "403px", maxWidth: "100%" }}>
                  <Image
                    src="/images/27A00FC7-B208-4DCB-9AE7-25999A9714F6.jpg" 
                    alt="Handyman gate and hardware repair"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-cover"
                  />
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