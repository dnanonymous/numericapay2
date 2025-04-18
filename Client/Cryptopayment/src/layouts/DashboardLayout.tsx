import { NavLink, Outlet } from 'react-router-dom';

export default function DashboardLayout(){
  return (
    <div className="min-h-screen grid grid-cols-[200px_1fr]">
      <aside className="bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-yellow-300' : ''}>Inicio</NavLink>
          <NavLink to="/dashboard/keys" className={({ isActive }) => isActive ? 'text-yellow-300' : ''}>API Keys</NavLink>
          <NavLink to="/dashboard/stats" className={({ isActive }) => isActive ? 'text-yellow-300' : ''}>Estadísticas</NavLink>
        </nav>
      </aside>
      <main className="p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
}
