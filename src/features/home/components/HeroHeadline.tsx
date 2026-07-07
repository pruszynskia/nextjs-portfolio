export function HeroHeadline({
  greeting,
  name,
  title,
  description,
}: {
  greeting: string;
  name: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <p className="text-foreground/60 text-lg font-medium">{greeting}</p>
      <h1
        id="hero-heading"
        className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
      >
        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {name}
        </span>
      </h1>

      <p className="text-foreground text-2xl font-semibold md:text-3xl">
        {title}
      </p>

      <p className="text-foreground/70 max-w-2xl text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}
