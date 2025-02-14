
import { useEffect, useRef } from "react";
import { Construction, Truck, MapPin, Phone } from "lucide-react";

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
    <div className="min-h-screen bg-primary text-primary-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
            alt="Heavy Equipment"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            EQUIPMENT<br />RENTALS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Your trusted partner in heavy equipment brokerage across the Greater Toronto Area
          </p>
          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded text-lg font-semibold hover-scale">
            View Equipment
          </button>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {[
          {
            title: "HEAVY EQUIPMENT",
            image: "https://images.unsplash.com/photo-1581094688434-4b19c0f89e95",
          },
          {
            title: "CLIMATE CONTROL",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
          },
          {
            title: "SAFETY EQUIPMENT",
            image: "https://images.unsplash.com/photo-1516822669470-7f8c2b9b7740",
          },
          {
            title: "POWER SOLUTIONS",
            image: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2",
          },
        ].map((category, index) => (
          <div
            key={index}
            className="relative h-80 group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                <p className="text-gray-200 mt-2">Click to explore →</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Equipment */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
                <img
                  src={`https://images.unsplash.com/photo-158109444${item}327-9b52bd1570c2`}
                  alt={`Equipment ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Equipment {item}</h3>
                  <p className="text-sm text-gray-600">Daily, Weekly, Monthly Rates Available</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">
            Get in Touch
          </h2>
          <div className="glass-card p-8 rounded-xl animate-on-scroll">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Phone className="w-6 h-6" />
              <span className="text-xl">Call us: (416) 555-0123</span>
            </div>
            <form className="space-y-6 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-secondary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-secondary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-secondary"
              ></textarea>
              <button
                type="submit"
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover-scale w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
