import { updateUserMeta } from "@/utils/WP";
import { Link, useOutletContext, useParams, useNavigate } from "react-router";

function SessionContent() {
  const params = useParams();
  const { posts, setProgress }: { posts: Array<any>, setProgress:() => void } = useOutletContext();

  const filteredPosts = posts.filter((post) =>
    post.slug.startsWith(params.sessionid)
  );

  const post = filteredPosts.find((p) => p.slug === params.chapterid);
  const maxPosts = filteredPosts.length;
  const currentIndex = filteredPosts.indexOf(post);

  function getNextChapterSlug() {
    if (currentIndex<maxPosts-1) {
      const next = filteredPosts[currentIndex+1];
      return next.slug;
    } else return null;
  }

  const nextSlug = getNextChapterSlug();

  const navigate = useNavigate();
  async function handleclick(e, sessionid:string|undefined) {
    e.preventDefault();
    const nextSessionID = sessionid.slice(0,7) + (Number(sessionid.slice(7, 8))+1);
    await updateUserMeta("progress", nextSessionID);
    setProgress(nextSessionID);
    navigate("/sessions");
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    
      <p>{currentIndex+1}/{maxPosts}</p>
      {nextSlug ? 
      <Link to={`/sessions/${params.sessionid}/chapter/${nextSlug}`}>Next</Link>
      :
      <Link to={`/sessions/`} onClick={(e) => handleclick(e, params.sessionid)}>Complete</Link>
    }
    </div>
  );
}

export default SessionContent;
