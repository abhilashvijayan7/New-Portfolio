import BlogPost from "../components/BlogPost";

function BlogPage() {
    const posts = [
      {
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        tags: "Express, Handlebars",
        content:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        tags: "Express, Handlebars",
        content:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        tags: "Express, Handlebars",
        content:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        tags: "Express, Handlebars",
        content:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
    ];
  
    return (
      <div className="container max-w-[339px] mx-auto text-[#21243D] lg:max-w-[682px] ">
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
  