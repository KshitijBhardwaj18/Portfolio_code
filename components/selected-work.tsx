import ProjectCard from "./project-card";

interface selectedWorkProps {}

const SelectedWork: React.FC<selectedWorkProps> = () => {
  const Works = [
    {
      title: "Ecommerce CMS dashboard",
      description:
        "The ECommerce CMS Dashboard is a sleek and efficient web application, meticulously crafted with Next.js, Tailwind CSS, Prisma, Stripe, and PostgreSQL. This dashboard empowers online store administrators with a user-friendly interface for seamless product management, order tracking, and customer engagement. The integration of Stripe ensures secure online transactions, while analytics and reporting tools provide valuable insights. With a focus on security and scalability, this dashboard is the perfect solution for businesses seeking a modern and robust eCommerce management system.",
      image: "/ecommerce-thumbnail.png",
      github:"https://github.com/KshitijBhardwaj18/Store-admin",
      deployment:"https://store-admin1819.vercel.app/",
    },
  ];

  return (
    <div className="max-w-[803px] mx-auto p-5 flex flex-col gap-2">
      <h1 className="text-2xl font-extrabold">Selected Work</h1>
      {Works.map((work) => (
        <ProjectCard
          key={work.image}
          title={work.title}
          description={work.description}
          image={work.image}
          deployment={work.deployment}
          github={work.github}

          />
      ))}
    </div>
  );
};

export default SelectedWork;
