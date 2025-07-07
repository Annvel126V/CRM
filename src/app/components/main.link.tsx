import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface MainLinkProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function MainLink({
  pathname,
  src,
  alt,
  children,
}: MainLinkProps) {
  return (
    <Link
      href={pathname}
      className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded cursor-pointer flex gap-3"
    >
      <Image width={16} height={16} src={src} alt={alt} />
      <span>{children}</span>
    </Link>
  );
}
