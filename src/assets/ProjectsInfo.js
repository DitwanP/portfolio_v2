import homebaseImg from "./images/homebase.png"
import crowdfundImg from "./images/crowdfund.png"
import statifyImg from "./images/statify.png"
import portfolioV1Img from "./images/portfolioV1.png"

export const projectsInfo = [
  {
    title: "Portfolio v1",
    description: `This project was version one of my portfolio site 
        and it's the project I'm most proud of by far (apart from v2). 
        I got to use a lot of new and fun libraries to create something 
        that not only displayed my professional information but also
        something that I had fun creating and loved to look at.`,
    tools: [
      "React",
      "Express",
      "Sass",
      "NodeMailer",
      "Framer Motion",
      "React Particles",
      "SendGrid API",
    ],
    image: portfolioV1Img,
    link: "https://github.com/DitwanP/Portfolio",
  },
  {
    title: "Statify",
    description: `I created this site in order for a user to see a 
        simple and clean presentation of their Spotify data. I utilized 
        the Spotify API in order for users to login and authenticate 
        externally, and then their most important account data gets 
        displayed to them.`,
    tools: [
      "RactJS",
      "ExpressJS",
      "Sass",
      "Spotify API",
      "Framer Motion",
      "React Router",
      "Loadable",
    ],
    image: statifyImg,
    link: "https://github.com/DitwanP/Statify",
  },
  {
    title: "Homebase",
    description: `The idea for this project was to make myself a 
        home page for my browser. The page contains weather information, 
        a daily quote, and a new daily background image, all pulled from 
        different APIs. There is also a simple to-do list for keeping 
        track of small tasks.`,
    tools: [
      "RactJS",
      "Django",
      "HTML",
      "Sass",
      "Unsplash API",
      "Quotes API",
      "OpenWeatherMap API",
    ],
    image: homebaseImg,
    link: "https://github.com/DitwanP/Homebase",
  },
  {
    title: "Crowdfund",
    description: `This project was my first endeavor into the world 
        of web development. The goal was to make a convincing online 
        bookstore with full CRUD functionality in the shopping cart. 
        We used Django for the first time and managed to create a solid 
        project considering it was new to all members involved.`,
    tools: ["HTML", "CSS", "Python", "Django", "Bootstrap"],
    image: crowdfundImg,
    link: "https://github.com/DitwanP/Crowdfunding_product_page",
  },
]
