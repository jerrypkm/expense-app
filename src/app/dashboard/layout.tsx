import { Navbar } from "@/components";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <section className="max-w-[1200px] p-5 m-auto">
        {children}
      </section>
    </main>
  );
}