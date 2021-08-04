// eerst buttuns selecturen uit de dom
const buttunsBigFive = document.querySelectorAll(".big-five-button")
console.log(buttunsBigFive)

// functie die gecalled word wanneer clicked on
const animalsSpotted = () => console.log("clicked on")


buttunsBigFive.forEach(function addClickEvent(btn) {
    btn.addEventListener("click", animalsSpotted);
    // return animal/value from button
    btn.addEventListener("click", function () {
        console.log(btn.innerHTML)
        return btn.innerHTML
    })
})
// create list element
const listElement = document.createElement("li")
console.log(listElement)

// selecteer het parent element waaraan de list vast te maken de ul spotted animals
const ulSpottedAnimals = document.querySelectorAll(".spotted-animals-list")
console.log(ulSpottedAnimals)
