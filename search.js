const search = (function() {
    let initialSearch = "Windsor";
    // let searchLocation = "";

    const apiKey = "EKR2Q55S2NQ28E8FCCG6B7WJP";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
    // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}?key=${apiKey}`;

    const handleInitialSearch = async function() {
        const response = await fetch(url + initialSearch + "?key=" + apiKey);
        const data = await response.json();
        return data;
    }

    const handleSearch = async function(searchLocation) {
        console.log(searchLocation);
        const response = await fetch(url + searchLocation + "?key=" + apiKey);
        const data = await response.json();
        console.log(data);
        return data;
    }


    return {handleInitialSearch, handleSearch}
}())



export {search};