

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
          name: 'Galinhada Caseira',
          desc: 'Prato tradicional com arroz cozido, frango desfiado temperado e ervas.',
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
          name: 'Arroz Colorido + Creme de Abóbora¹',
          desc: 'Arroz soltinho com milho e ervilha acompanhado de creme de abóbora cremoso.',
          score: 4.9,
          count: 87,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' },
            { label: '⚠️ Contém Glúten', type: 'contains' },
            { label: '⚠️ Contém Lactose', type: 'contains' },
            { label: 'Sem Soja', type: 'free' }
          ]
        },
        {
          id: 103,
          type: 'side',
          badge: 'Acompanhamentos',
          name: 'Farofa Especial & Creme de Abóbora¹',
          desc: 'Farofa de mandioca crocante e creme de abóbora temperado.',
          score: 4.6,
          count: 65,
          tags: [
            { label: '⚠️ Contém Glúten', type: 'contains' },
            { label: '⚠️ Contém Lactose', type: 'contains' }
          ]
        },
        {
          id: 104,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Melão Fresco (RU 1)',
          desc: 'Salada: Acelga + Couve + Beterraba + Maçã + Salsa. Sobremesa: Fatia de Melão.',
          score: 4.7,
          count: 53,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' },
            { label: 'Sem Soja', type: 'free' }
          ]
        }
      ],
      jantar: [
        {
          id: 105,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Carne de Sol Acebolada com Mandioca',
          desc: 'Carne de sol trançada, refogada na cebola com mandioca cozida.',
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
          name: 'Omelete de Forno com Legumes',
          desc: 'Omelete macio com tomate, pimentão, cheiro-verde e queijo leve.',
          score: 4.6,
          count: 72,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' },
            { label: '⚠️ Contém Lactose', type: 'contains' },
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
          name: 'Galinhada Caseira',
          desc: 'Prato tradicional com arroz cozido, frango desfiado temperado e ervas.',
          score: 4.7,
          count: 120,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        },
        {
          id: 202,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Arroz Colorido + Creme de Abóbora¹',
          desc: 'Arroz soltinho com legumes e creme de abóbora cremoso.',
          score: 4.9,
          count: 91,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' },
            { label: '⚠️ Contém Glúten', type: 'contains' },
            { label: '⚠️ Contém Lactose', type: 'contains' }
          ]
        },
        {
          id: 203,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Laranja (RU 2)',
          desc: 'Salada: Acelga + Couve + Beterraba + Maçã + Salsa. Sobremesa: Laranja docinha.',
          score: 4.8,
          count: 60,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        }
      ],
      jantar: []
    },

    'ru3-cca': {
      name: 'RU 3 - CCA',
      almoco: [
        {
          id: 301,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Galinhada Caseira',
          desc: 'Prato tradicional com arroz cozido, frango desfiado temperado e ervas.',
          score: 4.8,
          count: 98,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        },
        {
          id: 302,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Arroz Colorido + Creme de Abóbora¹',
          desc: 'Arroz soltinho com legumes e creme de abóbora cremoso.',
          score: 4.8,
          count: 75,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' },
            { label: '⚠️ Contém Glúten', type: 'contains' },
            { label: '⚠️ Contém Lactose', type: 'contains' }
          ]
        },
        {
          id: 303,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Doce de Goiaba (RU 3)',
          desc: 'Salada: Acelga + Couve + Beterraba + Maçã + Salsa. Sobremesa: Doce de Goiaba.',
          score: 4.9,
          count: 84,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        }
      ],
      jantar: []
    }
  };

  if (tabAlmoco && tabJantar) {
    tabAlmoco.addEventListener('click', () => {
      currentMealType = 'almoco';
      tabAlmoco.classList.add('active');
      tabAlmoco.setAttribute('aria-selected', 'true');
      tabJantar.classList.remove('active');
      tabJantar.setAttribute('aria-selected', 'false');
      if (ruStatusText) ruStatusText.textContent = 'Restaurante Aberto para o Almoço (11:00 - 14:00)';
      renderMenu(currentMealType);
    });

    tabJantar.addEventListener('click', () => {
      currentMealType = 'jantar';
      tabJantar.classList.add('active');
      tabJantar.setAttribute('aria-selected', 'true');
      tabAlmoco.classList.remove('active');
      tabAlmoco.setAttribute('aria-selected', 'false');
      if (ruStatusText) ruStatusText.textContent = 'Restaurante Aberto para o Jantar (17:00 - 19:00)';
      renderMenu(currentMealType);
    });
  }

  if (ruSelect) {
    ruSelect.addEventListener('change', () => {
      renderMenu(currentMealType);
    });
  }

  function renderMenu(mealType) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    const ruValue = ruSelect ? ruSelect.value : 'ru1-ccn';
    const ruData = menuData[ruValue] || menuData['ru1-ccn'];
    const dishes = (ruData[mealType] && ruData[mealType].length > 0) ? ruData[mealType] : ruData['almoco'];

    menuGrid.innerHTML = dishes.map(dish => `
      <article class="dish-card" data-dish-id="${dish.id}">
        <div class="dish-header">
          <span class="badge badge-${dish.type}">${dish.badge}</span>
          <button class="btn-favorite" aria-label="Favoritar ${dish.name}" data-dish-id="${dish.id}">
            <i data-lucide="heart"></i>
          </button>
        </div>
        
        <h3 class="dish-name">${dish.name}</h3>
        <p class="dish-description">${dish.desc}</p>
        
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

        <div class="dish-footer">
          <div class="dish-rating">
            <div class="stars">
              <i data-lucide="star" class="filled"></i>
              <span class="rating-score">${dish.score}</span>
            </div>
            <span class="rating-count">(${dish.count} avaliações)</span>
          </div>
          <button class="btn-review" data-dish-id="${dish.id}" data-dish-name="${dish.name}">
            <i data-lucide="message-square-plus"></i>
            <span>Avaliar</span>
          </button>
        </div>
      </article>
    `).join('');

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