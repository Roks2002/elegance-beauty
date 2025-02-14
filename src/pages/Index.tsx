
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
    <div className="min-h-screen bg-warm-white text-primary">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094688434-4b19c0f89e95"
            alt="Heavy Equipment"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight font-serif text-white">
            HEAVY EQUIPMENT<br />
            RENTAL
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl font-serif">
            Your trusted partner in heavy equipment solutions across the Greater Toronto Area
          </p>
          <button className="bg-white text-primary px-10 py-4 text-lg font-serif hover:bg-gray-100 transition-colors">
            View Equipment
          </button>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-px">
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
          {
            title: "AERIAL LIFTS",
            subtitle: "Up to 150ft",
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
          },
          {
            title: "COMPACTORS",
            subtitle: "Soil & Asphalt",
            image: "https://images.unsplash.com/photo-1581092458590-1b4c36ec5769",
          },
          {
            title: "TRUCKS",
            subtitle: "Dump & Heavy Haul",
            image: "https://images.unsplash.com/photo-1557459774-3277ef2e1f0e",
          },
        ].map((category, index) => (
          <div
            key={index}
            className="relative h-[60vh] group cursor-pointer overflow-hidden bg-black"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2 font-serif">{category.title}</h3>
              <p className="text-lg text-gray-300 font-serif">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Equipment */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif">
            Featured Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="overflow-hidden mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-158109444${item}327-9b52bd1570c2`}
                    alt={`Equipment ${item}`}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-serif">Equipment {item}</h3>
                <p className="text-gray-600">Daily, Weekly, Monthly Rates</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-6 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-primary px-8 py-4 text-lg font-serif hover:bg-gray-100 transition-colors"
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
