interface SkeletonProps {
  className?: string;
  variant?: "text" | "card" | "circle" | "rect";
  width?: string;
  height?: string;
  count?: number;
}

function Skeleton({
  className = "",
  variant = "text",
  width,
  height,
  count = 1,
}: SkeletonProps) {
  const base = "bg-purple-100 skeleton-pulse rounded-md";

  const variants: Record<string, string> = {
    text: "h-4 w-full",
    card: "h-48 w-full rounded-xl",
    circle: "h-12 w-12 rounded-full",
    rect: "h-24 w-full rounded-lg",
  };

  const style = {
    width: width || undefined,
    height: height || undefined,
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`${base} ${variants[variant] || variants.text} ${className}`}
          style={style}
          aria-hidden="true"
        />
      ))}
    </>
  );
}

export { Skeleton };
export type { SkeletonProps };
