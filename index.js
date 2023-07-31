var guessWord = " "
var blankWord = new Array()
var chance = 6

//evrytimes refresh page it will reset the page
function refresh(){
    var storeAllGuessWord = new Array("phone","bird", "dinosaur", "computer", "dollhouse")
//that formula for random number
var position = Math.floor(Math.random() * storeAllGuessWord.length);
 guessWord = storeAllGuessWord[position]//pick the wordfetch value at that position
 //then add to blank word--ex pick bird loop show 4 underscore
 
 for (i=0; i<guessWord.length; i++){
    blankWord.push("_")
 }

printWord()
printGuess()
// conitinue next week end here
}
function printWord(){
    // alert()
    var str = " "
   
    for(i=0; i<guessWord.length; i++){
        str = str + blankWord[i] + " "
    }
    document.getElementById("blankWord").innerText = str
}
function printGuess(){
    document.getElementById("guessRemaining").innerHTML="<p>You have "+ chance +" "+"guess remaining</p>"
document.getElementById("img1").src="Image/chance" + chance+".png"
}
//check if letter existing in the word.
function checkGuess(){
    var guess = document.getElementById('checkGuessID').value
    if (chance>0){


    if (guess.length>1){
        alert('Please enter only a single character')
    }
    else{

       var wrongGuess = false 
        for(i=0; i<guessWord.length; i++){
           if (guessWord.charAt(i)==guess)
           {
            blankWord[i]=guess
            wrongGuess = true
           }
        } 
        if (wrongGuess == false){
            chance--
          printGuess()
        }
        if (chance == 0)
        alert("You run out of chance")
        printWord()
        if (checkWinner()==true)
        alert("Your guess the right word")
    }
}
}
function checkWinner(){
    for(i=0; i<guessWord.length; i++){
        if (blankWord[i] == "_" )
        {
        return false
        }
        
     } 
     return true

}
function restart(){
   chance = 6
   guessWord = ""
   while(blankWord.length>0)
   blankWord.pop()
   refresh() 
}



