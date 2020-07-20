export function showCollaps() {
    let menubtn = document.querySelector("body > section > nav > button");
    if (menubtn) {
    }
    menubtn.addEventListener("click", (e) => ShowHidenavbar());
    function ShowHidenavbar() {
        let navbar = document.querySelector("#navbarColor03");
        navbar.classList.toggle("show");
        navbar.classList.toggle("collapse");
    }
}
export function ShowHideinfo(Moreinfo) {
    Moreinfo.classList.toggle("Moreinfo-fade-out");
    Moreinfo.classList.toggle("Moreinfo-fade-in");
}
//# sourceMappingURL=showhidenavbar.js.map