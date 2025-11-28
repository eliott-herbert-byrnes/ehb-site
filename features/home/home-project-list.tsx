import { Badge } from "@/components/ui/badge";
import { CardHome } from "../card-compact/card-home";
import { ProjectData } from "./data/data";
import Image from "next/image";

export function HomeProjectList() {
  const projects = Object.values(ProjectData);

  return (
    <>
      {projects.map((project) => (
        <CardHome
          className="w-full h-full border-none hover:scale-101 transition-all duration-300 cursor-pointer overflow-hidden"
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
