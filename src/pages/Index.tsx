import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedPosts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
