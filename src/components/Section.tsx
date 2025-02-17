export function Section({ title, link, children }: { title: string; link?: string; children: React.ReactNode }) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-10">
      <div className="flex justify-center items-center relative mb-6">
        <h2 className="text-4xl font-semi-bold text-center text-tertiary">{title}</h2>
        {link && (
          <a href={link} className="absolute right-0 text-sm text-gray-700 underline hover:scale-105">
            View All
          </a>
        )}
      </div>
      {children}
    </section>
  );
}
