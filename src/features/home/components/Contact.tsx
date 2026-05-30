"use client";
import { useState } from "react";

export function Contact() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold">Contact Information</h2>
      <p>Email: andrzej.pruszyński@example.com</p>
      <p>Phone: +123 456 7890</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/yourusername
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/yourusername
        </a>
      </p>
      <div className="mt-4">
        <h3>Message:</h3>
        <p>
          If you have any questions or would like to collaborate, feel free to
          reach out!
        </p>
      </div>
    </div>
  );
}
