export function ContactCTA() {
  return (
    <div className="rounded-xl border p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
      <h2 className="text-xl font-semibold">Let’s work together</h2>

      <p className="text-muted-foreground">
        Open to frontend roles and freelance projects.
      </p>

      <div className="mt-4">
        <a
          href="mailto:andrzej.pruszynski90@gmail.com?subject=Contact%20Request"
          className="text-primary-500 block text-sm font-medium hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/pruszynskia"
          className="text-primary-500 mt-1 block text-sm font-medium hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/andrzej-pruszynski/"
          className="text-primary-500 mt-1 block text-sm font-medium hover:underline"
        >
          LinkedIn
        </a>
      </div>

      <button
        className="mt-6 rounded-md bg-black px-4 py-2 text-white transition hover:scale-[1.02] active:scale-[0.98]"
        onClick={() => {
          window.location.href =
            "mailto:andrzej.pruszynski90@gmail.com?subject=Contact%20Request";
        }}
      >
        Contact
      </button>
    </div>
  );
}
