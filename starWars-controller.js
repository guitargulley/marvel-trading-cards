function StarWarsController() {
  var starWarsService = new StarWarsService()

  this.add = function add(name) {
    console.log('characterId', name)
    starWarsService.addToMyCharacters(name, ready)
    updateMine()
  }
  this.remove = function remove(name){
    starWarsService.removeMyCharacter(name, ready)
    updateMine()
  }
  starWarsService.getCharacters(ready)
  
  function ready(data) {
    updateStarWars(data) 
    updateMine()
  }

    
    

    function updateStarWars(list) {
      var elem = document.getElementById('starWars-characters')
      starWarsService.getStarWarsCharacters()
      elem.innerHTML = ''
      var starWarsTemplate = ''
      for (var i in list) {
        var character = list[i];
        // console.log(character)
        starWarsTemplate += `
        
          <div class="card col-xs-2 text-center">
            <img src="https://robohash.org/${character.name}" width="140">
            <h3>${character.name}</h3>
              <div>
                <button class="btn-success" id="${character.name}" onclick="app.controllers.starWarsController.add('${character.name}')">Add to Team</button>
              </div>
          </div>
        
      `

        elem.innerHTML = starWarsTemplate

      }

    }



  function updateMine(){

    var elem = document.getElementById('my-characters')
    var list = starWarsService.getMyCharacters()
    elem.innerHTML = ''
    var myTemplate = ''
    for (var i in list){
      var character =list[i];
      myTemplate += `
      
        <div class="card col-xs-2 text-center">
          <img src="https://robohash.org/${character.name}" width="140">
          <h3>${character.name}</h3>
          <div>
            <button class="btn-danger" id="${character.name}" onclick="app.controllers.starWarsController.remove('${character.name}')">Remove from team</button>
          </div>
        </div>
      
    `

  }
  elem.innerHTML = myTemplate
  }
}
