import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal, MapPin, DollarSign } from "lucide-react";

export const Route = createFileRoute("/_app/jobs")({
  head: () => ({ meta: [{ title: "Job Tracker — CareerPilot AI" }] }),
  component: Jobs,
});

type Stage = "Wishlist" | "Applied" | "Interview" | "Offer";
type Job = { id: number; co: string; role: string; loc: string; salary: string; stage: Stage };

const jobs: Job[] = [
  { id: 1, co: "Figma", role: "Senior Product Designer", loc: "Remote", salary: "$180k", stage: "Wishlist" },
  { id: 2, co: "Airbnb", role: "Staff Engineer", loc: "SF, CA", salary: "$240k", stage: "Wishlist" },
  { id: 3, co: "Linear", role: "Product Designer", loc: "Remote", salary: "$165k", stage: "Applied" },
  { id: 4, co: "Notion", role: "Full-stack Engineer", loc: "NYC", salary: "$190k", stage: "Applied" },
  { id: 5, co: "Stripe", role: "Senior Frontend Engineer", loc: "Remote", salary: "$210k", stage: "Interview" },
  { id: 6, co: "Vercel", role: "Developer Advocate", loc: "Remote", salary: "$175k", stage: "Offer" },
];

const stages: Stage[] = ["Wishlist", "Applied", "Interview", "Offer"];

function Jobs() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Job Tracker</h1>
          <p className="text-muted-foreground mt-1">Drag, drop, and never lose track of an application.</p>
        </div>
        <Button className="bg-[image:var(--gradient-primary)] hover:opacity-95">
          <Plus className="mr-1 h-4 w-4" /> Add job
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage) => {
          const items = jobs.filter((j) => j.stage === stage);
          return (
            <div key={stage} className="rounded-xl bg-secondary/40 p-3">
              <div className="flex items-center justify-between px-2 py-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{stage}</span>
                  <Badge variant="secondary" className="bg-background">{items.length}</Badge>
                </div>
                <Button size="icon" variant="ghost" className="h-7 w-7">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 space-y-2">
                {items.map((j) => (
                  <Card key={j.id} className="p-4 cursor-grab hover:shadow-[var(--shadow-soft)] hover:border-primary/30 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground text-xs font-bold">
                          {j.co[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-sm truncate">{j.co}</div>
                          <div className="text-xs text-muted-foreground truncate">{j.role}</div>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost" className="h-6 w-6 shrink-0">
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {j.loc}</span>
                      <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" /> {j.salary}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
