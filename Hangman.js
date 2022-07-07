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
    let findLetter, livesNumber = 5;
    let hidden = false;
    document.getElementById("startAgain").style.visibility = "hidden";
    let word = wordsList[Math.floor(Math.random() * wordsList.length)];
	for (let i = 0; i < word.length; ++i) {
		result[i] = "_ ";
	}
	document.getElementById("mesageElement2").innerHTML = result.join('');
	document.getElementById("mesageElement3").innerHTML = "</br></br>Remaining lives: " + livesNumber;

    for (let i = 65; i <= 90; ++i) {
    	let c = String.fromCharCode(i);
	    let button = document.createElement("button");
	    button.setAttribute("letter", c);
	    button.innerHTML = c;
	    document.getElementById("myButtons").appendChild(button);

      	button.addEventListener("click", function(changeColor) {
      		button.style.backgroundColor = 'grey';
      	});

	    button.addEventListener("click", function(findLetter) {
	    	findLetter = 0;
    		for (let i = 0; i < word.length; ++i) {
				if (word[i] == c) {
					result[i] = c;
					findLetter = 1;
					letterToWin();
				}
			}
			if (findLetter == 0) {
				decreaseLives();
			}
			document.getElementById("mesageElement2").innerHTML = result.join('');
		}, {once : true});
    }

	function print(str) {
      return document.getElementById("mesageElement1").innerHTML = str;
    }

    function decreaseLives() {
    	--livesNumber;
    	document.getElementById("mesageElement3").innerHTML = "</br></br>Remaining lives: " + livesNumber;
    	if (livesNumber == 0) {
    		print("I'm sorry!</br>You lost!</br>The searched word was:    " + word);
    		document.getElementById("startAgain").style.visibility = 'visible';
    	}
    }
    
    function reStart() {
    	window.location.reload();
    }

    let remainingLetter = word.length;

    function letterToWin() {
    	--remainingLetter;
    	if (remainingLetter == 0) {
    		print("Congratulations, you found the search word!");
    		document.getElementById("startAgain").style.visibility = 'visible';
    	}
    }