export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-editorial mx-auto w-full px-4 md:px-8">
      {children}
    </div>
  );
}
