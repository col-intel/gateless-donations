import { Delegation } from '../types';

type DelegationInfo = {
  iban: string;
  swift: string;
};

export const delegationData: Record<Delegation, DelegationInfo> = {
  'Sede': {
    iban: 'PT50 0033 0000 0000 0000 0000 0',
    swift: 'BCOMPTPL',
  },
  'Albufeira': {
    iban: 'PT50 0033 0000 0000 0000 0000 1',
    swift: 'BCOMPTPL',
  },
  'Azeitão': {
    iban: 'PT50 0033 0000 0000 0000 0000 2',
    swift: 'BCOMPTPL',
  },
  'Cascais': {
    iban: 'PT50 0033 0000 0000 0000 0000 3',
    swift: 'BCOMPTPL',
  },
  'Coimbra': {
    iban: 'PT50 0033 0000 0000 0000 0000 4',
    swift: 'BCOMPTPL',
  },
  'Figueira da Foz': {
    iban: 'PT50 0033 0000 0000 0000 0000 5',
    swift: 'BCOMPTPL',
  },
  'Lisboa': {
    iban: 'PT50 0033 0000 0000 0000 0000 6',
    swift: 'BCOMPTPL',
  },
  'Madeira': {
    iban: 'PT50 0033 0000 0000 0000 0000 7',
    swift: 'BCOMPTPL',
  },
  'Paredes': {
    iban: 'PT50 0033 0000 0000 0000 0000 8',
    swift: 'BCOMPTPL',
  },
  'Porto': {
    iban: 'PT50 0033 0000 0000 0000 0000 9',
    swift: 'BCOMPTPL',
  },
  'Setúbal': {
    iban: 'PT50 0033 0000 0000 0000 0000 10',
    swift: 'BCOMPTPL',
  },
};