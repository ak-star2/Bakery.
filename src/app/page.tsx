import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Products } from "@/components/sections/Products";
import { SignatureProduct } from "@/components/sections/SignatureProduct";
import {
  IngredientsCraft,
  ProcessSection,
} from "@/components/sections/CraftAndProcess";
import { CakeConfigurator } from "@/components/sections/CakeConfigurator";
import { CinematicGallery } from "@/components/sections/Gallery";
import {
  StorySection,
  Testimonials,
} from "@/components/sections/StoryAndTestimonials";
import {
  InstagramSection,
  ContactSection,
  NewsletterSection,
} from "@/components/sections/ContactAndSocial";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-cream">
      <div className="noise-overlay" />
      <Hero />
      <Intro />
      <Products />
      <SignatureProduct />
      <IngredientsCraft />
      <ProcessSection />
      <CakeConfigurator />
      <CinematicGallery />
      <StorySection />
      <Testimonials />
      <InstagramSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
