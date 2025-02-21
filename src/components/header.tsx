import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export function Header() {
  return (
    <nav className="fixed mb-8 top-0 right-0 left-0 z-30 flex items-center justify-between bg-[#085942] px-12 py-4 text-white shadow-md">
      <img
        src={logo}
        alt="Logo"
        className="rounded-full border p-2 text-2xl font-bold"
        style={{ width: "100px", height: "100px" }}
      />
      <ul className="flex gap-8">
        <li>
          <NavLink to="/" className="text-white hover:text-gray-500">
            Zoo
          </NavLink>
        </li>
        <li>
          <NavLink to="/animals" className="text-white hover:text-gray-500">
            Unsere Tiere
          </NavLink>
        </li>
        <li>
          <NavLink to="/staffs" className="text-white hover:text-gray-500">
            Unsere Mitarbeiter
          </NavLink>
        </li>
        <li>
          <NavLink to="/verkaeufe" className="text-white hover:text-gray-500">
            Verkaufszahlen
          </NavLink>
        </li>
        <li>
          <NavLink to="/donation" className="text-white hover:text-gray-500">
            Formular
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
