import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutMe() {
  return (
    <Card className="w-full border-none hover:scale-101 transition-all duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle>
          <p>About Me</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Passions, hobbies, and interests...</p>
      </CardContent>
    </Card>
  );
}
