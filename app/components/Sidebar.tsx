const menuItems = [
    "Dashboard",
    "Clients",
    "Projects",
    "Tasks",
    "Settings",
];

export default function Sidebar() {
    return (
        <aside className="w-full bg-slate-900 p-6 text-white md:w-64 md:shrink-0">
            <h2 className="text-2xl font-bold">
                ClientFlow
            </h2>

            <p className="mt-2 text-sm text-slate-400">
                Your freelance workspace
            </p>

            <ul className="mt-8 space-y-2">
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className={
                            item === "Dashboard"
                                ? "rounded-lg bg-blue-600 px-4 py-3"
                                : "rounded-lg px-4 py-3 text-slate-300"
                        }
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </aside>
    );
}