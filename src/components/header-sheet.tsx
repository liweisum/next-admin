'use client';

import React from 'react';
import Link from 'next/link';
import { Package, Package2, ShoppingCart, Users2, PanelLeft } from 'lucide-react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeWrapper } from '@/components/theme-wrapper';

export function HeaderSheet() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline' className='md:hidden'>
          <PanelLeft className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='sm:max-w-xs'>
        <ThemeWrapper>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              href='/'
              className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
            >
              <Package2 className='h-5 w-5 transition-all group-hover:scale-110' />
              <span className='sr-only'>Acme Inc</span>
            </Link>
            <Link
              href='users'
              className={clsx('flex items-center gap-4 px-2.5 hover:text-primary', {
                'text-muted-foreground': pathname !== '/dashboard/users',
                'text-primary': pathname === '/dashboard/users',
              })}
            >
              <Users2 className='h-5 w-5' />
              Users
            </Link>
            <Link
              href='products'
              className={clsx('flex items-center gap-4 px-2.5 hover:text-primary', {
                'text-muted-foreground': pathname !== '/dashboard/products',
                'text-primary': pathname === '/dashboard/products',
              })}
            >
              <Package className='h-5 w-5' />
              Products
            </Link>
            <Link
              href='orders'
              className={clsx('flex items-center gap-4 px-2.5 hover:text-primary', {
                'text-muted-foreground': pathname !== '/dashboard/orders',
                'text-primary': pathname === '/dashboard/orders',
              })}
            >
              <ShoppingCart className='h-5 w-5' />
              Orders
            </Link>
          </nav>
        </ThemeWrapper>
      </SheetContent>
    </Sheet>
  );
}
