import Link from "next/link";
import { Wrapper, StyledHeader } from "./Projects.styled";
import { getAllPosts, PostMeta, PostType } from "@/api/posts";
import PostCard from "@/components/blog/PostCard";

interface Props {
  posts: PostMeta[];
}
function Projects({ posts }: Props) {
  console.log(posts);
  return (
    <Wrapper>
      <StyledHeader>Porfolio Projects</StyledHeader>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(PostType.PROJECT)
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
export default Projects;
