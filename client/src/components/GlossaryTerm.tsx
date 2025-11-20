import { glossaryMap } from "@/data/glossary";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

type GlossaryTermProps = {
  id: string;
  children?: React.ReactNode;
  className?: string;
};

export function GlossaryTerm({ id, children, className }: GlossaryTermProps) {
  const term = glossaryMap[id];
  if (!term) return <>{children || id}</>;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={className || "inline-flex items-center gap-1 text-blue-700 underline decoration-dotted cursor-help"}>
            {children || term.term}
            <Info className="w-3.5 h-3.5" aria-hidden />
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-sm leading-snug">
          <p className="font-semibold text-slate-900">{term.term}{term.reading ? `（${term.reading}）` : ""}</p>
          <p className="text-slate-700">{term.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
