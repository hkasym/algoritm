function removeHover(){
    let nav = document.querySelector(".navLinks");

    if ( nav.classList.contains("nav-active")){
        squares.classList.remove("hoveredSquares")

    }
}

removeHover();

console.log(nav)

let squares = document.querySelectorAll(".squares");
squares.classList.remove("hoveredSquares")