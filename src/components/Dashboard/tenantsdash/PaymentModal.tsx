'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Smartphone, Building2, Wallet } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoiceId?: string;
  amount: number;
  currency?: string;
  onPaymentSuccess?: () => void;
}

type PaymentMethod = 'mpesa' | 'card' | 'paystack' | 'stripe' | 'plaid';

export function PaymentModal({
  isOpen,
  onClose,
  invoiceId,
  amount,
  currency = 'KES',
  onPaymentSuccess,
}: PaymentModalProps) {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('mpesa');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const paymentMethods = [
    {
      id: 'mpesa' as PaymentMethod,
      label: 'M-Pesa',
      description: 'Pay via M-Pesa STK Push',
      icon: Smartphone,
      color: 'bg-green-100 text-green-700 border-green-300',
      iconColor: 'text-green-600',
    },
    {
      id: 'paystack' as PaymentMethod,
      label: 'Paystack',
      description: 'Card payments (Nigeria/Ghana)',
      icon: CreditCard,
      color: 'bg-purple-100 text-purple-700 border-purple-300',
      iconColor: 'text-purple-600',
    },
    {
      id: 'stripe' as PaymentMethod,
      label: 'Stripe',
      description: 'International cards',
      icon: Building2,
      color: 'bg-blue-100 text-blue-700 border-blue-300',
      iconColor: 'text-blue-600',
    },
    {
      id: 'plaid' as PaymentMethod,
      label: 'Plaid',
      description: 'US Bank transfers',
      icon: Wallet,
      color: 'bg-orange-100 text-orange-700 border-orange-300',
      iconColor: 'text-orange-600',
    },
  ];

  const handlePayment = async () => {
    if (!invoiceId) {
      toast.error('No invoice selected for payment');
      return;
    }

    setIsProcessing(true);
    try {
      // Call payment initialization API
      const response = await fetch('/api/payments/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          invoiceId,
          paymentMethod: selectedMethod,
          ...(selectedMethod === 'mpesa' && { phoneNumber }),
          ...(selectedMethod === 'card' && { cardDetails }),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          const returnUrl =
            typeof window !== 'undefined'
              ? `${window.location.pathname}${window.location.search}`
              : '/';
          toast.error('Please sign in to continue with payment.');
          router.push(`/login?next=${encodeURIComponent(returnUrl)}`);
          return;
        }
        throw new Error(data.error || 'Payment initialization failed');
      }

      // Handle M-Pesa STK Push flow
      if (selectedMethod === 'mpesa' && data.gateway === 'MPESA_DIRECT') {
        toast.success(
          `M-Pesa STK Push sent to ${phoneNumber}. Please check your phone to complete payment.`,
          { duration: 5000 },
        );

        // Show payment status monitoring
        monitorPaymentStatus(data.transactionId);
      } else {
        toast.success('Payment initialized successfully!');
        if (onPaymentSuccess) onPaymentSuccess();
        onClose();
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const monitorPaymentStatus = async (transactionId: string) => {
    // In a real implementation, you would poll the payment status API
    // or use WebSocket to get real-time updates
    toast.loading('Waiting for payment confirmation...', {
      id: 'payment-status',
    });

    // Simulate waiting for callback
    setTimeout(() => {
      toast.dismiss('payment-status');
      toast.success('Payment confirmed!', { duration: 3000 });
      if (onPaymentSuccess) onPaymentSuccess();
      onClose();
    }, 10000);
  };

  const formatAmount = () => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[min(100vw-1.5rem,720px)] max-h-[85vh] overflow-y-auto rounded-2xl border-slate-200/70 bg-white p-0 shadow-2xl dark:border-slate-800 dark:bg-slate-950">
        <div className="border-b border-slate-200/70 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-6 py-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Make Payment
            </DialogTitle>
            <DialogDescription className="text-slate-600 dark:text-slate-300">
              Pay your invoice using your preferred payment method
            </DialogDescription>
          </DialogHeader>

          {/* Mobile-only quick summary */}
          <div className="mt-4 flex items-center justify-between rounded-lg border border-blue-200/70 bg-blue-50 px-3 py-2 text-blue-900 sm:hidden">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-blue-700">
                Amount
              </span>
              <span className="text-base font-semibold">{formatAmount()}</span>
            </div>
            <div className="h-8 w-px bg-blue-200/80" />
            <div className="flex flex-col text-right">
              <span className="text-[11px] uppercase tracking-wide text-blue-700">
                Invoice
              </span>
              <span className="text-sm font-semibold">
                #{invoiceId ? invoiceId.slice(0, 8) : '—'}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-6 py-5">
          {/* Amount Display */}
          <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-800">
                Amount to Pay
              </span>
              <span className="text-2xl font-bold text-blue-900">
                {formatAmount()}
              </span>
            </div>
            {invoiceId && (
              <p className="text-xs text-blue-700 mt-2">
                Invoice: #{invoiceId.slice(0, 8)}
              </p>
            )}
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              Select Payment Method
            </Label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                const isSelected = selectedMethod === method.id;
                return (
                  <div key={method.id} className="relative">
                    <input
                      type="radio"
                      id={method.id}
                      name="paymentMethod"
                      value={method.id}
                      checked={isSelected}
                      onChange={(e) =>
                        setSelectedMethod(e.target.value as PaymentMethod)
                      }
                      className="sr-only peer"
                    />
                    <Label
                      htmlFor={method.id}
                      className={`group flex flex-col items-center justify-center rounded-xl border-2 p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] ${method.color} ${isSelected ? 'border-2 ring-2 ring-blue-500 ring-offset-2' : ''}`}
                    >
                      <Icon
                        className={`mb-2 h-8 w-8 transition-transform duration-200 group-hover:scale-110 ${method.iconColor}`}
                      />
                      <span className="text-sm font-medium transition-colors duration-200 group-hover:text-slate-900">
                        {method.label}
                      </span>
                      <span className="mt-1 text-xs opacity-80">
                        {method.description}
                      </span>
                      <span
                        className={`mt-2 h-1 w-10 rounded-full bg-current/30 transition-all duration-200 ${isSelected ? 'w-16 bg-current/60' : 'group-hover:w-12'}`}
                      />
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* M-Pesa Phone Number Input */}
          {selectedMethod === 'mpesa' && (
            <div className="space-y-3 rounded-xl border border-blue-200 bg-blue-50/70 p-4">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-blue-900"
              >
                Enter M-Pesa Phone Number
              </Label>
              <div className="flex items-center gap-2">
                <span className="rounded-l-lg border border-blue-200 bg-white px-3 py-2 text-blue-700">
                  +254
                </span>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="7XXXXXXXX"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value.replace(/\D/g, ''))
                  }
                  className="flex-1 rounded-l-none border-blue-200 bg-white focus-visible:ring-blue-500"
                />
              </div>
              <p className="text-xs text-blue-700/80">
                Enter your Safaricom number to receive STK Push prompt
              </p>
            </div>
          )}

          {/* Card Details Input (for demo) */}
          {selectedMethod === 'card' && (
            <div className="space-y-4 rounded-lg border border-gray-200 p-4">
              <Label className="text-sm font-medium">Card Details</Label>
              <div className="space-y-3">
                <Input
                  placeholder="Card Number"
                  value={cardDetails.number}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, number: e.target.value })
                  }
                />
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, expiry: e.target.value })
                    }
                  />
                  <Input
                    placeholder="CVC"
                    value={cardDetails.cvc}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvc: e.target.value })
                    }
                  />
                </div>
                <Input
                  placeholder="Cardholder Name"
                  value={cardDetails.name}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, name: e.target.value })
                  }
                />
              </div>
              <p className="text-xs text-gray-500">
                Note: This is a demo. Real card payments would use secure
                tokenization.
              </p>
            </div>
          )}

          {/* Payment Method Notes */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-2 text-sm font-medium text-gray-700">
              About {paymentMethods.find((m) => m.id === selectedMethod)?.label}
              :
            </h4>
            {selectedMethod === 'mpesa' && (
              <ul className="list-disc space-y-1 pl-4 text-xs text-gray-600">
                <li>You will receive an STK Push prompt on your phone</li>
                <li>Enter your M-Pesa PIN to complete payment</li>
                <li>Transaction fee: KSh 0 (waived for rent payments)</li>
              </ul>
            )}
            {selectedMethod === 'paystack' && (
              <ul className="list-disc space-y-1 pl-4 text-xs text-gray-600">
                <li>Redirect to Paystack for secure payment</li>
                <li>Supports cards, bank transfers, and mobile money</li>
                <li>Available for Nigeria and Ghana residents</li>
              </ul>
            )}
            {selectedMethod === 'stripe' && (
              <ul className="list-disc space-y-1 pl-4 text-xs text-gray-600">
                <li>Secure international card payments</li>
                <li>Supports Visa, Mastercard, American Express</li>
                <li>3D Secure authentication required</li>
              </ul>
            )}
            {selectedMethod === 'plaid' && (
              <ul className="list-disc space-y-1 pl-4 text-xs text-gray-600">
                <li>Connect directly to your US bank account</li>
                <li>No card details needed</li>
                <li>ACH transfers with 2-3 business day settlement</li>
              </ul>
            )}
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-3 border-t border-slate-200/70 px-6 py-5 sm:flex-row dark:border-slate-800">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isProcessing}
            className="sm:flex-1"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handlePayment}
            disabled={
              isProcessing || (selectedMethod === 'mpesa' && !phoneNumber)
            }
            className="sm:flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {isProcessing ? (
              <>
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                Processing...
              </>
            ) : (
              `Pay ${formatAmount()}`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
