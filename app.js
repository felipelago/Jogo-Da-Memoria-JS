document.addEventListener('DOMContentLoaded', () => {

    //Card Options
    const cardArray = [
        {
            name: 'RF1',
            img: 'Images/RF1.jpg'
        },
        {
            name: 'RF1',
            img: 'Images/RF1.jpg'
        },
        {
            name: 'RF2',
            img: 'Images/RF2.jpg'
        },
        {
            name: 'RF2',
            img: 'Images/RF2.jpg'
        },
        {
            name: 'RF3',
            img: 'Images/RF3.jpg'
        },
        {
            name: 'RF3',
            img: 'Images/RF3.jpg'
        },
        {
            name: 'RF4',
            img: 'Images/RF4.jpg'
        },
        {
            name: 'RF4',
            img: 'Images/RF4.jpg'
        },
        {
            name: 'RF5',
            img: 'Images/RF5.jpg'
        },
        {
            name: 'RF5',
            img: 'Images/RF5.jpg'
        },
        {
            name: 'RF6',
            img: 'Images/RF6.jpg'
        },
        {
            name: 'RF6',
            img: 'Images/RF6.jpg'
        },
    ]

    cardArray.sort (()=> 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //Create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'Images/blank.jpg');
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] &&
            cardsChosenId[0] !== cardsChosenId[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'Images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'Images/white.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'Images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'Images/blank.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Parabéns você encontrou todos eles'
        }

    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()


})