import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { Github,Cpu } from "lucide-react";
  

interface projectCardProps{
    title: string;
    description: string;
    image:string;
    deployment:string;
    github:string;

}


const ProjectCard: React.FC<projectCardProps> = (props) => {
    return ( 
        
        <Card className="border-0">
            <CardTitle className="p-5">
                <p>{props.title}</p>
            </CardTitle>
            <CardContent>
                <div>
                <Image alt={props.title} src={props.image} width={200} height={300}  layout="responsive"className="rounded "/></div>
                <p className="text-[#8c9a94] text-ellipsis text-sm p-3">{props.description}</p>
                <div className="flex flex-row gap-2 p-3">
                    <a className="transform hover:scale-150 transition-transform " href={props.github} ><Github/></a>
                    <a className="transform hover:scale-150 transition-transform " href={props.deployment}><Cpu/></a>

                </div>
            </CardContent>

        </Card>

     );
}
 
export default ProjectCard;