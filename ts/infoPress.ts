// import {gethomeContainer} from "./getoutlet.js"
// import getAjax from "./Ajax.js";
// import { ShowHideinfo } from "./showhidenavbar.js"


// export function infobtnpressed() {
//     let homeContainer = gethomeContainer()
//     homeContainer?.addEventListener("click", function () {
//         let Coinid = event?.target?.id;
//         let infoDiv = event.target.nextElementSibling;
//         if (infoDiv.className === "Moreinfo Moreinfo-fade-out") {
//             let link = "https://api.coingecko.com/api/v3/coins/" + (Coinid);
//             getAjax(
//                 link,
//                 moreinfo
//             );
//             ShowHideinfo(infoDiv);
//             infoDiv.style.display = 'block';
//         }
//         else {
//             infoDiv.style.display = 'none';
//             ShowHideinfo(infoDiv);
//         }
//     })
// }



// export function moreinfo() {
//     console.log("import working")
//     let CoinData = this.response;
//     let moreInfoDiv = document.getElementById(CoinData.id);
//     console.log(CoinData)
//     const info = ` 
//                   <img src =   ${ CoinData.image.small} width = 50px > <br>
//                    USD Value: ${ CoinData.market_data.current_price.usd}&#36; <br>
//                    EUR Value: ${ CoinData.market_data.current_price.eur}&#8364 <br>
//                    ILS Value: ${ CoinData.market_data.current_price.ils}&#8362; <br>
//                     `;

//     moreInfoDiv.nextElementSibling.innerHTML = info;
// }