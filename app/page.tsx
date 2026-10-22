import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-3 text-slate-600">
          Welcome back! Here is an overview of your freelance work.
        </p>
      </main>
    </div>
  );
}