import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./pages/Home";

// layout
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/artex" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
