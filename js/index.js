 
const requestURL = '../json/peliculas.json';
async function fetchMoviesJSON() { 
  const response = await fetch(requestURL);
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then(movies =>{

  for (let index = 0; index < movies.peliculas.length; index++) {
    const moviesSection = document.getElementById('moviesSection');
    let id = movies.peliculas[index].id;
    let title = movies.peliculas[index].nombre;
    let director = movies.peliculas[index].director;
    let gender = movies.peliculas[index].clasificacion;
    let img = movies.peliculas[index].imagen;
    let url_info = movies.peliculas[index].url_info;
    
   /* moviesSection.innerHTML += `
      
      <h5>${id}</h5>
      <h5>${title}</h5>
      <h5>${director}</h5>
      <h5>${gender}</h5>-->
      `*/
    moviesSection.innerHTML += `
    
    <div class="card" style="width: 18rem; ">
      <img class="card-img-top" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${id}. ${title}</h5>
        <p class="card-text">Director: ${director}</p>
        <p class="card-text">Género: ${gender}</p>
        <a href="${url_info}" class="btn btn-warning btn-lg active" role="button" aria-pressed="true" target="_blank">+ Info</a>
      </div>
    </div>


    `
  }
})

