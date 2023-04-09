import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

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
          <div key={post._id} className="group flex cursor-pointer flex-col">
            <div className="relative w-full transition-transform duration-200 ease-out h-80 transform-gpu drop-shadow-xl group-hover:scale-105">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />

              {/* Title and Date */}
              <div className="absolute bottom-0 flex w-full justify-between rounded bg-neutral-900 bg-opacity-20 p-5 text-white drop-shadow-lg backdrop-blur-lg">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p className="transform-gpu subpixel-antialiased">
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
            <div className="mt-5 flex-1">
              <p className="text-lg font-bold underline">{post.title}</p>
              <p className="text-gray-500 line-clamp-2">{post.description}</p>
            </div>
            
            {/* Read Post */}
            <p className="mt-5 flex items-center font-bold group-hover:underline">
              Read Post
              <ArrowUpRightIcon className="ml-2 h-4 w-4"></ArrowUpRightIcon>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;

// Timestamp: 1:44 (https://www.youtube.com/watch?v=x3fCEPFgUSM&t=5128s)