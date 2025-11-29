import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type CardAboutMeProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export function CardAboutMe({
  title,
  description,
  children,
}: CardAboutMeProps) {
  return (
    <Card className="flex flex-row justify-between gap-4 w-full border-none animate-fade-from-top overflow-hidden">
      <div className="flex flex-col gap-2 pl-16 pt-4 max-w-[350px]">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-wrap">{description}</CardDescription>
      </div>

      <CardContent className="pr-16 pt-4 pb-4">{children}</CardContent>
    </Card>
  );
}
