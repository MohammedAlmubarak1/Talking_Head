'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import cn from '@/app/utils/TailwindMergeAndClsx';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const SimliHeaderLogo = ({ className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async () => {
    console.log('Clicked logo', pathname);
  };

  return (
    <div className={cn('fixed top-[32px] left-[32px] cursor-pointer font-bold text-white text-xl', className)} onClick={handleClick}>
      Napolean Bonaparte Ai
    </div>
  );
};

export default SimliHeaderLogo;
