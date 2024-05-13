const gameList = document.querySelector(".gameList");
const loaderEl = document.getElementById("js-preloader");
const loadMoreGamesBtn = document.querySelector(".main-button")
const nextGameListUrl = null;

// Code to test the API
  const APIKEY = '1f68bf60f0d04c97b940021024ab49b7';
  const url = `https://api.rawg.io/api/games?key=${APIKEY}`;
  const getPlatformsStr = (platforms) => "";



  function loadGames(url){
    loaderEl.classList.add("loaded");
    
    // Fetch recently released games from RAWG API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            nextGameListUrl = data.next ? data.next : null;
            const games = data.results;
    
            games.forEach(game => {
                const gameItemEl = `
                <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="item">
                        <img src="${game.background_image}" alt="${game.name} image">
                            <h4 class="game-name">${game.name}<br><span class="platforms">${getPlatformStr(game.parent_platforms)}</span></h4>
                            <ul>
                            <li><span class="rating">${game.rating}</span></li>
                                <li><span class="date">${game.released}</span></li>
                                </ul>
                        </div>
                        </div>
                `
                gameList.insertAdjacentHTML("beforeend", gameItemEl)
            });
            loaderEl.classList.add("loaded");
            if (nextGameListUrl) {
                loadMoreGamesBtn.classList.remove("hidden");
            } else {
                loadMoreGamesBtn.classList.add("hidden");
            }
        })
        .catch(error => {
            console.log("An error occurred:", error);
        });
}


// load games
loadGames(url);

loadMoreGamesBtn.addEventListener("click", ()=>{
    if(nextGameListUrl){
        loadGames(nextGameListUrl);
    }
})