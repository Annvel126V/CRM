'use client';

import React from 'react';
import PromotionForm from '@/app/components/promotion-from';

export const dynamic = 'force-dynamic';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
}
