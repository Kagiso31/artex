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
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
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
        <Route path="portfolio">
          <Route index element={<Portfolio />} />
          <Route path=":id" element={<Project />} />
        </Route>
        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path=":id" element={<BlogPost />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
