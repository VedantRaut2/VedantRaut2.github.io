const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

quoteInputElement.addEventListener('input', ()=>{
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
    let correct = true; 
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if(character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false;
        }else if(character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false;
        }
    })
    if(correct) {
        if(randomWordNumber===finalIndex){
            randomWordNumber=Math.floor((Math.random() * finalIndex));
        }
        randomWordNumber++;
        renderNewQuote();
    }
})


var wordsList = [
    "The mailbox was bent and broken and looked like someone had knocked it over on purpose.",
    "I was so thirsty I couldn't wait to get a drink of water.",
    "I found a gold coin on the playground after school today.",
    "The chocolate chip cookies smelled so good that I ate one without asking.",
    "My bandaid wasn't sticky any more so it fell off on the way to school.",
    "He had a sore throat so I gave him my bottle of water and told him to keep it.",
    "The church was white and brown and looked very old.",
    "I was so scared to go to a monster movie but my dad said he would sit with me so we went last night.",
    "Your mom is so nice she gave me a ride home today.",
    "I fell in the mud when I was walking home from school today.",
    "This dinner is so delicious I can't stop eating.",
    "Start each day with a positive thought and a grateful heart.",
    "The school principal was so mean that all the children were scared of him.",
    "I went to the dentist the other day and he let me pick a prize out of the prize box.",
    "The box was small and wrapped in paper with tiny silver and red glitter dots.",
    "My dad is so funny that he told us jokes all night long and we never fell asleep.",
    "How did you know that I was going to have a peanut butter sandwich for lunch?",
    "That boy is so mean that he doesn't care if a door slams in your face or if he cuts in line."
];
let finalIndex = 17;
var randomWordNumber = Math.floor((Math.random() * finalIndex));

function renderNewQuote() {
    let quote = wordsList[randomWordNumber];
    quoteDisplayElement.innerHTML = ''; 
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null;
    startTimer()
}

let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote();