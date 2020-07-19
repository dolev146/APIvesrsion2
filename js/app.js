// import { home, about, livereports } from './routes.js'
// const routes = {
//     home,
//     about,
//     livereports
// }
// function init() {
//     document.querySelector('#navbarColor03 > ul > li.nav-item.active')?.addEventListener('click', selectRoute)
// }
// function selectRoute(event: any) {
//     event.preventDefault();
//     if (event.target.nodeName !== "A") {
//         return
//     }
//     const outlet = document.querySelector('.link-outlet')
//     debugger;
//     routes[event.target.textContent.toLowerCase()](outlet)
//     debugger;
// }
// window.onload = function () {
//     init();
//     function home(outlet: HTMLElement | null) {
//         if (outlet) {
//             outlet.innerHTML = ""
//             let homediv = document.createElement("div")
//             outlet.appendChild(homediv)
//             homediv.innerHTML = "<div><h1 style=text-align:center>List of All the Coins</h1></div>"
//             // loadContent('./components/home/home.component.html', outlet)
//             const xhr = new XMLHttpRequest();
//             xhr.open('GET', 'https://api.coingecko.com/api/v3/coins/list')
//             xhr.onload = function () {
//                 let containerInfo = document.createElement("div");
//                 containerInfo.classList = "containerCoins"
//                 outlet.appendChild(containerInfo)
//                 const data = JSON.parse(xhr.responseText);
//                 for (let i = 0; i < 100; i++) {
//                     let newdiv = document.createElement('div')
//                     newdiv.classList = "Coininside"
//                     let toggle_btn = document.createElement('input')
//                     toggle_btn.classList.add("toggle_btn")
//                     toggle_btn.setAttribute('type', 'checkbox')
//                     let infoLink = document.createElement('a')
//                     infoLink.setAttribute('href', 'https://api.coingecko.com/api/v3/coins/list')
//                     infoLink.innerHTML = "more Info"
//                     newdiv.classList.add("div_style")
//                     newdiv.innerHTML += `<span>Symbol: ${(data[i].symbol.toUpperCase())}<br><br>
//                 Name: ${data[i].name} </span><br>`
//                     containerInfo.appendChild(newdiv)
//                     newdiv.appendChild(toggle_btn)
//                     newdiv.appendChild(infoLink)
//                     toggle_btn.onclick = function (event) {
//                         alert(event.target.parentElement.innerHTML)
//                     }
//                 }
//             }
//             xhr.send()
//         }
//     }
// }
// show hide nav bar when the window is small width 
import { showCollaps } from './showhidenavbar.js';
showCollaps;
// Home button on click 
import { homebtnPress } from './presshome.js';
let homebtn = document.querySelector("#navbarColor03 > ul > li:nth-child(1) > a");
homebtnPress(homebtn);
window.onload = (e) => homebtn.click();
//# sourceMappingURL=app.js.map