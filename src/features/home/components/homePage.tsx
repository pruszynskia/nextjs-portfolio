"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Hero } from "./hero";
import { AboutPreview } from "./aboutPreview";
import { ProjectsPreview } from "./projectsPreview";
import { ContactCTA } from "./contactCta";
import { Navbar } from "./navbar";

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
