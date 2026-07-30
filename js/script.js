

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

      return `
        <article class="ru-card" data-ru-key="${ruKey}">
          <div class="ru-card-header">
            <div class="ru-title-group">
              <i data-lucide="map-pin" class="ru-icon"></i>
              <h3 class="ru-name">${ru.name}</h3>
            </div>
            <a href="detalhes-ru.html?ru=${ruKey}" class="ru-status-tag" style="text-decoration: none;">
              <i data-lucide="check-circle-2"></i> Aberto Hoje
            </a>
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
              <a href="detalhes-ru.html?ru=${ruKey}" class="btn-review" style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                <i data-lucide="message-square"></i>
                <span>Ver Cardápio & Avaliar</span>
              </a>
            </div>
          </div>

          <a href="detalhes-ru.html?ru=${ruKey}" class="btn-toggle-accordion" style="text-decoration: none;">
            <span>Ver Cardápio Completo & Avaliações (${dishes.length} itens)</span>
            <i data-lucide="chevron-right" class="accordion-arrow"></i>
          </a>
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
});