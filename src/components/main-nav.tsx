// Este archivo define el componente de navegación principal de la barra lateral.
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CreditCard, FolderKanban, LayoutDashboard, ReceiptText, Tags } from 'lucide-react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

// Define los enlaces de navegación con sus rutas, etiquetas e iconos.
const links = [
  { href: '/dashboard', label: 'Panel', icon: LayoutDashboard },
  { href: '/expenses', label: 'Gastos', icon: ReceiptText },
  { href: '/cards', label: 'Tarjetas', icon: CreditCard },
  { href: '/categories', label: 'Categorías', icon: FolderKanban },
  { href: '/tags', label: 'Etiquetas', icon: Tags },
];

/**
 * Componente MainNav
 * Renderiza el menú de navegación principal en la barra lateral.
 * Utiliza el hook usePathname para resaltar el enlace activo.
 */
export default function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            // Determina si el enlace está activo. Para el dashboard, la ruta debe ser exacta.
            // Para otras rutas, comprueba si la ruta actual comienza con la ruta del enlace.
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
