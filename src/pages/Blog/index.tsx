import usePageTitle from "../../hooks/usePageTitle";
import BlogList from "./BlogList";
import Sidebar from "../../components/Sidebar";

const Blog = () => {
  usePageTitle("Blog");
  return (
    <div style={{ paddingBlock: "8rem" }}>
      <div>
        <main>
          <BlogList />
        </main>
        {/* sidebar */}
        <aside>
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default Blog;
