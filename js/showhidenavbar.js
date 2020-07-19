export function showCollaps() {
    let menubtn = document.querySelector("body > section > nav > button");
    if (menubtn) {
    }
    menubtn.addEventListener("click", (e) => ShowHidenavbar());
    function ShowHidenavbar() {
        let navbar = document.querySelector("#navbarColor03");
        navbar.classList.toggle("show");
        navbar.classList.toggle("");
    }
}
//# sourceMappingURL=showhidenavbar.js.map