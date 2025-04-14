
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I love working in teams where ideas flow freely and communication stays clear ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
      imgClassName: "pl-8 w-fit h-fit",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Always exploring new ideas — something exciting might be next.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Open to opportunities and ready to grow — let’s connect at",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "A Simple Learning Management System (LMS)",
      des: "A sleek and user-friendly Learning Management System designed to streamline online education for students and instructors alike.",
      img: "/lms.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
      link: "https://github.com/Surya-1023/LMS-web",
    },
    {
      id: 2,
      title: "Static Traveler Page",
      des: "A travel platform that lets you explore destinations, discover hidden gems, and dive deep into detailed descriptions of places around the world.",
      img: "/travel.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/Surya-1023/TravelHub",
    },
    {
      id: 3,
      title: "Inventory Management System",
      des: "A smart inventory solution to efficiently track, manage, and organize products in real-time.",
      img: "/ivm.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/Surya-1023/Inventory-Management",
    },
    {
      id: 4,
      title: "Netflix UI Clone WebPage",
      des: "Recreated the Netflix website UI, combining their navigations..",
      img: "/netflix.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
      link: "https://github.com/Surya-1023/Netflix-Clone",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Aspiring software engineer with a strong foundation in Information Technology and hands-on experience in developing and deploying robust applications. Seeking to leverage my technical skills and innovative mindset to contribute to product development.",
      name: "Surya N",
      title: "B Tech Information Technologies",
      iconLists: "/mee.png",
    },
    {
      quote:
        "Attended a 36-hour live hackathon organized by SRMS University in Uttar Pradesh, where participants collaborated intensively to develop innovative tech solutions. The event provided hands-on experience in problem-solving, teamwork, and real-time coding under pressure.",
      name: "SRMS University",
      title: "36hr Live Hackthon",
      iconLists: "/srms.png",
    },
    {
      quote:
        "Earned selection for the prestigious Inhouse Project conducted at  and successfully delivered a high-quality solution, demonstrating technical proficiency, innovation, and effective project execution.",
      name: "Skillvista",
      title: "MCET",
      iconLists: "/mcet.jpg",
    },
    {
      quote:
        "Served as an executive member of the UiPath organization, where I actively contributed to organizing events, workshops, and seminars. Played a key role and engaging students in learning about Advanced Technologies.",
      name: "UiPath Community",
      title: "Executive Member",
      iconLists: "/ui.svg",
    },

  ];
  
  export const companies = [
    {
      id: 1,
      name: "nodejs",
      img: "/node.svg",
      
    },
    {
      id: 2,
      name: "reactjs",
      img: "/react.svg",
      
    },
    {
      id: 3,
      name: "nextjs",
      img: "/next.svg",
      
    },
    {
      id: 4,
      name: "JavaScript",
      img: "/js.svg",
      
    },
    {
      id: 5,
      name: "typescript",
      img: "/ts.svg",
      
    },
    {
      id: 6,
      name: "mongodb",
      img: "/MongoDB.svg",
      
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "React Js Certification",
      desc: "Certified in React JS by Infosys Springboard, showcasing hands-on expertise in building dynamic and responsive web applications..",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Linguaskill Certification",
      desc: "Certified by Cambridge through the Linguaskill program, demonstrating proficiency in real-world English communication skills.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Oracle Certification",
      desc: "Oracle Certified Foundations Associate — solidifying core knowledge in cloud concepts, services, and emerging technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Surya-1023",
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/surya-n-725955257/",
    },
  ];