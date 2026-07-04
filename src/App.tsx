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
      
      <main className="app-main-layout" style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingTop: '57px' }}>
        <Header />
        <Hero />
        
        <div className="section-divider" style={{ borderBottom: '1px solid rgba(216, 217, 218, 0.1)' }} />
        <div id="products" style={{ padding: '0 var(--spacing-lg)' }}>
          <ProductGrid />
        </div>

        <div className="section-divider" style={{ borderBottom: '1px solid rgba(216, 217, 218, 0.1)' }} />
        <WhoWeAre />

        <div className="section-divider" style={{ borderBottom: '1px solid rgba(216, 217, 218, 0.1)' }} />
        <WhyChoose />

        <Achievements />

        <Partners />

        <div className="section-divider" style={{ borderBottom: '1px solid rgba(216, 217, 218, 0.1)' }} />
        <Reviews />

        <div className="section-divider" style={{ borderBottom: '1px solid rgba(216, 217, 218, 0.1)' }} />
        <Contact />

        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
