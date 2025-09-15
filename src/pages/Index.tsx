import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Partnership from "@/components/Partnership";
import WorkWithUs from "@/components/WorkWithUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Partnership />
        <WorkWithUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
