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
      <Section>
        <Container>
          <Hero />
        </Container>
      </Section>

      <Section>
        <Container>
          <AboutPreview />
        </Container>
      </Section>
      <Section>
        <Container>
          <Projects />
        </Container>
      </Section>
      <Section>
        <Container>
          <Education />
        </Container>
      </Section>
      <Section>
        <Container>
          <Skills />
        </Container>
      </Section>
      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
    </div>
  );
}
