import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import { PracticeAreasSection } from "@/components/home/PracticeAreaRows";
import Values from "@/components/home/Values";
import TeamPreview from "@/components/home/TeamPreview";
import ContactCta from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <PracticeAreasSection />
      <Values />
      <TeamPreview />
      <ContactCta />
    </>
  );
}
