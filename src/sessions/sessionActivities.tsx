import { Link, useOutletContext, useParams } from "react-router";

function SessionActivity() {
  const params = useParams();
  const { posts }: { posts: Array<any> } = useOutletContext();

  const filteredPosts = posts.filter((post) =>
    post.slug.slice(0, 8) === params.sessionid
  );

  const post = filteredPosts.find((p) => p.slug === params.activityid);
  const maxPosts = filteredPosts.length;

  function getNextSlug() {
    if (!post) return "";
    const next = Number(post.slug.slice(-1)) + 1;
    if (next > maxPosts) return "";
    return post.slug.slice(0, post.slug.length - 1) + next;
  }

  const nextSlug = getNextSlug();
  const isActivity = nextSlug.includes("activity");

  if (!post) return <p>Post not found</p>;
console.log('hi');
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <p>{post.slug.slice(-1)}/{maxPosts}</p>
      {nextSlug && (
        <Link to={`/sessions/${params.sessionid}/${isActivity ? "activity" : "chapter"}/${nextSlug}`}>
          Next
        </Link>
      )}
    </div>
  );
}

export default SessionActivity;
