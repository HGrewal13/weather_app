const search = (function() {
    let initialSearch = "Windsor";
    // let searchLocation = "";

    const k = "EKR2Q55S2NQ28E8FCCG6B7WJP";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

    const handleSearch = async function(searchLocation) {
        console.log(searchLocation);
        const response = await fetch(url + searchLocation + "?key=" + k);
        const data = await response.json();
        console.log(data);
        return data;
    }


    return {handleSearch}
}())



export {search};