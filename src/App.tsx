import { ThemeProvider } from './theme';
import { Preloader } from './components/Preloader';

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <div 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-heading)',
          padding: 'var(--spacing-lg)'
        }}
      >
        <h1 style={{ letterSpacing: '0.2em', color: 'var(--color-accent)' }}>ROYAL DAIRY</h1>
        <p style={{ fontFamily: 'var(--font-body)', marginTop: 'var(--spacing-sm)', color: 'var(--color-textSecondary)' }}>
          Pinnacle of Dairy Purity & Luxury
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
