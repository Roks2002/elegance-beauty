
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden section-padding">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
            alt="Heavy Equipment"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Heavy Equipment Solutions in GTA
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Your trusted partner in heavy equipment brokerage across the Greater Toronto Area
          </p>
          <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover-scale">
            Explore Equipment
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Construction className="w-8 h-8 mb-4" />,
                title: "Equipment Sourcing",
                description: "Access to a vast network of premium heavy equipment suppliers",
              },
              {
                icon: <Truck className="w-8 h-8 mb-4" />,
                title: "Logistics Support",
                description: "Seamless delivery and transportation services across GTA",
              },
              {
                icon: <MapPin className="w-8 h-8 mb-4" />,
                title: "Local Expertise",
                description: "Deep understanding of GTA's construction equipment market",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl text-center animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
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
