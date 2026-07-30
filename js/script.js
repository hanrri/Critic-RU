

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

  const menuData = {
    'ru1-ccn': {
      name: 'RU 1 - CCN',
      almoco: [
        {
          id: 101,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Frango à Teriaky',
          desc: 'Tiras de peito de frango refogadas ao molho teriaky oriental.',
          score: 4.8,
          count: 142,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' },
            { label: 'Rico em Proteína', type: 'neutral' }
          ]
        },
        {
          id: 102,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico refogado com milho, pimentões coloridos e ervas frescas.',
          score: 4.9,
          count: 87,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' },
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        },
        {
          id: 103,
          type: 'side',
          badge: 'Acompanhamentos',
          name: 'Arroz, Feijão com Batata Doce & Farofa',
          desc: 'Arroz soltinho, feijão caseiro cozido com batata doce e farofa temperada.',
          score: 4.6,
          count: 65,
          tags: [
            { label: 'Sem Glúten', type: 'free' }
          ]
        },
        {
          id: 104,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Banana',
          desc: 'Salada: Repolho Verde + Repolho Roxo + Manga + Passas + Salsa. Sobremesa: Banana.',
          score: 4.7,
          count: 53,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
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
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        },
        {
          id: 106,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico refogado com pimentão, milho e salsa.',
          score: 4.6,
          count: 72,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' },
            { label: 'Sem Glúten', type: 'free' }
          ]
        },
        {
          id: 107,
          type: 'side',
          badge: 'Acompanhamentos & Sobremesa',
          name: 'Arroz, Farofa & Melancia',
          desc: 'Arroz soltinho, farofa crocante e fatia de melancia fresca de sobremesa.',
          score: 4.7,
          count: 60,
          tags: [
            { label: 'Sem Glúten', type: 'free' }
          ]
        }
      ]
    },

    'ru2-rosadosventos': {
      name: 'RU 2 - Espaço Rosa dos Ventos',
      almoco: [
        {
          id: 201,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Frango à Teriaky',
          desc: 'Peito de frango suculento ao molho teriaky especial.',
          score: 4.7,
          count: 130,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        },
        {
          id: 202,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico com legumes e ervas finas.',
          score: 4.8,
          count: 95,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' }
          ]
        },
        {
          id: 203,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Melão (RU 2)',
          desc: 'Salada: Repolho Verde + Repolho Roxo + Manga + Passas. Sobremesa: Fatia de Melão.',
          score: 4.8,
          count: 64,
          tags: [
            { label: 'Sem Glúten', type: 'free' }
          ]
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
            { label: '🌱 Vegetariano', type: 'free' },
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
          tags: [
            { label: 'Sem Glúten', type: 'free' }
          ]
        }
      ]
    },

    'ru3-cca': {
      name: 'RU 3 - CCA',
      almoco: [
        {
          id: 301,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Frango à Teriaky',
          desc: 'Frango grelhado ao molho teriaky oriental.',
          score: 4.8,
          count: 115,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        },
        {
          id: 302,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico temperado com milho, repolho e salsa.',
          score: 4.8,
          count: 82,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' }
          ]
        },
        {
          id: 303,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Banana (RU 3)',
          desc: 'Salada: Repolho Verde + Repolho Roxo + Manga + Passas. Sobremesa: Banana.',
          score: 4.9,
          count: 78,
          tags: [
            { label: 'Sem Glúten', type: 'free' }
          ]
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
            { label: '🌱 Vegetariano', type: 'free' },
            { label: '⚠️ Contém Soja', type: 'contains' }
          ]
        }
      ]
    }
  };

  if (tabAlmoco && tabJantar) {
    tabAlmoco.addEventListener('click', () => {
      currentMealType = 'almoco';
      tabAlmoco.classList.add('active');
      tabAlmoco.setAttribute('aria-selected', 'true');
      tabJantar.classList.remove('active');
      tabJantar.setAttribute('aria-selected', 'false');
      if (ruStatusText) ruStatusText.textContent = 'Restaurantes Abertos para o Almoço (11:00 - 14:00)';
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
      const otherDishes = dishes.filter(d => d.id !== proteinDish.id);

      return `
        <article class="ru-card" data-ru-key="${ruKey}">
          <div class="ru-card-header">
            <div class="ru-title-group">
              <i data-lucide="map-pin" class="ru-icon"></i>
              <h3 class="ru-name">${ru.name}</h3>
            </div>
            <span class="ru-status-tag">
              <i data-lucide="check-circle-2"></i> Cardápio Atualizado
            </span>
          </div>

          <div class="ru-featured-box">
            <div class="dish-header">
              <span class="badge badge-${proteinDish.type}">${proteinDish.badge}</span>
              <button class="btn-favorite" aria-label="Favoritar ${proteinDish.name}" data-dish-id="${proteinDish.id}">
                <i data-lucide="heart"></i>
              </button>
            </div>
            
            <h4 class="dish-name" style="font-size: 16px; font-weight: 800; color: var(--text-main); margin: 6px 0;">${proteinDish.name}</h4>
            <p class="dish-description" style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">${proteinDish.desc}</p>
            
            ${proteinDish.tags && proteinDish.tags.length > 0 ? `
              <div class="dish-tags">
                ${proteinDish.tags.map(tag => {
                  if (typeof tag === 'object') {
                    return `<span class="tag-allergen ${tag.type}">${tag.label}</span>`;
                  }
                  return `<span class="tag-allergen neutral">${tag}</span>`;
                }).join('')}
              </div>
            ` : ''}

            <div class="dish-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--border-color);">
              <div class="dish-rating" style="display: flex; align-items: center; gap: 6px;">
                <div class="stars" style="display: flex; align-items: center; gap: 2px; color: var(--accent-star);">
                  <i data-lucide="star" style="width: 15px; height: 15px; fill: var(--accent-star);"></i>
                  <span class="rating-score" style="font-size: 13px; font-weight: 800; color: var(--text-main);">${proteinDish.score}</span>
                </div>
                <span class="rating-count" style="font-size: 11px; color: var(--text-muted);">(${proteinDish.count} avaliações)</span>
              </div>
              <button class="btn-review" data-dish-id="${proteinDish.id}" data-dish-name="${proteinDish.name}">
                <i data-lucide="message-square-plus"></i>
                <span>Avaliar</span>
              </button>
            </div>
          </div>

          ${otherDishes.length > 0 ? `
            <button class="btn-toggle-accordion" aria-expanded="false">
              <span>Ver Cardápio Completo (${otherDishes.length} itens a mais)</span>
              <i data-lucide="chevron-down" class="accordion-arrow"></i>
            </button>

            <div class="ru-expanded-panel hidden">
              ${otherDishes.map(dish => `
                <div class="sub-dish-card">
                  <div class="dish-header">
                    <span class="badge badge-${dish.type}">${dish.badge}</span>
                    <button class="btn-favorite" aria-label="Favoritar ${dish.name}" data-dish-id="${dish.id}">
                      <i data-lucide="heart"></i>
                    </button>
                  </div>

                  <h5 class="dish-name" style="font-size: 14px; font-weight: 700; color: var(--text-main); margin: 4px 0;">${dish.name}</h5>
                  <p class="dish-description" style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">${dish.desc}</p>

                  ${dish.tags && dish.tags.length > 0 ? `
                    <div class="dish-tags">
                      ${dish.tags.map(tag => {
                        if (typeof tag === 'object') {
                          return `<span class="tag-allergen ${tag.type}">${tag.label}</span>`;
                        }
                        return `<span class="tag-allergen neutral">${tag}</span>`;
                      }).join('')}
                    </div>
                  ` : ''}

                  <div class="dish-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 8px; border-top: 1px solid var(--border-color);">
                    <div class="dish-rating" style="display: flex; align-items: center; gap: 4px;">
                      <i data-lucide="star" style="width: 14px; height: 14px; color: var(--accent-star); fill: var(--accent-star);"></i>
                      <span class="rating-score" style="font-size: 12px; font-weight: 800;">${dish.score}</span>
                      <span class="rating-count" style="font-size: 10px; color: var(--text-muted);">(${dish.count})</span>
                    </div>
                    <button class="btn-review" data-dish-id="${dish.id}" data-dish-name="${dish.name}">
                      <i data-lucide="message-square-plus"></i>
                      <span>Avaliar</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </article>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }

    attachCardListeners();
  }

  function attachCardListeners() {
    document.querySelectorAll('.btn-review').forEach(btn => {
      btn.addEventListener('click', () => {
        const dishId = btn.getAttribute('data-dish-id');
        const dishName = btn.getAttribute('data-dish-name');
        openReviewModal(dishId, dishName);
      });
    });

    document.querySelectorAll('.btn-favorite').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
          btn.style.color = '#ef4444';
        } else {
          btn.style.color = '';
        }
      });
    });

    document.querySelectorAll('.btn-toggle-accordion').forEach(btn => {
      btn.addEventListener('click', () => {
        const ruCard = btn.closest('.ru-card');
        const panel = ruCard.querySelector('.ru-expanded-panel');
        const isHidden = panel.classList.contains('hidden');
        const textSpan = btn.querySelector('span');

        if (isHidden) {
          panel.classList.remove('hidden');
          btn.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          if (textSpan) textSpan.textContent = 'Recolher Cardápio';
        } else {
          panel.classList.add('hidden');
          btn.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');
          const count = panel.children.length;
          if (textSpan) textSpan.textContent = `Ver Cardápio Completo (${count} itens a mais)`;
        }
      });
    });
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
  initRuDetailPage();
  initHistoryPage();

  /* ==========================================================================
     LÓGICA DA PÁGINA DETALHADA DO RU (detalhes-ru.html)
     ========================================================================== */
  function initRuDetailPage() {
    const ruTitleEl = document.getElementById('ru-detail-title');
    if (!ruTitleEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const ruKey = urlParams.get('ru') || 'ru1-ccn';
    const ruData = menuData[ruKey] || menuData['ru1-ccn'];

    ruTitleEl.textContent = ruData.name;

    let detailMealType = 'almoco';
    const tabAlmoco = document.getElementById('tab-ru-almoco');
    const tabJantar = document.getElementById('tab-ru-jantar');
    const menuListEl = document.getElementById('ru-full-menu-list');

    function renderFullMenu(meal) {
      if (!menuListEl) return;
      const dishes = (ruData[meal] && ruData[meal].length > 0) ? ruData[meal] : ruData['almoco'];

      menuListEl.innerHTML = dishes.map(dish => `
        <div class="dish-card" style="margin-bottom: 0;">
          <div class="dish-header">
            <span class="badge badge-${dish.type}">${dish.badge}</span>
            <button class="btn-favorite" aria-label="Favoritar ${dish.name}" data-dish-id="${dish.id}">
              <i data-lucide="heart"></i>
            </button>
          </div>
          <h4 class="dish-name" style="font-size: 15px; font-weight: 800; color: var(--text-main); margin: 6px 0;">${dish.name}</h4>
          <p class="dish-description" style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">${dish.desc}</p>
          ${dish.tags && dish.tags.length > 0 ? `
            <div class="dish-tags">
              ${dish.tags.map(t => `<span class="tag-allergen ${t.type || 'neutral'}">${t.label || t}</span>`).join('')}
            </div>
          ` : ''}
          <div class="dish-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 8px; border-top: 1px solid var(--border-color);">
            <div class="dish-rating" style="display: flex; align-items: center; gap: 4px;">
              <i data-lucide="star" style="width: 14px; height: 14px; color: var(--accent-star); fill: var(--accent-star);"></i>
              <span class="rating-score" style="font-size: 12px; font-weight: 800;">${dish.score}</span>
              <span class="rating-count" style="font-size: 10px; color: var(--text-muted);">(${dish.count} avaliações)</span>
            </div>
          </div>
        </div>
      `).join('');

      if (window.lucide) window.lucide.createIcons();
    }

    if (tabAlmoco && tabJantar) {
      tabAlmoco.addEventListener('click', () => {
        detailMealType = 'almoco';
        tabAlmoco.classList.add('active');
        tabJantar.classList.remove('active');
        renderFullMenu('almoco');
      });

      tabJantar.addEventListener('click', () => {
        detailMealType = 'jantar';
        tabJantar.classList.add('active');
        tabAlmoco.classList.remove('active');
        renderFullMenu('jantar');
      });
    }

    renderFullMenu('almoco');

    // Feed de Comentários
    const commentsListEl = document.getElementById('comments-feed-list');
    const initialComments = [
      { name: 'Henrique S.', avatar: 'H', time: 'Há 15 min', score: '⭐ 5.0', text: 'O frango à teriaky hoje estava sensacional! Fila andou bem rápido no RU 1.', likes: 14 },
      { name: 'Mariana C.', avatar: 'M', time: 'Há 45 min', score: '⭐ 4.8', text: 'Opção de grão de bico perfeita. Muito bem temperada e a salada com manga estava fresquinha.', likes: 9 },
      { name: 'Lucas P.', avatar: 'L', time: 'Há 2 horas', score: '⭐ 4.5', text: 'Farofa crocante e o suco bem gelado. Atendimento dos funcionários nota 10.', likes: 6 }
    ];

    function renderComments() {
      if (!commentsListEl) return;
      commentsListEl.innerHTML = initialComments.map(c => `
        <div class="comment-card">
          <div class="comment-card-header">
            <div class="comment-user-box">
              <div class="user-avatar-comment">${c.avatar}</div>
              <div>
                <span class="comment-user-name">${c.name}</span>
                <span class="comment-time" style="display: block;">${c.time}</span>
              </div>
            </div>
            <span class="comment-stars">${c.score}</span>
          </div>
          <p class="comment-text">"${c.text}"</p>
          <div class="comment-footer">
            <span class="tag-chip neutral" style="font-size: 10px; padding: 2px 8px;">Prato do Dia</span>
            <button class="btn-like-comment" onclick="this.classList.toggle('liked');">
              <i data-lucide="thumbs-up" style="width: 14px; height: 14px;"></i>
              <span>${c.likes}</span>
            </button>
          </div>
        </div>
      `).join('');

      if (window.lucide) window.lucide.createIcons();
    }

    renderComments();

    // Form Inline Star Picker (Estilo YouTube/Amazon)
    let inlineRating = 0;
    const inlineStarBtns = document.querySelectorAll('.inline-star-btn');
    const inlineStarText = document.getElementById('inline-star-text');
    const ratingTexts = ['', '1/5 - Precisa Melhorar', '2/5 - Regular', '3/5 - Bom', '4/5 - Muito Bom!', '5/5 - Excelente! 🌟'];

    inlineStarBtns.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        inlineRating = idx + 1;
        inlineStarBtns.forEach((b, i) => {
          if (i < inlineRating) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
        if (inlineStarText) inlineStarText.textContent = ratingTexts[inlineRating];
      });
    });

    // Tag Chips Selector
    document.querySelectorAll('.inline-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        tag.classList.toggle('active');
      });
    });

    // Enviar Avaliação Inline
    const btnPublish = document.getElementById('btn-publish-inline-review');
    const commentInput = document.getElementById('inline-comment-input');

    if (btnPublish && commentInput) {
      btnPublish.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (inlineRating === 0) {
          alert('Por favor, selecione quantas estrelas deseja dar antes de enviar.');
          return;
        }
        if (!text) {
          alert('Por favor, escreva um breve comentário sobre a refeição.');
          return;
        }

        const newComment = {
          name: 'Você (Aluno UFPI)',
          avatar: 'V',
          time: 'Agora mesmo',
          score: `⭐ ${inlineRating}.0`,
          text: text,
          likes: 0
        };

        initialComments.unshift(newComment);
        renderComments();

        commentInput.value = '';
        inlineRating = 0;
        inlineStarBtns.forEach(b => b.classList.remove('active'));
        if (inlineStarText) inlineStarText.textContent = 'Avaliação enviada com sucesso!';
        document.querySelectorAll('.inline-tag').forEach(t => t.classList.remove('active'));

        const countEl = document.getElementById('comments-count');
        if (countEl) countEl.textContent = `${initialComments.length + 140} comentários`;
      });
    }
  }

  /* ==========================================================================
     LÓGICA DO HISTÓRICO POR DATA (avaliacoes-historico.html)
     ========================================================================== */
  function initHistoryPage() {
    const datePicker = document.getElementById('history-date-picker');
    if (!datePicker) return;

    datePicker.value = '2026-07-29';

    const dateTitleEl = document.getElementById('selected-date-title');
    const menuListEl = document.getElementById('history-menu-list');
    const reviewsListEl = document.getElementById('history-reviews-list');
    const pills = document.querySelectorAll('.date-pill');

    const mockHistory = {
      '2026-07-29': {
        title: 'Quarta-feira, 29 de Julho de 2026',
        menu: [
          { name: 'Frango à Teriaky (RU 1, 2 e 3)', type: 'protein', badge: 'Proteína Principal', desc: 'Tiras de frango refogadas ao molho teriaky oriental.' },
          { name: 'Grão de Bico à Primavera', type: 'veggie', badge: 'Vegetariano', desc: 'Grão de bico refogado com milho e ervas.' },
          { name: 'Arroz, Feijão com Batata Doce & Farofa', type: 'side', badge: 'Acompanhamentos', desc: 'Arroz soltinho e feijão caseiro.' },
          { name: 'Salada Crua & Melancia / Banana', type: 'dessert', badge: 'Salada & Sobremesa', desc: 'Salada de repolho e frutas frescas.' }
        ],
        reviews: [
          { user: 'Gabriel M.', time: '29/07 às 13:40', score: '⭐ 5.0', comment: 'Comida impecável no almoço de quarta! Molho teriaky muito bom.' },
          { user: 'Carla T.', time: '29/07 às 12:15', score: '⭐ 4.8', comment: 'Batata doce no feijão combinou muito bem.' }
        ]
      },
      '2026-07-28': {
        title: 'Terça-feira, 28 de Julho de 2026',
        menu: [
          { name: 'Maria Isabel & Creme de Galinha', type: 'protein', badge: 'Proteína Principal', desc: 'Arroz maria isabel tradicional com carne de sol.' },
          { name: 'Arroz com Soja & Creme de Abóbora', type: 'veggie', badge: 'Vegetariano', desc: 'Proteína de soja refogada com creme de abóbora.' }
        ],
        reviews: [
          { user: 'Felipe A.', time: '28/07 às 18:30', score: '⭐ 4.9', comment: 'Maria Isabel com creme de galinha estava sensacional!' }
        ]
      },
      '2026-07-27': {
        title: 'Segunda-feira, 27 de Julho de 2026',
        menu: [
          { name: 'Bife Acebolado com Vinagrete', type: 'protein', badge: 'Proteína Principal', desc: 'Bife bovino macio acebolado.' },
          { name: 'Panqueca de Ricota e Espinafre', type: 'veggie', badge: 'Vegetariano', desc: 'Massa leve com ricota e espinafre.' }
        ],
        reviews: [
          { user: 'Amanda R.', time: '27/07 às 12:50', score: '⭐ 4.7', comment: 'Bife bem macio e vinagrete caprichado.' }
        ]
      }
    };

    function updateHistoryView(dateStr) {
      const data = mockHistory[dateStr] || mockHistory['2026-07-29'];
      if (dateTitleEl) dateTitleEl.textContent = data.title;

      if (menuListEl) {
        menuListEl.innerHTML = data.menu.map(item => `
          <div class="sub-dish-card" style="margin-bottom: 8px;">
            <span class="badge badge-${item.type}">${item.badge}</span>
            <h4 style="font-size: 14px; font-weight: 700; margin: 4px 0;">${item.name}</h4>
            <p style="font-size: 11px; color: var(--text-muted);">${item.desc}</p>
          </div>
        `).join('');
      }

      if (reviewsListEl) {
        reviewsListEl.innerHTML = data.reviews.map(r => `
          <div class="comment-card">
            <div class="comment-card-header">
              <div class="comment-user-box">
                <div class="user-avatar-comment">${r.user[0]}</div>
                <div>
                  <span class="comment-user-name">${r.user}</span>
                  <span class="comment-time" style="display: block;">${r.time}</span>
                </div>
              </div>
              <span class="comment-stars">${r.score}</span>
            </div>
            <p class="comment-text">"${r.comment}"</p>
          </div>
        `).join('');
      }
    }

    datePicker.addEventListener('change', (e) => {
      updateHistoryView(e.target.value);
    });

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const dt = pill.getAttribute('data-date');
        datePicker.value = dt;
        updateHistoryView(dt);
      });
    });

    updateHistoryView('2026-07-29');
  }
});