'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
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
    <div className={cn('fixed top-[32px] left-[32px] cursor-pointer', className)} onClick={handleClick}>
      <Image 
        src="/Trump_2024_2022_Campaign_Logo.png" 
        alt="Trump Campaign Logo"
        width={450}
        height={200}
        className="rounded-full"
      />
    </div>
  );
};

export default SimliHeaderLogo;
