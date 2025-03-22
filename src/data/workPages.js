import{rect4,rect5,rect6} from '../assets/image'

export const workPages = [
    {
      id: 1,
      image: "rect30.jpg",
      title: "Building a Full-Stack MERN Application",
      year: "2024",
      category: "Web Development",
      description:
        "A step-by-step guide to building a full-stack application using MongoDB, Express.js, React, and Node.js, covering authentication, state management, and deployment.",
      mainImage: rect4,
      content: {
        heading1: "Introduction",
        heading2: "Understanding MERN Stack",
        text: "The MERN stack consists of MongoDB, Express.js, React, and Node.js. It allows developers to build full-stack applications using JavaScript.",
        images: [rect5, rect6]
      }
    },
    {
      id: 2,
      image: "rect32.jpg",
      title: "Mastering API Integration with Fetch & Axios",
      year: "2024",
      category: "JavaScript, API",
      description:
        "Exploring how to efficiently fetch data from REST APIs using Fetch and Axios, handling errors, caching responses, and optimizing performance.",
        mainImage: rect4,
        content: {
        heading1: "Using Fetch API",
        heading2: "Making GET and POST Requests",
        text: "Fetch API allows making network requests easily. It supports Promises and is widely used in JavaScript applications.",
        images: [rect5, rect6]
      }
    },
    {
      id: 3,
      image: "rect34.jpg",
      title: "Optimizing MongoDB Queries for Performance",
      year: "2023",
      category: "Database, NoSQL",
      description:
        "Learn how to structure MongoDB queries, apply indexing, aggregation, and optimize read and write operations for high-performance applications.",
        mainImage: rect4,
      content: {
        heading1: "Indexing in MongoDB",
        heading2: "Boosting Read Performance",
        text: "Indexes help MongoDB search faster by reducing the number of documents scanned during a query.",
        images: [rect5, rect6]
      }
    },
    {
      id: 4,
      image: "rect35.jpg",
      title: "Reusable React Components & Best Practices",
      year: "2023",
      category: "React, Frontend",
      description:
        "Creating modular and reusable React components using best practices such as props, state management, context API, and performance optimizations.",
        mainImage: rect4,
      content: {
        heading1: "Component Reusability",
        heading2: "Structuring Components for Reusability",
        text: "Breaking UI into small, reusable components enhances maintainability and scalability.",
        images: [rect5, rect6]
      }
    },
    {
      id: 5,
      image: "rect40.jpg",
      title: "Building a Scalable Node.js Backend",
      year: "2024",
      category: "Backend, Node.js",
      description:
        "Architecting a scalable and maintainable Node.js backend using Express, middleware, JWT authentication, and database connections with MongoDB.",
        mainImage: rect4,
      content: {
        heading1: "Express Middleware",
        heading2: "Handling Requests Efficiently",
        text: "Middleware functions in Express help in logging, authentication, and modifying requests before reaching the route handler.",
        images: [rect5, rect6]
      }
    }
  ];
  