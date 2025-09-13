import { useEffect, useRef } from 'react'

const ServicesPage = () => {
  const revealContainerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = revealContainerRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-24" ref={revealContainerRef}>
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter reveal">
            A full-stack suite of <br />
            <span className="gradient-text">creative services.</span>
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto reveal"
            style={{ transitionDelay: '100ms' }}
          >
            From initial concept to final execution, we offer everything you need to build a powerful
            digital presence and a brand that connects with your audience.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-[#111] p-8 rounded-2xl border border-gray-800 reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111] border-y border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Our Technology of Choice</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              We use modern, powerful tools to build the best possible products.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6 reveal">
            {tech.map((t) => (
              <span key={t} className="text-xl font-semibold text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <FAQ />
    </main>
  )
}

const services = [
  { title: 'Web Designing', desc: "Creating visually stunning and modern website designs that capture your brand's essence and provide a seamless user experience." },
  { title: 'UI/UX Designing', desc: 'Deep research, wireframing, and prototyping to design intuitive, user-centric interfaces.' },
  { title: 'Custom Web Development', desc: 'Clean, efficient code. Fast, secure, and scalable websites tailored to your needs.' },
  { title: 'E-commerce Websites', desc: 'Robust stores with secure payments and features designed to maximize your sales.' },
  { title: 'Content Creation', desc: 'Compelling copy, blog posts, and marketing materials that drive action.' },
  { title: 'Email Automations', desc: 'Powerful email marketing funnels to nurture leads and engage customers.' },
]

const tech = ['React', 'Node.js', 'MongoDB', 'Express', 'HTML5', 'CSS3', 'JavaScript', 'Figma']

const Pricing = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Clear pricing for <br />
          <span className="gradient-text">every ambition.</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          No hidden fees, no surprises. Choose a package that fits your goals.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 flex flex-col reveal">
          <h3 className="text-2xl font-bold gradient-text">Launchpad</h3>
          <p className="text-gray-400 mt-2">For startups ready to make a powerful first impression.</p>
          <p className="text-5xl font-bold my-6">₹25,000</p>
          <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> Custom Logo & Brand Guide</li>
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> 5-Page Website (UI/UX + Dev)</li>
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> Mobile Responsive Design</li>
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> Basic SEO Setup</li>
          </ul>
          <a href="/contact" className="w-full mt-auto text-center border border-purple-500 text-purple-400 font-semibold py-3 px-8 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300">Get Started</a>
        </div>
        <div className="bg-[#111] p-8 rounded-2xl border-2 border-purple-500 flex flex-col reveal transform lg:scale-105" style={{ transitionDelay: '150ms' }}>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold gradient-text">Growth</h3>
            <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
          </div>
          <p className="text-gray-400 mt-2">For businesses aiming to scale their digital presence.</p>
          <p className="text-5xl font-bold my-6">₹45,000</p>
          <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> Everything in Launchpad, plus:</li>
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> Up to 10 Pages Website</li>
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> CMS Integration</li>
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> Content Creation (5 blog posts)</li>
          </ul>
          <a href="/contact" className="w-full mt-auto text-center gradient-bg text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity duration-300">Choose Growth</a>
        </div>
        <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 flex flex-col reveal" style={{ transitionDelay: '300ms' }}>
          <h3 className="text-2xl font-bold gradient-text">Custom</h3>
          <p className="text-gray-400 mt-2">For projects with unique, large-scale requirements.</p>
          <p className="text-5xl font-bold my-6">Let's Talk</p>
          <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> Custom Web Applications</li>
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> Advanced E-commerce</li>
            <li className="flex items-center"><span className="text-purple-400 mr-3">✔</span> API Integrations & Automation</li>
          </ul>
          <a href="/contact" className="w-full mt-auto text-center border border-purple-500 text-purple-400 font-semibold py-3 px-8 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300">Book a Call</a>
        </div>
      </div>
    </div>
  </section>
)

const FAQ = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = Array.from(container.querySelectorAll('.faq-item'))
    items.forEach((item) => {
      const button = item.querySelector('.faq-question')
      const answer = item.querySelector('.faq-answer')
      const icon = item.querySelector('.faq-icon')

      const onClick = () => {
        const isOpening = !answer.style.maxHeight
        items.forEach((other) => {
          if (other !== item) {
            const a = other.querySelector('.faq-answer')
            const i = other.querySelector('.faq-icon')
            const h = other.querySelector('h4')
            a.style.maxHeight = null
            i.classList.remove('rotate-45')
            h.classList.remove('gradient-text')
          }
        })
        if (isOpening) {
          answer.style.maxHeight = answer.scrollHeight + 'px'
          icon.classList.add('rotate-45')
          button.querySelector('h4').classList.add('gradient-text')
        } else {
          answer.style.maxHeight = null
          icon.classList.remove('rotate-45')
          button.querySelector('h4').classList.remove('gradient-text')
        }
      }
      button.addEventListener('click', onClick)
    })
  }, [])

  return (
    <section className="py-24 bg-[#111] border-y border-gray-800" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div id="faq-container" className="space-y-4">
          {faqItems.map((q) => (
            <div key={q.q} className="faq-item bg-[#0A0A0A] rounded-lg border border-gray-800 reveal">
              <button className="faq-question flex justify-between items-center w-full p-6 text-left">
                <h4 className="text-xl font-bold text-gray-200">{q.q}</h4>
                <svg className="faq-icon w-6 h-6 text-gray-400 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </button>
              <div className="faq-answer" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
                <p className="text-gray-400 px-6 pb-6">{q.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqItems = [
  { q: "What if I only need one specific service?", a: "While our packages offer the best value, we're happy to discuss à la carte services. Get in touch via our contact page, and we can provide a custom quote for your specific needs." },
  { q: 'What does the project process look like?', a: 'Our process is collaborative and transparent: discovery, strategy, design, development, launch. Regular updates throughout.' },
  { q: "How long does a typical 'Launchpad' project take?", a: 'Usually 4–6 weeks from kickoff to launch, depending on complexity and feedback speed.' },
]

export default ServicesPage


