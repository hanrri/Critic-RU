

document.addEventListener('DOMContentLoaded', () => {

  const tabAlmoco = document.getElementById('tab-almoco');
  const tabJantar = document.getElementById('tab-jantar');
  const ruSelect = document.getElementById('ru-select');
  const reviewModal = document.getElementById('review-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnCancelReview = document.getElementById('btn-cancel-review');
  const btnSubmitReview = document.getElementById('btn-submit-review');
  const modalDishName = document.getElementById('modal-dish-name');
  const starBtns = document.querySelectorAll('.star-btn');
  const starRatingText = document.getElementById('star-rating-text');
  const tagChips = document.querySelectorAll('.tag-chip');
  const reviewComment = document.getElementById('review-comment');
  const ruStatusText = document.getElementById('ru-status-text');

  let selectedRating = 0;
  let activeDishId = null;
  let currentMealType = 'almoco';

  const menuData = (window.CRITIC_RU_DATA && window.CRITIC_RU_DATA.menuData) ? window.CRITIC_RU_DATA.menuData : {};

  if (tabAlmoco && tabJantar) {
    tabAlmoco.addEventListener('click', () => {
      currentMealType = 'almoco';
      tabAlmoco.classList.add('active');
      tabAlmoco.setAttribute('aria-selected', 'true');
      tabJantar.classList.remove('active');
      tabJantar.setAttribute('aria-selected', 'false');
      if (ruStatusText) ruStatusText.textContent = 'Restaurantes Abertos para o Almoço (11:00 - 13:30)';
      renderMenu(currentMealType);
    });

    tabJantar.addEventListener('click', () => {
      currentMealType = 'jantar';
      tabJantar.classList.add('active');
      tabJantar.setAttribute('aria-selected', 'true');
      tabAlmoco.classList.remove('active');
      tabAlmoco.setAttribute('aria-selected', 'false');
      if (ruStatusText) ruStatusText.textContent = 'Restaurantes Abertos para o Jantar (17:00 - 19:00)';
      renderMenu(currentMealType);
    });
  }

  function renderMenu(mealType) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    const ruKeys = Object.keys(menuData);

    menuGrid.innerHTML = ruKeys.map(ruKey => {
      const ru = menuData[ruKey];
      const dishes = (ru[mealType] && ru[mealType].length > 0) ? ru[mealType] : (ru['almoco'] || []);

      if (dishes.length === 0) return '';

      const proteinDish = dishes.find(d => d.type === 'protein') || dishes[0];
      const veggieDish = dishes.find(d => d.type === 'veggie');

      return `
        <article class="ru-card" data-ru-key="${ruKey}">
          <div class="ru-card-header">
            <div class="ru-title-group">
              <i data-lucide="map-pin" class="ru-icon"></i>
              <h3 class="ru-name">${ru.name}</h3>
            </div>
            <span class="ru-status-tag">
              <i data-lucide="check-circle-2"></i> Aberto Hoje
            </span>
          </div>

          <div class="ru-featured-box" style="display: flex; flex-direction: column; gap: 8px; padding: 14px;">
            <!-- Proteína Principal -->
            ${proteinDish ? `
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                <div style="font-size: 14px; font-weight: 700; color: var(--text-main);">
                  ${proteinDish.name}
                </div>
                ${proteinDish.tags && proteinDish.tags.length > 0 ? `
                  ${proteinDish.tags.map(t => `<span class="tag-allergen contains">${typeof t === 'object' ? t.label : t}</span>`).join('')}
                ` : ''}
              </div>
            ` : ''}

            <!-- Opção Vegetariana -->
            ${veggieDish ? `
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                <div style="font-size: 14px; font-weight: 700; color: var(--text-main);">
                  ${veggieDish.name}
                </div>
                ${veggieDish.tags && veggieDish.tags.length > 0 ? `
                  ${veggieDish.tags.map(t => `<span class="tag-allergen contains">${typeof t === 'object' ? t.label : t}</span>`).join('')}
                ` : ''}
              </div>
            ` : ''}

            <div style="display: flex; align-items: center; gap: 6px; margin-top: 4px; padding-top: 8px; border-top: 1px solid var(--border-color);">
              <div style="display: flex; align-items: center; gap: 2px; color: var(--accent-star);">
                <i data-lucide="star" style="width: 15px; height: 15px; fill: var(--accent-star);"></i>
                <span style="font-size: 13px; font-weight: 800; color: var(--text-main);">${proteinDish ? proteinDish.score : '4.8'}</span>
              </div>
              <span style="font-size: 11px; color: var(--text-muted);">(${proteinDish ? proteinDish.count : '100'} avaliações)</span>
            </div>
          </div>

          <!-- Um único botão claro e direto -->
          <a href="detalhes-ru.html?ru=${ruKey}" class="btn-toggle-accordion" style="text-decoration: none; margin-top: 10px;">
            <span>Ver Cardápio Completo & Avaliações (${dishes.length} itens)</span>
            <i data-lucide="chevron-right" class="accordion-arrow"></i>
          </a>
        </article>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function openReviewModal(dishId, dishName) {
    activeDishId = dishId;
    if (modalDishName) modalDishName.textContent = dishName;
    resetStarPicker();
    if (reviewComment) reviewComment.value = '';
    tagChips.forEach(chip => chip.classList.remove('active'));
    if (reviewModal) {
      reviewModal.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    }
  }

  function closeReviewModal() {
    if (reviewModal) {
      reviewModal.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }
  }

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeReviewModal);
  if (btnCancelReview) btnCancelReview.addEventListener('click', closeReviewModal);

  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.getAttribute('data-value'));
      updateStarPickerUI(selectedRating);
    });
  });

  function updateStarPickerUI(rating) {
    const ratingLabels = [
      '',
      '1 - Ruim 🙁',
      '2 - Regular 😐',
      '3 - Bom 🙂',
      '4 - Muito Bom 😄',
      '5 - Excelente! 🔥'
    ];

    starBtns.forEach((btn, index) => {
      if (index < rating) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (starRatingText) {
      starRatingText.textContent = ratingLabels[rating] || 'Selecione uma nota';
    }
  }

  function resetStarPicker() {
    selectedRating = 0;
    updateStarPickerUI(0);
  }

  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
    });
  });

  if (btnSubmitReview) {
    btnSubmitReview.addEventListener('click', () => {
      if (selectedRating === 0) {
        alert('Por favor, selecione pelo menos uma estrela para avaliar.');
        return;
      }

      alert(`Obrigado! Sua avaliação para o prato foi enviada com sucesso! ⭐ ${selectedRating}`);
      closeReviewModal();
    });
  }

  // Fechar modal ao clicar fora (no backdrop)
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add('hidden');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  const navItems = document.querySelectorAll('.bottom-nav .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  document.querySelectorAll('.btn-like-review').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
      const countSpan = btn.querySelector('.like-count');
      if (countSpan) {
        let currentCount = parseInt(countSpan.textContent) || 0;
        if (btn.classList.contains('liked')) {
          countSpan.textContent = currentCount + 1;
        } else {
          countSpan.textContent = currentCount - 1;
        }
      }
    });
  });

  const btnNotifications = document.getElementById('btn-notifications');
  const notificationsModal = document.getElementById('notifications-modal');
  const btnCloseNotifModal = document.getElementById('btn-close-notif-modal');
  const btnMarkAllRead = document.getElementById('btn-mark-all-read');
  const badgeDot = document.querySelector('.badge-dot');

  if (btnNotifications && notificationsModal) {
    btnNotifications.addEventListener('click', () => {
      notificationsModal.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    });
  }

  if (btnCloseNotifModal && notificationsModal) {
    btnCloseNotifModal.addEventListener('click', () => {
      notificationsModal.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    });
  }

  if (btnMarkAllRead) {
    btnMarkAllRead.addEventListener('click', () => {
      document.querySelectorAll('.notif-item.unread').forEach(item => {
        item.classList.remove('unread');
      });
      document.querySelectorAll('.unread-dot').forEach(dot => dot.remove());
      if (badgeDot) badgeDot.remove();
    });
  }

  const navFavorites = document.getElementById('nav-favorites');
  const favoritesModal = document.getElementById('favorites-modal');
  const btnCloseFavModal = document.getElementById('btn-close-fav-modal');

  if (navFavorites && favoritesModal) {
    navFavorites.addEventListener('click', (e) => {
      e.preventDefault();
      favoritesModal.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    });
  }

  if (btnCloseFavModal && favoritesModal) {
    btnCloseFavModal.addEventListener('click', () => {
      favoritesModal.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    });
  }

  document.querySelectorAll('.btn-remove-fav-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.fav-modal-item');
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'all 0.25s ease';
        setTimeout(() => item.remove(), 250);
      }
    });
  });

  renderMenu('almoco');
});