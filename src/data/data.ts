export default { "usuarios":[
      {
        "id": 1,
        "nome": "João Silva",
        "dataNascimento": "2000-01-15",
        "garrafas": [101, 102]
      },
      {
        "id": 2,
        "nome": "Mario Oliveira",
        "dataNascimento": "1995-12-25",
        "garrafas": [103]
      },
      {
        "id": 3,
        "nome": "Carlos Pereira",
        "dataNascimento": "1988-07-08",
        "garrafas": [104, 105, 106]
      }
    ],
    "garrafas": [
      {
        "id": 101,
        "nome": "Whisky Red Label",
        "codigo": "WH12345",
        "dataCompra": "2023-12-01",
        "dataVencimento": "2024-02-01",
        "status": "esgotada",
        "dataStatus": "2024-01-18",
        "mensagem": "Garrafa esgotada pelo usuário antes do vencimento."
      },
      {
        "id": 102,
        "nome": "Vodka Absolut",
        "codigo": "VO67890",
        "dataCompra": "2023-11-15",
        "dataVencimento": "2024-01-15",
        "status": "Vencida",
        "dataStatus": "2024-01-15",
        "mensagem": "Garrafa venceu."
      },
      {
        "id": 103,
        "nome": "Rum Bacardi",
        "codigo": "RU54321",
        "dataCompra": "2023-10-10",
        "dataVencimento": "2023-12-10",
        "status": "levada embora",
        "dataStatus": "2023-11-25",
        "mensagem": "Garrafa foi levada embora."
      },
      {
        "id": 104,
        "nome": "Gin Tanqueray",
        "codigo": "GI24680",
        "dataCompra": "2023-11-01",
        "dataVencimento": "2024-01-01",
        "status": "esgotada",
        "dataStatus": "2023-12-28",
        "mensagem": "Garrafa esgotada pelo usuário antes do vencimento."
      },
      {
        "id": 105,
        "nome": "Tequila José Cuervo",
        "codigo": "TE13579",
        "dataCompra": "2023-12-15",
        "dataVencimento": "2024-02-15",
        "status": "Vencida",
        "dataStatus": "2024-02-15",
        "mensagem": "Garrafa venceu."
      },
      {
        "id": 106,
        "nome": "Wisky Red Label",
        "codigo": "RL10579",
        "dataCompra": "2023-12-15",
        "dataVencimento": "2024-02-15",
        "status": null,
        "dataStatus": "2024-02-15",
        "mensagem": "Garrafa disponivel."
      }
    ],
    "statusEnum": {
      "esgotada": "Garrafa esgotada pelo usuário antes do vencimento.",
      "vencida": "Garrafa venceu.",
      "levada embora": "Garrafa foi levada embora."
    }
}

