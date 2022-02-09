const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/characters');

window.addEventListener('load', () => {
  console.log(charactersAPI.getFullList())
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI


  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
