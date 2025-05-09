import { Link, useOutletContext, useParams } from "react-router";

function SessionContent() {
  const params = useParams();
  const { posts, categories }: { posts: Array<any>, categories: Array<any> } = useOutletContext();

  const filteredPosts = posts.filter((post) =>
    post.slug.startsWith(params.sessionid)
  );

  const post = filteredPosts.find((p) => p.slug === params.chapterid);
  const maxPosts = filteredPosts.length;

  function getNextChapterSlug() {
    if (!post) return "";

    const match = post.slug.match(/(\d+)$/);
    const current = match ? parseInt(match[1], 10) : 0;
    const next = current + 1;

    if (next > maxPosts) return "";

    return post.slug.replace(/(\d+)$/, next.toString());
  }

  const nextSlug = getNextChapterSlug();

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    
      <p>{post.slug.slice(-1)}/{maxPosts}</p>
      {nextSlug && (
      <Link to={`/sessions/${params.sessionid}/chapter/${nextSlug}`}>Next</Link>
      )}
    </div>
  );
}

export default SessionContent;
