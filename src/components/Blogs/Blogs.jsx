import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Prepare for Your Dream Job",
    date: "2025-08-01",
    summary:
      "Tips and tricks to get ready for job interviews and make your resume stand out.",
    content:
      "This is the full content of the blog post about preparing for your dream job. Here you will find detailed tips on resume writing, interview preparation, and mindset.",
  },
  {
    id: 2,
    title: "Top Tech Skills to Learn in 2025",
    date: "2025-07-15",
    summary:
      "A rundown of the most in-demand technical skills employers are looking for.",
    content:
      "Full blog content covering programming languages, frameworks, and tools you should learn in 2025 to boost your career.",
  },
  {
    id: 3,
    title: "Work From Home: Productivity Hacks",
    date: "2025-06-30",
    summary:
      "Effective ways to stay focused and manage your time when working remotely.",
    content:
      "Detailed guide on productivity hacks, setting up your workspace, managing distractions, and maintaining work-life balance.",
  },
];

const Blogs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-indigo-700">
        Latest Blog Posts
      </h1>

      <div className="space-y-10">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border border-gray-300 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <Link
              to={`/blogs/${post.id}`}
              className="text-3xl font-semibold text-indigo-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 mt-2 mb-4 text-lg">{post.date}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
export { blogPosts };
