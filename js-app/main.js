const beanVarietyUrl = "https://localhost:44359/api/beanvariety/";
const coffeeUrl = "https://localhost:44359/api/coffee/";


const button = document.querySelector("#varieties-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            const beanHtml = displayList(beanVarieties, "name");
            document.querySelector("#display-list").innerHTML = beanHtml;
        })
});

const button2 = document.querySelector("#coffees-button");
button2.addEventListener("click", () => {
    getAllCoffees()
        .then(coffees => {
            const coffeeHtml = displayList(coffees, "title");
            document.querySelector("#display-list").innerHTML = coffeeHtml;
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

function displayList(arr, property) {
    let html = "<ul>";
    arr.forEach(obj => {
        html += `<li>${obj[property]}</li>`;
    });
    html += "</ul>"
    return html;
}