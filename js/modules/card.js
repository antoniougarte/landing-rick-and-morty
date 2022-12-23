
const generateCards = () => {

  const cards = document.getElementById('cards');

  const fetchApi = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/1,2,760,4,5,6,744,8,9,23,47,65');
      const data = await response.json();
    
  console.log(data);

  data.forEach(element => {

    const {id, name, status, species, type, gender, origin, location, image, episode, url, created} = element;

    cards.innerHTML += `
    
          <div class="card">
            <div class="card__img">
              <img src="${image}" width="250px" alt="Imagen de ${name}">
            </div>
            <div class="card__text">
              <h3>${name}</h3>
              <p><span>Especie: </span>${species}</p>
              <p><span>Origen: </span>${origin.name}</p>
              <p><span>Ubicación: </span>${location.name}</p>
            </div>
          </div>
    
    
    
    
    `;

  });


  };

  fetchApi();


};

export default generateCards();