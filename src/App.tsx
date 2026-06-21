import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmartSearch from './components/SmartSearch';
import KarnatakaSection from './components/KarnatakaSection';
import IndianPackages from './components/IndianPackages';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import DestinationModal from './components/DestinationModal';

function App() {
  return (
    <div className="min-h-screen bg-neutral text-tertiary font-mono relative selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SmartSearch />
        <KarnatakaSection />
        <IndianPackages />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <DestinationModal />
    </div>
  );
}

export default App;
