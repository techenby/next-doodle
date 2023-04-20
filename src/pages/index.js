import { Blog } from "@/components/Blog";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />

      <Features />

      <Testimonials />

      <Blog />

      <Faq />
    </main>
  )
}
