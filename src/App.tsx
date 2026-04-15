import { motion, useScroll, useTransform } from "motion/react";
import { 
  Search, 
  ShoppingBag, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Globe, 
  Instagram, 
  Twitter, 
  Facebook,
  Menu,
  X,
  ChevronRight,
  Bitcoin
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-extrabold tracking-tighter uppercase">The Culinary Curator</a>
          <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest uppercase opacity-70">
            <a href="#" className="hover:text-brand-red transition-colors border-b-2 border-brand-red pb-1">Shop</a>
            <a href="#" className="hover:text-brand-red transition-colors">Recipes</a>
            <a href="#" className="hover:text-brand-red transition-colors">Heritage</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-1 py-1">
            <button className="px-3 py-1 text-[10px] font-bold uppercase bg-brand-gold text-white rounded-full">EN</button>
            <button className="px-3 py-1 text-[10px] font-bold uppercase text-gray-400">සිංහල</button>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </button>
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          <a href="#" className="text-sm font-bold uppercase tracking-widest">Shop</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest">Recipes</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest">Heritage</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-red text-xs font-extrabold tracking-[0.2em] uppercase mb-4 block">Crafted in Matale</span>
          <h1 className="text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6 uppercase">
            Ceylon <br />
            <span className="text-brand-red">Heat</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed font-medium">
            Experience the intensity of high-altitude Sri Lankan spices. Sustainably sourced, curator-selected, and crypto-ready for the world.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Explore the Spice Map <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              The Heritage Story
            </button>
          </div>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute right-0 top-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            <img 
              src="https://picsum.photos/seed/spice-jar/800/1000" 
              alt="Spice Jar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-0 bottom-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-brand-cream"
          >
            <img 
              src="https://picsum.photos/seed/cinnamon/600/600" 
              alt="Cinnamon Sticks" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SpiceVault = () => {
  const products = [
    {
      id: 1,
      name: "Matale Red Chili",
      localName: "මාතලේ රතු මිරිස්",
      price: "24.00",
      image: "https://picsum.photos/seed/chili/600/400",
      bestseller: true,
      large: true
    },
    {
      id: 2,
      name: "High-Grade Peppercorn",
      price: "18.00",
      image: "https://picsum.photos/seed/pepper/400/400",
      bestseller: false
    },
    {
      id: 3,
      name: "Organic Turmeric Root",
      price: "14.50",
      image: "https://picsum.photos/seed/turmeric/400/400",
      bestseller: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">The Spice Vault</h2>
            <p className="text-gray-500 font-medium">ශ්‍රී ලංකාවේ අනන්‍ය වූ රසයන් එකතුව. (The unique collection of Sri Lankan flavors.)</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-brand-red font-bold uppercase text-sm group">
            View All <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Main Product */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white p-8 rounded-sm shadow-sm flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-brand-gold text-white text-[10px] font-black uppercase px-2 py-1 rounded-sm mb-2 inline-block">Bestseller</span>
                  <h3 className="text-3xl font-bold">Matale Red Chili</h3>
                  <p className="text-gray-400 text-sm">මාතලේ රතු මිරිස්</p>
                </div>
                <span className="text-2xl font-black text-brand-red">$24.00</span>
              </div>
              <div className="my-8 overflow-hidden rounded-lg">
                <img 
                  src={products[0].image} 
                  alt="Red Chili" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <button className="w-full py-4 border-2 border-gray-100 font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-colors">
              Quick Add
            </button>
          </motion.div>

          {/* Smaller Products */}
          {products.slice(1).map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-sm shadow-sm flex flex-col group"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <span className="text-brand-gold font-bold mb-6">${product.price}</span>
              <button className="mt-auto text-[10px] font-black uppercase tracking-widest border-b border-gray-200 pb-2 hover:border-brand-red transition-colors">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CuratorsKitchen = () => {
  const recipes = [
    {
      title: "Authentic Jaffna Crab Curry",
      desc: "A coastal masterpiece balancing sharp acidity with deep, roasted chili heat.",
      time: "75 mins",
      spices: ["Roasted Curry Powder", "Matale Chili"],
      image: "https://picsum.photos/seed/crab/600/800"
    },
    {
      title: "Slow-Cooked Polos (Jackfruit)",
      desc: "The quintessential vegetarian curry, tenderized to a meat-like texture over low heat.",
      time: "120 mins",
      spices: ["Goraka", "Ceylon Cinnamon"],
      image: "https://picsum.photos/seed/jackfruit/600/800"
    },
    {
      title: "Spicy Lunu Miris",
      desc: "The essential condiment. Hand-pounded shallots and chilies with a citrus finish.",
      time: "15 mins",
      spices: ["Chili Flakes", "Black Pepper"],
      image: "https://picsum.photos/seed/sambal/600/800"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-brand-red text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">The Art of Sri Lankan Cuisine</span>
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 underline decoration-brand-red decoration-4 underline-offset-8">The Curator's Kitchen</h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium">
          Elevate your home cooking with our collection of masterclass recipes, designed to showcase the depth and complexity of premium island spices.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {recipes.map((recipe, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 relative">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase">
                <Clock size={12} /> {recipe.time}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-red transition-colors">{recipe.title}</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{recipe.desc}</p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              <span className="text-[10px] font-black uppercase text-gray-400 mr-2">Spices:</span>
              {recipe.spices.map((spice, sIdx) => (
                <span key={sIdx} className="text-[10px] font-bold uppercase text-brand-red">{spice}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-12 py-4 border-2 border-brand-dark font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
          View All Curator Recipes
        </button>
      </div>
    </section>
  );
};

const BinancePaySection = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-gold rounded-md flex items-center justify-center text-brand-dark">
              <Bitcoin size={24} />
            </div>
            <span className="text-brand-gold text-xs font-black tracking-widest uppercase">International Settlement</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Secure Payments via <br />
            <span className="text-brand-gold">Binance Pay</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            We are bringing Sri Lanka's heritage to the blockchain. Seamlessly settle your gourmet orders using Binance Pay for near-instant international delivery confirmation.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/10">
              <ShieldCheck className="text-brand-gold" />
              <span className="text-sm font-medium">Military-grade encryption for every transaction</span>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/10">
              <Globe className="text-brand-gold" />
              <span className="text-sm font-medium">0.5% transaction fee vs 3.5% standard credit cards</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white text-brand-dark p-8 rounded-xl shadow-2xl relative"
        >
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
            <h3 className="font-bold uppercase tracking-widest text-sm">Order Summary</h3>
            <span className="text-gray-400 text-[10px] font-bold">Ref: #CC-9921</span>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <span className="text-gray-500">Spice Curated Bundle</span>
              <span className="font-bold">$56.50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Global Shipping</span>
              <span className="text-green-600 font-bold uppercase text-xs">Free</span>
            </div>
          </div>

          <div className="flex justify-between items-end mb-8 pt-4 border-t border-dashed border-gray-200">
            <span className="text-xl font-black uppercase">Total</span>
            <span className="text-3xl font-black">56.50 USDT</span>
          </div>

          <button className="w-full bg-brand-gold py-4 rounded-lg font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-yellow-500 transition-colors">
            Pay with Binance Pay <Search size={18} />
          </button>
          <p className="text-center text-[10px] text-gray-400 mt-4 font-bold uppercase tracking-widest">
            Supports BTC, ETH, USDT, BNB
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          කුළුබඩු ලොවේ පුවත් (Spice News)
        </h2>
        <p className="text-gray-500 font-medium mb-10">
          Join the inner circle. Get seasonal spice harvest alerts and authentic family recipes delivered monthly.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
          />
          <button className="bg-brand-red text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-red-800 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-6">The Culinary Curator</h3>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
              © 2024 THE CULINARY CURATOR. SPICED IN SRI LANKA.
              MALITHKUMARA32@GMAIL.COM
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Explore</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Binance Pay FAQ</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sustainability</a></li>
            </ul>
          </div>
          <div className="flex md:justify-end gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
          <span>Designed for the modern palate</span>
          <span>Built with passion in Colombo</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SpiceVault />
        <CuratorsKitchen />
        <BinancePaySection />
        <Newsletter />
      </main>
      <Footer />
      
      {/* Floating Chat Button as seen in image */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-brand-gold text-brand-dark rounded-xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </motion.div>
      </button>
    </div>
  );
}
