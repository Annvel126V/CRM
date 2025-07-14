import React from 'react';
import Header from '@/app/components/header';
import { Company, getCompany } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  if (!params.id) {
    throw new Error('Missing company ID');
  }

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', params.id]) as
    | Company
    | undefined;

  if (!company) {
    throw new Error(`Company with id ${params.id} not found`);
  }

  return <Header>{company.title}</Header>;
}
