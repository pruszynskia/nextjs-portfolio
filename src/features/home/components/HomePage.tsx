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

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Section id="home">
        <Container>
          <Hero />
        </Container>
      </Section>

      <Section id="about">
        <Container>
          <AboutPreview />
        </Container>
      </Section>
      <Section id="projects">
        <Container>
          <Projects />
        </Container>
      </Section>
      <Section id="education">
        <Container>
          <Education />
        </Container>
      </Section>
      <Section id="skills">
        <Container>
          <Skills />
        </Container>
      </Section>
      <Section id="contact">
        <Container>
          <Contact />
        </Container>
      </Section>
    </div>
  );
}
