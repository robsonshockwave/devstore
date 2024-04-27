import { Header } from '@/components/header';

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-500">
      <Header />
      {children}
    </div>
  );
}
