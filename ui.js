import { search } from "./search.js";
import { dataProcessing } from "./dataProcessing.js";

const UI = (function() {
    const testButton = document.querySelector(".testingButton");
    const searchForm = document.querySelector("#searchForm");
    let currentCity;

    // this could be an anonymous function?
    const renderDays = async function(searchTerm) {
        currentCity = await dataProcessing.multipleDays(searchTerm);

        const main = document.querySelector("main");
        main.textContent = "";

        const location = currentCity[0];
        currentCity = currentCity.slice(1);

        currentCity.forEach(city => {
            const cityData = document.createElement("div");
            const cityName = document.createElement("h2");
            const cityConditions = document.createElement("p");
            const cityDesc = document.createElement("p");
            const cityTemp = document.createElement("h3");

            cityData.classList.add("cityData");
            cityName.classList.add("cityName");
            cityConditions.classList.add("cityConditions");
            cityDesc.classList.add("cityDescription");
            cityTemp.classList.add("cityTemp");

            cityName.textContent = location;
            cityConditions.textContent = city.conditions;
            cityDesc.textContent = city.description;
            cityTemp.textContent = city.temp;

            cityData.appendChild(cityName);
            cityData.appendChild(cityConditions);
            cityData.appendChild(cityDesc);
            cityData.appendChild(cityTemp);
            main.appendChild(cityData);
        });
    }

    // Event Listeners
    searchForm.addEventListener("submit", async e => {
        e.preventDefault();
        const searchTerm = searchForm.search.value;
        await renderDays(searchTerm);
    })

    renderDays("Windsor");
}());

export {UI};