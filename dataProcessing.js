import { search } from "./search.js";

const dataProcessing = (function() {
    const multipleDays = async function(searchTerm) {
        const searchData = await search.handleSearch(searchTerm);

        let dataObj = [];

        dataObj.push(searchData.address);

        for(let i = 0; i < 5; i++) {
            dataObj.push({
                day: i,
                conditions: searchData.days[i].conditions,
                description: searchData.days[i].description,
                temp: searchData.days[i].temp
            });
        }
        return dataObj;
    }

    return {multipleDays};
}())

export {dataProcessing};