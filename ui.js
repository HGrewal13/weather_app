import { search } from "./search.js";
import { dataProcessing } from "./dataProcessing.js";

const UI = (function() {
    const searchForm = document.querySelector("#searchForm");
    let currentCity;

    const setInitialCity = async function() {
        const cityName = document.querySelector(".cityName");
        const cityDesc = document.querySelector(".cityDescription");
        const cityTemp = document.querySelector(".cityTemp");

        currentCity = await dataProcessing.initialSearchProcessing();
        cityName.textContent = currentCity.location;
        cityDesc.textContent = currentCity.description;
        cityTemp.textContent = currentCity.temp;
    }

    const setCurrentCity = async function(searchTerm) {
        currentCity = await dataProcessing.searchProcessing(searchTerm);
    }

    const updateDom = function() {
        const cityName = document.querySelector(".cityName");
        const cityDesc = document.querySelector(".cityDescription");
        const cityTemp = document.querySelector(".cityTemp");

        cityName.textContent = currentCity.location;
        cityDesc.textContent = currentCity.description;
        cityTemp.textContent = currentCity.temp;
    }

    // Event Listeners
    searchForm.addEventListener("submit", async e => {
        e.preventDefault();
        const searchTerm = searchForm.search.value;
        await setCurrentCity(searchTerm);
        updateDom();
        console.log(currentCity);
    })

    setInitialCity();
}());

export {UI};