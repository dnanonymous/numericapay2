// src/layouts/RootLayout.tsx
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <h1 className="text-center text-xl my-4">Crypto Stripe MVP</h1>
      <Outlet />
    </div>
  );
}
