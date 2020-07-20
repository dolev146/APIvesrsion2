export function CreateCoins() {
    let coins = JSON.parse(xhr.responseText).slice(0, 100);
    let cards = coins.map((coin) => `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                        <div class="card-header">${coin.name.toLocaleUpperCase()}</div>
                        <div class="card-body">
                            <h4 class="card-title">${coin.symbol}</h4>
                            <p class="card-text">id: ${coin.id}.</p>
                        </div>
                    </div>`);
    let homeContainer = document.querySelector("#homeContainer");
    if (homeContainer) {
        homeContainer.innerHTML = cards.join("");
    }
}
//# sourceMappingURL=CreateCoins.js.map