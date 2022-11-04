const beanVarietyUrl = "https://localhost:44359/api/beanvariety/";
const coffeeUrl = "https://localhost:44359/api/coffee/";


const button = document.querySelector("#varieties-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

const button2 = document.querySelector("#coffees-button");
button2.addEventListener("click", () => {
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

/**
 * 
 * @returns An object array of all coffee varieties
 */
function getAllBeanVarieties() {
    return fetch(beanVarietyUrl)
        .then(res => res.json());
}

/**
 * 
 * @returns An object array of all coffees
 */
function getAllCoffees() {
    return fetch(coffeeUrl)
        .then(res => res.json());
}
