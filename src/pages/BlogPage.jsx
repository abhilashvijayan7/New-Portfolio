import BlogPost from "../components/BlogPost";

function BlogPage() {
  const posts = [
    {
      title: "Mastering React Hooks",
      date: "10 Mar 2023",
      tags: "React, Hooks",
      content:
        "Discover the power of React Hooks and how they simplify state management. Learn how to use useState, useEffect, and custom hooks efficiently in your projects.",
    },
    {
      title: "Understanding JavaScript Closures",
      date: "22 Jan 2023",
      tags: "JavaScript, Functions",
      content:
        "Closures in JavaScript can be tricky but are crucial for understanding lexical scoping. This article explains closures with real-world examples and best practices.",
    },
    {
      title: "Building Scalable APIs with Express.js",
      date: "05 Jul 2022",
      tags: "Node.js, Express",
      content:
        "Learn how to build a RESTful API using Express.js. This guide covers middleware, routing, error handling, and database integration with MongoDB.",
    },
    {
      title: "CSS Grid vs Flexbox: Which One to Use?",
      date: "18 Sep 2022",
      tags: "CSS, Web Design",
      content:
        "Both CSS Grid and Flexbox are powerful layout tools. This article explores their differences, use cases, and when to choose one over the other.",
    },
  ];

  return (
    <div className="container max-w-[339px] mx-auto text-[#21243D] lg:max-w-[782px] ">
      <h1 className="font-bold text-[30px] ">Blog</h1>
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          date={post.date}
          tags={post.tags}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default BlogPage;
