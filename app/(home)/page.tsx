import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
        </>
    );
}
