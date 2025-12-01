"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRightIcon } from "lucide-react";

export function WebLink({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) {
  return (
    <Card className={className} onClick={() => window.open(href, "_blank")}>
      <CardContent>
        <div className="flex items-center gap-2 justify-between">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            {title}
          </a>
            <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
}
