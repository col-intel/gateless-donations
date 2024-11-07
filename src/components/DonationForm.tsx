import React, { useState } from 'react';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { PaymentMethod, Delegation } from '../types';
import { PaymentMethodStep } from './PaymentMethodStep';
import { DelegationStep } from './DelegationStep';
import { TransferDetails } from './TransferDetails';
import { handlePaymentRedirect } from '../utils/payments';

export const DonationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [delegation, setDelegation] = useState<Delegation | null>(null);

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setStep(2);
  };

  const handleDelegationSelect = (del: Delegation) => {
    setDelegation(del);
    if (paymentMethod === 'transferencia') {
      setStep(3);
    } else if (paymentMethod) {
      handlePaymentRedirect(paymentMethod, del);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    if (step === 2) {
      setPaymentMethod(null);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-md mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
            Quero Doar <Heart className="ml-2 text-red-500 fill-current" />
          </h1>
          <p className="text-gray-600 text-lg">Ajude-nos a mudar vidas</p>
        </div>

        <div className="mb-8">
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {step === 1 && <PaymentMethodStep onSelect={handlePaymentMethodSelect} />}
        {step === 2 && paymentMethod && <DelegationStep onSelect={handleDelegationSelect} paymentMethod={paymentMethod} />}
        {step === 3 && delegation && <TransferDetails delegation={delegation} />}

        <div className="flex mt-8 pt-4 border-t">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="flex items-center px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </button>
          )}
          {step === 3 && (
            <button
              onClick={() => setStep(1)}
              className="ml-auto flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fazer Nova Doação
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};