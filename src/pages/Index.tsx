
import { useEffect, useRef } from "react";
import { Menu } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-warm-white text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
          <div className="text-xl font-bold">GTA Equipment</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-primary/80 hover:text-primary">Work</a>
            <a href="#expertise" className="text-primary/80 hover:text-primary">Expertise</a>
            <a href="#studio" className="text-primary/80 hover:text-primary">Studio</a>
            <button className="bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm">
              Mission
            </button>
            <button className="text-primary border border-primary px-4 py-2 rounded-full text-sm">
              Get in touch
            </button>
          </div>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
            Smart solutions<br />
            for a sustainable future
          </h1>
          <p className="text-lg text-primary/60 mb-4">
            Equipment rental solutions making impact since 1989
          </p>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-white">
        {[
          {
            title: "EXCAVATORS",
            subtitle: "2-40 Tons",
            image: "https://images.unsplash.com/photo-1581094488379-6f42d2cc073c",
          },
          {
            title: "LOADERS",
            subtitle: "Wheel & Track",
            image: "https://images.unsplash.com/photo-1579261767006-76d6156603b0",
          },
          {
            title: "DOZERS",
            subtitle: "All Sizes",
            image: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2",
          },
        ].map((category, index) => (
          <div
            key={index}
            className="relative aspect-square group cursor-pointer overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-primary/40 to-transparent">
              <h3 className="text-2xl font-serif text-white mb-2">{category.title}</h3>
              <p className="text-sm text-white/80">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16">
            Featured Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="overflow-hidden mb-6 aspect-[4/3]">
                  <img
                    src={`https://images.unsplash.com/photo-158109444${item}327-9b52bd1570c2`}
                    alt={`Equipment ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">Equipment {item}</h3>
                <p className="text-sm text-primary/60">Daily, Weekly, Monthly Rates</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white rounded-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white rounded-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-6 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white rounded-none"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-primary px-8 py-4 text-sm font-serif hover:bg-gray-100 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
