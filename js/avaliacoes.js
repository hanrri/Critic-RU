document.addEventListener('DOMContentLoaded', () => {

  let currentDate = '2026-07-29';
  let currentMeal = 'almoco';

  const dateData = (window.CRITIC_RU_DATA && window.CRITIC_RU_DATA.dateData) ? window.CRITIC_RU_DATA.dateData : {};

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
