'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Package, Package2, ShoppingCart, Users2, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const LeftMenu = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);

  return isCollapsed ? (
    <aside className='hidden w-14 border-r bg-background sm:flex sm:flex-col overflow-hidden'>
      <nav className='flex h-14 justify-center items-center border-b lg:h-[60px]'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href='/dashboard'
              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary md:h-8 md:w-8'
            >
              <Package2 className='h-5 w-5' />
              <span className='sr-only'>主页</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right'>主页</TooltipContent>
        </Tooltip>
      </nav>
      <nav className='flex-1 flex flex-col items-center gap-4 px-2 sm:py-4 overflow-auto'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href='/dashboard/users'
              className={clsx(
                'flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-primary md:h-8 md:w-8',
                {
                  'bg-accent': pathname === '/dashboard/users',
                  'text-primary': pathname === '/dashboard/users',
                  'text-muted-foreground': pathname !== '/dashboard/users',
                  'text-accent-foreground': pathname === '/dashboard/users',
                }
              )}
            >
              <Users2 className='h-5 w-5' />
              <span className='sr-only'>Users</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right'>Users</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href='/dashboard/products'
              className={clsx(
                'flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-primary md:h-8 md:w-8',
                {
                  'bg-accent': pathname === '/dashboard/products',
                  'text-primary': pathname === '/dashboard/products',
                  'text-muted-foreground': pathname !== '/dashboard/products',
                  'text-accent-foreground': pathname === '/dashboard/products',
                }
              )}
            >
              <Package className='h-5 w-5' />
              <span className='sr-only'>Products</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right'>Products</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href='/dashboard/orders'
              className={clsx(
                'flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-primary md:h-8 md:w-8',
                {
                  'bg-accent': pathname === '/dashboard/orders',
                  'text-primary': pathname === '/dashboard/orders',
                  'text-muted-foreground': pathname !== '/dashboard/orders',
                  'text-accent-foreground': pathname === '/dashboard/orders',
                }
              )}
            >
              <ShoppingCart className='h-5 w-5' />
              <span className='sr-only'>Orders</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right'>Orders</TooltipContent>
        </Tooltip>
      </nav>
      <nav className='flex flex-col border-t items-center gap-4 px-2 sm:py-4 mt-auto'>
        <div
          className='w-full flex justify-center text-primary'
          onClick={() => {
            setIsCollapsed(false);
          }}
        >
          <ChevronRight />
        </div>
      </nav>
    </aside>
  ) : (
    <aside className='hidden w-[220px] border-r bg-background sm:flex sm:flex-col overflow-hidden'>
      <nav className='flex h-14 items-center border-b px-2 lg:h-[60px]'>
        <Link
          href='/dashboard'
          className={clsx(
            'flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-primary'
          )}
        >
          <Package2 className='h-5 w-5' />
          <span>Acme Inc</span>
        </Link>
      </nav>
      <nav className='flex-1 flex flex-col gap-4 px-2 sm:py-4 overflow-auto'>
        <Link
          href='/dashboard/users'
          className={clsx('flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary', {
            'bg-muted': pathname === '/dashboard/users',
            'text-muted-foreground': pathname !== '/dashboard/users',
            'text-primary': pathname === '/dashboard/users',
          })}
        >
          <Users className='h-5 w-5' />
          <span>Users</span>
        </Link>
        <Link
          href='/dashboard/products'
          className={clsx('flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary', {
            'bg-muted': pathname === '/dashboard/products',
            'text-muted-foreground': pathname !== '/dashboard/products',
            'text-primary': pathname === '/dashboard/products',
          })}
        >
          <Package className='h-5 w-5' />
          <span>Products</span>
        </Link>
        <Link
          href='/dashboard/orders'
          className={clsx('flex items-center gap-3 rounded-lg px-3 py-2  transition-all  hover:text-primary', {
            'bg-muted': pathname === '/dashboard/orders',
            'text-muted-foreground': pathname !== '/dashboard/orders',
            'text-primary': pathname === '/dashboard/orders',
          })}
        >
          <ShoppingCart className='h-5 w-5' />
          <span>Orders</span>
        </Link>
      </nav>

      <nav className='mt-auto p-4'>
        <Card x-chunk='dashboard-02-chunk-0'>
          <CardHeader className='p-2 pt-0 md:p-4'>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
          </CardHeader>
          <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
            <Button size='sm' className='w-full'>
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </nav>

      <nav className='flex flex-col border-t items-center gap-4 px-2 sm:py-4 mt-auto'>
        <div
          className='w-full flex justify-center text-primary'
          onClick={() => {
            setIsCollapsed(true);
          }}
        >
          <ChevronLeft />
        </div>
      </nav>
    </aside>
  );
};

export default LeftMenu;
