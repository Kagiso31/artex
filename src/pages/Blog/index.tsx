import usePageTitle from "../../hooks/usePageTitle";
import BlogList from "./BlogList";
import Sidebar from "../../components/Sidebar";

const Blog = () => {
  usePageTitle("Blog");
  return (
    <div className="blog">
      <div className="blog__wrapper">
        <main className="blog__main">
          <BlogList />
        </main>

        {/* sidebar */}
        <aside className="blog__aside">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default Blog;
