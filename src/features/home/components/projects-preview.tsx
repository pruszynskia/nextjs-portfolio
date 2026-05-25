export function ProjectsPreview() {
  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="grid gap-3">
        <div className="rounded-lg border p-4">
          <p className="font-medium">E-commerce Platform</p>
          <p className="text-muted-foreground text-sm">
            Scalable Next.js architecture with SSR and payments.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="font-medium">Design System</p>
          <p className="text-muted-foreground text-sm">
            Component library built with Radix + Tailwind.
          </p>
        </div>
      </div>
    </div>
  );
}
