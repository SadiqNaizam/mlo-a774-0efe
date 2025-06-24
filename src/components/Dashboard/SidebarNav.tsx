import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingBag,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  Circle,
  Menu,
} from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { label: 'Leads', icon: Users, href: '#' },
  { label: 'Customers', icon: User, href: '#' },
  { label: 'Proposals', icon: FileText, href: '#' },
  { label: 'Invoices', icon: Receipt, href: '#' },
  { label: 'Items', icon: ShoppingBag, href: '#' },
  { label: 'Mail', icon: Mail, href: '#' },
  { label: 'Shoebox', icon: Archive, href: '#' },
  { label: 'Calendar', icon: Calendar, href: '#' },
];

const footerNavItems: NavItem[] = [
  { label: 'Help', icon: HelpCircle, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col bg-sidebar text-sidebar-foreground border-r border-border h-screen">
      <div className="h-16 flex items-center px-4 border-b border-border">
         <Menu className="h-6 w-6 text-muted-foreground mr-4" />
         <Circle className="h-8 w-8 text-primary-text mr-2" fill="#082A4C" />
      </div>
      <div className="flex-1 flex flex-col justify-between py-4">
        <nav className="px-3 space-y-1">
          {mainNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors',
                item.isActive
                  ? 'bg-accent text-primary-text font-semibold'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <nav className="px-3 space-y-1">
          {footerNavItems.map((item) => (
             <a
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarNav;
