import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRight,
  Briefcase,
  FileSearch,
  MessagesSquare,
  Sparkles,
  Target,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareerPilot AI — Land your next role, faster" },
      {
        name: "description",
        content:
          "AI-powered job application tracking, resume optimization, and interview prep. Your career co-pilot.",
      },
      { property: "og:title", content: "CareerPilot AI" },
      {
        property: "og:description",
        content: "Track applications, optimize resumes with ATS scoring, and ace interviews.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Briefcase,
    title: "Smart Job Tracker",
    desc: "Kanban-style pipeline for every application, interview, and offer.",
  },
  {
    icon: FileSearch,
    title: "ATS Resume Analyzer",
    desc: "Score your resume against any job description in seconds.",
  },
  {
    icon: Sparkles,
    title: "AI Cover Letters",
    desc: "Generate tailored, hiring-manager-ready letters instantly.",
  },
  {
    icon: MessagesSquare,
    title: "Interview Coach",
    desc: "Practice behavioral and technical questions with AI feedback.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)]">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">CareerPilot AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#" className="hover:text-foreground">Blog</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">Sign in</Link>
            </Button>
            <Button size="sm" asChild className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95">
              <Link to="/dashboard">Get started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-subtle)]">
        <div className="absolute inset-0 -z-10 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.70 0.16 240 / 0.15), transparent 50%), radial-gradient(circle at 80% 60%, oklch(0.55 0.20 255 / 0.12), transparent 50%)"
        }} />
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 border border-primary/20 bg-primary/5 text-primary">
              <Sparkles className="mr-1 h-3 w-3" /> Powered by AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Land your next role,{" "}
              <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
                10× faster
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              CareerPilot AI is your personal job-search co-pilot. Track applications, optimize resumes for ATS, generate cover letters, and prepare for interviews — all in one workspace.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)] hover:opacity-95">
                <Link to="/dashboard">
                  Open dashboard <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Watch demo
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["No credit card", "Free forever plan", "Cancel anytime"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-success" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to job hunt</h2>
          <p className="mt-3 text-muted-foreground">
            A complete toolkit built for the modern job seeker.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="group p-6 transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 border-border/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground transition-all">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-6 py-16 grid gap-8 md:grid-cols-3 text-center">
          {[
            { v: "85%", l: "Avg ATS score improvement" },
            { v: "3.2×", l: "More interview invitations" },
            { v: "12 days", l: "Faster time-to-offer" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl font-bold bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="container mx-auto px-6 py-24">
        <Card className="relative overflow-hidden border-0 bg-[image:var(--gradient-hero)] p-12 md:p-16 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 50%)"
          }} />
          <div className="relative">
            <Target className="mx-auto h-10 w-10" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Ready to take off?</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
              Join thousands of job seekers using CareerPilot AI to accelerate their search.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-8">
              <Link to="/dashboard">
                <Zap className="mr-1 h-4 w-4" /> Start free
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      <SiteFooter />
    </div>
  );
}
