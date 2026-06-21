const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-tertiary pt-20 pb-10 px-6 sm:px-12 border-t border-primary/30 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-black tracking-widest text-primary mb-4">GANDHADAGUDI</h3>
            <p className="text-primary/80 font-bold mb-4 tracking-wide">
              Explore Karnataka. Discover India.
            </p>
            <p className="text-secondary/80 leading-relaxed">
              Premium travel experiences crafted for the modern explorer.
            </p>
          </div>

          {/* Middle Side */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-tertiary">Quick Links</h4>
            <ul className="space-y-4 text-secondary/80">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#karnataka" className="hover:text-primary transition-colors">Karnataka</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">India</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Right Side */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-tertiary">Crafted by</h4>
            <div className="space-y-4">
              <p className="text-xl font-bold text-primary transition-all hover:text-yellow-400 hover:shadow-primary drop-shadow-md">
                Kiran B C
              </p>
              <a href="mailto:kiranbcrkbc@gmail.com" className="block text-secondary/80 hover:text-primary transition-colors break-all">
                kiranbcrkbc@gmail.com
              </a>
              <p className="text-xs text-secondary/60 pt-2 border-t border-secondary/20 mt-4 inline-block">
                Designed & Developed with ❤️ from Bengaluru
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary/60">
          <p>&copy; 2026 Gandhadagudi. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built by <span className="text-primary font-bold">Kiran B C</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
