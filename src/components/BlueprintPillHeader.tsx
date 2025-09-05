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
        'flex items-center gap-3 mb-6',
        dense ? 'py-2' : 'py-3',
        className
      )}
    >
      {/* Index Box */}
      {index && (
        <div className="shrink-0 border-[1.5px] border-slate-900 px-2 py-1 leading-none">
          <span className="text-sm font-medium text-slate-900 select-none">
            {index}
          </span>
        </div>
      )}
      
      {/* Title */}
      <div className="uppercase font-semibold tracking-wider text-sm md:text-base text-slate-900">
        {title}
      </div>
      
      {/* Rule/Line */}
      <div className="flex-1 h-px bg-slate-900/80 translate-y-[1px] min-w-[20px]" />
      
      {/* Right Meta */}
      {metaRight && (
        <div className="uppercase text-[11px] tracking-widest font-normal text-slate-900/80 whitespace-nowrap">
          {metaRight}
        </div>
      )}
    </Component>
  );
};

export default BlueprintPillHeader;