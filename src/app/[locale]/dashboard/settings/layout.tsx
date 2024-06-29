import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
      <div className='mx-auto grid w-full max-w-6xl gap-2'>
        <h1 className='text-3xl font-semibold'>Settings</h1>
      </div>
      <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
        <nav className='grid gap-4 text-sm text-muted-foreground'>
          <Link href='general' className='font-semibold text-primary'>
            通用设置
          </Link>
          <Link href='profile'>个人资料</Link>
          <Link href='account'>账号设置</Link>
          <Link href='message'>消息设置</Link>
          <Link href='block'>屏蔽设置</Link>
          <Link href='advanced'>高级设置</Link>
        </nav>
        {children}
      </div>
    </main>
  );
}
