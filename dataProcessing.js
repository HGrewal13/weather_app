import { search } from "./search.js";

const dataProcessing = (function() {
    const initialSearchProcessing = async function() {
        const initialData = await search.handleInitialSearch();
        // console.log(initialData);
        
        const dataObj = {
            location: initialData.address,
            conditions: initialData.currentConditions.conditions,
            description: initialData.description,
            temp: initialData.currentConditions.temp
        }
        
        
        // console.log(dataObj);
        return dataObj;
    }

    const searchProcessing = async function(searchTerm) {
        const searchData = await search.handleSearch(searchTerm);
        
        const dataObj = {
            location: searchData.address,
            conditions: searchData.currentConditions.conditions,
            description: searchData.description,
            temp: searchData.currentConditions.temp
        }

        return dataObj;
    }

    return {initialSearchProcessing, searchProcessing};
}())

export {dataProcessing};