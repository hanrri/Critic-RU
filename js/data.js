/**
 * js/data.js
 * Fonte Única de Dados (Single Source of Truth) para o Critic RU.
 * Contém os cardápios autênticos do RU da UFPI e dados de avaliações por data.
 */

window.CRITIC_RU_DATA = {
  menuData: {
    'ru1-ccn': {
      name: 'RU 1 - CCN',
      campus: 'Campus Ministro Petrônio Portella • CCN',
      score: '4.8',
      count: '142',
      dishes: [
        {
          badge: 'Proteína Principal',
          type: 'protein',
          name: 'Frango à Teriaky',
          desc: 'Tiras de peito de frango refogadas ao molho teriaky oriental.',
          score: 4.8,
          count: 142,
          tags: []
        },
        {
          badge: 'Opção Vegetariana',
          type: 'veggie',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico refogado com milho, pimentões coloridos e ervas frescas.',
          score: 4.9,
          count: 87,
          tags: []
        },
        {
          badge: 'Acompanhamentos',
          type: 'side',
          name: 'Arroz, Feijão com Batata Doce & Farofa',
          desc: 'Arroz soltinho, feijão caseiro cozido com batata doce e farofa temperada.',
          score: 4.6,
          count: 65,
          tags: []
        },
        {
          badge: 'Salada & Sobremesa',
          type: 'dessert',
          name: 'Salada Crua & Banana',
          desc: 'Salada: Repolho Verde + Repolho Roxo + Manga + Passas + Salsa. Sobremesa: Banana.',
          score: 4.7,
          count: 53,
          tags: []
        }
      ],
      almoco: [
        {
          id: 101,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Frango à Teriaky',
          desc: 'Tiras de peito de frango refogadas ao molho teriaky oriental.',
          score: 4.8,
          count: 142,
          tags: []
        },
        {
          id: 102,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico refogado com milho, pimentões coloridos e ervas frescas.',
          score: 4.9,
          count: 87,
          tags: []
        },
        {
          id: 103,
          type: 'side',
          badge: 'Acompanhamentos',
          name: 'Arroz, Feijão com Batata Doce & Farofa',
          desc: 'Arroz soltinho, feijão caseiro cozido com batata doce e farofa temperada.',
          score: 4.6,
          count: 65,
          tags: []
        },
        {
          id: 104,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Banana',
          desc: 'Salada: Repolho Verde + Repolho Roxo + Manga + Passas + Salsa. Sobremesa: Banana.',
          score: 4.7,
          count: 53,
          tags: []
        }
      ],
      jantar: [
        {
          id: 105,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Frango à Teriaky',
          desc: 'Tiras de peito de frango refogadas ao molho teriaky oriental.',
          score: 4.8,
          count: 118,
          tags: []
        },
        {
          id: 106,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico refogado com pimentão, milho e salsa.',
          score: 4.6,
          count: 72,
          tags: []
        },
        {
          id: 107,
          type: 'side',
          badge: 'Acompanhamentos & Sobremesa',
          name: 'Arroz, Farofa & Melancia',
          desc: 'Arroz soltinho, farofa crocante e fatia de melancia fresca de sobremesa.',
          score: 4.7,
          count: 60,
          tags: []
        }
      ]
    },

    'ru2-rosadosventos': {
      name: 'RU 2 - Espaço Rosa dos Ventos',
      campus: 'Campus Ministro Petrônio Portella • Rosa dos Ventos',
      score: '4.9',
      count: '198',
      dishes: [
        {
          badge: 'Proteína Principal',
          type: 'protein',
          name: 'Maria Isabel & Creme de Galinha',
          desc: 'Arroz maria isabel tradicional com carne de sol e creme de galinha.',
          score: 4.9,
          count: 198,
          tags: ['⚠️ Contém Glúten', '⚠️ Contém Lactose']
        },
        {
          badge: 'Opção Vegetariana',
          type: 'veggie',
          name: 'Arroz com Soja & Creme de Abóbora (Vegetariano)',
          desc: 'Arroz soltinho com proteína de soja refogada e creme de abóbora.',
          score: 4.7,
          count: 88,
          tags: ['⚠️ Contém Soja']
        },
        {
          badge: 'Acompanhamentos',
          type: 'side',
          name: 'Farofa Especial',
          desc: 'Farofa crocante de mandioca.',
          score: 4.6,
          count: 64,
          tags: []
        },
        {
          badge: 'Salada & Sobremesa',
          type: 'dessert',
          name: 'Salada Mista & Melão',
          desc: 'Salada: Feijão branco + Couve Mineira + Tomate + Pepino. Sobremesa: Melão.',
          score: 4.8,
          count: 70,
          tags: []
        }
      ],
      almoco: [
        {
          id: 201,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Frango à Teriaky',
          desc: 'Peito de frango suculento ao molho teriaky especial.',
          score: 4.7,
          count: 130,
          tags: []
        },
        {
          id: 202,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico com legumes e ervas finas.',
          score: 4.8,
          count: 95,
          tags: []
        },
        {
          id: 203,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Melão (RU 2)',
          desc: 'Salada: Repolho Verde + Repolho Roxo + Manga + Passas. Sobremesa: Fatia de Melão.',
          score: 4.8,
          count: 64,
          tags: []
        }
      ],
      jantar: [
        {
          id: 204,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Maria Isabel & Creme de Galinha',
          desc: 'Arroz maria isabel tradicional com carne de sol e creme de galinha.',
          score: 4.9,
          count: 140,
          tags: [
            { label: '⚠️ Contém Glúten', type: 'contains' },
            { label: '⚠️ Contém Lactose', type: 'contains' }
          ]
        },
        {
          id: 205,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Arroz com Soja & Creme de Abóbora (Vegetariano)',
          desc: 'Arroz soltinho com proteína de soja refogada e creme de abóbora.',
          score: 4.7,
          count: 88,
          tags: [
            { label: '⚠️ Contém Soja', type: 'contains' }
          ]
        },
        {
          id: 206,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Mista & Laranja',
          desc: 'Salada: Feijão branco + Couve Mineira + Tomate + Pepino. Sobremesa: Laranja.',
          score: 4.8,
          count: 70,
          tags: []
        }
      ]
    },

    'ru3-cca': {
      name: 'RU 3 - CCA',
      campus: 'Campus Centro de Ciências Agrárias • CCA',
      score: '4.7',
      count: '115',
      dishes: [
        {
          badge: 'Proteína Principal',
          type: 'protein',
          name: 'Frango à Teriaky',
          desc: 'Frango grelhado ao molho teriaky oriental.',
          score: 4.8,
          count: 115,
          tags: []
        },
        {
          badge: 'Opção Vegetariana',
          type: 'veggie',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico temperado com milho, repolho e salsa.',
          score: 4.8,
          count: 82,
          tags: []
        },
        {
          badge: 'Acompanhamentos',
          type: 'side',
          name: 'Arroz Branco & Feijão Tropeiro',
          desc: 'Arroz soltinho com feijão tropeiro temperado.',
          score: 4.6,
          count: 60,
          tags: []
        },
        {
          badge: 'Salada & Sobremesa',
          type: 'dessert',
          name: 'Salada Crua & Doce de Goiaba',
          desc: 'Salada de acelga, cenoura e milho. Sobremesa: Doce de goiaba.',
          score: 4.9,
          count: 78,
          tags: []
        }
      ],
      almoco: [
        {
          id: 301,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Frango à Teriaky',
          desc: 'Frango grelhado ao molho teriaky oriental.',
          score: 4.8,
          count: 115,
          tags: []
        },
        {
          id: 302,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico temperado com milho, repolho e salsa.',
          score: 4.8,
          count: 82,
          tags: []
        },
        {
          id: 303,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Banana (RU 3)',
          desc: 'Salada: Repolho Verde + Repolho Roxo + Manga + Passas. Sobremesa: Banana.',
          score: 4.9,
          count: 78,
          tags: []
        }
      ],
      jantar: [
        {
          id: 304,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Maria Isabel & Creme de Galinha',
          desc: 'Arroz maria isabel com carne desfiada e creme de galinha temperado.',
          score: 4.8,
          count: 95,
          tags: [
            { label: '⚠️ Contém Glúten', type: 'contains' },
            { label: '⚠️ Contém Lactose', type: 'contains' }
          ]
        },
        {
          id: 305,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Arroz com Soja & Creme de Abóbora (Vegetariano)',
          desc: 'Arroz temperado com proteína de soja e creme de abóbora.',
          score: 4.7,
          count: 65,
          tags: [
            { label: '⚠️ Contém Soja', type: 'contains' }
          ]
        }
      ]
    }
  },

  dateData: {
    '2026-07-29': {
      formattedDate: 'Quarta-feira (29/07/2026)',
      almoco: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Frango à Teriaky',
          veggie: 'Grão de Bico à Primavera',
          side: 'Arroz, Feijão com Batata Doce & Farofa',
          dessert: 'Salada Crua com Manga & Banana',
          score: 4.8,
          count: 54
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Frango à Teriaky',
          veggie: 'Grão de Bico à Primavera',
          side: 'Arroz, Feijão com Batata Doce & Farofa',
          dessert: 'Salada Crua com Manga & Melão',
          score: 4.9,
          count: 62
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Frango à Teriaky',
          veggie: 'Grão de Bico à Primavera',
          side: 'Arroz, Feijão com Batata Doce & Farofa',
          dessert: 'Salada Crua com Manga & Banana',
          score: 4.7,
          count: 41
        }
      },
      jantar: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Frango à Teriaky',
          veggie: 'Grão de Bico à Primavera',
          side: 'Arroz & Farofa',
          dessert: 'Melancia',
          score: 4.8,
          count: 48
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Maria Isabel & Creme de Galinha',
          veggie: 'Arroz com Soja & Creme de Abóbora',
          side: 'Farofa Especial',
          dessert: 'Salada Mista & Laranja',
          score: 4.9,
          count: 75
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Maria Isabel & Creme de Galinha',
          veggie: 'Arroz com Soja & Creme de Abóbora',
          side: 'Farofa Especial',
          dessert: 'Salada Mista & Laranja',
          score: 4.8,
          count: 38
        }
      }
    },
    '2026-07-28': {
      formattedDate: 'Terça-feira (28/07/2026)',
      almoco: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Carne de Sol Acebolada',
          veggie: 'Moqueca de Ovos e Legumes',
          side: 'Arroz Branco, Feijão & Purê de Batata',
          dessert: 'Salada de Maionese & Maçã',
          score: 4.7,
          count: 68
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Carne de Sol Acebolada',
          veggie: 'Moqueca de Ovos e Legumes',
          side: 'Arroz Branco, Feijão & Purê de Batata',
          dessert: 'Salada de Maionese & Melancia',
          score: 4.8,
          count: 85
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Carne de Sol Acebolada',
          veggie: 'Moqueca de Ovos e Legumes',
          side: 'Arroz Branco & Feijão Tropeiro',
          dessert: 'Salada de Maionese & Abacaxi',
          score: 4.6,
          count: 50
        }
      },
      jantar: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Iscas de Frango Grelhado',
          veggie: 'Omelete com Ervas',
          side: 'Macarrão ao Sugo & Arroz',
          dessert: 'Goiaba',
          score: 4.6,
          count: 40
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Iscas de Frango Grelhado',
          veggie: 'Omelete com Ervas',
          side: 'Macarrão ao Sugo & Arroz',
          dessert: 'Melão',
          score: 4.7,
          count: 55
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Iscas de Frango Grelhado',
          veggie: 'Omelete com Ervas',
          side: 'Macarrão ao Sugo & Arroz',
          dessert: 'Banana',
          score: 4.5,
          count: 32
        }
      }
    }
  }
};
