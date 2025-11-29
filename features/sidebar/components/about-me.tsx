"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutMePath } from "@/lib/paths";
import { useRouter } from "next/navigation";

export function AboutMe() {
  const router = useRouter();
  return (
    <Card
      className="w-full border-none hover:scale-98 transition-all duration-300 cursor-pointer"
      onClick={() => router.push(aboutMePath())}
    >
      <CardHeader>
        <CardTitle>
          <p>About Me</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Passions, hobbies, and interests...
        </p>
      </CardContent>
    </Card>
  );
}
