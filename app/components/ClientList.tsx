const clients = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@example.com",
    company: "Acme Studio",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    company: "Urban Shop",
  },
  {
    id: 3,
    name: "James Carter",
    email: "james@example.com",
    company: "Carter Design",
  },
];

export default function ClientList() {
  return (
    <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-xl font-semibold">
          All Clients ({clients.length})
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Preview with sample data
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Clients and their contact details
          </caption>

          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                Company
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium">
                  {client.name}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {client.email}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {client.company}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}