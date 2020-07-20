
import { Coin } from "./coin.model.js";
import { gethomeContainer } from "./getoutlet.js"
import getAjax from "./Ajax.js"
import { ShowHideinfo } from "./showhidenavbar.js"

export function create100coins() {
    let coins: Coin[] = this.response.slice(0, 100);

    let cards = coins.map(
        (coin) => `<div class="card bg-light mb-3" style="max-width: 20rem; color:grey;">
                   <div class="card-header">${coin.name.toLocaleUpperCase()}</div>
                   <div class="card-body" style="display:flex;  justify-content:space-evenly ;">
                   <div>
                     <h4 class="card-title">${coin.symbol}</h4>
                     <p class="card-text">id: ${coin.id}.</p>
                   </div>
                 <div>
        <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1" checked="">
        <label class="custom-control-label" for="customSwitch1">LiveReport</label>
        </div>
        
        <button type="button" class="btn btn-info disabled" id=${coin.id}>Info</button>
        <div class="Moreinfo Moreinfo-fade-out"></div>
        
        </div>
        </div>
        </div>`
    );

    let homeContainer = gethomeContainer()

    if (homeContainer) {
        homeContainer.innerHTML = cards.join("");
    }

    homeContainer?.addEventListener("click", function () {
        let Coinid = event?.target?.id;
        let infoDiv = event.target.nextElementSibling;
        if (infoDiv.className === "Moreinfo Moreinfo-fade-out") {
            let link = "https://api.coingecko.com/api/v3/coins/" + (Coinid);
            getAjax(
                link,
                moreinfo
            );
            infoDiv.style.display = 'block';
            ShowHideinfo(infoDiv);
        }
        else {
            ShowHideinfo(infoDiv);
            infoDiv.style.display = 'none'; 
        }
    })
}





export function moreinfo() {
    console.log("import working")
    let CoinData = this.response;
    let moreInfoDiv = document.getElementById(CoinData.id);
    console.log(CoinData)
    const info = ` 
                  <img src =   ${ CoinData.image.small} width = 50px > <br>
                   USD Value: ${ CoinData.market_data.current_price.usd}&#36; <br>
                   EUR Value: ${ CoinData.market_data.current_price.eur}&#8364 <br>
                   ILS Value: ${ CoinData.market_data.current_price.ils}&#8362; <br>
                    `;

    moreInfoDiv.nextElementSibling.innerHTML = info;
}


