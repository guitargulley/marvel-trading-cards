function StarWarsService() {
  var baseUrl = 'https://swapi.co/api/people'

  var starWarsCharacters = [];
  var myCharacters = {};


  this.getStarWarsCharacters = function () {
    //what should this function return
    return JSON.parse(JSON.stringify(starWarsCharacters))
  }

  this.getMyCharacters = function () {
    //  
    //what should this function return
    return JSON.parse(JSON.stringify(myCharacters))
  }

  this.addToMyCharacters = function (name, cb) {
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array
    // debugger
    for (var i = 0;i < starWarsCharacters.length; i++) {
      var char = starWarsCharacters[i]
      if (char.name == name) {
        myCharacters[name] = starWarsCharacters[i]
        starWarsCharacters.splice(i, 1)
      }
      
    }console.log(myCharacters)
    console.log(starWarsCharacters)
    cb(starWarsCharacters)
  }


  this.removeMyCharacter = function (name, cb) {
    //you need to find the character that you want to remove by its id
    //and remove it.
    starWarsCharacters.push(myCharacters[name])
    delete myCharacters[name]
    cb(starWarsCharacters)
  }

  this.getCharacters = function (callWhenDone) {
    //Use &offset=Number to add pagination
    $.get(baseUrl, function (response) {
      starWarsCharacters = response.results;
      console.log(starWarsCharacters)
      callWhenDone(starWarsCharacters)
    })
  }

}

