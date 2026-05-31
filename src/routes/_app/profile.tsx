import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Camera, Github, Linkedin, Globe } from "lucide-react";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({ meta: [{ title: "Profile — CareerPilot AI" }] }),
  component: Profile,
});

function Profile() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your personal info and career preferences.</p>
      </div>

      <Card className="overflow-hidden">
        <div className="h-32 bg-[image:var(--gradient-hero)]" />
        <div className="p-6 pt-0">
          <div className="-mt-12 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-end gap-4">
              <div className="relative">
                <Avatar className="h-24 w-24 ring-4 ring-background">
                  <AvatarFallback className="bg-[image:var(--gradient-primary)] text-primary-foreground text-2xl font-bold">
                    JS
                  </AvatarFallback>
                </Avatar>
                <Button size="icon" className="absolute bottom-0 right-0 h-7 w-7 rounded-full">
                  <Camera className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="pb-2">
                <h2 className="text-xl font-semibold">Jordan Smith</h2>
                <p className="text-sm text-muted-foreground">Senior Frontend Engineer · San Francisco</p>
              </div>
            </div>
            <Button variant="outline">Edit profile</Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold">Personal information</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" defaultValue="Jordan" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" defaultValue="Smith" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="jordan@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" defaultValue="+1 (555) 123-4567" />
          </div>
          <div className="md:col-span-2 space-y-1.5">
            <Label htmlFor="bio">Professional summary</Label>
            <Textarea
              id="bio"
              rows={3}
              defaultValue="Senior frontend engineer with 7+ years building delightful products at scale. Specialized in React, TypeScript, and design systems."
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold">Career preferences</h2>
        <div className="mt-4 space-y-4">
          <div className="space-y-1.5">
            <Label>Target roles</Label>
            <div className="flex flex-wrap gap-2">
              {["Senior Frontend", "Staff Engineer", "Tech Lead"].map((t) => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">{t}</Badge>
              ))}
              <Button variant="outline" size="sm" className="h-6 px-2 text-xs">+ Add</Button>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Skills</Label>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js", "Node.js", "GraphQL", "TailwindCSS", "PostgreSQL"].map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold">Linked accounts</h2>
        <div className="mt-4 space-y-3">
          {[
            { icon: Linkedin, name: "LinkedIn", val: "linkedin.com/in/jordansmith", connected: true },
            { icon: Github, name: "GitHub", val: "github.com/jordansmith", connected: true },
            { icon: Globe, name: "Portfolio", val: "Not connected", connected: false },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                  <s.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.val}</div>
                </div>
              </div>
              <Button variant={s.connected ? "outline" : "default"} size="sm">
                {s.connected ? "Disconnect" : "Connect"}
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-end gap-2 pb-4">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-[image:var(--gradient-primary)] hover:opacity-95">Save changes</Button>
      </div>
    </div>
  );
}
