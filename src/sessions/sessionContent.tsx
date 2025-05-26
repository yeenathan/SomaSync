import { updateUserMeta } from "@/utils/WP";
import { Link, useOutletContext, useParams, useNavigate } from "react-router";

function SessionContent() {
  const params = useParams();
  const { posts, userProgress, setProgress }: { posts: Array<any>, userProgress:string, setProgress:() => void } = useOutletContext();

  const filteredPosts = posts.filter((post) =>
    post.slug.split("-")[0] == params.sessionid && !post.slug.includes("activity")
  );

  const hasQuiz:boolean = posts.filter((post) =>
    post.slug.split("-")[0] == params.sessionid && post.slug.includes("activity")
  ).length>0;

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

  async function handleclick(sessionid: string | undefined) {
    if (!sessionid) return;

    const prefix = sessionid.replace(/\d+$/, "");         // "session"
    const number = parseInt(sessionid.match(/\d+$/)[0]);  // 11
    const nextSessionID = `${prefix}${number + 1}`;       // "session12"

    if (userProgress < nextSessionID) {
      await updateUserMeta("progress", nextSessionID);
      setProgress(nextSessionID);
    }
    navigate("/sessions");
  }

  return (
    <div className="container max-w-6xl flex flex-col justify-between h-full container mx-auto">
      <div>
        <h1 className="font-semibold text-3xl mb-2 md:mb-4">{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
      <div className="flex flex-row w-full p-4 justify-between">
        <button onClick={() => navigate(-1)} style={{cursor: "pointer"}}>
          Previous
        </button>
        <p>{currentIndex+1}/{maxPosts}</p>
        {nextSlug ? 
          <Link to={`/sessions/${params.sessionid}/chapter/${nextSlug}`}>Next</Link>
          :
          !hasQuiz?
          <Link to={`/sessions/`} onClick={() => handleclick(params.sessionid)}>Complete</Link>
          :
          <Link to={`/sessions/${params.sessionid}`}>Return</Link>
        }
      </div>
    </div>
  );
}

export default SessionContent;
