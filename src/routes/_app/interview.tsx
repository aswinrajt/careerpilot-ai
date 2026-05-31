import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MessagesSquare, Sparkles, Play, Lightbulb, Clock } from "lucide-react";

export const Route = createFileRoute("/_app/interview")({
  head: () => ({ meta: [{ title: "Interview Prep — CareerPilot AI" }] }),
  component: Interview,
});

const categories = [
  { name: "Behavioral", count: 42, color: "bg-primary/10 text-primary" },
  { name: "System Design", count: 28, color: "bg-success/15 text-success" },
  { name: "Frontend", count: 56, color: "bg-warning/15 text-warning-foreground" },
  { name: "Leadership", count: 24, color: "bg-accent text-accent-foreground" },
];

const questions = [
  { q: "Tell me about a time you disagreed with a teammate.", cat: "Behavioral", difficulty: "Medium", time: "3 min" },
  { q: "Design a URL shortener like bit.ly.", cat: "System Design", difficulty: "Hard", time: "30 min" },
  { q: "Explain the React reconciliation algorithm.", cat: "Frontend", difficulty: "Hard", time: "10 min" },
  { q: "How do you give feedback to underperformers?", cat: "Leadership", difficulty: "Medium", time: "5 min" },
  { q: "What's the difference between debounce and throttle?", cat: "Frontend", difficulty: "Easy", time: "3 min" },
];

function Interview() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Interview Preparation</h1>
        <p className="text-muted-foreground mt-1">Practice with AI-powered mock interviews and get instant feedback.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <Card key={c.name} className="p-5 cursor-pointer hover:shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-all">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.color}`}>
              <MessagesSquare className="h-5 w-5" />
            </div>
            <div className="mt-4 font-semibold">{c.name}</div>
            <div className="text-xs text-muted-foreground">{c.count} questions</div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2 p-6">
          <h2 className="font-semibold">Question bank</h2>
          <div className="mt-4 space-y-2">
            {questions.map((q, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-lg border p-3 transition-all ${
                  active === i
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40 hover:bg-secondary/40"
                }`}
              >
                <div className="text-sm font-medium line-clamp-2">{q.q}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <Badge variant="secondary">{q.cat}</Badge>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {q.time}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-3 p-6">
          {active !== null && (
            <>
              <div className="flex items-center justify-between">
                <Badge className="bg-primary/10 text-primary border-primary/20 border">
                  {questions[active].cat}
                </Badge>
                <Button size="sm" variant="outline">
                  <Play className="mr-1 h-3 w-3" /> Record answer
                </Button>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{questions[active].q}</h3>
              <Textarea
                placeholder="Type or dictate your answer here..."
                className="mt-4 min-h-[160px] resize-none"
              />
              <Button className="mt-4 w-full bg-[image:var(--gradient-primary)] hover:opacity-95">
                <Sparkles className="mr-1 h-4 w-4" /> Get AI feedback
              </Button>

              <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Lightbulb className="h-4 w-4" /> Coach tip
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use the STAR method (Situation, Task, Action, Result) to structure your behavioral answers. Keep it under 2 minutes.
                </p>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
