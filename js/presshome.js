import getAjax from "./Ajax.js";
import { loadContent } from "./loadContent.js";
import { getOutlet } from "./getoutlet.js";
import { loadStyle } from "./loadStyle.js";
import { create100coins } from "./ui.js";
export function homebtnPress(homebtn) {
    const oldContent = document.querySelector('#homeContainer');
    oldContent?.remove();
    let outlet = getOutlet();
    if (homebtn) {
        loadContent('../components/home/home.component.html', outlet);
        loadStyle("../components/home/home.component.css");
        homebtn.addEventListener("click", () => {
            getAjax("https://api.coingecko.com/api/v3/coins/list", create100coins);
        });
    }
}
//# sourceMappingURL=presshome.js.map