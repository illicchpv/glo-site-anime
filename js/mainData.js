const mainData = () => {
  console.log('mainData');

  fetch('https://myproject-4cdbd-default-rtdb.firebaseio.com/db-anime.json') // fetch('db-anime.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('data.anime[0]: ', JSON.stringify(data.anime[0], null, 2));
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

mainData();
