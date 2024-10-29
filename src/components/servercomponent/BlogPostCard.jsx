// app/components/BlogPostCard.js

import Link from 'next/link';

export default function BlogPostCard({ title, excerpt, slug }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="text-blue-600 hover:underline mt-4 inline-block">
        Read More
      </Link>
    </div>
  );
}
