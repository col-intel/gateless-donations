export type PaymentMethod = 'mbway' | 'multibanco' | 'transferencia';

export type Delegation = string;

export interface PaymentMethodConfig {
  name: string;
  icon: string;
}

export interface BankInfo {
  name: string;
  legal: string;
}

export interface PaymentUrls {
  mbway?: string;
  multibanco?: string;
}

export interface DelegationInfo {
  iban: string;
  swift: string;
  bank: BankInfo;
  availablePayments: PaymentMethod[];
  paymentUrls?: PaymentUrls;
}

export interface Config {
  paymentMethods: Record<PaymentMethod, PaymentMethodConfig>;
  copy: {
    title: string;
    subtitle: string;
    steps: {
      payment: { title: string };
      delegation: { title: string };
      transfer: {
        title: string;
        subtitle: string;
        instructions: string;
        receipt: string;
        receiptDetails: string;
      };
    };
    buttons: {
      back: string;
      newDonation: string;
    };
    bankDetails: {
      name: {
        label: string;
        value: string;
      };
      iban: string;
      swift: string;
      bank: string;
    };
    footer: {
      tagline: string;
    };
  };
  defaultDelegation: string;
  delegations: Record<string, DelegationInfo>;
  donationAmounts: Array<{
    description: string;
    amount: number;
  }>;
  email: {
    receipt: {
      address: string;
    };
  };
}