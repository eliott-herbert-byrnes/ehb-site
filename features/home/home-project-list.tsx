"use client";
import { Badge } from "@/components/ui/badge";
import { CardHome } from "../cards/card-home";
import { ProjectData } from "./data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HomeProjectList() {
  const projects = Object.values(ProjectData);
  const router = useRouter();
  return (
    <>
      {projects.map((project) => (
        <CardHome
          className="w-full h-full border-none hover:scale-98 transition-all duration-300 cursor-pointer overflow-hidden animate-fade-from-top"
          onClick={() => router.push(project.path)}
          key={project.title}
          title={project.title}
          description={project.description}
          footer={
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={project.image}
              alt={project.title}
              width={800}
              height={800}
            />
          }
        >
          <div className="flex flex-row gap-1 flex-wrap">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHome>
      ))}
    </>
  );
}
