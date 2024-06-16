import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const showToast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }

        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };

    getFeedPosts();
  }, [showToast]);

  return (
    // <Link to={"/markzuckerberg"}>
    //   <Flex w={"full"} justifyContent={"center"}>
    //     <Button mx={"auto"}>Visit Profile</Button>
    //   </Flex>
    // </Link>
    <>
      {!loading && posts.length === 0 && (
        <h1>follow some users to see the feed.</h1>
      )}
      {loading && (
        <Flex>
          <Spinner size="xl" />
        </Flex>
      )}

      {posts.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
    </>
  );
};

export default HomePage;
