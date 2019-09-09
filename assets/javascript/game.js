const words =['parrot','cattle','kangaroo','rhinoceros','leopard','sheep','raccoon','shark','dolphin','gorilla','penguin','goose','hyena','porcupine','swans','tiger','lion','cow','bull','rabbit','tortoise','horse','elephant','horn','fish','dog','cat','rat','buffalo','goat','donkey','monkey','beer']

//get new random word

const getRandWord = function (){
    return words[Math.floor(Math.random()*words.length)]
    .toLowerCase()
    }

    //starting values
let wins = 0
let losses = 0
let guesses = 10
let lettersGuessed = []
let word = getRandWord()


//reset game to initial state
const reset = function (){
    word= getRandWord()
    lettersGuessed =[]
    guesses = 10
    displayWord()
    document.getElementById('guesses').textContent= guesses
    document.getElementById('wins').textContent = wins
    document.getElementById('losses').textContent = losses
    document.getElementById('letters').textContent = 
    lettersGuessed.join(', ')
   
}
// display word with blanks if applicable
    const displayWord = function (){

// build string of letter and blanks
    let wordStr = ''
 
// toggle tracks if user is won   
     let winStatus = true
     
// loop over word and build string
    word.split('').forEach(function(letter) {
 
 // if latter is in word and user gussed letter       
        if(lettersGuessed.indexOf(letter)!=-1){
            wordStr += `${letter} `
        } else{

 // adds blank for letter not gussed           
            wordStr += '_ '

  // blank indicates game is not won          
            winStatus= false
        }
     })
   // display current state of word string  
     document.getElementById('word').textContent = wordStr
// if no blanks were added
        if (winStatus){
            alert (`You won! and the word was: ${word}`)
            wins++
  // reset game      
            reset()
            
         }
           
     }
//confirm letter is or is not in  word
    const checkLetter = letter =>{

 // update letters guasse       
    lettersGuessed.push(event.key)
    document.getElementById('letters').textContent = 
    lettersGuessed.join(', ')
 // if letter guess is in the word   
if (word.includes(event.key)){

  // update word display  
    displayWord()
}else{
 // decroment guesses   
    guesses--
    document.getElementById('guesses').textContent= guesses
    
    // if user is out of guesses
    if(guesses <= 0){
        alert(`You lost! and the word was: ${word}`)
        losses++
    //reset the game    
        reset()
        
     }

    }
     
 }
 // locked to only letters not already gussed
    document.onkeyup = event => event.keyCode >=65 &&
    event.keyCode <= 90 && lettersGuessed.indexOf(event.key)===
     -1 ? checkLetter (event.key): nul

     // start the game
    reset()
    