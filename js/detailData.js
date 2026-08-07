const detailData = () => {
  const preloader = document.getElementById('preloder');

  // Загрузка данных
  {
    fetch('https://myproject-4cdbd-default-rtdb.firebaseio.com/db-anime.json') // fetch('db-anime.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        data.forEach(anime => anime.image = anime.image.replaceAll('https://v5.vost.pw', 'https://v12.vost.pw'));

        const itemParam = new URLSearchParams(window.location.search).get('itemId');

        const ganres = new Set();
        data.forEach(anime => ganres.add(anime.ganre));

        renderGanres(ganres);
        renderAnimeDetails(data, itemParam);

        setTimeout(() => preloader.classList.remove('active'), 500);
      });
  }

  // Рендер жанров
  function renderGanres(ganres) {
    const dropdownBlock = document.querySelector('.header__menu .dropdown');
    dropdownBlock.innerHTML = '';

    ganres.forEach(ganre => {
      dropdownBlock.insertAdjacentHTML('beforeend', `
        <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
      `);
    });
  };

  // Рендер список аниме
  function renderAnimeDetails(animeList, itemId) {
    if (!itemId) return console.error('itemId is required');
    const anime = animeList.find(anime => anime.id == itemId);
    if (!anime) return console.error('Anime not found');

    const imageBlock = document.querySelector('.anime__details__pic');
    const viewBlock = imageBlock.querySelector('.view');
    const titleBlock = document.querySelector('.anime__details__title h3');
    const subtitleBlock = document.querySelector('.anime__details__title span');
    const detailsBlock = document.querySelector('.anime__details__text p');
    const widgetListBlock = document.querySelectorAll('.anime__details__widget ul li');
    const breadcrumbBlock = document.querySelectorAll('.breadcrumb__links a');
    const breadcrumbBlock2 = document.querySelector('.breadcrumb__links span');

    imageBlock.dataset.setbg = anime.image;
    viewBlock.innerHTML = `<i class="fa fa-eye"></i> ${anime.views}`;
    titleBlock.textContent = anime.title;
    subtitleBlock.textContent = anime['original-title'];
    detailsBlock.textContent = anime.description;

    widgetListBlock[0].innerHTML = `<span>Date aired:</span> ${anime['date']}`;
    widgetListBlock[1].innerHTML = `<span>Rating:</span> ${anime.rating}`;
    widgetListBlock[2].innerHTML = `<span>Genre:</span> ${anime.tags.join(', ')}`;

    breadcrumbBlock[1].outerHTML = `<a href="./categories.html?ganre=${anime.ganre}">Categories</a>`;
    breadcrumbBlock2.textContent = anime.ganre;

    document.querySelectorAll('.set-bg').forEach((element) => element.style.backgroundImage = `url(${element.dataset.setbg})`);
  }
};

detailData();
