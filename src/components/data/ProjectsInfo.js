import homebaseImg from "../../assets/images/homebase.png"
import crowdfundImg from "../../assets/images/crowdfund.png"
import statifyImg from "../../assets/images/statify.png"
import portfolioV1Img from "../../assets/images/portfolioV1.png"

export const projectsInfo = [
  {
    title: "Crowdfund",
    description: `This project was a landing page challenge I came across 
        on Frontend Mentor. It was pretty straight forward and provided the
        assets but no instructions on how to build the site out. Although
        it looks simple, I learned a ton about frontend development throughout
        the building process.`,
    tools: ["React.js", "JavaScript", "HTML"],
    image: crowdfundImg,
    link: "https://github.com/DitwanP/Crowdfunding_product_page",
  },

  {
    title: "Statify",
    description: `I created this site for a user to visualize a 
        simple and clean presentation of their Spotify data. I utilized 
        the Spotify API for users to log in and authenticate 
        externally, and then their most important account data gets 
        displayed to them.`,
    tools: [
      "Ract.js",
      "Express.js",
      "Scss",
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
    description: `The idea for this project was to make a home page 
        for my browser. The page contains weather information, 
        a daily quote, and a new daily background image, all pulled from 
        different APIs. There is also a simple to-do list for keeping 
        track of small tasks.`,
    tools: [
      "Ract.js",
      "HTML",
      "Unsplash API",
      "Quotes API",
      "OpenWeatherMap API",
    ],
    image: homebaseImg,
    link: "https://github.com/DitwanP/Homebase",
  },
  {
    title: "Portfolio 1.0",
    description: `This was version one of my portfolio site. While 
    building it out, I was exposed to many fun and eye-catching 
    tools to create a site that displayed my professional details 
    but was also exciting to develop.`,
    tools: [
      "React.js",
      "Express.js",
      "Scss",
      "NodeMailer",
      "Framer Motion",
      "React Particles",
      "SendGrid API",
    ],
    image: portfolioV1Img,
    link: "https://github.com/DitwanP/Portfolio",
  },
]
