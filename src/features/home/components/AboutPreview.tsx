"use client";
import { useState } from "react";

export function AboutPreview() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const sections = [
    {
      title: "Who I Am",
      content: (
        <div>
          <p>
            Senior Frontend Developer with over 5 years of experience building
            scalable, high-performance web applications in enterprise
            environments. Specialized in React and Next.js with a focus on
            performance, architecture, and user experience.
          </p>
        </div>
      ),
    },
    {
      title: "Experience",
      content: (
        <ul className="list-disc pl-5">
          <li>
            <strong>
              TD Synnex – Senior Frontend Developer (03/2023 – 09/2025)
            </strong>
            <ul className="list-disc pl-5">
              <li>
                Led development of critical frontend features for a large-scale
                e-commerce platform, enabling faster delivery of business
                initiatives and improving platform scalability.
              </li>
              <li>
                Improved application performance and reduced page load times by
                ~30%, addressing slow user experience issues that impacted
                engagement and conversion.
              </li>
              <li>
                Supported enterprise platform operating across multiple APAC
                markets, helping standardize frontend solutions for
                international business requirements.
              </li>
              <li>
                Designed and implemented multilingual AEM solutions, solving
                content management inefficiencies and enabling faster regional
                content operations.
              </li>
              <li>
                Defined frontend architecture and state management strategy for
                a multi-region application, reducing technical debt and
                improving long-term maintainability.
              </li>
              <li>
                Refactored legacy frontend modules to resolve scalability and
                reliability issues that slowed down feature development.
              </li>
              <li>
                Owned and stabilized critical order flow functionality, helping
                secure a major business contract renewal by improving
                reliability of core purchasing processes.
              </li>
              <li>
                Resolved complex AEM rendering and data-loading bottlenecks,
                significantly improving frontend responsiveness and reducing
                operational friction for users.
              </li>
              <li>
                Mentored developers and conducted code reviews, improving code
                quality consistency and reducing onboarding time for new team
                members.
              </li>
              <li>
                Collaborated with cross-functional Agile teams as a frontend
                coordination expert, improving communication efficiency between
                business, backend, and frontend teams.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Xentropy.ai – Frontend Developer (05/2024 – 11/2024)
            </strong>
            <ul className="list-disc pl-5">
              <li>
                Delivered MVP of an AI-powered legal assistant platform from
                scratch within 2 months, helping the startup validate
                product-market fit under tight deadlines.
              </li>
              <li>
                Improved onboarding flow with chatbot-driven UX, reducing
                initial user friction and increasing usability for non-technical
                users.
              </li>
              <li>
                Optimized UI responsiveness and frontend performance, addressing
                early scalability and usability issues common in fast-growing
                startup products.
              </li>
              <li>
                Improved AI prompt quality and output accuracy, helping increase
                usefulness and trustworthiness of generated legal responses.
              </li>
            </ul>
          </li>
          <li>
            <strong>Stellarity – Frontend Developer (02/2022 – 01/2023)</strong>
            <ul className="list-disc pl-5">
              <li>
                Developed e-commerce platform with advanced 3D customization
                features.
              </li>
              <li>
                Optimized GraphQL data-fetching strategy, reducing redundant API
                calls and improving application responsiveness under growing
                data loads.
              </li>
              <li>
                Delivered scalable admin panel solutions, helping internal teams
                manage products.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Self-Employed – Frontend Developer (08/2020 – 02/2022)
            </strong>
            <ul className="list-disc pl-5">
              <li>
                Developed SPA job board platform, solving performance and
                usability challenges.
              </li>
              <li>
                Built multiple frontend applications focused on architecture and
                performance.
              </li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "Technologies",
      content: (
        <ul className="list-disc pl-5">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>JavaScript (ES6+)</li>
          <li>Redux, Zustand, React Query</li>
          <li>HTML5, CSS3</li>
          <li>REST API, GraphQL</li>
          <li>AEM (Adobe Experience Manager)</li>
          <li>Git, npm, Yarn, Vercel, Postman</li>
          <li>Azure</li>
          <li>Cypress, Jest</li>
        </ul>
      ),
    },
    {
      title: "Career History",
      content: (
        <ul className="list-disc pl-5">
          <li>TD Synnex – Senior Frontend Developer (03/2023 – 09/2025)</li>
          <li>Xentropy.ai – Frontend Developer (05/2024 – 11/2024)</li>
          <li>Stellarity – Frontend Developer (02/2022 – 01/2023)</li>
          <li>Self-Employed – Frontend Developer (08/2020 – 02/2022)</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="grid gap-4">
      {sections.map((section, index) => (
        <div key={index} className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.content}
        </div>
      ))}
    </div>
  );
}
