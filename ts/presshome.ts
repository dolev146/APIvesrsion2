import getAjax from "./Ajax.js";
import { Coin } from "./coin.model.js";
import {getOutlet} from "./getoutlet.js"

let homebtn: Element | null = document.querySelector("#navbarColor03 > ul > li:nth-child(1) > a");
if (homebtn) {
    homebtn.addEventListener("click", () => {
        getAjax(
            "https://api.coingecko.com/api/v3/coins/list",
            firstLoad
        );
    });
}

function firstLoad(): void {
    let coins: Coin[] = JSON.parse(this.responseText);

    let cards = coins.map(
        (coin) => `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                        <div class="card-header">${coin.name.toLocaleUpperCase()}</div>
                        <div class="card-body">
                            <h4 class="card-title">${coin.symbole}</h4>
                            <p class="card-text">Coin id :  ${coin.id}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>`
    );
    let outlet: Element | null | any = getOutlet;
    if (outlet) {
        outlet.innerHTML = cards.join("");
    }
}
