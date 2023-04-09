import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import ClientSideRoute from "./ClientSideRoute";

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
          // ClientSideRoute 
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <div key={post._id} className="flex flex-col cursor-pointer group">
              <div className="relative w-full transition-transform duration-200 ease-out h-80 transform-gpu drop-shadow-xl group-hover:scale-105">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />

                {/* Title and Date */}
                <div className="absolute bottom-0 flex justify-between w-full p-5 text-white rounded bg-neutral-900 bg-opacity-20 drop-shadow-lg backdrop-blur-lg">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p className="subpixel-antialiased transform-gpu">
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  {/* Category Tags */}
                  <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
                    {post.categories.map(category => (
                      <div
                        key={category._id}
                        className="h-fit rounded-full bg-[#0ea5e9] px-3 py-1 text-center text-sm font-semibold text-black"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Title and Description */}
              <div className="flex-1 mt-5">
                <p className="text-lg font-bold underline">{post.title}</p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>

              {/* Read Post */}
              <p className="flex items-center mt-5 font-bold group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="w-4 h-4 ml-2"></ArrowUpRightIcon>
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;

// Timestamp: 1:48 (https://www.youtube.com/watch?v=x3fCEPFgUSM&t=5128s)