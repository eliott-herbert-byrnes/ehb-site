import { languages, frontend, backend, ai, cloud, tools } from "./data/data";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { CardHome } from "../card-compact/card-home";

const languagesList = languages.map((language) => (
  <Badge key={language} variant="secondary">
    {language}
  </Badge>
));

const frontendList = frontend.map((frontend) => (
  <Badge key={frontend} variant="secondary">
    {frontend}
  </Badge>
));

const backendList = backend.map((backend) => (
  <Badge key={backend} variant="secondary">
    {backend}
  </Badge>
));

const aiList = ai.map((ai) => (
  <Badge key={ai} variant="secondary">
    {ai}
  </Badge>
));

const cloudList = cloud.map((cloud) => (
  <Badge key={cloud} variant="secondary">
    {cloud}
  </Badge>
));

const toolsList = tools.map((tool) => (
  <Badge key={tool} variant="secondary">
    {tool}
  </Badge>
));

export function HomeAboutMe() {
  return (
    <CardHome
      className="w-full h-full border-none"
      title="Hi, I'm Eliott — Full Stack Developer"
      description="Product-focused full-stack developer with strong UI/UX foundations and experience delivering production-grade web applications using React, Next.js, TypeScript, and PostgreSQL."
    >
      {" "}
      <div className="flex flex-col gap-6">
        <div>
          <p className="font-semibold mb-1">What I&apos;m Building </p>
          <p className="text-sm text-muted-foreground">
            Navis Docs – A full-stack SaaS application that centralises
            organisational process documentation with AI-powered search and assistance.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-1">Technical Skills</p>
          <div className="flex flex-col text-sm gap-2 text-muted-foreground">
            <div className="flex flex-wrap gap-1">
              Languages {languagesList}
            </div>
            <div className="flex flex-wrap gap-1">Frontend {frontendList}</div>
            <div className="flex flex-wrap gap-1">Backend {backendList}</div>
            <div className="flex flex-wrap gap-1">AI {aiList}</div>
            <div className="flex flex-wrap gap-1">Cloud {cloudList}</div>
            <div className="flex flex-wrap gap-1">Tools {toolsList}</div>
          </div>
        </div>
      </div>
    </CardHome>
  );
}
