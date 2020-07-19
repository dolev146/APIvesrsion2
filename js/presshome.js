import { getOutlet } from "./getoutlet.js";
//getting outlet element in order to inject to him Code
let outlet = getOutlet;
export function homebtnPress(homebtn) {
    homebtn?.addEventListener("click", press);
    function press() {
        if (homebtn?.textContent?.toLocaleLowerCase() === "home(current)") {
            console.log("you pressed home button");
            const data = JSON.parse(this.responseText).slice(0, 100);
            data.forEach((element) => {
                outlet.innerHTML += `<div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
                                        <div class="card-header">${element.symbol.toUpperCase()}</div>
                                            <div class="card-body">
                                                <h4 class="card-title">${element.name}</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>`;
            });
        }
        // <button id = ${ element.id }> more INFO < /button> <br> 
        //     < span class=any > </span> 
        // outlet.addEventListener('click', () => {
        //     let link = "https://api.coingecko.com/api/v3/coins/" + (event.target.id) : String;
        //     getHttp(link, more_info)
        // });
        // function more_info() {
        //     let coin_data = JSON.parse(this.responseText);
        //     let more_info_div = document.getElementById(coin_data.id);
        //     const info = `<tr>
        //                       <td><img src =   ${coin_data.image.small} width = 10px></td><br>
        //                       <td>USD Value :  ${coin_data.market_data.current_price.usd}&#36;</td><br>
        //                       <td>EUR Value :  ${coin_data.market_data.current_price.eur}&#8364</td><br>
        //                       <td>ILS Value :  ${coin_data.market_data.current_price.ils}&#8362; </td><br>
        //                       </tr>`;
        //     more_info_div.innerHTML = info;
        // };
    }
}
//# sourceMappingURL=presshome.js.map