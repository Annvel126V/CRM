'use client';

import React from 'react';
import { useRouter } from 'next/router';
import CompanyFormModal from '@/app/components/company-form-modal';

export default function Page() {
  const router = useRouter();
  return <CompanyFormModal show={true} onClose={() => router.back()} />;
}
