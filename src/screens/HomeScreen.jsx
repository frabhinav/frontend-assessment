import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import TrustedCompanies from "../components/TrustedCompany";
import ServicesSection from "../components/ServicesSection";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import VideoIntro from "../components/VideoIntro";
import ClientsSection from "../components/Clients";
import Payment from "../components/Payment";
import BlogSection from "../components/Blog";
import TestimonialsSection from "../components/TestimonialSection";
import FAQ from "../components/FAQ";
import MobileComponent from "../components/MobileComponent";
import StatusCount from "../components/StatusCount";
import WelcomeSection from "../components/WelcomeComponent";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <TrustedCompanies />
      <ServicesSection />
      <About />
      <WhyChoose />
      <VideoIntro />
      <ClientsSection />
      <Payment />
      <BlogSection />
      <TestimonialsSection />
      <FAQ />
      <MobileComponent />
      <StatusCount />
      <WelcomeSection />
      <Companies />
      <Footer />
    </div>
  );
};

export default HomeScreen;
