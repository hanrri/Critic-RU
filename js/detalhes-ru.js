document.addEventListener('DOMContentLoaded', () => {

  const urlParams = new URLSearchParams(window.location.search);
  const ruKey = urlParams.get('ru') || 'ru1-ccn';

  const menuData = {
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
          tags: []
        },
        {
          badge: 'Opção Vegetariana',
          type: 'veggie',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico refogado com milho, pimentões coloridos e ervas frescas.',
          tags: []
        },
        {
          badge: 'Acompanhamentos',
          type: 'side',
          name: 'Arroz, Feijão com Batata Doce & Farofa',
          desc: 'Arroz soltinho, feijão caseiro cozido com batata doce e farofa temperada.',
          tags: []
        },
        {
          badge: 'Salada & Sobremesa',
          type: 'dessert',
          name: 'Salada Crua & Banana',
          desc: 'Salada: Repolho Verde + Repolho Roxo + Manga + Passas + Salsa. Sobremesa: Banana.',
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
          tags: ['⚠️ Contém Glúten', '⚠️ Contém Lactose']
        },
        {
          badge: 'Opção Vegetariana',
          type: 'veggie',
          name: 'Arroz com Soja & Creme de Abóbora (Vegetariano)',
          desc: 'Arroz soltinho com proteína de soja refogada e creme de abóbora.',
          tags: ['⚠️ Contém Soja']
        },
        {
          badge: 'Acompanhamentos',
          type: 'side',
          name: 'Farofa Especial',
          desc: 'Farofa crocante de mandioca.',
          tags: []
        },
        {
          badge: 'Salada & Sobremesa',
          type: 'dessert',
          name: 'Salada Mista & Melão',
          desc: 'Salada: Feijão branco + Couve Mineira + Tomate + Pepino. Sobremesa: Melão.',
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
          tags: []
        },
        {
          badge: 'Opção Vegetariana',
          type: 'veggie',
          name: 'Grão de Bico à Primavera (Vegetariano)',
          desc: 'Grão de bico temperado com milho, repolho e salsa.',
          tags: []
        },
        {
          badge: 'Acompanhamentos',
          type: 'side',
          name: 'Arroz Branco & Feijão Tropeiro',
          desc: 'Arroz soltinho com feijão tropeiro temperado.',
          tags: []
        },
        {
          badge: 'Salada & Sobremesa',
          type: 'dessert',
          name: 'Salada Crua & Doce de Goiaba',
          desc: 'Salada de acelga, cenoura e milho. Sobremesa: Doce de goiaba.',
          tags: []
        }
      ]
    }
  };

  let initialComments = [
    {
      id: 1,
      author: 'Henrique Silva',
      username: '@henriquesilva',
      avatar: 'H',
      avatarBg: '#1d4ed8',
      time: 'Há 15 minutos',
      stars: 5,
      text: 'O frango à teriaky hoje estava sensacional! Molho bem encorpado e a fila do RU 1 andou super rápido.',
      tags: ['😋 Saboroso', '⚡ Atendimento Rápido'],
      likes: 14,
      liked: false
    },
    {
      id: 2,
      author: 'Mariana Costa',
      username: '@marianacosta',
      avatar: 'M',
      avatarBg: '#ec4899',
      time: 'Há 45 minutos',
      stars: 5,
      text: 'O grão de bico vegetariano estava muito bem temperado. A salada com manga combinou super bem!',
      tags: ['🌱 Vegetariano', '😋 Saboroso'],
      likes: 9,
      liked: false
    },
    {
      id: 3,
      author: 'Gabriel Oliveira',
      username: '@gabriel_ufpi',
      avatar: 'G',
      avatarBg: '#10b981',
      time: 'Há 2 horas',
      stars: 4,
      text: 'Comida boa como sempre, só achei a fila um pouco mais demorada por volta das 12:15, mas valeu a pena.',
      tags: ['⏳ Fila Demorada', '🔥 Quentinho'],
      likes: 5,
      liked: false
    },
    {
      id: 4,
      author: 'Ana Paula Santos',
      username: '@anapaula_s',
      avatar: 'A',
      avatarBg: '#8b5cf6',
      time: 'Há 3 horas',
      stars: 5,
      text: 'A farofa estava no ponto perfeito e a banana bem fresquinha! Parabéns à equipe da cozinha do RU.',
      tags: ['😋 Saboroso'],
      likes: 11,
      liked: false
    }
  ];

  // Elementos da página
  const ruData = menuData[ruKey] || menuData['ru1-ccn'];

  const dateParam = urlParams.get('date');
  const fromParam = urlParams.get('from');
  const btnBackHeader = document.getElementById('btn-back-header');
  const btnBackText = document.getElementById('btn-back-text');

  if (btnBackHeader) {
    if (fromParam === 'avaliacoes' || document.referrer.includes('avaliacoes.html')) {
      const backUrl = dateParam ? `avaliacoes.html?date=${dateParam}` : 'avaliacoes.html';
      btnBackHeader.setAttribute('href', backUrl);
      if (btnBackText) btnBackText.textContent = 'Voltar às Avaliações';
      btnBackHeader.addEventListener('click', (e) => {
        if (window.history.length > 1) {
          e.preventDefault();
          window.history.back();
        } else {
          window.location.href = backUrl;
        }
      });
    } else {
      btnBackHeader.setAttribute('href', 'index.html');
      if (btnBackText) btnBackText.textContent = 'Voltar ao Cardápio Geral';
    }
  }

  if (ruDetailTitle) ruDetailTitle.textContent = ruData.name;
  if (ruDetailScore) ruDetailScore.textContent = ruData.score;
  if (ruDetailCount) ruDetailCount.textContent = `(${ruData.count} avaliações)`;

  // Renderizar itens do Cardápio Completo (Descrição apenas na Salada + Botão de Favoritar)
  if (ruMenuItemsList && ruData.dishes) {
    ruMenuItemsList.innerHTML = ruData.dishes.map(dish => {
      const isSalada = dish.type === 'dessert' || dish.badge.includes('Salada') || dish.name.toLowerCase().includes('salada');
      const isFavoritable = dish.type === 'protein' || dish.type === 'veggie';

      return `
        <div class="ru-full-menu-card">
          <div class="dish-header" style="display: flex; justify-content: space-between; align-items: center;">
            <span class="badge badge-${dish.type}">${dish.badge}</span>
            ${isFavoritable ? `
              <button class="btn-favorite" aria-label="Favoritar ${dish.name}">
                <i data-lucide="heart"></i>
              </button>
            ` : ''}
          </div>
          <h4 class="dish-name" style="font-size: 15px; font-weight: 800; color: var(--text-main); margin: 6px 0 4px 0;">${dish.name}</h4>
          ${isSalada && dish.desc ? `
            <p class="dish-description" style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">${dish.desc}</p>
          ` : ''}
          ${dish.tags && dish.tags.filter(t => t.includes('Contém')).length > 0 ? `
            <div class="dish-tags" style="margin-top: 4px;">
              ${dish.tags.filter(t => t.includes('Contém')).map(tag => `<span class="tag-allergen contains">${tag}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Event listener para favoritar prato no menu do RU
    document.querySelectorAll('.ru-full-menu-card .btn-favorite').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
          btn.style.color = '#ef4444';
          const icon = btn.querySelector('svg, i');
          if (icon) icon.style.fill = '#ef4444';
        } else {
          btn.style.color = '';
          const icon = btn.querySelector('svg, i');
          if (icon) icon.style.fill = 'none';
        }
      });
    });
  }

  // --- LÓGICA DE AVALIAÇÃO E COMENTÁRIOS (Estilo YouTube) ---
  let selectedStars = 0;
  let selectedQuickTags = [];

  const starBtns = document.querySelectorAll('.yt-star-btn');
  const starRatingText = document.getElementById('yt-star-text');
  const quickTagBtns = document.querySelectorAll('.yt-tag-chip');
  const commentTextArea = document.getElementById('yt-comment-text');
  const btnSubmitComment = document.getElementById('btn-submit-yt-comment');
  const btnCancelComment = document.getElementById('btn-cancel-yt-comment');
  const commentsFeed = document.getElementById('comments-feed');
  const commentsCountEl = document.getElementById('comments-count');

  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedStars = parseInt(btn.getAttribute('data-value'));
      updateStarsUI(selectedStars);
    });
  });

  function updateStarsUI(stars) {
    const labels = ['', '1 - Ruim 🙁', '2 - Regular 😐', '3 - Bom 🙂', '4 - Muito Bom 😄', '5 - Excelente! 🔥'];
    starBtns.forEach((btn, index) => {
      if (index < stars) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    if (starRatingText) {
      starRatingText.textContent = labels[stars] || 'Selecione as estrelas';
    }
  }

  quickTagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

  if (btnCancelComment) {
    btnCancelComment.addEventListener('click', () => {
      resetForm();
    });
  }

  function resetForm() {
    selectedStars = 0;
    updateStarsUI(0);
    if (commentTextArea) commentTextArea.value = '';
    quickTagBtns.forEach(btn => btn.classList.remove('active'));
  }

  if (btnSubmitComment) {
    btnSubmitComment.addEventListener('click', () => {
      const text = commentTextArea ? commentTextArea.value.trim() : '';

      if (selectedStars === 0) {
        alert('Por favor, selecione pelo menos 1 estrela para publicar sua avaliação.');
        return;
      }

      const activeTags = Array.from(quickTagBtns)
        .filter(btn => btn.classList.contains('active'))
        .map(btn => btn.textContent.trim());

      const newComment = {
        id: Date.now(),
        author: 'Você (Aluno)',
        username: '@voce_aluno',
        avatar: 'V',
        avatarBg: 'var(--primary)',
        time: 'Agora mesmo',
        stars: selectedStars,
        text: text || 'Avaliação sem comentário escrito.',
        tags: activeTags,
        likes: 0,
        liked: false
      };

      initialComments.unshift(newComment);
      resetForm();
      renderComments();

      // Scroll suave até o novo comentário
      commentsFeed.firstElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  function renderComments() {
    if (!commentsFeed) return;
    if (commentsCountEl) commentsCountEl.textContent = initialComments.length;

    commentsFeed.innerHTML = initialComments.map(comment => `
      <div class="yt-comment-card" data-id="${comment.id}">
        <div class="yt-comment-avatar" style="background: ${comment.avatarBg};">${comment.avatar}</div>
        <div class="yt-comment-body">
          <div class="yt-comment-header">
            <span class="yt-comment-author">${comment.author}</span>
            <span class="yt-comment-username">${comment.username}</span>
            <span class="yt-comment-time">• ${comment.time}</span>
          </div>

          <div class="yt-comment-rating">
            ${'⭐'.repeat(comment.stars)} <span class="rating-num">(${comment.stars}.0)</span>
          </div>

          <p class="yt-comment-text">${comment.text}</p>

          ${comment.tags && comment.tags.length > 0 ? `
            <div class="yt-comment-tags">
              ${comment.tags.map(t => `<span class="tag-chip-mini">${t}</span>`).join('')}
            </div>
          ` : ''}

          <div class="yt-comment-actions">
            <button type="button" class="btn-like-yt ${comment.liked ? 'liked' : ''}" data-id="${comment.id}">
              <i data-lucide="thumbs-up"></i>
              <span class="like-count">${comment.likes > 0 ? comment.likes : ''}</span>
            </button>
            <button type="button" class="btn-reply-yt">
              <span>Responder</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach click listener para os likes dos comentários
    document.querySelectorAll('.btn-like-yt').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const comment = initialComments.find(c => c.id === id);
        if (comment) {
          comment.liked = !comment.liked;
          comment.likes += comment.liked ? 1 : -1;
          renderComments();
        }
      });
    });
  }

  renderComments();
  if (window.lucide) {
    window.lucide.createIcons();
  }

});
