import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardHomeProps = {
  title?: string;
  description?: string | React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function CardHome({ title, description, children, footer, className, onClick }: CardHomeProps) {
  return (
    <Card className={className} onClick={onClick}>
      <div className="p-4 flex flex-col gap-4">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="max-w-[650px] text-wrap">{description}</CardDescription>
        </CardHeader>
        <CardContent className="max-w-[650px] text-wrap">
          {children}
        </CardContent>
        <CardFooter>
        {footer}
        </CardFooter>
      </div>
    </Card>
  );
}
