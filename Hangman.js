let wordsList = [
  "CAMEL",
  "CAT",
  "DOG",
  "CROCODILE",
  "DOLPHIN",
  "ELEPHANT",
  "HIPPOPOTAMUS",
  "JELLYFISH",
  "KANGAROO",
  "LION"	
];

print("The word you have to guess is a wild animal.</br>Please choose a letter and press it!");
let result = [];
let hidden = false;
let word = wordsList[Math.floor(Math.random() * wordsList.length)];
let remainingLetter = word.length, findLetters, livesNumber = 5, button;
document.getElementById("startAgain").style.visibility = "hidden";
for (let i = 0; i < word.length; ++i) {
  result[i] = "_ ";
}
document.getElementById("mesageElement2").innerHTML = result.join('');
document.getElementById("mesageElement3").innerHTML = "</br></br>Remaining lives: " + livesNumber;
	
for (var i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); ++i) {
  let c = String.fromCharCode(i);
  button = document.createElement("button");
  button.setAttribute("letter", c);
  button.innerHTML = c;
  document.getElementById("myButtons").appendChild(button);

  onClick(button);
}

function onClick(button) {
  button.addEventListener("click", function() {
  findLetters = 0;
  for (let j = 0; j < word.length; ++j) {
    if (word[j] == button.textContent) {
	  result[j] = button.textContent;
      findLetters = 1;
      letterToWin();
    }
  }
  if (findLetters == 0) {
    decreaseLives();
  }
  document.getElementById("mesageElement2").innerHTML = result.join('');
  button.style.backgroundColor = 'grey';
  }, {once : true});	
}

function decreaseLives(button) {
  --livesNumber;
  document.getElementById("mesageElement3").innerHTML = "</br></br>Remaining lives: " + livesNumber;
  if (livesNumber == 0) {
  print("I'm sorry!</br>You lost!</br>The searched word was:    " + word);
  document.getElementById("startAgain").style.visibility = 'visible';
  }
}

function letterToWin() {
  --remainingLetter;
  if (remainingLetter == 0) {
    print("Congratulations, you found the search word!");
    document.getElementById("startAgain").style.visibility = 'visible';
  }
}

function print(str) {
  return document.getElementById("mesageElement1").innerHTML = str;
}

function reStart() {
  window.location.reload();
}
