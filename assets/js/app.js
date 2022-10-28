const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//Obtenemos los campos donde queeremos mostrar los datos
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

//Creamos una función para obtener los datos de la API
async function displayUser(username) {
  $name.textContent = 'cargando...';
  //Obtenemos los datos de la API
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();

  //Mostramos los datos en consola
  console.log(data);

  //Mostramos los datos en el HTML
  $name.textContent = `${data.name}`;
  $blog.textContent = `${data.blog}`;
  $location.textContent = `${data.location}`;
}

//Función para obtener mensajes de error
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
