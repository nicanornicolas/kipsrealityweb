'use client';

import { useEffect, useState } from 'react';
import UpgradeRequiredModal from '@/components/monetization/UpgradeRequiredModal';
import {
  PAYMENT_REQUIRED_EVENT,
  type PaymentRequiredEventDetail,
} from '@/lib/api-client';

export function GlobalUpgradeModalHost() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorData, setErrorData] = useState<PaymentRequiredEventDetail | undefined>();

  useEffect(() => {
    const onPaymentRequired = (event: Event) => {
      const customEvent = event as CustomEvent<PaymentRequiredEventDetail>;
      setErrorData(customEvent.detail);
      setIsOpen(true);
    };

    window.addEventListener(PAYMENT_REQUIRED_EVENT, onPaymentRequired);
    return () => {
      window.removeEventListener(PAYMENT_REQUIRED_EVENT, onPaymentRequired);
    };
  }, []);

  return (
    <UpgradeRequiredModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      error={errorData}
    />
  );
}
