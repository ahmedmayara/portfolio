import { ContributionHeatmap } from "./contribution-heatmap";

interface ContributionsProps {
  history: Record<string, number>;
}

export function Contributions({ history }: ContributionsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs tracking-tighter">
          Github commit activity!
        </h1>
        <h2 className="font-doto text-2xl font-bold">Contributions</h2>
      </div>
      <ContributionHeatmap history={history} compact={true} />
    </div>
  );
}
