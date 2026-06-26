"use client";
import { Container } from "@/components/layout/Container";
import { Hero } from "./Hero";
import { AboutPreview } from "./AboutPreview";
import { Navbar } from "./Navbar";
import { Section } from "@/components/layout/Section";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Skills } from "./Skills";
import { heroContent } from "../content/hero";
import { projectsContent } from "../content/projects";
import { skillsContent } from "../content/skills";
import { educationContent } from "../content/education";
import { contactContent } from "../content/contact";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Section id="home">
        <Container>
          <Hero content={heroContent} />
        </Container>
      </Section>

      <Section id="about">
        <Container>
          <AboutPreview />
        </Container>
      </Section>
      <Section id="projects">
        <Container>
          <Projects content={projectsContent} />
        </Container>
      </Section>
      <Section id="education">
        <Container>
          <Education content={educationContent} />
        </Container>
      </Section>
      <Section id="skills">
        <Container>
          <Skills content={skillsContent} />
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
