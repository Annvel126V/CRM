'use client';

import React from 'react';
import CompanyForm, { CompanyFieldValues } from './company-form';
import Modal, { ModalProps } from './modal';

interface CompanyFormModalProps extends ModalProps {
  onSubmit?: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyFormModal({
  onClose,
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={onSubmit ?? (() => onClose())} />
    </Modal>
  );
}
