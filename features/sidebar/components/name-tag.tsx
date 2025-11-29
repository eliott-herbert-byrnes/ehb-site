"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homePath } from "@/lib/paths";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function NameTag() {
  const router = useRouter();
  return (
    <Card className="border-none hover:scale-98 transition-all duration-300 cursor-pointer" onClick={() => router.push(homePath())}>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2">
            <HomeIcon className="w-4 h-4 text-muted-foreground" />
            <p>Eliott Herbert-Byrnes</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Full-Stack Developer | Building production-grade applications with
          React, Next.js, TypeScript & PostgreSQL
        </p>
      </CardContent>
    </Card>
  );
}
