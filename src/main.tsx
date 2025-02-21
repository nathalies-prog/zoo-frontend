import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { App } from "./app";
import { Home } from "./pages/home";
import { Tiere } from "./pages/animals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Employees } from "./pages/employes";
import { Donation } from "./pages/donation";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Tiere />,
      },
      {
        path: "/staffs",
        element: <Employees/>
      },
      {
        path:"/donation",
        element: <Donation/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
