import KeystaticApp from './keystatic';

export const metadata = {
  title: 'Keystatic CMS | Poleiro do Infinito',
};

export default function Layout() {
  return (
    <div className="fixed inset-0 z-0 overflow-auto bg-white dark:bg-[#1A1B26]">
      <KeystaticApp />
    </div>
  );
}
