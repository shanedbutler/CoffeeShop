const beanVarietyUrl = "https://localhost:44359/api/beanvariety/";
const coffeeUrl = "https://localhost:44359/api/coffee/";


const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(beanVarietyUrl)
        .then(res => res.json());
}

function getAllCoffees() {
    return fetch(coffeeUrl)
        .then(res => res.json());
}
