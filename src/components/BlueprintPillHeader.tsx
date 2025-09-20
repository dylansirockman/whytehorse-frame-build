import React from 'react';
import { cn } from '@/lib/utils';

interface BlueprintPillHeaderProps {
  index?: number | string;
  title: string;
  metaRight?: string;
  as?: 'h2' | 'h3' | 'div';
  className?: string;
  dense?: boolean;
}

const BlueprintPillHeader: React.FC<BlueprintPillHeaderProps> = ({
  index,
  title,
  metaRight,
  as: Component = 'h2',
  className,
  dense = false,
}) => {
  return (
    <Component
      className={cn(
        'flex items-center gap-4 mb-6',
        dense ? 'py-2' : 'py-3',
        className
      )}
    >
      {/* Blueprint Index Circle */}
      {index && (
        <div className="shrink-0 w-8 h-8 rounded-full border-2 border-hsl(var(--construction-dark)) bg-hsl(var(--construction-light)) flex items-center justify-center">
          <span className="text-xs font-bold text-hsl(var(--construction-dark)) select-none">
            {index}
          </span>
        </div>
      )}

      {/* Blueprint Title Block */}
      <div className="bg-hsl(var(--construction-light)) border-2 border-hsl(var(--construction-dark)) px-3 py-1.5">
        <div className="uppercase font-bold tracking-wide text-sm text-hsl(var(--construction-dark))">
          {title}
        </div>
      </div>

      {/* Blueprint Grid Line */}
      <div className="flex-1 h-0 border-t-2 border-dashed border-hsl(var(--construction-dark))/40 min-w-[20px]" />

      {/* Right Meta in Blueprint Style */}
      {metaRight && (
        <div className="bg-hsl(var(--construction-dark)) text-hsl(var(--construction-light)) px-2 py-1 text-xs font-mono uppercase tracking-wide">
          {metaRight}
        </div>
      )}
    </Component>
  );
};

export default BlueprintPillHeader;
