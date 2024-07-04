"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Github, Cpu } from "lucide-react";
import { CardContainer, CardItem } from "@/components/3dcard";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  src: string;
  deployment?: string;
  github: string;
  github2?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="transform hover:scale-110 transition-transform">
      <CardContainer className="p-0 m-0">
        <CardItem className="p-0 m-0">
          <Card className="border-0">
            <CardTitle className="p-5">
              <p>{props.title}</p>
            </CardTitle>

            <CardContent>
              <div className="video-container">
                <video
                  className="responsive-video"
                  preload="none"
                  autoPlay
                  muted
                >
                  <source src={props.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-[#8c9a94] text-ellipsis text-sm p-3">
                {props.description}
              </p>
              <div className="flex flex-row gap-2 p-3">
                {props.deployment ? <Link href={props.deployment} passHref>
                  <Button className="flex gap-2 transform hover:scale-110 transition-transform">
                    Live Deployment
                    <Cpu color="black " />
                  </Button>
                </Link> : <div></div> }
                
                <Link href={props.github} passHref>
                  <Button className="flex gap-2">
                    Github
                    <Github color="black " />
                  </Button>
                </Link>

                {props.github2 ? <Link href={props.github2} passHref>
                  <Button className="flex gap-2 transform hover:scale-110 transition-transform">
                   Github 2
                   <Github color="black " />
                  </Button>
                </Link> : <div></div> }
              </div>
            </CardContent>
          </Card>
        </CardItem>
      </CardContainer>
    </div>
  );
};

export default ProjectCard;
