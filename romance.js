var text = "Ok, this car is an absolute piece of sh*t. " +
"Seriously if you are a single guy and you were hoping to get laid this summer, don’t even bother reading this ad. Driving this  " +
"car will assure you of a hot season of involuntary abstinence better than inviting girls to your weekly Dungeons and Dragons game in your mom’s basement. " +
"This thing runs fine and may give you two good years before exploding into a fiery box of death. Or.. It could wait until you’re asleep the first night you take it home and just  " +
"decide to end it’s own miserable existence by driving off the pier thelma and louise style. I just cant tell you. " +
"The Bad: This car has a bunch of dents and cosmetic stuff going on. Someone side swiped me in a parking lot and just drove off without leaving a note. " +
"(btw if that was you and youre reading this you are a complete d bag. I wouldn’t have even called the cops dude but you could have bought me a case a beer to  " +
"drown out the soul crushing pain of having to drive this POS car to my awful job every day). I hit a deer last year and had to replace a headlight. Hitting a deer is terrifying,  " +
"seriously…I don’t think the deer liked it either.  Almost rust free but I noticed a small spot starting on the bottom of the drivers door about mid winter. I thought to myself I should do  " +
"something about that rust spot, then i didn’t do anything about the rust spot. That is pretty much how i tend to deal with adversity in my life. " +
"ABS wasnt working right so i had to disable it. Front end has a little noise to it when turning wheel all the way. Garage told me it was a bushing thing. I asked if  " +
"it was dangerous to drive for the next six months and they said it shouldn’t be a big deal. The gas gauge is like a drunk girl on her period, confusing, and mostly useless. " +
"You never really know how much gas you have in this thing so you just have to keep track yourself. I’ve had it stay on full for two weeks then I get a block away from my house and it goes to  " +
"and the light comes on. I’ve come to a traffic light with it reading a quarter tank and watched it go up to full, then down to a half before the light turned green. " +
"The Good: As far as I’m aware this car has not had any type of malicious voodoo, or ancient Chinese curse placed upon it.  " +
"(that is not an implied guarantee this automobile is not cursed, just that if such as curse exists I am unaware of it) Sounds like it wouldn’t be a " +
"positive but this car is a base model with no power options. That is a benefit if you’re getting a old POS car. No power windows or locks to break on you and then you  " +
"have to go to the junk yard for parts. Pain in the ass.  It does get good gas mileage with the little 2.2l four banger. Lots of parts have been replaced on this car. " +
"Just before winter it got new plugs, wires, pcv, fuel filter, air filter, battery, and muffler. Computer was replaced last year, as was a tie rod and brakes. " +
"Water pump two yrs ago. All these should outlast the car " +
"The Good and Bad: This car has no stereo. Now wait, before you go on amazon and buy a cheap 20$ unit so you can listen to Pandora think of this as an opportunity. Can you play the harmonica? " +
"I BET YOU CAN”T. But this is your big chance to become a pro at the mouth organ. What is the biggest obstacle to getting all bodacious like Mr. John Popper? Until you can learn to play correctly  " +
"listening to someone practice harmonica is the most painful thing one human can inflict on another. Now you can use your time in transit to learn and no one has to hear you and want to kill themselves  " +
"as a result. Before you know it you’ll be blasting out crispy riffs, and people will want you to come jam with their buddy’s band. So look, No stereo seems bad, but it’s really not.  " +
"The cup is half full dude. Please come take this car out of my life. I want to start dating women again. "

function generatePoem() {

  var numLines = document.getElementsByName("first_box")[0].value;
  var numWords = document.getElementsByName("second_box")[0].value;


  numLines = parseInt(numLines)
  numWords = parseInt(numWords)

  if (numLines > numWords) {
    alert("Total number of lines is greater than total number of words.\n\nPlease enter new values!")
    return;
  }

  if (isNaN(numLines)) {
    alert("You enterd a number in Total number of Lines when you were supposed to enter an integer(" + numLines + ')\n\nPlease enter new values!')
    return;
  }

  if (isNaN(numWords)) {
    alert("You enterd a number in Total Number of Words when you were supposed to enter an integer(" + numWords + ')\n\nPlease enter new values!')
    return;
  }


  var arr = parseText(text)
  var obj = generateWordPairs(arr)
  var randomValueFromObj  = chooseRandom(obj);
  var markov = writeLine(obj, numWords, numLines);

  var myTextArea = document.getElementById('title')
  myTextArea.innerHTML = markov

}

function isLetter(str) {
  return str.length >= 1 && str.match(/[a-z]/i);
}

function parseText (corpus) {

  var alpha = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
                't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

  var cleanStr = "";

  for (var i=0; i < corpus.length; i++) {
    var lowerCase = corpus[i].toLowerCase();
    if (alpha.includes(lowerCase) === true) {
      cleanStr+=lowerCase
    }
  }
  
  var sentenceArr = cleanStr.split(' ');
  // remove spaces
  var noSpacesArr = [];
  for (var j=0; j < sentenceArr.length; j++) {
    if (sentenceArr[j] !== '') {
      noSpacesArr.push(sentenceArr[j]);
    }
  }
  return noSpacesArr
  
}

//var arr = parseText(text)
//console.log(arr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateWordPairs(arr) {
  
  
  var obj = {};
  
  var dupesArr = [];
  for (var i=0; i < arr.length; i++) {
    var nextWord = arr[i+1];
    var key = arr[i];
    
    // create normal array for non-duplicated words
    if (i < arr.length-1){
      obj[key] = [nextWord];
    }
    
    // find duplicate words & push value to array...
    if(arr[i] === arr[i+1]) {
      dupesArr.push(arr[i+1]);
      //console.log('in if', arr[i])
      //console.log(obj[key])
    }
  }
    // .. to eventually add to that key.  
  for (var key in obj) {
    if (key === dupesArr[0]) {
      obj[key] = obj[key].concat(dupesArr)
    }
  }
  
  return obj;
}

//var obj = generateWordPairs(arr)
//console.log(obj)
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
function chooseRandom(obj) {
  
  var keys= Object.keys(obj);
  var randomAnswer = keys[Math.floor(Math.random() * keys.length)];
  //console.log(randomAnswer)
  
  // this is the value array
  var randWordArr = obj[randomAnswer]
  
  // if value array is > 1, do another random choice
  if (randWordArr.length > 1) {
    var randOfArr = randWordArr[Math.floor(Math.random() * randWordArr.length)];
    //console.log('balls', randOfArr, randWordArr)
    return [randomAnswer, randOfArr]
  } else {
    return [randomAnswer, randWordArr]
  }
}

//var randomValueFromObj  = chooseRandom(obj);
//console.log(randomValueFromObj)
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
function writeLine(obj, numWords, numLines) {
  
  var finalStr = ""
  
  var wordsPerLine = Math.floor(numWords / numLines);
  //console.log(wordsPerLine)
  
  var count=0;
  for(var i=0; i < numWords; i++) {
    var word = chooseRandom(obj);
    var wordAppend =  word[0] + ' ';
    finalStr+=wordAppend;
    count+=1
    if (count % wordsPerLine === 0) {
      finalStr+="\n"
    }
    if (count == numWords) {
      //finalStr+= "..."
    }
    
  }
  return finalStr;
} 