

export function showCollaps() {

    
    let menubtn: any = document.querySelector("body > section > nav > button")
    if (menubtn) {
    }
    menubtn.addEventListener("click", (e) => ShowHidenavbar())

    function ShowHidenavbar() {
        let navbar: any = document.querySelector("#navbarColor03")
        navbar.classList.toggle("show");
        navbar.classList.toggle("");
    }
    
}
