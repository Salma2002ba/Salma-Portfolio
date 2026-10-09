import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Testimonial } from "@/components/sections/Testimonial";
import { Contact } from "@/components/sections/Contact";
import { ContentProvider, type Locale } from "@/lib/i18n";

/* Page d'accueil commune aux deux langues. Blog désactivé tant qu'il n'y a pas d'article publié. */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <ContentProvider locale={locale}>
      <div lang={locale}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Experience />
          <Projects />
          <Skills />
          <Testimonial />
          <Contact />
        </main>
        <Footer />
      </div>
    </ContentProvider>
  );
}
