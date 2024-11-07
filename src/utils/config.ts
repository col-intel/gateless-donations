import { parse } from 'yaml';
import { Config } from '../types';

export const loadConfig = async (): Promise<Config> => {
  const response = await fetch('/src/config/donation.yml');
  const yamlText = await response.text();
  return parse(yamlText);
};

export const config = await loadConfig();