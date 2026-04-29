interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <h1>Header</h1>
      </div>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
}