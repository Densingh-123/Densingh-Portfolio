import React from "react";
import "./Blog.css"; // Include the CSS file for styles

const projects = [
  {
    imgPath: "/1.png",
    title: "Food Hub",
    description:
      "A vibrant Food Ordering Platform where users can browse various cuisines, place orders, and track their food delivery in real time. Built with React.js, Material-UI, and Firebase.",
    ghLink: "https://github.com/Densingh-123/Restaurent-Application.git",
    demoLink: "https://restaurent-application-ten.vercel.app/",
  },
  {
    imgPath: "/2.png",
    title: "JuicyApp",
    description:
      "A refreshing Juice Ordering App designed for juice enthusiasts. Features include a vibrant menu of juices, customizable orders, secure checkout processes, and real-time order tracking.",
    ghLink: "https://github.com/Densingh-123/Fanta_Juice_Application.git",
    demoLink: "https://fanta-juice-application.vercel.app/",
  },
  {
    imgPath: "/3.png",
    title: "Shopsy",
    description:
      "An intuitive Online Shopping App that offers a seamless shopping experience. Users can explore a wide range of products, apply filters for easy search, and enjoy secure payment options.",
    ghLink: "https://github.com/Densingh-123/OnlineShopping_Application.git",
    demoLink: "https://online-shopping-application-gamma.vercel.app/cart",
  },
  {
    id: 4,
    title: "Shopsy Cloths",
    imgPath: "/4.png",
    description: "An engaging Shopping Application offering users a convenient platform to explore and purchase products online. Shopsy provides features such as product search and filters, a user-friendly cart system, and real-time order tracking.",
    ghLink: "https://github.com/Densingh-123/Shopsy.git",
    demoLink: "https://shopsy-lovat.vercel.app/",
  },
  {
    id: 5,
    title: "ShopEasy",
    imgPath: "/5.png",
    description: "A comprehensive Shopping Application designed to simplify online shopping. Users can browse a wide variety of products, add items to their wishlist or cart, and make secure purchases.",
    ghLink: "https://github.com/Densingh-123/Furniture_Shop.git",
    demoLink: "https://furniture-shop-chi.vercel.app/",
  },
  {
    id: 6,
    title: "Quiz Application",
    imgPath: "/7.png",
    description: "An interactive Quiz Application designed to make learning fun and engaging. Users can participate in quizzes across various topics and difficulty levels. The app features timed quizzes and performance tracking.",
    ghLink: "https://github.com/Densingh-123/Quiz_Application.git",
    demoLink: "https://quiz-applications-tau.vercel.app/",
  },
  {
    id: 7,
    title: "Gym Application",
    imgPath: "/8.png",
    description: "A comprehensive Gym Application designed to help users manage their fitness journey. It features personalized workout plans, progress tracking, exercise tutorials, and diet recommendations.",
    ghLink: "https://github.com/Densingh-123/Gym-Application.git",
    demoLink: "https://gym-application-alpha.vercel.app/",
  },
  {
    id: 8,
    title: "Flipkart Application",
    imgPath: "/6.png",
    description: "A versatile E-commerce platform modeled after Flipkart, providing users with a seamless shopping experience. Key features include advanced search, personalized recommendations, and secure payment gateways.",
    ghLink: "https://github.com/Densingh-123/Flipkart_Application.git",
    demoLink: "https://flipkart-application.vercel.app/",
  }
  // Add other project data here...
];

export const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h1 className="blog-heading">Projects</h1>
        <div className="card-grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={project.imgPath} alt={project.title} />
              </div>
              <div className="card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-links">
                  <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
