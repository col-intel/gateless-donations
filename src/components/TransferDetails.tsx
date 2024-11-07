import React, { useState } from 'react';
import { Delegation } from '../types';
import { Copy, Check } from 'lucide-react';
import { config } from '../utils/config';

interface TransferDetailsProps {
  delegation: Delegation;
}

export const TransferDetails: React.FC<TransferDetailsProps> = ({ delegation }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const delegationData = config.delegations[delegation];
  const { copy } = config;

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl mb-12">{copy.steps.transfer.title}</h2>
      
      <p className="text-xl mb-12">{copy.steps.transfer.subtitle}</p>

      <p className="text-xl mb-8">{copy.steps.transfer.instructions}:</p>

      <div className="space-y-6 text-lg">
        <div>
          <span className="font-bold">{copy.bankDetails.name.label}:</span>{' '}
          {copy.bankDetails.name.value}
        </div>

        <div className="flex items-center gap-4">
          <div>
            <span className="font-bold">{copy.bankDetails.iban}:</span>{' '}
            <span className="font-mono">{delegationData.iban}</span>
          </div>
          <button
            onClick={() => copyToClipboard(delegationData.iban, 'iban')}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors relative"
          >
            {copiedField === 'iban' ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <Copy className="w-5 h-5 text-gray-600" />
            )}
            <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap transition-opacity ${
              copiedField === 'iban' ? 'opacity-100' : 'opacity-0'
            }`}>
              Copiado!
            </span>
          </button>
        </div>

        <div>
          <span className="font-bold">{copy.bankDetails.swift}:</span> {delegationData.swift}
        </div>

        <div className="space-y-1">
          <div className="font-bold">{copy.bankDetails.bank}:</div>
          <div>{delegationData.bank.name},</div>
          <div>{delegationData.bank.legal}</div>
        </div>
      </div>

      <div className="mt-12 space-y-2">
        <p>
          {copy.steps.transfer.receipt}{' '}
          <a href={`mailto:${config.email.receipt.address}`} className="text-blue-600 hover:underline">
            {config.email.receipt.address}
          </a>{' '}
          {copy.steps.transfer.receiptDetails}
        </p>
      </div>
    </div>
  );
};