import React from 'react';
import Link from 'next/link';
import { Search, Bell, CircleUser } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ModeToggle } from '@/components/mode-toggle';
import LeftMenu from '@/components/left-menu';
import { HeaderSheet } from '@/components/header-sheet';
import { LanguageChanger } from '@/components/language-changer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full h-full flex-row bg-muted/40 overflow-hidden'>
      <LeftMenu />
      <div className='flex-1 flex flex-col sm:gap-4 sm:py-4 sm:pl-14 overflow-auto'>
        <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent'>
          <HeaderSheet />
          <div className='hidden relative ml-auto flex-1 md:grow-0 md:flex'>
            <Search className='absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search...'
              className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]'
            />
          </div>

          <LanguageChanger />
          <ModeToggle />

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/dashboard/messages'
                className='hidden relative md:flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary'
              >
                <Button variant='secondary' size='icon' className='   rounded-full'>
                  <Bell className='h-5 w-5' />
                  <span className='sr-only'>消息</span>
                </Button>
                <Badge className=' absolute left-5 bottom-5  flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                  6
                </Badge>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>消息</TooltipContent>
          </Tooltip>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' size='icon' className='rounded-full'>
                <CircleUser className='h-5 w-5' />
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>未登录</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href='/dashboard/settings'>
                <DropdownMenuItem>个人设置</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href='/dashboard/auth'>
                <DropdownMenuItem>登录账号</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className='flex-1 relative overflow-auto'>{children}</div>
      </div>
    </div>
  );
}
