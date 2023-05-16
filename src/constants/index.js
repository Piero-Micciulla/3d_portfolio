import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    gatsby,
    wordpress,
    twig,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    headless,
    react,
    shopifylogo,
    webdeveloper,
    nooseenergy,
    pxlwidgets,
    endeavour,
    syncvr,
    dantelabs,
    parley,
    koepel,
    represent,
    dfns,
    ibtt,
    yadea
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdeveloper,
    },
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "Shopify Theme Developer",
      icon: shopifylogo,
    },
    {
      title: "Headless developer",
      icon: headless,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "GatsbyJS",
      icon: gatsby,
    },
    {
      name: "Shopify",
      icon: shopifylogo,
    },
    {
      name: "WordPress",
      icon: wordpress,
    },
    {
      name: "Twig",
      icon: twig,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend developer",
      company_name: "Noos Energy",
      icon: nooseenergy,
      iconBg: "#383E56",
      date: "February 2021 - February 2021",
      points: [
        "Prototyping design to implement in Figma",
        "Restyling of jupiter flex templates",
        "Restyling of Voila' templates",
        "Finding code solutions based on management inputs"
      ],
    },
    {
      title: "Software engineer",
      company_name: "SyncVR Medical B.V.",
      icon: syncvr,
      iconBg: "#E6DEDD",
      date: "March 2021 - Apr 2021",
      points: [
        "Undertaking code reviews by senior developers",
        "Configuring VR headset",
        "Restyling of part of the dashboard in adherence with design team",
        "Workshops in different hospitals",
        "Finding code solutions based on management inputs",
        "Update existing documentation based on my workflow"
      ]
    },
    {
      title: "Shopify Theme developer",
      company_name: "Dantelabs",
      icon: dantelabs,
      iconBg: "#383E56",
      date: "Apr 2021 - Jun 2021",
      points: [
        "Creation of Shopify e commerce webstore",
        "Undertaking result review by UX/UI experts",
        "Styling websites in accordance to Figma prototype"
      ]
    },
    {
      title: "Frontend developer",
      company_name: "Endeavour",
      icon: endeavour,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Present",
      points: [
        "Charge of the frontend of projects",
        "Configuring git workflow for tools like Shopify",
        "Researching and publishing projects on cutting edge technologies (i.e. headless)",
        "client projects estimations",
        "Update docs on React Projects",
        "Senior dev code reviews",
        "All rounder dev (custom wp, custom php)"
      ]
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Parley",
      description:
        "Headless website showcasing communication with customers via Messaging & Chat for the 'Parley' company.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "headless",
          color: "green-text-gradient",
        },
        {
          name: "gatsby",
          color: "orange-text-gradient",
        },
        {
          name: "prismic",
          color: "pink-text-gradient",
        },
        {
          name: "netlify",
          color: "cyan-text-gradient",
        }
      ],
      image: parley,
      source_code_link: "https://parley-acceptance.netlify.app/",
    },
    {
      name: "Koepel",
      description:
        "Sleek and modern website for 'De Koepel' association, dedicated to transforming a former prison into an innovative and inspiring space.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "headless",
          color: "green-text-gradient",
        },
        {
          name: "gatsby",
          color: "orange-text-gradient",
        },
        {
          name: "wordpress",
          color: "pink-text-gradient",
        }
      ],
      image: koepel,
      source_code_link: "https://dekoepel.com/",
    },
    {
      name: "Represent",
      description:
        "Headless e-commerce website for clothing brand.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "headless",
          color: "green-text-gradient",
        },
        {
          name: "gatsby",
          color: "orange-text-gradient",
        },
        {
          name: "shopify",
          color: "pink-text-gradient",
        },
        {
          name: "netlify",
          color: "cyan-text-gradient",
        }
      ],
      image: represent,
      source_code_link: "https://blissful-pare-055cc5.netlify.app/",
    },
    {
      name: "DFNS",
      description:
        "Shopify e-commerce for DFNS sportwear.",
      tags: [
        {
          name: "shopify",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        }
      ],
      image: dfns,
      source_code_link: "https://dfns.com/",
    },
    {
      name: "IBTT",
      description:
        "Custom Wp e-commerce website for the dutch toy brand International Bon Ton Toys.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
        {
          name: "twig",
          color: "cyan-text-gradient",
        }
      ],
      image: ibtt,
      source_code_link: "https://bontontoys.com/",
    },
    {
      name: "Moteo Nederland",
      description:
        "Set of Shopify websites for the Moteo Brand of electric scooters (Yadea showcased)",
      tags: [
        {
          name: "shopify",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        }
      ],
      image: yadea,
      source_code_link: "https://www.yadea-scooters.nl/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };