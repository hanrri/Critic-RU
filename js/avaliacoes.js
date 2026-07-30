document.addEventListener('DOMContentLoaded', () => {

  let currentDate = '2026-07-29';
  let currentMeal = 'almoco';

  const dateData = {
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
          count: 54,
          highlights: [
            { author: 'Henrique S.', stars: 5, text: 'Frango à teriaky estava excelente hoje! Tempero perfeito.', likes: 14 },
            { author: 'Mariana C.', stars: 5, text: 'Opção de grão de bico muito bem temperada. Fila andou rápido.', likes: 9 }
          ]
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Frango à Teriaky',
          veggie: 'Grão de Bico à Primavera',
          side: 'Arroz, Feijão com Batata Doce & Farofa',
          dessert: 'Salada Crua com Manga & Melão',
          score: 4.9,
          count: 62,
          highlights: [
            { author: 'Lucas M.', stars: 5, text: 'Fatia de melão super docinha. Atendimento nota 10.', likes: 18 },
            { author: 'Ana P.', stars: 4, text: 'Comida quentinha. Só a fila do RU 2 que estava meio grande.', likes: 6 }
          ]
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Frango à Teriaky',
          veggie: 'Grão de Bico à Primavera',
          side: 'Arroz, Feijão com Batata Doce & Farofa',
          dessert: 'Salada Crua com Manga & Banana',
          score: 4.7,
          count: 38,
          highlights: [
            { author: 'Carlos E.', stars: 5, text: 'Muito bom o almoço do CCA hoje!', likes: 8 }
          ]
        }
      },
      jantar: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Frango à Teriaky',
          veggie: 'Grão de Bico à Primavera',
          side: 'Arroz, Farofa',
          dessert: 'Melancia Fresca',
          score: 4.7,
          count: 41,
          highlights: [
            { author: 'Beatriz R.', stars: 5, text: 'Jantar leve e muito saboroso.', likes: 7 }
          ]
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Maria Isabel & Creme de Galinha',
          veggie: 'Arroz com Soja & Creme de Abóbora',
          side: 'Farofa Especial',
          dessert: 'Salada Mista com Laranja',
          score: 4.9,
          count: 75,
          highlights: [
            { author: 'João V.', stars: 5, text: 'Maria Isabel com creme de galinha é sem dúvidas a melhor janta!', likes: 25 },
            { author: 'Camila K.', stars: 5, text: 'Creme de galinha super cremoso!', likes: 12 }
          ]
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Maria Isabel & Creme de Galinha',
          veggie: 'Arroz com Soja & Creme de Abóbora',
          side: 'Farofa',
          dessert: 'Laranja',
          score: 4.8,
          count: 35,
          highlights: [
            { author: 'Rafael T.', stars: 4, text: 'Muito gostoso a janta hoje no CCA.', likes: 5 }
          ]
        }
      }
    },
    '2026-07-28': {
      formattedDate: 'Terça-feira, 28 de Julho',
      almoco: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Carne de Sol Acebolada com Mandioca',
          veggie: 'Omelete de Forno com Legumes',
          side: 'Arroz & Feijão Tropeiro',
          dessert: 'Salada de Alface com Laranja',
          score: 4.8,
          count: 88,
          highlights: [
            { author: 'Rodrigo A.', stars: 5, text: 'Carne de sol estava super macia. Nota 10!', likes: 20 },
            { author: 'Vanessa F.', stars: 4, text: 'Omelete de legumes muito gostoso.', likes: 11 }
          ]
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Carne de Sol Acebolada com Mandioca',
          veggie: 'Omelete de Forno com Legumes',
          side: 'Arroz & Feijão Tropeiro',
          dessert: 'Salada de Alface com Melancia',
          score: 4.7,
          count: 70,
          highlights: [
            { author: 'Felipe S.', stars: 5, text: 'Excelente almoço na terça.', likes: 9 }
          ]
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Carne de Sol Acebolada com Mandioca',
          veggie: 'Omelete de Forno com Legumes',
          side: 'Arroz & Feijão',
          dessert: 'Salada de Alface com Goiaba',
          score: 4.6,
          count: 45,
          highlights: [
            { author: 'Larissa B.', stars: 4, text: 'Muito bom o tempero da mandioca.', likes: 6 }
          ]
        }
      },
      jantar: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Escondidinho de Carne Moída',
          veggie: 'Hambúrguer de Lentilha',
          side: 'Arroz & Farofa',
          dessert: 'Banana',
          score: 4.7,
          count: 50,
          highlights: [
            { author: 'Diego N.', stars: 5, text: 'Escondidinho perfeito.', likes: 15 }
          ]
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Escondidinho de Carne Moída',
          veggie: 'Hambúrguer de Lentilha',
          side: 'Arroz & Farofa',
          dessert: 'Melão',
          score: 4.8,
          count: 65,
          highlights: [
            { author: 'Tainá L.', stars: 5, text: 'O purê de macaxeira estava uma delícia.', likes: 13 }
          ]
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Escondidinho de Carne Moída',
          veggie: 'Hambúrguer de Lentilha',
          side: 'Arroz',
          dessert: 'Banana',
          score: 4.5,
          count: 30,
          highlights: [
            { author: 'Igor V.', stars: 4, text: 'Comida boa.', likes: 4 }
          ]
        }
      }
    },
    '2026-07-27': {
      formattedDate: 'Segunda-feira, 27 de Julho',
      almoco: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Bife Acebolado',
          veggie: 'Panqueca de Ricota com Espinafre',
          side: 'Arroz & Feijão Carioca',
          dessert: 'Melancia',
          score: 4.6,
          count: 76,
          highlights: [
            { author: 'Samuel K.', stars: 4, text: 'Bife bem acebolado e macio.', likes: 10 }
          ]
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Bife Acebolado',
          veggie: 'Panqueca de Ricota com Espinafre',
          side: 'Arroz & Feijão Carioca',
          dessert: 'Laranja',
          score: 4.7,
          count: 82,
          highlights: [
            { author: 'Patricia M.', stars: 5, text: 'Panqueca vegetariana divina.', likes: 14 }
          ]
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Bife Acebolado',
          veggie: 'Panqueca de Ricota',
          side: 'Arroz & Feijão',
          dessert: 'Melão',
          score: 4.6,
          count: 40,
          highlights: [
            { author: 'Victor R.', stars: 4, text: 'Tudo fresquinho.', likes: 5 }
          ]
        }
      },
      jantar: {
        'ru1-ccn': {
          name: 'RU 1 - CCN',
          protein: 'Sopa de Carne com Legumes & Macarrão',
          veggie: 'Sopa de Lentilha',
          side: 'Torradas',
          dessert: 'Doce de Leite',
          score: 4.8,
          count: 58,
          highlights: [
            { author: 'Nathalia G.', stars: 5, text: 'Sopa perfeita para o jantar de segunda.', likes: 17 }
          ]
        },
        'ru2-rosadosventos': {
          name: 'RU 2 - Espaço Rosa dos Ventos',
          protein: 'Sopa de Carne com Legumes & Macarrão',
          veggie: 'Sopa de Lentilha',
          side: 'Torradas',
          dessert: 'Doce de Leite',
          score: 4.8,
          count: 64,
          highlights: [
            { author: 'Matheus H.', stars: 5, text: 'Torrada crocante com sopa quentinha.', likes: 11 }
          ]
        },
        'ru3-cca': {
          name: 'RU 3 - CCA',
          protein: 'Sopa de Carne com Legumes',
          veggie: 'Sopa de Lentilha',
          side: 'Torradas',
          dessert: 'Doce de Goiaba',
          score: 4.6,
          count: 32,
          highlights: [
            { author: 'Gabriel T.', stars: 4, text: 'Sopa bem temperada.', likes: 3 }
          ]
        }
      }
    }
  };

  const dayPillBtns = document.querySelectorAll('.day-pill');
  const datePickerInput = document.getElementById('date-picker-input');
  const tabEvalAlmoco = document.getElementById('tab-eval-almoco');
  const tabEvalJantar = document.getElementById('tab-eval-jantar');
  const selectedDateTitle = document.getElementById('selected-date-title');
  const selectedMealTag = document.getElementById('selected-meal-tag');
  const ruEvaluationsGrid = document.getElementById('ru-evaluations-grid');

  dayPillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dayPillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDate = btn.getAttribute('data-date');
      if (datePickerInput) datePickerInput.value = currentDate;
      renderEvaluations();
    });
  });

  if (datePickerInput) {
    datePickerInput.addEventListener('change', () => {
      currentDate = datePickerInput.value;
      dayPillBtns.forEach(btn => {
        if (btn.getAttribute('data-date') === currentDate) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      renderEvaluations();
    });
  }

  if (tabEvalAlmoco && tabEvalJantar) {
    tabEvalAlmoco.addEventListener('click', () => {
      currentMeal = 'almoco';
      tabEvalAlmoco.classList.add('active');
      tabEvalJantar.classList.remove('active');
      if (selectedMealTag) selectedMealTag.textContent = 'Almoço';
      renderEvaluations();
    });

    tabEvalJantar.addEventListener('click', () => {
      currentMeal = 'jantar';
      tabEvalJantar.classList.add('active');
      tabEvalAlmoco.classList.remove('active');
      if (selectedMealTag) selectedMealTag.textContent = 'Jantar';
      renderEvaluations();
    });
  }

  function renderEvaluations() {
    const dayData = dateData[currentDate] || dateData['2026-07-29'];
    const mealRusData = dayData[currentMeal] || dayData['almoco'];
    const ruKeys = Object.keys(mealRusData);

    if (!ruEvaluationsGrid) return;

    ruEvaluationsGrid.innerHTML = ruKeys.map(ruKey => {
      const ru = mealRusData[ruKey];
      return `
        <article class="ru-eval-card" style="background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); padding: 18px; margin-bottom: 16px; box-shadow: var(--shadow-sm);">
          
          <!-- Topo do RU com Nome Único e Nota Média Geral do Dia -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid var(--border-color);">
            <div>
              <h3 style="font-size: 17px; font-weight: 800; color: var(--text-main); margin: 0;">${ru.name}</h3>
            </div>

            <div style="text-align: right;">
              <div style="display: flex; align-items: center; gap: 4px; color: var(--accent-star);">
                <i data-lucide="star" style="width: 16px; height: 16px; fill: var(--accent-star);"></i>
                <span style="font-size: 16px; font-weight: 800; color: var(--text-main);">${ru.score}</span>
              </div>
              <span style="font-size: 10px; color: var(--text-muted); font-weight: 600;">(${ru.count} avaliações)</span>
            </div>
          </div>

          <!-- Prato Servido no Dia -->
          <div style="background: var(--bg-app); border-radius: var(--radius-md); padding: 12px; margin-bottom: 14px; border: 1px solid var(--border-color);">
            <span class="badge badge-protein" style="font-size: 10px; font-weight: 700;">Proteína: ${ru.protein}</span>
            <p style="font-size: 12px; color: var(--text-main); margin-top: 6px; font-weight: 600;">🌱 Vegetariano: ${ru.veggie}</p>
            <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">🍚 Acompanhamentos: ${ru.side} • 🥗 Sobremesa: ${ru.dessert}</p>
          </div>

          <!-- Botão para Ver Cardápio & Todas as Avaliações -->
          <a href="detalhes-ru.html?ru=${ruKey}&date=${currentDate}&from=avaliacoes" style="display: flex; align-items: center; justify-content: space-between; background: var(--primary-light); color: var(--primary); padding: 10px 14px; border-radius: var(--radius-md); font-size: 12px; font-weight: 700; text-decoration: none; transition: var(--transition);">
            <span>Ver Cardápio & Todas as Avaliações Deste Dia</span>
            <i data-lucide="chevron-right" style="width: 16px; height: 16px;"></i>
          </a>

        </article>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  renderEvaluations();

});
