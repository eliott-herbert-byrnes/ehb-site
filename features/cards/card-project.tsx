import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { WebLink } from "../web-link/web-link";

type TechBadge = {
  name: string;
  version?: string;
  color?: string;
};

type Feature = {
  title: string;
  description: string;
  image?: string;
};

type Section = {
  title: string;
  content: string | React.ReactNode;
};

export type CardProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  techStack: TechBadge[];
  liveDemo?: string;
  github?: string;
  overviewImage?: string;
  businessProblem?: {
    challenge: string;
    solution: string;
  };
  keyFeatures?: Feature[];
  sections?: Section[];
  className?: string;
};

export function CardProject({
  title,
  subtitle,
  description,
  techStack,
  liveDemo,
  github,
  overviewImage,
  businessProblem,
  keyFeatures,
  sections,
  className,
}: CardProjectProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Card className={className}>
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-4xl font-bold">{title}</CardTitle>
            <CardDescription className="text-lg font-medium">
              {subtitle}
            </CardDescription>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <Badge key={tech.name} variant="secondary" className="text-xs">
                {tech.name}
                {tech.version && (
                  <span className="ml-1 opacity-70">{tech.version}</span>
                )}
              </Badge>
            ))}
          </div>

          {(liveDemo || github) && (
            <div className="flex gap-3 pt-2">
              {liveDemo && (
                <WebLink
                  href={liveDemo}
                  className="w-full hover:scale-98 transition-all duration-300 cursor-pointer"
                  title="Live Demo"
                />
              )}
              {github && (
                <WebLink
                  href={github}
                  className="w-full hover:scale-98 transition-all duration-300 cursor-pointer"
                  title="GitHub"
                />
              )}
            </div>
          )}
        </CardHeader>

        {overviewImage && (
          <CardContent>
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src={overviewImage}
                alt={`${title} overview`}
                className="object-cover rounded-lg shadow-lg mx-auto"
                width={750}
                height={500}
              />
            </div>
          </CardContent>
        )}
      </Card>

      {businessProblem && (
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="text-2xl">🔍 Business Problem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">The Challenge</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {businessProblem.challenge}
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold mb-2">The Solution</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {businessProblem.solution}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {keyFeatures && keyFeatures.length > 0 && (
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="text-2xl">✨ Key Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {feature.image && (
                  <div className="relative w-full rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={750}
                      height={500}
                      className="object-cover rounded-lg shadow-lg mx-auto"
                    />
                  </div>
                )}
                {index < keyFeatures.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {sections &&
        sections.map((section, index) => (
          <Card key={index} className="border-none">
            <CardHeader>
              <CardTitle className="text-2xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {typeof section.content === "string" ? (
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              ) : (
                section.content
              )}
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
