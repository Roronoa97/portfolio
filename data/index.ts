
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#experiences" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: process.env.BASE_PATH + "/b1.svg",
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
      img: process.env.BASE_PATH + "/grid.svg",
      spareImg: process.env.BASE_PATH + "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently developing a Management System for Tuition Center",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "",
      spareImg: process.env.BASE_PATH + "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
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
      title: "SSIPR",
      des: "A Selangor state initiative",
      img: process.env.BASE_PATH + "/ssipr.png",
      iconLists: [process.env.BASE_PATH + "/laravel.svg", process.env.BASE_PATH + "/bootstrap.svg", process.env.BASE_PATH + "/jquery.svg", process.env.BASE_PATH + "/postgresql.svg"],
      link: "https://ssipr.selangor.gov.my/",
    },
    {
      id: 2,
      title: "SMARTDUN",
      des: "A Selangor state initiative",
      img: process.env.BASE_PATH + "/smartdun.png",
      iconLists: [process.env.BASE_PATH + "/laravel.svg", process.env.BASE_PATH + "/bootstrap.svg", process.env.BASE_PATH + "/jquery.svg", process.env.BASE_PATH + "/postgresql.svg"],
      link: "https://smartdun.smartselangor.com.my/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: process.env.BASE_PATH + "/cloud.svg",
      nameImg: process.env.BASE_PATH + "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: process.env.BASE_PATH + "/app.svg",
      nameImg: process.env.BASE_PATH + "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: process.env.BASE_PATH + "/host.svg",
      nameImg: process.env.BASE_PATH + "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: process.env.BASE_PATH + "/s.svg",
      nameImg: process.env.BASE_PATH + "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: process.env.BASE_PATH + "/dock.svg",
      nameImg: process.env.BASE_PATH + "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Internship at KPM",
      desc: "A 6 month internship programme where I experienced a real work life situation",
      className: "md:col-span-2",
      thumbnail: process.env.BASE_PATH + "/exp1.svg",
    },
    {
      id: 2,
      title: "PSH at JAN",
      desc: "Assist in redesigning the portal landing pages",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: process.env.BASE_PATH + "/exp2.svg",
    },
    {
      id: 3,
      title: "MyStep Programme at KKM",
      desc: "Developed e-credentialing, an online registration system exclusively for physicians to attain a certificate of expertise.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: process.env.BASE_PATH + "/exp3.svg",
    },
    {
      id: 4,
      title: "Web Developer at STT",
      desc: "Involve in developing a system called SISM40 (Skim Internet Selangor M40), SSIPR and SMARTDUN",
      className: "md:col-span-2",
      thumbnail: process.env.BASE_PATH + "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: process.env.BASE_PATH + "/git.svg",
      url: 'https://github.com/Roronoa97/'
    },
    {
      id: 2,
      img: process.env.BASE_PATH + "/link.svg",
      url: 'https://my.linkedin.com/in/nur-harizul-aiman-mat-harith-6299b8200'
    },
  ];