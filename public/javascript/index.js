const charactersAPI = new APIHandler();

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(response => {
        console.log(response.data)

      })

      .catch((err) => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();

    let id = document.querySelector(".operation input").value

    charactersAPI
      .getOneRegister(id)
      .then(response => {
        const charactersText = document.querySelector(".characters-container")

        let characters = ""

        characters =
          `<div class="character-info"> 
            <div class="name">Character Name: ${response.data.name}</div>
            <div class="occupation">Character Occupation: ${response.data.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${response.data.cartoon}</div>
            <div class="weapon">Character Weapon: ${response.data.weapon}</div>
           </div> `

        charactersText.innerHTML = characters
      })
      .catch(err => console.log(err))


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let id = document.querySelector(".delete input").value
    charactersAPI
      .deleteOneRegister(id)
      .then(response => {
        const charactersText = document.querySelector(".characters-container")
        let charactersDelete = ''

        charactersDelete = `<div class="character-info"> 
            <div class="name">Character Name: ${response.data.name}</div>
            <div class="occupation">Character Occupation: ${response.data.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${response.data.cartoon}</div>
            <div class="weapon">Character Weapon: ${response.data.weapon}</div>
           </div> `

        charactersDelete.innerHTML = charactersDelete


      })
      .catch(err => console.log(err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
