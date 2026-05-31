import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Briefcase,
  FileSearch,
  MessagesSquare,
  TrendingUp,
  Plus,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — CareerPilot AI" }] }),
  component: Dashboard,
});

const stats = [
  { label: "Applications", value: "24", trend: "+4 this week", icon: Briefcase, color: "text-primary" },
  { label: "Interviews", value: "6", trend: "+2 this week", icon: MessagesSquare, color: "text-success" },
  { label: "Avg ATS Score", value: "87", trend: "+12 pts", icon: FileSearch, color: "text-warning" },
  { label: "Response Rate", value: "32%", trend: "+8%", icon: TrendingUp, color: "text-primary" },
];

const recent = [
  { co: "Stripe", role: "Senior Frontend Engineer", stage: "Interview", date: "Tomorrow, 2:00 PM" },
  { co: "Linear", role: "Product Designer", stage: "Applied", date: "2 days ago" },
  { co: "Vercel", role: "Developer Advocate", stage: "Offer", date: "Pending response" },
  { co: "Notion", role: "Full-stack Engineer", stage: "Screening", date: "1 week ago" },
];

const stageColors: Record<string, string> = {
  Applied: "bg-muted text-muted-foreground",
  Screening: "bg-warning/15 text-warning-foreground border border-warning/30",
  Interview: "bg-primary/10 text-primary border border-primary/20",
  Offer: "bg-success/15 text-success border border-success/30",
};

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Welcome back, Jordan 👋</h1>
          <p className="text-muted-foreground mt-1">Here's a snapshot of your job search this week.</p>
        </div>
        <Button asChild className="bg-[image:var(--gradient-primary)] hover:opacity-95">
          <Link to="/jobs"><Plus className="mr-1 h-4 w-4" /> Add application</Link>
        </Button>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-5 hover:shadow-[var(--shadow-soft)] transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
                <div className="mt-2 text-3xl font-bold">{s.value}</div>
                <div className="mt-1 text-xs text-success flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" /> {s.trend}
                </div>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent activity */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Recent activity</h2>
            <Link to="/jobs" className="text-sm text-primary hover:underline">View all</Link>
          </div>
          <div className="mt-4 divide-y divide-border">
            {recent.map((r) => (
              <div key={r.co} className="flex items-center justify-between py-3.5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary font-semibold text-sm">
                    {r.co[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium truncate">{r.role}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                      {r.co} <span>•</span> <Calendar className="h-3 w-3" /> {r.date}
                    </div>
                  </div>
                </div>
                <Badge className={stageColors[r.stage] ?? ""}>{r.stage}</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Profile completion */}
        <Card className="p-6">
          <h2 className="font-semibold">Profile strength</h2>
          <div className="mt-4">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">78%</span>
              <span className="text-xs text-muted-foreground">Almost there</span>
            </div>
            <Progress value={78} className="mt-2" />
          </div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              { d: "Upload resume", ok: true },
              { d: "Add 3 work experiences", ok: true },
              { d: "Connect LinkedIn", ok: false },
              { d: "Complete skills section", ok: false },
            ].map((t) => (
              <li key={t.d} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${t.ok ? "bg-success" : "bg-muted-foreground/40"}`} />
                <span className={t.ok ? "text-muted-foreground line-through" : ""}>{t.d}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="sm" className="mt-5 w-full" asChild>
            <Link to="/profile">Complete profile</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
