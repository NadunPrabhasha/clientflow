import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import RecentProjects from "./components/RecentProjects";

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

        <p className="mt-6 text-sm text-slate-500">
          Preview with sample data
        </p>

        <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <StatCard
            title="Total Clients"
            value={12}
            description="Clients in your workspace"
          />

          <StatCard
            title="Active Projects"
            value={4}
            description="Projects currently in progress"
          />

          <StatCard
            title="Pending Tasks"
            value={9}
            description="Tasks waiting to be completed"
          />
        </div>
        <RecentProjects />
      </main>
    </div>
  );
}