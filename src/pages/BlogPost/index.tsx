import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import usePageTitle from "../../hooks/usePageTitle";
import { blogPosts } from "../../data";
import PostContent from "./PostContent";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((blogPost) => blogPost.id === parseInt(id!));
  usePageTitle(post?.title);

  return (
    <div className="blog">
      <div className="blog__wrapper">
        <main className="blog__main">
          <PostContent post={post} />
        </main>

        <aside className="blog__aside">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
