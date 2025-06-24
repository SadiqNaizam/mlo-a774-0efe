import React from 'react';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


interface StatsCardProps {
  value: string;
  label: string;
  tooltip?: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, tooltip, className }) => {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-4xl font-semibold text-primary-text">{value}</p>
      <div className="flex items-center justify-center space-x-1 mt-1">
        <p className="text-sm text-muted-foreground whitespace-nowrap">{label}</p>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
