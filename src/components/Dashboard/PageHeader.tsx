import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h1 className="text-3xl font-bold text-primary-text">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="text-muted-foreground bg-card">
          <CalendarDays className="mr-2 h-4 w-4" />
          last 6 months
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <Tabs defaultValue="leads" className="w-[200px]">
          <TabsList className="grid w-full grid-cols-2 bg-secondary">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default PageHeader;
