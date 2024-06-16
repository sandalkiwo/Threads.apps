import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [username, showToast]);

  if (!user && loading) {
    return (
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Spinner size="xl" />
      </Flex>
    )
  }
  if (!user && loading) return <h1>User not found</h1>;

  return (
    <div>
      <UserHeader user={user} />
      <UserPost
        likes={1200}
        replies={401}
        postImage="/post1.png"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={3000}
        replies={765}
        postImage="/post2.png"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={5423}
        replies={431}
        postImage="/post3.png"
        postTitle="Let's talk about threads."
      />
    </div>
  );
};

export default UserPage;
