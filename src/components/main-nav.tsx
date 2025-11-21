'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CreditCard, FolderKanban, LayoutDashboard, ReceiptText, Tags } from 'lucide-react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/expenses', label: 'Expenses', icon: ReceiptText },
  { href: '/cards', label: 'Credit Cards', icon: CreditCard },
  { href: '/categories', label: 'Categories', icon: FolderKanban },
  { href: '/tags', label: 'Tags', icon: Tags },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={link.href === '/dashboard' ? pathname === link.href : pathname.startsWith(link.href)}
            tooltip={link.label}
          >
            <Link href={link.href}>
              <link.icon className="size-4" />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
