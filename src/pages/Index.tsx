import React from 'react';

import FunnelCountChart from '@/components/Dashboard/FunnelCountChart';
import LeadsTrackingChart from '@/components/Dashboard/LeadsTrackingChart';
import PageHeader from '@/components/Dashboard/PageHeader';
import ReasonsAndOtherDataCards from '@/components/Dashboard/ReasonsAndOtherDataCards';
import SidebarNav from '@/components/Dashboard/SidebarNav';
import SourcesPieChart from '@/components/Dashboard/SourcesPieChart';
import TopHeader from '@/components/Dashboard/TopHeader';

/**
 * The main dashboard page for the Leads Dashboard application.
 * This page composes the entire user interface by assembling various organism-level components
 * into a cohesive layout based on the project requirements.
 * It follows a standard HLSB (Header, Left Sidebar, Body) pattern.
 */
const IndexPage: React.FC = () => {
  return (
    // Overall layout structure: A CSS grid with a fixed-width sidebar (`auto`) and a flexible main content area (`1fr`).
    // This ensures the sidebar remains constant while the main content adapts.
    <div className="grid grid-cols-[auto_1fr] min-h-screen bg-background font-sans">
      <SidebarNav />

      {/* This flex container manages the right side of the screen, holding the header and the main content. */}
      <div className="flex flex-col h-screen">
        {/* The header is fixed at the top of the content area. */}
        <TopHeader />

        {/* The main content area is set to be scrollable vertically if content overflows. */}
        <main className="flex-1 overflow-y-auto p-6 bg-secondary">
          <PageHeader />

          {/* The main content grid for charts and data cards, following the `grid-cols-2` requirement for desktop. */}
          {/* It's made responsive to stack on smaller screens. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Each component below is a self-contained card or chart module. */}
            {/* These components internally define their column spans (`col-span-1` or `col-span-2`) */}
            {/* to fit correctly within this parent grid. */}
            <FunnelCountChart />
            <SourcesPieChart />
            <LeadsTrackingChart />
            <ReasonsAndOtherDataCards />
          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
