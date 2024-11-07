export type PaymentMethod = 'mbway' | 'multibanco' | 'transferencia';

export type Delegation = 
  | 'Sede'
  | 'Albufeira'
  | 'Azeitão'
  | 'Cascais'
  | 'Coimbra'
  | 'Figueira da Foz'
  | 'Lisboa'
  | 'Madeira'
  | 'Paredes'
  | 'Porto'
  | 'Setúbal';

export type DelegationData = {
  [key in Delegation]: {
    iban: string;
    swift: string;
  }
};