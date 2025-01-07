// app/page.js

import BlogPostCard from "./components/servercomponent/BlogPostCard";
import Footer from "./components/servercomponent/Footer";
import Hero from "./components/servercomponent/Hero";

export default function Home() {
  const posts = [
    {
      title: "My First Post",
      excerpt: "This is the excerpt for my first post",
      slug: "my-first-post",
    },
    {
      title: "Learning Next.js",
      excerpt: "An introduction to learning Next.js and building web apps",
      slug: "learning-nextjs",
    },
    {
      title: "Tailwind Tips",
      excerpt: "Tips and tricks for using Tailwind CSS effectively",
      slug: "tailwind-tips",
    },
  ];

  return (
    <body>
      <Hero />

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Recent Posts
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4">
            I’m a developer and writer passionate about sharing knowledge and
            experiences. Join me as I document my journey.
          </p>
        </div>
      </section>
    </body>
  );
}
