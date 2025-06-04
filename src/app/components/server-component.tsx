import { headers, type UnsafeUnwrappedHeaders } from 'next/headers';
import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentProps) {
  console.log('Server Component Copy');
  console.log((headers() as unknown as UnsafeUnwrappedHeaders));

  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}
