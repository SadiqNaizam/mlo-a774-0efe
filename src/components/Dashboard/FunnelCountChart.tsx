import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-[#EF644A]' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-[#F9C108]' },
  { name: 'In conversation', count: 50, value: 100, duration: '2 days', color: 'bg-[#373A5E]' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-[#67C57B]' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-[#A054C3]' },
];

const FunnelCountChart: React.FC = () => {
  const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="text-primary-text">Funnel count</CardTitle>
        <div className="flex items-baseline space-x-2 pt-2">
          <p className="text-4xl font-bold text-primary-text">600</p>
          <span className="text-muted-foreground">active leads</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div className="flex h-2.5 rounded-full overflow-hidden">
                {funnelData.map((stage) => (
                    <div
                        key={stage.name}
                        className={stage.color}
                        style={{ width: `${(stage.count / totalCount) * 100}%` }}
                    />
                ))}
            </div>
        </div>
        <ul className="space-y-4">
          {funnelData.map((stage) => (
            <li key={stage.name} className="grid grid-cols-12 items-center text-sm">
              <div className="col-span-1 flex items-center">
                <span className={`w-3 h-3 rounded-sm mr-3 ${stage.color}`}></span>
              </div>
              <span className="col-span-4 text-muted-foreground">{stage.name}</span>
              <span className="col-span-2 font-medium text-primary-text">{stage.count}</span>
              <span className="col-span-2 font-medium text-primary-text">${stage.value.toLocaleString()}</span>
              <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="col-span-3 text-right text-muted-foreground cursor-default">{stage.duration}</span>
                    </TooltipTrigger>
                    {stage.name === 'In conversation' && (
                        <TooltipContent>
                            <p>average time on this stage</p>
                        </TooltipContent>
                    )}
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelCountChart;
