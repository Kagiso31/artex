import usePageTitle from "../../hooks/usePageTitle";
import BlogList from "./BlogList";

const Blog = () => {
  usePageTitle("Blog");
  return (
    <div>
      <main>
        <BlogList />
      </main>
    </div>
  );
};

export default Blog;
