import React from 'react';
import { Building2 } from 'lucide-react';
import { PaymentMethod } from '../types';
import { config } from '../utils/config';

interface PaymentMethodStepProps {
  onSelect: (method: PaymentMethod) => void;
}

export const PaymentMethodStep: React.FC<PaymentMethodStepProps> = ({ onSelect }) => (
  <>
    <h2 className="text-2xl font-semibold text-center mb-8">{config.copy.steps.payment.title}</h2>
    <div className="space-y-4">
      {Object.entries(config.paymentMethods).map(([key, method]) => (
        <button
          key={key}
          onClick={() => onSelect(key as PaymentMethod)}
          className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors flex justify-between items-center group"
        >
          <span className="text-lg font-medium">{method.name}</span>
          {method.icon === 'building2' ? (
            <Building2 className="h-8 w-8 text-blue-900 transition-transform group-hover:scale-105" />
          ) : (
            <img 
              src={`/${method.icon}`} 
              alt={method.name} 
              className="h-8 w-auto transition-transform group-hover:scale-105" 
            />
          )}
        </button>
      ))}
    </div>
    
    <div className="mt-8 pt-8 border-t border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-sm text-blue-700">
          {config.copy.footer.tagline}
        </h3>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="grid gap-4">
          {config.donationAmounts.map((donation, index) => (
            <div 
              key={index}
              className={`flex justify-between items-center p-3 ${
                index !== config.donationAmounts.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="text-sm text-gray-600">{donation.description}</span>
              <span className="text-base text-blue-700">€{donation.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);