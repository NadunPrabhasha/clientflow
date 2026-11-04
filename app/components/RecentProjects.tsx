const projects = [
  {
    id: 1,
    name: "Business Website",
    client: "Acme Studio",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Online Store",
    client: "Urban Shop",
    status: "Planning",
  },
  {
    id: 3,
    name: "Portfolio Website",
    client: "Alex Morgan",
    status: "Completed",
  },
];

export default function RecentProjects() {
  return (
    <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-xl font-semibold">
          Recent Projects
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          A preview of your latest projects.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Recent projects with their clients and current status
          </caption>

          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th scope="col" className="px-6 py-4">Project</th>
              <th scope="col" className="px-6 py-4">Client</th>
              <th scope="col" className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 font-medium">
                  {project.name}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {project.client}
                </td>

                <td className="px-6 py-4">
                  <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}