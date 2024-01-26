import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import TeamMemberInfo from "./pages/TeamMemberInfo";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

// layout
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/artex">
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team/:id" element={<TeamMemberInfo />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
