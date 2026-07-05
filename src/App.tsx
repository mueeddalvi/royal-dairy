import { ThemeProvider } from './theme';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { ProductGrid } from './components/ProductGrid';
import { WhoWeAre } from './sections/WhoWeAre';
import { WhyChoose } from './sections/WhyChoose';
import { Achievements } from './sections/Achievements';
import { Partners } from './sections/Partners';
import { Reviews } from './sections/Reviews';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <Header />
      <main style={{ paddingTop: '57px' }}>
        <Hero />
        <ProductGrid />
        <WhoWeAre />
        <WhyChoose />
        <Achievements />
        <Partners />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
