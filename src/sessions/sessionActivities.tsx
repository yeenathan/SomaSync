import { Link, useOutletContext, useParams } from "react-router";

function SessionActivity() {
  const params = useParams();
  const { posts }: { posts: Array<any> } = useOutletContext();

  const filteredPosts = posts.filter((post) =>
    post.slug.slice(0, 8) === params.sessionid
  );

  const post = filteredPosts.find((p) => p.slug === params.activityid);
  const maxPosts = filteredPosts.length;
  const currentIndex = filteredPosts.indexOf(post);

  function getNextSlug() {
    if (currentIndex<maxPosts-1) {
      const next = filteredPosts[currentIndex+1];
      return next.slug;
    } else return null;
  }

  const nextSlug = getNextSlug();
  const isActivity = nextSlug.includes("activity");

  console.log('hi');
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <p>{currentIndex+1}/{maxPosts}</p>
        {nextSlug && (
        <Link to={`/sessions/${params.sessionid}/${isActivity ? "activity" : "chapter"}/${nextSlug}`}>
          Next
        </Link>
      )}
    </div>
  );
}

export default SessionActivity;
