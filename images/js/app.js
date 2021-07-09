// Select all elements of interest

let txtMessage = document.getElementById("txtMessage");
let txtTrack = document.getElementById("txtTrack");

// Bind txtMessage to an Event Listener
txtMessage.addEventListener("keypress", countWords);

//Define event handler function
function countWords(){
// Get user input
  let message = txtMessage.value;

  // Sanitize user input by replacing multiple blank spaces with a single blank space

  message = message.replace(/\s+/g, " ");

// split user input into word pieces

  let messagePieces = message.split(" ");

  // count number of words in message pieces

  let numWords = messagePieces.length;

  let wordsRemaining = 250 - numWords

  if(wordsRemaining < 0){
    alert("Sorry, you have exceeded the limit of 250 words");
  }else{
   txtTrack.value = `${wordsRemaining} word(s) remaining `;
  }
}