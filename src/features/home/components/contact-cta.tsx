export function ContactCTA() {
  return (
    <div className="ransition rounded-xl border p-6 text-center hover:-translate-y-1 hover:shadow-md">
      <h2 className="text-xl font-semibold">Let’s work together</h2>

      <p className="text-muted-foreground">
        Open to frontend roles and freelance projects.
      </p>

      <button className="rounded-md bg-black px-4 py-2 text-white transition hover:scale-[1.02] active:scale-[0.98]">
        Contact
      </button>
    </div>
  );
}
