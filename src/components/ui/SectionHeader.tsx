import * as React from "react";
import { Badge } from "./Badge";

function SectionHeader({
  badge,
  title,
  description,
  center = false,
}: {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "space-y-4 text-center" : "space-y-4"}>
      <div className={center ? "flex justify-center" : "inline-flex"}>
        {badge ? <Badge>{badge}</Badge> : null}
      </div>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {description ? (
        <p
          className={
            center
              ? "text-foreground/60 mx-auto max-w-2xl text-lg"
              : "text-foreground/60 text-lg"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeader };
