import { Outlet } from "react-router-dom";


export function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#D9C7B8]">
      <Outlet/>
    </div>
  );
}

