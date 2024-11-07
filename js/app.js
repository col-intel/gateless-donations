let currentStep = 1;
let selectedPaymentMethod = null;
let selectedDelegation = null;

function updateProgressBar() {
  const progress = document.getElementById('progress-bar');
  progress.style.width = `${(currentStep / 3) * 100}%`;
}

function renderPaymentMethodStep() {
  const container = document.getElementById('step-container');
  container.innerHTML = `
    <h2 class="text-2xl font-semibold text-center mb-8">${CONFIG.copy.steps.payment.title}</h2>
    <div class="space-y-4">
      ${Object.entries(CONFIG.paymentMethods).map(([key, method]) => `
        <button
          onclick="selectPaymentMethod('${key}')"
          class="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors flex justify-between items-center group"
        >
          <span class="text-lg font-medium">${method.name}</span>
          <i data-lucide="${method.icon}" class="h-8 w-8 text-blue-900"></i>
        </button>
      `).join('')}
    </div>
    
    <div class="mt-8 pt-8 border-t border-gray-100">
      <div class="text-center mb-6">
        <h3 class="text-sm text-blue-700">${CONFIG.copy.footer.tagline}</h3>
      </div>
      
      <div class="bg-gray-50 rounded-lg p-6">
        <div class="grid gap-4">
          ${CONFIG.donationAmounts.map((donation, index, arr) => `
            <div class="flex justify-between items-center p-3 ${
              index !== arr.length - 1 ? 'border-b border-gray-100' : ''
            }">
              <span class="text-sm text-gray-600">${donation.description}</span>
              <span class="text-base text-blue-700">€${donation.amount}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function renderDelegationStep() {
  const container = document.getElementById('step-container');
  const availableDelegations = Object.entries(CONFIG.delegations)
    .filter(([_, info]) => {
      if (selectedPaymentMethod === 'transferencia') return true;
      return info.paymentUrls?.[selectedPaymentMethod];
    })
    .map(([name]) => name);

  container.innerHTML = `
    <h2 class="text-2xl font-semibold text-center mb-8">${CONFIG.copy.steps.delegation.title}</h2>
    <div class="space-y-2.5">
      ${availableDelegations.map(delegation => `
        <button
          onclick="selectDelegation('${delegation}')"
          class="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-all duration-200 flex justify-between items-center group hover:border-blue-200 hover:shadow-sm"
        >
          <span class="text-lg font-medium group-hover:text-blue-600">${delegation}</span>
          <div class="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-blue-400 transition-colors"></div>
        </button>
      `).join('')}
    </div>
  `;
}

function renderTransferDetails() {
  const container = document.getElementById('step-container');
  const delegationData = CONFIG.delegations[selectedDelegation];
  const { copy } = CONFIG;

  container.innerHTML = `
    <div class="space-y-6">
      <h2 class="text-2xl mb-12">${copy.steps.transfer.title}</h2>
      <p class="text-xl mb-12">${copy.steps.transfer.subtitle}</p>
      <p class="text-xl mb-8">${copy.steps.transfer.instructions}:</p>

      <div class="space-y-6 text-lg">
        <div>
          <span class="font-bold">${copy.bankDetails.name.label}:</span>
          ${copy.bankDetails.name.value}
        </div>

        <div class="flex items-center gap-4">
          <div>
            <span class="font-bold">${copy.bankDetails.iban}:</span>
            <span class="font-mono">${delegationData.iban}</span>
          </div>
          <button
            onclick="copyToClipboard('${delegationData.iban}', 'iban')"
            class="p-2 hover:bg-gray-100 rounded-md transition-colors relative copy-button"
            data-field="iban"
          >
            <i data-lucide="copy" class="w-5 h-5 text-gray-600"></i>
            <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 transition-opacity">
              Copiado!
            </span>
          </button>
        </div>

        <div>
          <span class="font-bold">${copy.bankDetails.swift}:</span>
          ${delegationData.swift}
        </div>

        <div class="space-y-1">
          <div class="font-bold">${copy.bankDetails.bank}:</div>
          <div>${delegationData.bank.name},</div>
          <div>${delegationData.bank.legal}</div>
        </div>
      </div>

      <div class="mt-12 space-y-2">
        <p>
          ${copy.steps.transfer.receipt}
          <a href="mailto:${CONFIG.email.receipt.address}" class="text-blue-600 hover:underline">
            ${CONFIG.email.receipt.address}
          </a>
          ${copy.steps.transfer.receiptDetails}
        </p>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function updateNavigation() {
  const nav = document.getElementById('navigation');
  nav.innerHTML = `
    ${currentStep > 1 ? `
      <button
        onclick="goBack()"
        class="flex items-center px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <i data-lucide="arrow-left" class="w-4 h-4 mr-2"></i>
        ${CONFIG.copy.buttons.back}
      </button>
    ` : ''}
    ${currentStep === 3 ? `
      <button
        onclick="resetForm()"
        class="ml-auto flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ${CONFIG.copy.buttons.newDonation}
        <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
      </button>
    ` : ''}
  `;
  lucide.createIcons();
}

function selectPaymentMethod(method) {
  selectedPaymentMethod = method;
  currentStep = 2;
  updateProgressBar();
  renderDelegationStep();
  updateNavigation();
}

function selectDelegation(delegation) {
  selectedDelegation = delegation;
  if (selectedPaymentMethod === 'transferencia') {
    currentStep = 3;
    updateProgressBar();
    renderTransferDetails();
    updateNavigation();
  } else {
    const paymentUrl = CONFIG.delegations[delegation].paymentUrls[selectedPaymentMethod];
    window.location.href = paymentUrl;
  }
}

async function copyToClipboard(text, field) {
  await navigator.clipboard.writeText(text);
  const button = document.querySelector(`[data-field="${field}"]`);
  const icon = button.querySelector('i');
  const tooltip = button.querySelector('span');
  
  icon.dataset.lucide = 'check';
  tooltip.classList.remove('opacity-0');
  lucide.createIcons();
  
  setTimeout(() => {
    icon.dataset.lucide = 'copy';
    tooltip.classList.add('opacity-0');
    lucide.createIcons();
  }, 2000);
}

function goBack() {
  if (currentStep === 2) {
    currentStep = 1;
    selectedPaymentMethod = null;
    renderPaymentMethodStep();
  } else if (currentStep === 3) {
    currentStep = 2;
    renderDelegationStep();
  }
  updateProgressBar();
  updateNavigation();
}

function resetForm() {
  currentStep = 1;
  selectedPaymentMethod = null;
  selectedDelegation = null;
  renderPaymentMethodStep();
  updateProgressBar();
  updateNavigation();
}

// Initialize the form
document.addEventListener('DOMContentLoaded', () => {
  renderPaymentMethodStep();
  updateNavigation();
  lucide.createIcons();
});