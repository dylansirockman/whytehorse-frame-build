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
  dense = false
}) => {
  return;
};
export default BlueprintPillHeader;