import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Sparkles, CheckCircle2, AlertCircle, FileText } from "lucide-react";

export const Route = createFileRoute("/_app/resume")({
  head: () => ({ meta: [{ title: "ATS Resume Analyzer — CareerPilot AI" }] }),
  component: Resume,
});

function Resume() {
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">ATS Resume Analyzer</h1>
        <p className="text-muted-foreground mt-1">
          Match your resume against a job description and beat applicant tracking systems.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="font-semibold flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" /> Your Resume
          </h2>
          <div className="mt-4 rounded-lg border-2 border-dashed border-border bg-secondary/30 p-8 text-center">
            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm font-medium">Drop your resume here</p>
            <p className="text-xs text-muted-foreground">PDF, DOCX up to 5MB</p>
            <Button variant="outline" size="sm" className="mt-4">Browse files</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" /> Job Description
          </h2>
          <Textarea
            placeholder="Paste the job description here..."
            className="mt-4 min-h-[180px] resize-none"
          />
          <Button onClick={() => setAnalyzed(true)} className="mt-4 w-full bg-[image:var(--gradient-primary)] hover:opacity-95">
            <Sparkles className="mr-1 h-4 w-4" /> Analyze match
          </Button>
        </Card>
      </div>

      {analyzed && (
        <Card className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold">Analysis Results</h2>
              <p className="text-xs text-muted-foreground">Stripe — Senior Frontend Engineer</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">ATS Match Score</div>
                <div className="text-3xl font-bold bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">87/100</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { label: "Keyword Match", value: 92 },
              { label: "Skills Alignment", value: 85 },
              { label: "Format Quality", value: 84 },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-sm">
                  <span>{m.label}</span>
                  <span className="font-medium">{m.value}%</span>
                </div>
                <Progress value={m.value} className="mt-2" />
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" /> Strengths
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {["React expertise highlighted", "TypeScript mentioned 5x", "Quantified achievements", "Clean section structure"].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold flex items-center gap-1.5">
                <AlertCircle className="h-4 w-4 text-warning" /> Suggestions
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {["Add 'GraphQL' to skills", "Mention payment systems experience", "Include team-lead achievement", "Shorten summary to 3 lines"].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-xs text-muted-foreground mr-2 self-center">Missing keywords:</span>
            {["GraphQL", "Stripe API", "WebSockets", "A/B testing"].map((k) => (
              <Badge key={k} variant="outline" className="border-warning/40 text-warning">{k}</Badge>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
