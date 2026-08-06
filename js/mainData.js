const mainData = () => {

  fetch('https://myproject-4cdbd-default-rtdb.firebaseio.com/db-anime.json') // fetch('db-anime.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const ganres = new Set();
      data.forEach(anime => {
        ganres.add(anime.ganre);
      });
      renderAnimeList(data, ganres);

      const sorted5 = data.sort((a, b) => b.views - a.views).slice(0, 5);
      renderTopAnime(sorted5);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  function renderAnimeList(animeList, ganres) {
    console.log('renderAnimeList animeList: ', animeList);
    console.log('renderAnimeList ganres: ', ganres);
  }

  function renderTopAnime(animeList) {
    const wrapper = document.querySelector('.filter__gallery');
    wrapper.innerHTML = '';

    animeList.forEach(anime => {
      wrapper.insertAdjacentHTML('beforeend', `
<div class="product__sidebar__view__item set-bg mix" 
  data-setbg="${anime.image}" 
>
  <div class="ep">${anime.rating} / 10</div>
  <div class="view"><i class="fa fa-eye"></i> ${anime.views}</div>
  <h5><a href="/anime-details.html">${anime.title}</a></h5>
</div>
`);
    });
    wrapper.querySelectorAll('.set-bg').forEach((element) => element.style.backgroundImage = `url(${element.dataset.setbg})`);
  };
};

mainData();
