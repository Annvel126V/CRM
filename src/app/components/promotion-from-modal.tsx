'use client';

import React from 'react';
import PromotionForm from './promotion-from';
import Modal, { ModalProps } from './modal';

export interface PromotionFormModal extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onClose,
  ...rest
}: PromotionFormModal) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}
