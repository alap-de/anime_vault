import Hero from "@/components/Hero";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
