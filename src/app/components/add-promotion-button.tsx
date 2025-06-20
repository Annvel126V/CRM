'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './button';

export interface AddPromotionButtonProps {
  companyId: string;
}

export default function AddCompanyButton({
  companyId,
}: AddPromotionButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() =>
        router.push(`/companies/${companyId}/new-promotion`, { scroll: false })
      }
    >
      Add promotions
    </Button>
  );
}
