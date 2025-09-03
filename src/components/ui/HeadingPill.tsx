import { Ruler, Compass, Grid3X3, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingPillProps {
  label: string;
  icon?: "ruler" | "compass" | "grid" | "blueprint" | "none";
  className?: string;
}

const iconMap = {
  ruler: Ruler,
  compass: Compass,
  grid: Grid3X3,
  blueprint: FileText,
  none: null,
};

const HeadingPill = ({ label, icon = "none", className }: HeadingPillProps) => {
  const IconComponent = iconMap[icon];

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 rounded-full relative select-none",
        "px-4 py-2 md:px-5 md:py-2.5",
        "blueprint-pill",
        "transition-all duration-300 ease-out",
        "hover:shadow-[0_0_0_3px_hsl(var(--construction-green)/_0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-construction-green focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "dark:focus-visible:ring-offset-black",
        className
      )}
    >
      {/* Corner ticks */}
      <div className="absolute -top-2 -left-2 w-3.5 h-3.5 pointer-events-none">
        <div className="absolute top-0 left-0 w-3.5 h-0.5 bg-[hsl(var(--blueprint-ink-light)/_0.45)]" />
        <div className="absolute top-0 left-0 w-0.5 h-3.5 bg-[hsl(var(--blueprint-ink-light)/_0.45)]" />
      </div>
      <div className="absolute -bottom-2 -right-2 w-3.5 h-3.5 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-3.5 h-0.5 bg-[hsl(var(--blueprint-ink-light)/_0.45)]" />
        <div className="absolute bottom-0 right-0 w-0.5 h-3.5 bg-[hsl(var(--blueprint-ink-light)/_0.45)]" />
      </div>
      
      {/* Content */}
      {IconComponent && (
        <IconComponent 
          size={16} 
          className="text-construction-green opacity-80 stroke-[1.5]" 
        />
      )}
      <span className="text-[13px] md:text-sm font-semibold uppercase tracking-wider text-construction-green">
        {label}
      </span>
    </div>
  );
};

export default HeadingPill;