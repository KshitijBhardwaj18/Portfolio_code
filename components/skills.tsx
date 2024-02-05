import Image from "next/image";

interface skillsProps{


}

const Skills: React.FC<skillsProps> = () => {
    return ( 
        <div className="max-w-[803px] mx-auto p-5 flex flex-col gap-2">
            <p className="text-3xl ">Skills</p>
        <div className="flex flex-col sm:grid md:grid-cols-7 
          sm:items-center gap-2">
            <div className=" w-24">
            <Image alt="javascript" className="" src="https://img.shields.io/badge/Code-React-informational?style=flat&color=informational&logo=react" height={50} width={400} />
            </div>
            <div className=" w-24">
            <Image alt="javascript" className="" src="https://img.shields.io/badge/Code-Javascript-informational?style=flat&color=informational&logo=javascript" height={50} width={400} />
            </div>
            <div className=" w-24">
            <Image alt="javascript" className="" src="https://img.shields.io/badge/Code-typescript-informational?style=flat&color=informational&logo=typescript" height={50} width={400} />
            </div>
            <div className=" w-24">
            <Image alt="javascript" className="" src="https://img.shields.io/badge/Code-Next.js-informational?style=flat&color=informational&logo=next.js" height={50} width={400} />
            </div>
            <div className=" w-24">
            <Image alt="javascript" className="" src="https://img.shields.io/badge/Code-Node.js-informational?style=flat&color=informational&logo=node.js" height={50} width={400} />
            </div>
            <div className=" w-24">
            <Image alt="javascript" className="" src="https://img.shields.io/badge/Code-tailwindcss-informational?style=flat&color=informational&logo=tailwindcss" height={50} width={400} />
            </div>
            <div className=" w-24">
            <Image alt="javascript" className="" src="https://img.shields.io/badge/Code-React-informational?style=flat&color=informational&logo=react" height={50} width={400} />
            
            </div>
        </div>
        </div>
        
     );
}
 
export default Skills;