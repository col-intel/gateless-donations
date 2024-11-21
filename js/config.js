const CONFIG = {
  paymentMethods: {
    transferencia: {
      name: "Transferência Bancária",
      icon: "building-2"
    },
    solidario: {
      name: "Ser Solidário",
      icon: "heart-handshake"
    },
    referencia: {
      name: "MB Way",
      icon: "phone"
    },
    mbway: {
      name: "MB Way",
      icon: "phone"
    },
    multibanco: {
      name: "Multibanco",
      icon: "landmark"
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
      },
      solidario: {
        title: "Muito obrigado pela intenção :)",
        subtitle: "Siga as instruções abaixo para concluir a sua doação",
        instructions: "Para fazer um donativo através do Ser Solidário:",
        steps: [
          "1. Aceda ao seu Homebanking",
          "2. Procure a opção 'Ser Solidário' ou 'Donativos'",
          "3. Selecione 'CASA' da lista de instituições",
          "4. Indique o montante que deseja doar",
          "5. Confirme a operação"
        ],
        receipt: "Caso necessite de um recibo com o comprovativo do donativo deve enviar um email para",
        receiptDetails: "com o nome, morada, NIF e contacto para o envio do recibo."
      },
      referencia: {
        title: "Muito obrigado pela intenção :)",
        subtitle: "Siga as instruções abaixo para concluir a sua doação",
        instructions: "Para fazer um donativo através do MB Way:",
        steps: [
          "1. Abra a sua app MB Way",
          "2. Selecione a opção 'Pagar'",
          "3. Introduza o número 967 700 837",
          "4. Introduza o montante que deseja doar",
          "5. Confirme a operação"
        ],
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
    "CP": {
      iban: "PT50 0036 0344 99100004466 95",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "",
        multibanco: ""
      }
    },
    "Sede": {
      iban: "PT50 0036 0344 99100003328 17",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/DAYKJHFIPb",
        multibanco: "https://gateway.ifthenpay.com/url/DAYKJHFIPb"
      }
    },
    "Albufeira": {
      iban: "PT50 0036 0344 99100015587 03",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/r43oTqYQk0",
        multibanco: "https://gateway.ifthenpay.com/url/r43oTqYQk0"
      }
    },
    "Azeitão": {
      iban: "PT50 0036 0344 99100015579 27",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/7D5FwTUs8K",
        multibanco: "https://gateway.ifthenpay.com/url/7D5FwTUs8K"
      }
    },
    "Cascais": {
      iban: "PT50 0036 0344 99100014366 77",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/pY2IRtShwe",
        multibanco: "https://gateway.ifthenpay.com/url/pY2IRtShwe"
      }
    },
    "Coimbra": {
      iban: "PT50 0036 0344 99100014374 53",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/h5VxYiPbDo",
        multibanco: "https://gateway.ifthenpay.com/url/h5VxYiPbDo"
      }
    },
    "Figueira da Foz": {
      iban: "PT50 0036 0344 99100014382 29",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/OBuiUpnAsk",
        multibanco: "https://gateway.ifthenpay.com/url/OBuiUpnAsk"
      }
    },
    "Lisboa": {
      iban: "PT50 0036 0344 99100014358 04",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/yEZNLvYXus",
        multibanco: "https://gateway.ifthenpay.com/url/yEZNLvYXus"
      }
    },
    "Madeira": {
      iban: "PT50 0036 0344 99100006255 63",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/plnu45CI0t",
        multibanco: "https://gateway.ifthenpay.com/url/plnu45CI0t"
      }
    },
    "Paredes": {
      iban: "PT50 0036 0344 99100022328 53",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/L5W7B4bl0D",
        multibanco: "https://gateway.ifthenpay.com/url/L5W7B4bl0D"
      }
    },
    "Porto": {
      iban: "PT50 0036 0344 99100004128 42",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/I17C92MaUd",
        multibanco: "https://gateway.ifthenpay.com/url/I17C92MaUd"
      }
    },
    "Setúbal": {
      iban: "PT50 0036 0344 99100008590 42",
      swift: "MPIOPTPLXXX",
      bank: {
        name: "CAIXA ECONÓMICA MONTEPIO GERAL",
        legal: "CAIXA ECONÓMICA BANCÁRIA, SA"
      },
      paymentUrls: {
        mbway: "https://gateway.ifthenpay.com/url/Vlp1SvrG8c",
        multibanco: "https://gateway.ifthenpay.com/url/Vlp1SvrG8c"
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