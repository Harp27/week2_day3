
    const words = {
      number: "",
      adjective: "",
      pluralNoun: "",
      adverb: "",
      anotherAdjective: ""
    }
  
  function startMadLib() {
      words.number = prompt("Enter a number");
      words.adjective = prompt("Enter an adjecive");
      words.pluralNoun = prompt("Enter a plural noun");
      words.adverb = prompt("Enter an adverb");
      words.anotherAdjective = prompt("Enter an adjective");
  
  
  
  let stringInterpolation = `Once upon a time a group of${words.number}General Assembly graduates
  got together and made a startup called ${words.adjective}Technologies.
  Their goal was to create smart ${words.pluralNoun}.
  They approached the challenge ${words.adverb}
  which ultimately lead them to ${words.anotherAdjective} fame.`;
  alert(stringInterpolation);

  }
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", function(event) {
  startMadLib();
});



  