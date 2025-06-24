import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid } from 'recharts';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 68 },
  { name: 'April', closedWon: 45, closedLost: 48 },
  { name: 'May', closedWon: 65, closedLost: 40 },
  { name: 'June', closedWon: 85, closedLost: 5 },
  { name: 'July', closedWon: 95, closedLost: 45 },
  { name: 'August', closedWon: 25, closedLost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-card border rounded-md shadow-lg">
        <p className="label font-bold text-card-foreground">{`${label}`}</p>
        <p style={{color: '#008272'}}>{`Closed won: ${payload[0].value}`}</p>
        <p style={{color: '#D44D44'}}>{`Closed lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col">
            <CardTitle className="text-primary-text">Leads tracking</CardTitle>
            <div className="flex items-baseline space-x-6 mt-2">
                <div className="flex items-baseline space-x-2">
                    <p className="text-4xl font-bold text-primary-text">680</p>
                    <span className="text-muted-foreground">total closed</span>
                </div>
                <div className="flex items-baseline space-x-2">
                    <p className="text-4xl font-bold text-primary-text">70</p>
                    <span className="text-muted-foreground">total lost</span>
                </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="font-normal text-muted-foreground py-2 px-3">Leads came</Badge>
              <Badge variant="outline" className="bg-card text-primary-text border-border py-2 px-3 shadow-sm">Leads Converted</Badge>
              <Badge variant="secondary" className="font-normal text-muted-foreground py-2 px-3">Total deals size</Badge>
          </div>
          <Button variant="outline" className="text-muted-foreground bg-card">
            <CalendarDays className="mr-2 h-4 w-4" />
            last 6 months
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
                    <defs>
                        <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#008272" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#008272" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D44D44" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#D44D44" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickLine={false} axisLine={false} dy={10} />
                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
                    <Area type="monotone" dataKey="closedWon" stroke="#008272" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#008272', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#008272', stroke: 'hsl(var(--card))', strokeWidth: 2 }}/>
                    <Area type="monotone" dataKey="closedLost" stroke="#D44D44" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#D44D44', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#D44D44', stroke: 'hsl(var(--card))', strokeWidth: 2 }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-sm mr-2 bg-[#008272]"></span>
                <span className="text-muted-foreground">Closed won</span>
            </div>
            <div className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-sm mr-2 bg-[#D44D44]"></span>
                <span className="text-muted-foreground">Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
