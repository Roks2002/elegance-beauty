
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

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1680px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
            Your trusted equipment<br />
            rental partner in the GTA
          </h1>
          <p className="text-lg text-primary/60 mb-4">
            Connecting contractors with premium equipment since 2014
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-white">
        {[
          {
            title: "EXCAVATORS",
            subtitle: "2-40 Tons",
            image: "https://images.unsplash.com/photo-1533064234578-8fa3fb5e7c74",
          },
          {
            title: "LOADERS",
            subtitle: "Wheel & Track",
            image: "https://images.unsplash.com/photo-1514346267951-317c42ce4918",
          },
          {
            title: "DOZERS",
            subtitle: "All Sizes",
            image: "https://images.unsplash.com/photo-1573611030146-ff6916c398fa",
          },
          {
            title: "AERIALS",
            subtitle: "All Sizes",
            image: "https://images.unsplash.com/photo-1541625602330-2277a4c4b425",
          },
          {
            title: "TRUCKS",
            subtitle: "Dump & Haul",
            image: "https://images.unsplash.com/photo-1592805144716-feeccccef5ac",
          },
          {
            title: "COMPACTORS",
            subtitle: "Soil & Asphalt",
            image: "https://images.unsplash.com/photo-1578687356165-780829c6d929",
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

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Areas We Cover
          </h2>
          <p className="text-lg text-primary/70 mb-12">
            Serving the Greater Toronto Area and Beyond
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-xl mb-4">City of Toronto</h3>
              <ul className="space-y-2 text-primary/70">
                <li>Toronto (Downtown)</li>
                <li>North York</li>
                <li>Scarborough</li>
                <li>Etobicoke</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Peel & Halton Region</h3>
              <ul className="space-y-2 text-primary/70">
                <li>Mississauga</li>
                <li>Brampton</li>
                <li>Oakville</li>
                <li>Burlington</li>
                <li>Milton</li>
                <li>Caledon</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">York Region</h3>
              <ul className="space-y-2 text-primary/70">
                <li>Markham</li>
                <li>Vaughan</li>
                <li>Richmond Hill</li>
                <li>Aurora</li>
                <li>Newmarket</li>
                <li>Georgina</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Durham Region</h3>
              <ul className="space-y-2 text-primary/70">
                <li>Pickering</li>
                <li>Ajax</li>
                <li>Whitby</li>
                <li>Oshawa</li>
                <li>Clarington</li>
                <li>Uxbridge</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-secondary/10 rounded-lg">
            <p className="text-sm text-primary/70">
              We also serve select areas in the Greater Golden Horseshoe region, including Barrie, Innisfil, Collingwood, and surrounding areas. Contact us to verify service availability in your location.
            </p>
          </div>
        </div>
      </section>

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
