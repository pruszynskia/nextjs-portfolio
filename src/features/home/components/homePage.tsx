"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "./Hero";
import { AboutPreview } from "./AboutPreview";
import { ContactCTA } from "./ContactCta";
import { Navbar } from "./Navbar";
import { ProjectsPreview } from "./projectsPreview";

export function HomePage() {
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
          <ProjectsPreview />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactCTA />
        </Container>
      </Section>
    </div>
  );
}
