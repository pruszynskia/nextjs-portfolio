export function Hero() {
  return (
    <div className="flex flex-col items-start gap-6 py-20">
      <p className="text-muted-foreground text-sm">Senior Frontend Developer</p>

      <h1 className="text-5xl font-bold tracking-tight">
        Building modern, scalable web applications
      </h1>

      <p className="text-muted-foreground max-w-xl">
        I specialize in React, Next.js and frontend architecture with a focus on
        performance, UX and clean code.
      </p>

      <div className="flex gap-3">
        <button className="rounded-md bg-black px-4 py-2 text-white">
          View Projects
        </button>

        <button className="rounded-md border px-4 py-2">Contact Me</button>
      </div>
    </div>
  );
}
