import React from 'react';
import { Delegation, PaymentMethod } from '../types';
import { config } from '../utils/config';

interface DelegationStepProps {
  onSelect: (delegation: Delegation) => void;
  paymentMethod: PaymentMethod;
}

export const DelegationStep: React.FC<DelegationStepProps> = ({ onSelect, paymentMethod }) => {
  const availableDelegations = Object.entries(config.delegations)
    .filter(([_, info]) => {
      if (paymentMethod === 'transferencia') {
        return true; // All delegations support bank transfers
      }
      return info.paymentUrls?.[paymentMethod] !== undefined;
    })
    .map(([name]) => name);

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-8">{config.copy.steps.delegation.title}</h2>
      <div className="space-y-2.5">
        {availableDelegations.map((delegation) => (
          <button
            key={delegation}
            onClick={() => onSelect(delegation)}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-all duration-200 flex justify-between items-center group hover:border-blue-200 hover:shadow-sm"
          >
            <span className="text-lg font-medium group-hover:text-blue-600">{delegation}</span>
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-blue-400 transition-colors"></div>
          </button>
        ))}
      </div>
    </>
  );
};