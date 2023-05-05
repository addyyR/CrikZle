async function getMatchData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=ed8f7533-af0c-46e4-b751-f71d15b5d9ad&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success") return;

            const matchesList = data.data;

            if(!matchesList) return [];

            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);     // for all matches
            
            //const relevantData = matchesList.filter(match => match.series_id == "{your_api_key}").map(match => `${match.name}{match.status}`);        // for specific series add the corresponding series id

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li><hr>`).join('');

            return relevantData;
        })
        .catch(e => console.log(e));
}

getMatchData();