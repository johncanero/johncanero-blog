import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex justify-center py-10 mx-auto">
          <Image
            src={urlFor(value).url()}
            alt="Blog Post Image"
            width={800}
            height={800} />
        </div>
      );
    },
    code: ({ value }: any) => {
      return (
        <pre>
          <code>{value.code}</code>
        </pre>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="py-5 ml-10 space-y-5 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal mt-lg">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="py-10 text-4xl font-bold">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="py-10 text-3xl font-bold">{children}</h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="py-10 text-2xl font-bold">{children}</h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#0ea5e9]">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#0ea5e9] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};