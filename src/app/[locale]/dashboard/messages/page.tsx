import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Message() {
  return (
    <main>
      <div className='flex items-center space-x-4'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[250px]' />
        </div>
      </div>
    </main>
  );
}
