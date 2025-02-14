
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
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
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
        <div className="max-w-[1680px] mx-auto">
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
          {
            title: "AERIALS",
            subtitle: "All Sizes",
            image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182",
          },
          {
            title: "TRUCKS",
            subtitle: "Dump & Haul",
            image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745",
          },
          {
            title: "COMPACTORS",
            subtitle: "Soil & Asphalt",
            image: "https://images.unsplash.com/photo-1580974511812-4b7196e4b425",
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

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/10">
        <div className="max-w-[1680px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl">
              Join us in accelerating transitions to a sustainable future.
            </h2>
            <p className="mt-6 text-lg text-primary/70">
              Contact us today to make a difference together.
            </p>
            <button className="mt-8 bg-secondary text-white px-6 py-3 rounded-full text-sm hover:bg-secondary/90 transition-colors">
              Let's go!
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-primary/10">
            <div>
              <h3 className="font-bold mb-6">GTA Equipment</h3>
              <p className="text-sm text-primary/70 max-w-xs">
                Smart solutions for a sustainable future
              </p>
            </div>
            
            <div>
              <div className="space-y-3">
                <a href="#transitions" className="block text-sm text-primary/70 hover:text-primary">Transitions</a>
                <a href="#services" className="block text-sm text-primary/70 hover:text-primary">Services</a>
                <a href="#industries" className="block text-sm text-primary/70 hover:text-primary">Industries</a>
                <a href="#mission" className="block text-sm text-primary/70 hover:text-primary">Mission</a>
              </div>
            </div>

            <div>
              <div className="space-y-3">
                <a href="#about" className="block text-sm text-primary/70 hover:text-primary">About</a>
                <a href="#work" className="block text-sm text-primary/70 hover:text-primary">Work</a>
                <button className="text-sm text-secondary hover:text-secondary/80">Mission</button>
              </div>
            </div>

            <div>
              <div className="space-y-3">
                <p className="text-sm text-primary/70">123 Equipment Drive</p>
                <p className="text-sm text-primary/70">Toronto, ON M5V 2T6</p>
                <a href="mailto:design@gta.equipment" className="block text-sm text-primary/70 hover:text-primary">design@gta.equipment</a>
                <a href="tel:+16475551234" className="block text-sm text-primary/70 hover:text-primary">+1 (647) 555-1234</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 pt-8 border-t border-primary/10">
            <div className="text-sm text-primary/50">
              © 2024 GTA Equipment
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#terms" className="text-sm text-primary/50 hover:text-primary">Terms & Conditions</a>
              <a href="#privacy" className="text-sm text-primary/50 hover:text-primary">Privacy Policy</a>
              <a href="#cookies" className="text-sm text-primary/50 hover:text-primary">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
