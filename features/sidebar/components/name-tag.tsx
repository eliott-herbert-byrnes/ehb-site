import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NameTag() {
    return (
        <Card className="border-none">
            <CardHeader>
                <CardTitle>
                    <p>Eliott Herbert-Byrnes</p>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Full-Stack Developer | Building production-grade applications with React, Next.js, TypeScript & PostgreSQL</p>
            </CardContent>
        </Card>
    )
}