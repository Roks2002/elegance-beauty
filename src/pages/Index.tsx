import { useEffect, useRef, useState } from "react";
import { Menu, Phone, Info, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

const Index = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");
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

  type Service = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    priceRange: string;
    duration: string;
  };

  const services: Service[] = [
    {
      title: "MESOTHERAPY",
      subtitle: "Rejuvenating Treatment",
      description: "Advanced skincare treatment that delivers vitamins, minerals, and amino acids directly into the skin to promote rejuvenation and hair growth.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop",
      priceRange: "$150-300",
      duration: "60-90 min"
    },
    {
      title: "HAIR REMOVAL",
      subtitle: "Laser & Waxing",
      description: "Professional hair removal services using the latest laser technology and premium waxing treatments for lasting results.",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2670&auto=format&fit=crop",
      priceRange: "$50-400",
      duration: "15-60 min"
    },
    {
      title: "HAIRDRESSING",
      subtitle: "Cut & Style",
      description: "Expert hair cutting, styling, and coloring services personalized to enhance your natural beauty and match your lifestyle.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop",
      priceRange: "$60-200",
      duration: "30-180 min"
    },
    {
      title: "BARBERING",
      subtitle: "Men's Grooming",
      description: "Premium men's grooming services including precision haircuts, beard trimming, and hot towel shaves.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2670&auto=format&fit=crop",
      priceRange: "$30-60",
      duration: "30-45 min"
    },
    {
      title: "NAIL CARE",
      subtitle: "Manicure & Pedicure",
      description: "Luxurious nail care treatments for hands and feet, including premium manicures and pedicures with long-lasting results.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2670&auto=format&fit=crop",
      priceRange: "$40-100",
      duration: "30-90 min"
    },
    {
      title: "FACIAL CARE",
      subtitle: "Skin Treatments",
      description: "Customized facial treatments to address your specific skin concerns, from deep cleansing to anti-aging solutions.",
      image: "https://images.unsplash.com/photo-1612442443055-4b712e666788?q=80&w=2670&auto=format&fit=crop",
      priceRange: "$80-200",
      duration: "60-90 min"
    },
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setServiceOpen(true);
  };

  const handleBooking = () => {
    if (!selectedService || !date || !time) {
      return;
    }

    const bookingData = {
      service: selectedService.title,
      date: format(date, 'yyyy-MM-dd'),
      time,
      comment
    };

    console.log('Booking submitted:', bookingData);
    alert('Booking submitted successfully! We will contact you to confirm your appointment.');
    setBookingOpen(false);
    setComment("");
    setTime("");
    setDate(undefined);
  };

  const handleBookNowClick = (service?: Service) => {
    if (service) {
      setSelectedService(service);
    }
    setServiceOpen(false);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-warm-white text-primary">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/80 backdrop-blur-sm">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
          <div className="text-xl font-serif">Elegance Beauty</div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setPricingOpen(true)} 
              className="text-primary/80 hover:text-primary"
            >
              Pricing
            </button>
            <a 
              href="tel:+18885551234" 
              className="text-primary border border-primary px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              1-888-555-1234
            </a>
            <button 
              onClick={() => handleBookNowClick()}
              className="bg-secondary text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-secondary/90"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </button>
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
            Beauty and wellness<br />
            tailored to you
          </h1>
          <p 
            className={`text-lg text-primary/60 mb-4 transition-all duration-1000 delay-300 transform ${
              isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Experience luxury beauty treatments in the heart of the city
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-white">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative aspect-square group cursor-pointer overflow-hidden"
            onClick={() => handleServiceClick(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 mix-blend-multiply saturate-150"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent">
              <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
              <p className="text-sm text-white/80">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/10">
        <div className="max-w-[1680px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl">
              Ready to experience true beauty and wellness?
            </h2>
            <p className="mt-6 text-lg text-primary/70">
              Book your appointment today and let us take care of you.
            </p>
            <button className="mt-8 bg-secondary text-white px-6 py-3 rounded-full text-sm hover:bg-secondary/90 transition-colors">
              Book Appointment
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 border-t border-primary/10">
            <div>
              <h3 className="font-serif text-xl mb-6">Elegance Beauty</h3>
              <p className="text-sm text-primary/70 max-w-xs">
                Where beauty meets wellness
              </p>
            </div>
            
            <div>
              <div className="space-y-3">
                <p className="text-sm text-primary/70">123 Beauty Lane</p>
                <p className="text-sm text-primary/70">Toronto, ON M5V 2T6</p>
                <a href="mailto:hello@elegance.beauty" className="block text-sm text-primary/70 hover:text-primary">hello@elegance.beauty</a>
                <a href="tel:+16475551234" className="block text-sm text-primary/70 hover:text-primary">+1 (647) 555-1234</a>
              </div>
            </div>

            <div>
              <div className="space-y-3">
                <p className="text-sm text-primary/70">
                  Monday - Friday: 9:00 AM - 8:00 PM
                </p>
                <p className="text-sm text-primary/70">
                  Saturday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-sm text-primary/70">
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Dialog */}
      <Dialog open={serviceOpen} onOpenChange={setServiceOpen}>
        <DialogContent className="bg-warm-white/95 backdrop-blur-sm border-none shadow-2xl sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif mb-4">{selectedService?.title}</DialogTitle>
            <DialogDescription>
              <div className="space-y-6">
                <img 
                  src={selectedService?.image} 
                  alt={selectedService?.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-primary/70 leading-relaxed">
                  {selectedService?.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm text-primary/60">Starting from</p>
                    <p className="text-lg font-semibold">{selectedService?.priceRange}</p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm text-primary/60">Duration</p>
                    <p className="text-lg font-semibold">{selectedService?.duration}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleBookNowClick(selectedService)}
                  className="w-full bg-secondary text-white px-6 py-3 rounded-full text-sm hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book this service
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Booking Dialog */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="bg-warm-white/95 backdrop-blur-sm border-none shadow-2xl sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif mb-4">Book Appointment</DialogTitle>
            <DialogDescription>
              <div className="space-y-6">
                {!selectedService && (
                  <div className="mb-6">
                    <Label htmlFor="service">Select Service</Label>
                    <select 
                      id="service"
                      className="w-full p-2 rounded-md border border-gray-300 mt-2"
                      onChange={(e) => {
                        const service = services.find(s => s.title === e.target.value);
                        setSelectedService(service || null);
                      }}
                      value={selectedService?.title || ""}
                    >
                      <option value="">Choose a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.title}>
                          {service.title} ({service.priceRange})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <Label>Select Date</Label>
                  <div className="mt-2 border rounded-md p-2">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="time">Select Time</Label>
                  <select 
                    id="time"
                    className="w-full p-2 rounded-md border border-gray-300 mt-2"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="">Choose a time...</option>
                    {[
                      "09:00", "10:00", "11:00", "12:00", "13:00", 
                      "14:00", "15:00", "16:00", "17:00", "18:00"
                    ].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="comment">Additional Comments</Label>
                  <textarea
                    id="comment"
                    className="w-full p-2 rounded-md border border-gray-300 mt-2 min-h-[100px]"
                    placeholder="Any special requests or notes..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>

                <button 
                  onClick={handleBooking}
                  disabled={!selectedService || !date || !time}
                  className="w-full bg-secondary text-white px-6 py-3 rounded-full text-sm hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Confirm Booking
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Pricing Dialog */}
      <Dialog open={pricingOpen} onOpenChange={setPricingOpen}>
        <DialogContent className="bg-warm-white/95 backdrop-blur-sm border-none shadow-2xl sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif mb-6">Our Services & Pricing</DialogTitle>
            <DialogDescription>
              <div className="space-y-8">
                {services.map((service, index) => (
                  <div key={index} className="border-b border-primary/10 pb-6 last:border-0">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                        <p className="text-sm text-primary/60">{service.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{service.priceRange}</p>
                        <p className="text-sm text-primary/60">{service.duration}</p>
                      </div>
                    </div>
                    <p className="text-primary/70 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
