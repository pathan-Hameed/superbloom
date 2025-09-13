const AboutPage = () => {
  return (
    <main className="pt-24">
      <section className="py-24 text-center fade-in">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Founded by builders, <br className="hidden md:block" />
            <span className="gradient-text">for builders.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We're a team of passionate technologists and creatives who got tired of the slow,
            uninspired work of traditional agencies. Superbloom is our answer: a nimble, focused
            unit where passion, craft, and ambition collide to create exceptional digital experiences.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#111] border-y border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Meet The <span className="gradient-text">Founders</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="text-center">
              <img
                src="https://placehold.co/400x400/0A0A0A/333333?text=SMG"
                alt="S. Madhu Goud"
                className="rounded-full w-48 h-48 mx-auto mb-6 border-2 border-gray-700"
              />
              <h3 className="text-3xl font-bold">S. Madhu Goud</h3>
              <p className="gradient-text font-semibold mt-1">Co-Founder & Technical Lead</p>
              <p className="mt-4 text-gray-300 max-w-md mx-auto">
                Madhu is the architectural backbone of Superbloom. A full-stack developer with a
                passion for clean, scalable code, he previously engineered high-traffic backend systems
                for major e-commerce players in India.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://placehold.co/400x400/0A0A0A/333333?text=AHK"
                alt="Abdul Hameed Khan"
                className="rounded-full w-48 h-48 mx-auto mb-6 border-2 border-gray-700"
              />
              <h3 className="text-3xl font-bold">Abdul Hameed Khan</h3>
              <p className="gradient-text font-semibold mt-1">Co-Founder & Creative Director</p>
              <p className="mt-4 text-gray-300 max-w-md mx-auto">
                Abdul architects high-performance front-end solutions, translating ambitious design blueprints into robust and scalable applications. He excels at engineering elegant interfaces with a meticulous focus on performance and code integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;


