import { search } from "./search.js";
import { dataProcessing } from "./dataProcessing.js";

const UI = (function() {
    const searchForm = document.querySelector("#searchForm");
    let currentCity;

    const setInitialCity = async function() {
        currentCity = await dataProcessing.initialSearchProcessing();
        updateDom();
    }

    const setCurrentCity = async function(searchTerm) {
        currentCity = await dataProcessing.searchProcessing(searchTerm);
        updateDom();
    }

    const updateDom = function() {
        const cityName = document.querySelector(".cityName");
        const cityConditions = document.querySelector(".cityConditions");
        const cityDesc = document.querySelector(".cityDescription");
        const cityTemp = document.querySelector(".cityTemp");

        cityName.textContent = currentCity.location;
        cityConditions.textContent = currentCity.conditions;
        cityDesc.textContent = currentCity.description;
        cityTemp.textContent = currentCity.temp;
    }

    // Event Listeners
    searchForm.addEventListener("submit", async e => {
        e.preventDefault();
        const searchTerm = searchForm.search.value;
        await setCurrentCity(searchTerm);
        console.log(currentCity);
    })

    setInitialCity();
}());

export {UI};