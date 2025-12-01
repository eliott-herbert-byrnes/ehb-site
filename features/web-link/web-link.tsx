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
  const handleClick = () => {
    window.open(href, "_blank");
  };
  return (
    <Card className={className} onClick={handleClick}>
      <CardContent>
        <div className="flex items-center gap-2 justify-between">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            {title}
            <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
