import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "./Hero";
import { AboutPreview } from "./AboutPreview";
import { Navbar } from "./Navbar";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { heroContent } from "../content/hero";
import { experienceContent } from "../content/experience";
import { projectsContent } from "../content/projects";
import { skillsContent } from "../content/skills";
import { educationContent } from "../content/education";
import { contactContent } from "../content/contact";

export default function HomePage() {
  return (
    <div className="pt-16">
      <Navbar />

      {/* Hero manages its own full-bleed grid — no Section/Container wrapper */}
      <Hero content={heroContent} />

      <Section id="about">
        <Container>
          <AboutPreview />
        </Container>
      </Section>
      <Section id="experience">
        <Container>
          <Experience content={experienceContent} />
        </Container>
      </Section>
      {/* Projects manages its own full-bleed rows — no Container wrapper
          (04-spacing-layout.md: one full-bleed break per page). */}
      <Section id="projects">
        <Projects content={projectsContent} />
      </Section>
      <Section id="skills">
        <Container>
          <Skills content={skillsContent} />
        </Container>
      </Section>
      <Section id="education">
        <Container>
          <Education content={educationContent} />
        </Container>
      </Section>
      <Section id="contact">
        <Container>
          <Contact content={contactContent} />
        </Container>
      </Section>
    </div>
  );
}
