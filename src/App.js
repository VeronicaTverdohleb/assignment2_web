import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import About from "./components/About";

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <PokemonList></PokemonList>,
    },
    { path: "/pokemon/:id", element: <PokemonDetail></PokemonDetail> },
    { path: "/about", element: <About></About> },
  ]);
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
}
