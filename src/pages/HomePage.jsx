import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.png')]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-dark z-10" />
        <div className="container mx-auto px-6 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter"
          >
            We Build Brands <br className="hidden md:block" /> People{' '}
            <span className="gradient-text">Obsess</span> Over.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A full-stack creative agency for the next generation of builders. We combine
            design, development, and strategy to create digital experiences that demand
            attention.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="/services"
              className="gradient-bg text-white font-bold py-4 px-10 rounded-full text-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee Section */}
      <section className="py-12 border-y border-gray-800 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-content">
          <div className="flex items-center text-2xl font-semibold text-gray-600">
            <span className="mx-8">BRANDING</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">DEVELOPMENT</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">UI/UX DESIGN</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">E-COMMERCE</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">CONTENT-CREATION</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">WEBSITE DESIGN</span>
          </div>
          <div
            className="flex items-center text-2xl font-semibold text-gray-600"
            aria-hidden="true"
          >
            <span className="mx-8">BRANDING</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">DEVELOPMENT</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">UI/UX DESIGN</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">E-COMMERCE</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">CONTENT-CREATION</span>
            <span className="gradient-text mx-4 text-4xl">•</span>
            <span className="mx-8">WEBSITE DESIGN</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We're a one-stop-shop for bringing ambitious ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user experiences that captivate and convert."
  },
  {
    title: "Web Development",
    description: "Building blazingly fast, scalable, and responsive websites from the ground up."
  },
  {
    title: "Digital Marketing",
    description: "Driving growth through strategic digital marketing campaigns and analytics."
  }
];

export default HomePage;