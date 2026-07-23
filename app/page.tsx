import { AuthCard } from "@/app/components/AuthCard";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(1100px_circle_at_20%_20%,#fef3c7,transparent_45%),radial-gradient(900px_circle_at_80%_15%,#bfdbfe,transparent_40%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-6 py-12">
      <div className="pointer-events-none absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl" />

      <main className="relative z-10 w-full max-w-lg">
        <AuthCard />
      </main>
    </div>
  );
}
