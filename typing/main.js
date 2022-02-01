const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')




quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
    let correct = true;

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false;
        }
    })
    if (correct) {
        if (randomWordNumber === finalIndex) {
            randomWordNumber = Math.floor((Math.random() * finalIndex));
        }
        randomWordNumber++;
        renderNewQuote();
        setTimeout(function () {
            timerElement.classList.add("hidden")
        }, 375);
        $(document).ready(function () {
            $(window).on("resize", function (e) {
                checkScreenSize();
            });

            checkScreenSize();
        });
        function checkScreenSize() {
            var newWindowWidth = $(window).width();
            if (newWindowWidth < 481) {
                $('#quoteInput').one('keyup', function () {
                    startTimer();
                    timerElement.classList.remove("hidden")
                });
            }
            else {
                $('#quoteInput').one('keypress', function () {
                    startTimer();
                    timerElement.classList.remove("hidden")
                });

            }
        }
    }
})


var wordsList = [
    "The mailbox was bent and broken and looked like someone had knocked it over on purpose",
    "I was so thirsty I couldn't wait to get a drink of water",
    "I found a gold coin on the playground after school today",
    "The chocolate chip cookies smelled so good that I ate one without asking",
    "My bandaid wasn't sticky any more so it fell off on the way to school",
    "He had a sore throat so I gave him my bottle of water and told him to keep it",
    "The church was white and brown and looked very old",
    "I was so scared to go to a monster movie but my dad said he would sit with me so we went last night",
    "Your mom is so nice she gave me a ride home today",
    "I fell in the mud when I was walking home from school today",
    "This dinner is so delicious I can't stop eating",
    "Start each day with a positive thought and a grateful heart",
    "The school principal was so mean that all the children were scared of him",
    "I went to the dentist the other day and he let me pick a prize out of the prize box",
    "The box was small and wrapped in paper with tiny silver and red glitter dots",
    "My dad is so funny that he told us jokes all night long and we never fell asleep",
    "How did you know that I was going to have a peanut butter sandwich for lunch",
    "That boy is so mean that he doesn't care if a door slams in your face or if he cuts in line",
    "One of the most beautiful qualities of true friendship is to understand and to be understood",
    "Go for it now. The future is promised to no one",
    "If you do not express your own original ideas, if you do not listen to your own being, you will have betrayed yourself",
    "The final wisdom of life requires not the annulment of incongruity but the achievement of serenity within and above it",
    "However rare true love may be, it is less so than true friendship",
    "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path",
    "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world",
    "Happiness is the reward we get for living to the highest right we know",
    "It is impossible for a man to learn what he thinks he already knows",
    "Watch the little things; a small leak will sink a great ship",
    "Flow with whatever is happening and let your mind be free. Stay centered by accepting whatever you are doing. This is the ultimate",
    "Knowledge is knowing that a tomato is a fruit. Wisdom is knowing not to put it in a fruit salad",
    "Life is a progress, and not a station",
    "It is not in the stars to hold our destiny but in ourselves",
    "Study the past, if you would divine the future",
    "Love is the only force capable of transforming an enemy into a friend"

];
let finalIndex = wordsList.length;
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
    $(document).ready(function () {
        $(window).on("resize", function (e) {
            checkScreenSize();
        });

        checkScreenSize();

        function checkScreenSize() {
            var newWindowWidth = $(window).width();
            if (newWindowWidth < 481) {
                $('#quoteInput').one('keyup', function () {
                    startTimer();
                });
            }
            else {
                $('#quoteInput').one('keypress', function () {
                    startTimer();
                });
            }
        }
    });

}

let startTime
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime();
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote();
console.log(wordsList.length)
