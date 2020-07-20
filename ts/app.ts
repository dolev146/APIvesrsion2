// show hide nav bar when the window is small width 
//i tried to add the cdn of Jquery but it didnt worked so i just writed my own Code to make it work

import {showCollaps } from './showhidenavbar.js'

showCollaps()


// Home button on click 

import { homebtnPress } from './presshome.js'

let homebtn: Element | null = document.querySelector("#navbarColor03 > ul > li:nth-child(1) > a");
homebtnPress(homebtn)

window.onload = (e) => homebtn.click() 

