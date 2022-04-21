const cartArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
]

const result = document.querySelector("#result")
const gridDisplay = document.querySelector("#grid")

let cartNames = []
let cartIDs = []
let cardChosen = []


cartArray.sort(() => 0.5 -  Math.random())

function createBorder() {
    for (let i = 0; i < cartArray.length; i++) {
        const cart = document.createElement("img")
        cart.setAttribute("src", "images/blank.png")
        cart.setAttribute("data-id", i)
        cart.addEventListener("click", handleCartClick)
        gridDisplay.appendChild(cart)
    }
}


function handleCartClick(e) {
    const cartId = this.getAttribute("data-id")
    const cartChoiceName = cartArray[cartId].name
    cartNames.push(cartChoiceName)
    cartIDs.push(cartId)
    this.setAttribute("src", cartArray[cartId].img)
    if (cartNames.length === 2) {
        setTimeout(checkMatch, 400)
    }

}
createBorder()

function checkMatch() {
    const cards = document.querySelectorAll("#grid img")
    const optionOne = cartIDs[0]
    const optionSecond = cartIDs[1]



    if (cartArray[optionOne].name === cartArray[optionSecond].name) {
        cards[optionOne].setAttribute("src", "images/white.png" )
        cards[optionSecond].setAttribute("src", "images/white.png" )
        cards[optionOne].removeEventListener("click",  handleCartClick)
        cards[optionSecond].removeEventListener("click",  handleCartClick)
        cardChosen.push(cartNames)
    } else {
        cards[optionOne].setAttribute("src", "images/blank.png")
        cards[optionSecond].setAttribute("src", "images/blank.png")
    }

    if ( cardChosen.length === cartArray.length / 2) {
        result.innerHTML = "Congratulate ! :)"
    }

    cartNames = []
    cartIDs = []
}



















//
// cartArray.sort(() => 0.5 -  Math.random())
//
// const gridDisplay =  document.querySelector("#grid")
// const result = document.querySelector("#result")
// let cardChosen = []
// let cartsChoseIds = []
// const cartsWon = []
//
//
// function createBorder ()  {
//     for (let i  = 0; i < cartArray.length; i++) {
//        const card = document.createElement("img")
//         card.setAttribute("src", "images/blank.png" )
//         card.setAttribute("data-id", i)
//         card.addEventListener("click", flipCart)
//         gridDisplay.appendChild(card)
//     }
//
// }
//
// createBorder()
// function checkMatch() {
//     const cards = document.querySelectorAll("#grid img")
//     const firstOptionId = cartsChoseIds[0]
//     const secondOptionId = cartsChoseIds[1]
//
//
//
//     if (cardChosen[0] == cardChosen[1]) {
//         alert("matched")
//         cards[firstOptionId].setAttribute("src", "images/white.png")
//         cards[secondOptionId].setAttribute("src", "images/white.png")
//         cards[firstOptionId].removeEventListener("click", flipCart )
//         cards[secondOptionId].removeEventListener("click", flipCart )
//         cartsWon.push(cardChosen)
//     } else {
//         cards[firstOptionId].setAttribute("src", "images/blank.png")
//         cards[secondOptionId].setAttribute("src", "images/blank.png")
//     }
//
//     cardChosen = []
//     cartsChoseIds = []
//
//     if (cartsWon.length === (cartArray.length / 2)) {
//         result.innerHTML =  "congratulation"
//     }
//
// }
//
// function flipCart () {
//     let cardId = this.getAttribute("data-id")
//     cardChosen.push(cartArray[cardId].name)
//     cartsChoseIds.push(cardId)
//     this.setAttribute("src", cartArray[cardId].img)
//     if (cardChosen.length === 2  ) {
//         setTimeout(checkMatch, 300)
//     }
// }
