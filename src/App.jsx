import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, ContactForm } from "./components";
import { useInView } from "./hooks/useInView";

// Componente wrapper para animaciones
const AnimatedSection = ({ children, animationClass, delay = 0 }) => {
  const [ref, isInView] = useInView();
  
  return (
    <div
      ref={ref}
      className={`${isInView ? `animate__animated ${animationClass}` : 'opacity-0'}`}
      style={{
        animationDelay: isInView ? `${delay}s` : '0s',
        animationDuration: '1s',
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} fixed top-0 left-0 right-0 z-50 bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} pt-24`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AnimatedSection animationClass="animate__fadeInLeft" delay={0.2}>
          <Stats />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate__fadeInRight" delay={0.4}>
          <Business />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate__fadeInLeft" delay={0.6}>
          <Billing />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate__fadeInRight" delay={0.8}>
          <CardDeal />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate__fadeInLeft" delay={1.0}>
          <Testimonials />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate__fadeInRight" delay={1.2}>
          <Clients />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate__fadeInLeft" delay={1.4}>
          <CTA />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate__fadeInRight" delay={1.6}>
          <ContactForm />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate__fadeInUp" delay={1.8}>
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default App;
