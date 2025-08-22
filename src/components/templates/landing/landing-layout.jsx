import Link from "next/link";

export default function LandingLayout({ links, title }) {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center">
          {title || "Next.js Navigation Tasks"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="border rounded-lg shadow p-6 hover:shadow-md transition-shadow flex flex-col items-center justify-center bg-white"
            >
              <span className="text-2xl font-semibold mb-2">{link.title}</span>
              <span className="text-blue-600">{link.path}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
