import { MDXPost } from "@/utils/mdx";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

function CenteredImage(src: string) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem 0",
      }}
    >
      <Image src={src} objectFit="cover" width={700} height={500} />
    </div>
  );
}

const componentsForMarkdownDisplay = { CenteredImage };

interface Props {
  post: MDXPost;
}
export default function Post({ post }: Props) {
  return (
    <MDXRemote {...post.source} components={componentsForMarkdownDisplay} />
  );
}