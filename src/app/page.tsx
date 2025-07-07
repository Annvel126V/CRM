import MainLink from './components/main.link';
import Image from 'next/image';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-full">
      <header className="bg-gray-900 text-white font-semibold text-lg min-h-18 px-4 py-4 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Image width={122} height={24} src="/icons.logo.svg" alt="logo" />
          <span>|</span>
          <span>CRM for Vendors</span>
        </div>
      </header>
      <main className="grow p-4 text-center">
        <h1 className="text-3xl font-semibold mb-3">Wellcome!</h1>
        <p className="text-lg mb-8">
          This CRM application is aimed at optimizing supplier information
          management
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <MainLink
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Go to Dashboard
          </MainLink>
          <MainLink
            pathname="companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Go to Companies
          </MainLink>
        </div>
      </main>
      <footer className="bg-gray-900 text-white text-lg min-h-18 px-4 py-4 flex items-center justify-center">
        CRM | Built with Next.js | {currentYear}
      </footer>
    </div>
  );
}
