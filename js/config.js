const CONFIG = {
  paymentMethods: {
    mbway: {
      name: "MB Way",
      icon: "credit-card"
    },
    multibanco: {
      name: "Multibanco",
      icon: "landmark"
    },
    transferencia: {
      name: "Transferência Bancária",
      icon: "building-2"
    }
  },
  copy: {
    title: "Quero Doar",
    subtitle: "Ajude-nos a mudar vidas",
    steps: {
      payment: { title: "Como gostaria de doar?" },
      delegation: { title: "Para que delegação gostaria de doar?" },
      transfer: {
        title: "Muito obrigado pela intenção :)",
        subtitle: "Siga as instruções abaixo para concluir a sua doação",
        instructions: "Transferir o montante desejado para a seguinte conta bancária",
        receipt: "Caso necessite de um recibo com o comprovativo do donativo deve enviar um email para",
        receiptDetails: "com o nome, morada, NIF e contacto para o envio do recibo."
      }
    },
    buttons: {
      back: "Voltar",
      newDonation: "Fazer Nova Doação"
    },
    bankDetails: {
      name: {
        label: "NOME",
        value: "Centro de Apoio ao Sem Abrigo"
      },
      iban: "IBAN",
      swift: "BIC/SWIFT",
      bank: "BANCO"
    },
    footer: {
      tagline: "2 minutos do seu tempo = Mais famílias felizes 🏠"
    }
  },
  defaultDelegation: "Sede",
  delegations: {
    "Sede": {
      iban: "PT50 0036 0344 9910 0014 366 77",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://pay.example.com/sede/mbway",
        multibanco: "https://pay.example.com/sede/multibanco"
      }
    },
    "Lisboa": {
      iban: "PT50 0036 0344 9910 0014 366 79",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://pay.example.com/lisboa/mbway",
        multibanco: "https://pay.example.com/lisboa/multibanco"
      }
    },
    "Porto": {
      iban: "PT50 0036 0344 9910 0014 366 80",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      }
    }
  },
  donationAmounts: [
    { description: "10 Refeições", amount: 25 },
    { description: "Um Mês, Uma Família", amount: 55 },
    { description: "Três meses, Uma Família", amount: 165 }
  ],
  email: {
    receipt: {
      address: "tesouraria@casa-apoioaosemabrigo.org"
    }
  }
};