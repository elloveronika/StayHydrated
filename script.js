const smallCups = document.querySelectorAll('.cup-small') //this is call all the small cups by class
const liters = document.getElementById('liters') //this is calling the liter by ID
const percentage = document.getElementById('percentage')//this is calling the percentage element by ID
const remained = document.getElementById('remained')// calling the remained element by element ID

updateBigCup() // as soon as you enter the page the big cup will be updated by going to the function right away

smallCups.forEach((cup, idx) => { // this turns them into an array of indeces //this will create a loop that will loop thru all of the indeces
    cup.addEventListener('click', () => highlightCups(idx)) //setting an event listener of click that will then fire off the highlight cups function
})

function highlightCups(idx) { // this was triggered by the small cup click
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) { //this will remove last full cup by checking if the container is full and the next one isnt 
        idx-- // decrement by one, basically remove the last full cup
    }
    smallCups.forEach((cup, idx2) => { //otherwise keep adding full cups
        if(idx2 <= idx) { // if the index is less than the  index tbeing clicked on then grab the 'full' class from CSS , basically filling it with the color
            cup.classList.add('full')
        } else { // if the cup index being clicked on is greater than the index that is curently full then remove up until that index
            cup.classList.remove('full')
        }
    })

    updateBigCup() // with these cups being filled , we now call on the big cup to update
}

function updateBigCup() { //self explanatory 
    const fullCups = document.querySelectorAll('.cup-small.full').length // variable created to call on the length off all full small cups?
    const totalCups = smallCups.length// variable declared to call on the length of ALL small cups

    if(fullCups === 0) {//so if the small full cups equal to zero, basically if none are filled then hide the element
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else { // if there are 1 or more full cups, basically small full cups this proceed to show the full cup element
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px` // display the element but only the amount quotient of the full cups divided by the amount of full cups and multiplying it by the height of the big cup , this px height is grabbed from the CSS
        percentage.innerText = `${fullCups / totalCups * 100}%` //okay so here we wanna display the percentage and this is the math for it
    }
    if(fullCups === totalCups ) {// here we are gonna call om the remained element
        remained.style.visibility = "hidden" //if the amount of full cups equal to the amount of total cups the HIDE
        remained.style.height = 0

    } else {
        remained.style.visibility = 'visible' //BUT if its not full then display the remained elemnt
        liters.innerText = `${2- (250 * fullCups / 1000)}L` // also display the amount of liters remaining using the innerText methpd and this is the math for it
    }

}