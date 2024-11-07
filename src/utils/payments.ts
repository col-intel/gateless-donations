import { PaymentMethod, Delegation } from '../types';
import { config } from './config';

export const handlePaymentRedirect = (method: PaymentMethod, delegation: Delegation) => {
  const delegationInfo = config.delegations[delegation];
  
  if (!delegationInfo?.paymentUrls?.[method]) {
    console.error(`Payment URL not configured for ${method} in ${delegation}`);
    return;
  }

  // Redirect to delegation-specific payment URL
  window.location.href = delegationInfo.paymentUrls[method]!;
};