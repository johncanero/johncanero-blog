import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      {/* Border */}
      <hr className="border-[#0ea5e9] mb-10" />

      <div className="grid grid-cols-1 gap-10 px-10 pb-24 md:grid-cols-2 gap-y-16">
        {/* Posts */}
        {posts.map((post) => (
          <div key={post._id}>
            <div className="relative w-full transition-transform duration-200 ease-out h-80 transform-gpu drop-shadow-xl group-hover:scale-105">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;

// Timestamp: 1:33 (https://www.youtube.com/watch?v=x3fCEPFgUSM&t=5128s)