
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Index = () => {
  const [missionOpen, setMissionOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [equipmentOpen, setEquipmentOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true);
    
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

  const equipmentCategories = [
    {
      title: "Compact Equipment",
      items: [
        "Compact Track Loader",
        "Backhoe",
        "Wheeled Skid Steer",
        "Tractor",
        "Mini Excavator",
      ]
    },
    {
      title: "Heavy Earthmoving",
      items: [
        "Wheel Loader",
        "Dozer",
        "Excavator",
        "Articulated Dump Truck",
      ]
    },
    {
      title: "Lift & Aerial Work Platform",
      items: [
        "Telehandler",
        "Scissor Lift",
        "Straight Boom Lift",
        "Forklift",
        "Articulating Boom Lift",
        "Towable Boom Lift",
      ]
    },
    {
      title: "Rollers & Compaction",
      items: [
        "Soil Compaction Smooth Drum",
        "Soil Compaction Pad Foot",
        "Asphalt Compaction Double Drum",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-warm-white text-primary">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/80 backdrop-blur-sm">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
          <div className="text-xl font-bold">GTA Equipment</div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setEquipmentOpen(true)} 
              className="text-primary/80 hover:text-primary"
            >
              Equipment
            </button>
            <button 
              onClick={() => setMissionOpen(true)}
              className="bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              Mission
            </button>
            <a 
              href="tel:+18885551234" 
              className="text-primary border border-primary px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              1-888-555-1234
            </a>
          </div>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1680px] mx-auto">
          <h1 
            className={`text-5xl md:text-7xl font-serif leading-tight mb-8 transition-all duration-1000 transform ${
              isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Your trusted equipment<br />
            rental partner in the GTA
          </h1>
          <p 
            className={`text-lg text-primary/60 mb-4 transition-all duration-1000 delay-300 transform ${
              isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Connecting contractors with premium equipment since 2014
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-white">
        {[
          {
            title: "EXCAVATORS",
            subtitle: "2-40 Tons",
            image: "https://images.unsplash.com/photo-1630288214173-a119cf823388?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "LOADERS",
            subtitle: "Wheel & Track",
            image: "https://images.unsplash.com/photo-1686945126682-35f9141dda15?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "DOZERS",
            subtitle: "All Sizes",
            image: "https://images.unsplash.com/photo-1603814744174-115311ad645e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "AERIALS",
            subtitle: "All Sizes",
            image: "https://images.unsplash.com/photo-1611401433776-5295c244b757?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "TRUCKS",
            subtitle: "Dump & Haul",
            image: "https://images.unsplash.com/photo-1603816885871-c122a9ff8d40?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "COMPACTORS",
            subtitle: "Soil & Asphalt",
            image: "https://images.unsplash.com/photo-1603814744247-ca3e77714471?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ].map((category, index) => (
          <div
            key={index}
            className="relative aspect-square group cursor-pointer overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 mix-blend-multiply saturate-150"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent">
              <h3 className="text-2xl font-serif text-white mb-2">{category.title}</h3>
              <p className="text-sm text-white/80">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/10">
        <div className="max-w-[1680px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl">
              Ready to get started with your next equipment rental?
            </h2>
            <p className="mt-6 text-lg text-primary/70">
              Contact us today to book the right equipment for your project.
            </p>
            <button className="mt-8 bg-secondary text-white px-6 py-3 rounded-full text-sm hover:bg-secondary/90 transition-colors">
              Book Now
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
                <a href="#excavators" className="block text-sm text-primary/70 hover:text-primary">Excavators</a>
                <a href="#loaders" className="block text-sm text-primary/70 hover:text-primary">Loaders</a>
                <a href="#dozers" className="block text-sm text-primary/70 hover:text-primary">Dozers</a>
                <a href="#aerials" className="block text-sm text-primary/70 hover:text-primary">Aerials</a>
                <a href="#trucks" className="block text-sm text-primary/70 hover:text-primary">Trucks</a>
                <a href="#compactors" className="block text-sm text-primary/70 hover:text-primary">Compactors</a>
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
              <button onClick={() => setTermsOpen(true)} className="text-sm text-primary/50 hover:text-primary">
                Terms & Conditions
              </button>
              <button onClick={() => setPrivacyOpen(true)} className="text-sm text-primary/50 hover:text-primary">
                Privacy Policy
              </button>
              <button onClick={() => setCookiesOpen(true)} className="text-sm text-primary/50 hover:text-primary">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Equipment Dialog */}
      <Dialog open={equipmentOpen} onOpenChange={setEquipmentOpen}>
        <DialogContent className="bg-warm-white/95 backdrop-blur-sm border-none shadow-2xl sm:max-w-[725px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif mb-6">Our Equipment</DialogTitle>
            <DialogDescription className="text-primary/70">
              <div className="space-y-8">
                {equipmentCategories.map((category, index) => (
                  <div key={index} className="border-b border-primary/10 pb-6 last:border-0">
                    <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="flex items-center p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors"
                        >
                          <span className="text-primary/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Mission Dialog */}
      <Dialog open={missionOpen} onOpenChange={setMissionOpen}>
        <DialogContent className="bg-warm-white/95 backdrop-blur-sm border-none shadow-2xl sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif mb-4">Our Mission</DialogTitle>
            <DialogDescription className="text-primary/70 leading-relaxed">
              At GTA Equipment, we're committed to supporting the Greater Toronto Area's construction and development projects with reliable, high-quality equipment solutions. Our mission is to provide seamless access to premium construction equipment while delivering exceptional service across Toronto, York Region, Peel & Halton Region, and Durham Region.
              <br /><br />
              We understand that every project is unique, which is why we offer flexible rental options and comprehensive support to ensure your success. From excavators to compactors, we maintain a modern fleet to meet the diverse needs of our growing community.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Terms & Conditions Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="bg-warm-white/95 backdrop-blur-sm border-none shadow-2xl sm:max-w-[725px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif mb-4">Terms & Conditions</DialogTitle>
            <DialogDescription className="text-primary/70 leading-relaxed">
              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">1. Equipment Rental Agreement</h3>
              <p className="mb-4">
                By renting equipment from GTA Equipment, you agree to these terms and conditions. Each rental requires a signed rental agreement, valid identification, and proof of insurance.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">2. Rental Period</h3>
              <p className="mb-4">
                The rental period begins on the date of delivery or pickup and ends on the date of return. Minimum rental periods may apply. Late returns may incur additional charges.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">3. Equipment Care and Operation</h3>
              <p className="mb-4">
                Renters must operate equipment safely and in accordance with provided instructions. Any damage beyond normal wear and tear will be charged to the renter.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">4. Insurance Requirements</h3>
              <p className="mb-4">
                Renters must maintain adequate insurance coverage for rented equipment. Proof of insurance must be provided before rental commencement.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">5. Payment Terms</h3>
              <p className="mb-4">
                Payment is required prior to equipment release. We accept major credit cards and approved business accounts.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="bg-warm-white/95 backdrop-blur-sm border-none shadow-2xl sm:max-w-[725px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif mb-4">Privacy Policy</DialogTitle>
            <DialogDescription className="text-primary/70 leading-relaxed">
              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Information We Collect</h3>
              <p className="mb-4">
                We collect information necessary for equipment rental services, including contact details, payment information, and rental history. This helps us provide better service and maintain equipment records.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">How We Use Your Information</h3>
              <p className="mb-4">
                Your information is used to process rentals, maintain accounts, send important notifications, and improve our services. We never sell your personal information to third parties.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Data Security</h3>
              <p className="mb-4">
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Your Rights</h3>
              <p className="mb-4">
                You have the right to access, correct, or delete your personal information. Contact us to exercise these rights or discuss privacy concerns.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Cookie Policy Dialog */}
      <Dialog open={cookiesOpen} onOpenChange={setCookiesOpen}>
        <DialogContent className="bg-warm-white/95 backdrop-blur-sm border-none shadow-2xl sm:max-w-[725px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif mb-4">Cookie Policy</DialogTitle>
            <DialogDescription className="text-primary/70 leading-relaxed">
              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">What Are Cookies?</h3>
              <p className="mb-4">
                Cookies are small text files stored on your device when you visit our website. They help us improve your browsing experience and provide essential website functions.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Types of Cookies We Use</h3>
              <p className="mb-4">
                <strong>Essential Cookies:</strong> Required for basic website functionality.<br />
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our site.<br />
                <strong>Preference Cookies:</strong> Remember your settings and choices.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Managing Cookies</h3>
              <p className="mb-4">
                You can control cookies through your browser settings. Note that disabling certain cookies may limit website functionality.
              </p>

              <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Updates to This Policy</h3>
              <p className="mb-4">
                We may update our cookie policy periodically. Check back regularly for any changes in how we use cookies on our website.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
