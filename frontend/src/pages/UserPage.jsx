import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <div>
      <UserHeader />
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
