import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Prepare for Your Dream Job",
    date: "August 12, 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    content: [
      "Preparing for your dream job requires more than just a polished resume. It involves thorough research, confidence-building, and consistent practice. Start by understanding the company’s culture, mission, and the role you’re applying for.",
      "Tailor your resume to highlight relevant skills and achievements. Practice common interview questions, but also prepare to discuss real-life scenarios and problem-solving experiences. Remember, communication skills and attitude can often outweigh technical skills.",
      "Finally, never underestimate the power of networking. Reach out to current or past employees on LinkedIn, attend industry events, and seek mentorship. These connections can provide valuable insights and open doors."
    ]
  },
  {
    id: 2,
    title: "Top Tech Skills to Learn in 2025",
    date: "August 15, 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    content: [
      "In 2025, technology is evolving rapidly, and staying up-to-date with the latest skills is crucial. Key skills to focus on include cloud computing, artificial intelligence, machine learning, and cybersecurity.",
      "Additionally, proficiency in programming languages such as Python, JavaScript, and Go can set you apart. Frameworks like React, Vue, and Angular remain in high demand for frontend development.",
      "Don’t forget soft skills—problem-solving, teamwork, and adaptability are just as important. Continuous learning and certifications can boost your profile significantly."
    ]
  },
  {
    id: 3,
    title: "Working From Home Effectively",
    date: "August 18, 2025",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    content: [
      "Working from home offers flexibility but comes with its own set of challenges. Creating a dedicated workspace free from distractions helps improve focus and productivity.",
      "Structure your day by setting clear goals and scheduling breaks. Utilize tools like calendars, task managers, and communication platforms to stay organized and connected with your team.",
      "Maintain a healthy work-life balance by setting boundaries and making time for exercise and social activities. Regular check-ins with colleagues help reduce feelings of isolation."
    ]
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-12 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Blog Not Found</h2>
        <Link
          to="/blogs"
          className="text-indigo-600 underline hover:text-indigo-800 text-lg"
        >
          ← Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-12">
      <h1 className="text-5xl font-extrabold mb-6 text-indigo-700">{post.title}</h1>
      <p className="text-gray-500 text-lg mb-8">{post.date}</p>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-lg mb-10 shadow-lg"
        />
      )}

      <article className="prose prose-indigo text-lg leading-relaxed text-gray-900 mb-16">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      <Link
        to="/blogs"
        className="text-indigo-600 underline hover:text-indigo-800 text-lg"
      >
        ← Back to Blog List
      </Link>
    </div>
  );
};

export default BlogDetails;
