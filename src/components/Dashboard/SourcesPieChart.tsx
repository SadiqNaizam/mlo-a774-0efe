import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

interface SourceData {
    name: 'Clutch' | 'Behance' | 'Instagram' | 'Dribbble';
    value: number;
    amount: number;
    percentage: number;
    color: string;
}

const data: SourceData[] = [
    { name: 'Clutch', value: 50, amount: 3000, percentage: 50, color: '#EF644A' },
    { name: 'Behance', value: 40, amount: 1000, percentage: 40, color: '#F9C108' },
    { name: 'Instagram', value: 10, amount: 1000, percentage: 10, color: '#27B29A' },
    { name: 'Dribbble', value: 10, amount: 1000, percentage: 10, color: '#A0D7A7' },
];

const SourcesPieChart: React.FC = () => {
    return (
        <Card className="col-span-1">
            <CardHeader>
                <CardTitle className="text-primary-text">Sources</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="w-full h-48">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="value"
                                    paddingAngle={3}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="hsl(var(--card))" strokeWidth={2} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                        <ul className="space-y-4">
                            {data.map((source) => (
                                <li key={source.name} className="grid grid-cols-12 items-center text-sm">
                                    <span
                                        className="col-span-1 w-3 h-3 rounded-sm"
                                        style={{ backgroundColor: source.color }}
                                    ></span>
                                    <span className="col-span-5 text-muted-foreground">{source.name}</span>
                                    <span className="col-span-4 font-medium text-primary-text">${source.amount.toLocaleString()}</span>
                                    <span className="col-span-2 text-right text-muted-foreground">{source.percentage}%</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                     <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Badge variant="secondary" className="font-normal text-muted-foreground cursor-help">from leads total</Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                               <p>Percentage from total deal value of leads.</p>
                            </TooltipContent>
                        </Tooltip>
                     </TooltipProvider>
                </div>
            </CardContent>
        </Card>
    );
};

export default SourcesPieChart;
