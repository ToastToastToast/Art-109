/*
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

//define the filtercards function
const filterCards = (e) => {
    document.querySelector(".filter-buttons.active").classList.remove("active"); //removing active filter selection
    e.target.classList.add("active"); //adding active class to active filter
    console.log(e.target);

    //iterate over each filterable card
    filterableCards.forEach(card => {
        card.classList.add("hide");
        //check if cards matches the selected filter
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove('hide');
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click", filterCards)); //applying function filters to the button element
*/


const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

const filterCards = e => {
    console.log(e.target);
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));
