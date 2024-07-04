import ProjectCard from "./project-card";

interface selectedWorkProps {}

const SelectedWork: React.FC<selectedWorkProps> = () => {
  const Works = [
    {
      title: `Cases (lets You create custumised cases) `,
      description:
        "Harnessing the power of PostgreSQL, Prisma, Next.js, Tailwind CSS, and Stripe, my SaaS application redefines personalized device protection. With robust database management, seamless server-side rendering, responsive design, and secure payment integration, we empower users to create custom cases effortlessly and order them.This showcases  my ability to handle a production size codebase and integerate payments seemlessly",
        src:"/videos/cases.mp4",
      github:"https://github.com/KshitijBhardwaj18/Store-admin",
      deployment:"https://github.com/KshitijBhardwaj18/Cases",
      tags: ["Next.js", ]
    },
    {
      title: "ECOMMERCE ADMIN (Lets you create stores)",
      description:
        "A fullstack sass that let you create ecom store out of nowhere.Lets you add products, create categories, all standard ecom features, accept payments, overview total sales of all store in one place. ",
      src: "/videos/ecom.mp4",
      github:"https://github.com/KshitijBhardwaj18/Store-admin",
      github2:"https://github.com/KshitijBhardwaj18/Ecommerce-store",
      tags: ["Next.js", ]

    },

    {
      title: "Yoom (Lets you do online meetings)",
      description:
        "A fullstack vedio meeting platform made using nextjs, taiwind css, stream api. Lets you create rooms, share meet links, record meetings and have all standard video conferencing features. ",
      src: "/videos/yoom.mp4",
      github:"https://github.com/KshitijBhardwaj18/zoom",
      deployment:"https://zoom-kshitijbhardwaj.vercel.app/",
      tags: ["Next.js", ]

    },
    


    {
      title: "Youtube UI",
      description:
        "A youtube ui clone made in with ract, tailwind css and rapid api. It shows my capbilties in creating realworld UI/UX using react.",
      src: "/videos/youtube.mp4",
      github:"https://github.com/KshitijBhardwaj18/yt-clone",
      deployment:"https://youtubecloneby-kshitij.netlify.app/",
  
      tags: ["Next.js", ]

    }
  ];

  return (
    <div className="max-w-[900px] mx-auto  flex flex-col mt-4 ">
      <h1 className="text-4xl font-extrabold">Selected Work</h1>
      {Works.map((work) => (
        <ProjectCard
          key={work.src}
          title={work.title}
          description={work.description}
          src={work.src}
          deployment={work.deployment}
          github={work.github}
          github2={work.github2}

          />
      ))}
    </div>
  );
};

export default SelectedWork;
