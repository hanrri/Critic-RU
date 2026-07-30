

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
            { label: '⚠️ Contém Lactose', type: 'contains' }
          ]
        },
        {
          id: 103,
          type: 'side',
          badge: 'Acompanhamentos',
          name: 'Farofa Especial & Feijão Carioca',
          desc: 'Farofa de mandioca crocante e feijão carioca temperado.',
          score: 4.6,
          count: 65,
          tags: [
            { label: '⚠️ Contém Glúten', type: 'contains' }
          ]
        },
        {
          id: 104,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Crua & Melão Fresco',
          desc: 'Salada: Acelga + Couve + Beterraba + Maçã. Sobremesa: Fatia de Melão.',
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
            { label: '⚠️ Contém Lactose', type: 'contains' }
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
          name: 'Frango Assado com Ervas & Batata Doce',
          desc: 'Coxa e sobrecoxa assada ao forno com ervas finas e batata doce.',
          score: 4.7,
          count: 130,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' },
            { label: 'Rico em Proteína', type: 'neutral' }
          ]
        },
        {
          id: 202,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Lasanha de Abobrinha com Queijo Branco',
          desc: 'Camadas de abobrinha grelhada com molho de tomate caseiro e ricota.',
          score: 4.8,
          count: 95,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' },
            { label: '⚠️ Contém Lactose', type: 'contains' }
          ]
        },
        {
          id: 203,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada de Folhas & Laranja Fresca',
          desc: 'Salada verde com tomate e vinagrete. Sobremesa: Laranja fatiada.',
          score: 4.8,
          count: 64,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        }
      ],
      jantar: [
        {
          id: 204,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Escondidinho de Carne Moída com Macaxeira',
          desc: 'Purê cremoso de macaxeira recheado com carne moída bem temperada.',
          score: 4.9,
          count: 110,
          tags: [
            { label: 'Sem Glúten', type: 'free' }
          ]
        },
        {
          id: 205,
          type: 'veggie',
          badge: 'Opção Vegetariana',
          name: 'Hambúrguer de Lentilha',
          desc: 'Hambúrguer de lentilha grelhado com molho especial de ervas.',
          score: 4.7,
          count: 80,
          tags: [
            { label: '🌱 Vegano', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
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
          name: 'Bife Acebolado com Vinagrete Especial',
          desc: 'Bife bovino macio acebolado acompanhado de vinagrete fresco.',
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
          name: 'Panqueca de Ricota e Espinafre',
          desc: 'Massa leve recheada com creme de ricota fresca e espinafre.',
          score: 4.8,
          count: 82,
          tags: [
            { label: '🌱 Vegetariano', type: 'free' },
            { label: '⚠️ Contém Lactose', type: 'contains' }
          ]
        },
        {
          id: 303,
          type: 'dessert',
          badge: 'Salada & Sobremesa',
          name: 'Salada Tropical & Doce de Goiaba',
          desc: 'Salada de acelga, cenoura e milho. Sobremesa: Doce de goiaba.',
          score: 4.9,
          count: 78,
          tags: [
            { label: 'Sem Glúten', type: 'free' },
            { label: 'Sem Lactose', type: 'free' }
          ]
        }
      ],
      jantar: [
        {
          id: 304,
          type: 'protein',
          badge: 'Proteína Principal',
          name: 'Sopa de Carne com Legumes & Macarrão',
          desc: 'Sopa reforçada com pedaços de carne, batata, cenoura e macarrão.',
          score: 4.7,
          count: 90,
          tags: [
            { label: '⚠️ Contém Glúten', type: 'contains' }
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
});