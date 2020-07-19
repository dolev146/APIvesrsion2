import getAjax from "./Ajax.js";
import { getOutlet } from "./getoutlet.js";
export function homebtnPress(homebtn) {
    let outlet = getOutlet();
    outlet.innerHTML = "";
    if (homebtn) {
        homebtn.addEventListener("click", () => {
            getAjax("https://api.coingecko.com/api/v3/coins/list", firstLoad);
        });
    }
    function firstLoad() {
        let coins = JSON.parse(this.responseText).slice(0, 100);
        let cards = coins.map((coin) => `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                        <div class="card-header">${coin.name.toLocaleUpperCase()}</div>
                        <div class="card-body">
                            <h4 class="card-title">${coin.symbol}</h4>
                            <p class="card-text">Coin id: ${coin.id}.</p>
                        </div>
                    </div>`);
        // document.createElement()
        if (outlet) {
            outlet.innerHTML = cards.join("");
        }
    }
}
//# sourceMappingURL=presshome.js.map