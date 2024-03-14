"use strict";

// heder search
const search2 = document.getElementById("searchIcon");
const inputSearch1 = document.getElementById("inputSearch1");
search2.addEventListener("click", function (e) {
  inputSearch1.classList.toggle("newSearch2");
});
// bar nav
const menu1 = document.getElementById("menu1");
const NavBar = document.getElementById("NavBar");
menu1.addEventListener("click", function () {
  NavBar.classList.toggle("navBar2");
  inputSearch1.classList.remove("newSearch2");
});
// close
const close2 = document.getElementById("close2");
close2.addEventListener("click", function () {
  NavBar.classList.remove("navBar2");
});
//li
const li1 = document.querySelectorAll(".garmon");

li1.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("garmon1");
  });
});

// ul box man

const ulBoxMan = document.getElementById("ulBoxMan");
ulBoxMan.addEventListener("click", function () {
  ulBoxMan.classList.add("newUlBox");
});
const iconBack = document.getElementById("icon_back");
iconBack.addEventListener("click", function (e) {
  e.stopPropagation();
  ulBoxMan.classList.remove("newUlBox");
});
// ul box woman
const ulBoxWoman = document.getElementById("ulBoxWoman");
ulBoxWoman.addEventListener("click", function () {
  ulBoxWoman.classList.add("newUlBoxWoman");
});
const iconBack2 = document.getElementById("icon_back2");
iconBack2.addEventListener("click", function (e) {
  e.stopPropagation();
  ulBoxWoman.classList.remove("newUlBoxWoman");
});
// ul box kids
const ulBoxKids = document.getElementById("ulBoxKids");
ulBoxKids.addEventListener("click", function () {
  ulBoxKids.classList.add("newUlBoxkids");
});
const iconBack3 = document.getElementById("icon_back3");
iconBack3.addEventListener("click", function (e) {
  e.stopPropagation();
  ulBoxKids.classList.remove("newUlBoxkids");
});
//  ul box Accessories
const ulBoxAcce = document.getElementById("ulBoxAcce");
ulBoxAcce.addEventListener("click", function () {
  ulBoxAcce.classList.add("newUlBoxAcce");
});
const iconBack4 = document.getElementById("icon_back4");
iconBack4.addEventListener("click", function (e) {
  e.stopPropagation();
  ulBoxAcce.classList.remove("newUlBoxAcce");
});
//login1

const login1 = document.getElementById("loginRegistr");
const loginBox = document.getElementById("loginBox");
login1.addEventListener("click", function (e) {
  loginBox.classList.toggle("newlogin");
});
//login closer

const closeLogin = document.getElementById("closeLogin");
closeLogin.addEventListener("click", function () {
  loginBox.classList.remove("newlogin");
});
// submitHeader
const submitHeader = document.getElementById("submitHeader");
submitHeader.addEventListener("click", function (e) {
  e.preventDefault();
});
// sin up
const SingUp = document.getElementById("SingUp");
const formRegistrBox = document.getElementById("formRegistrBox");
SingUp.addEventListener("click", function (e) {
  formRegistrBox.classList.add("newformRegistrBox");
});
// closeLogin1
const closeLogin1 = document.getElementById("closeLogin1");
closeLogin1.addEventListener("click", function (e) {
  formRegistrBox.classList.remove("newformRegistrBox");
});

// import { formFmc } from "./form.js";

// formFmc();

// import { slider } from "./slider";
// slider();
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 2,
  focus: "center",
  pagination: false,
  // autoplay: true,
  // inerval: 2000,
});
splide.mount();
// სლაიდერიდ დივიდან კალათაში გადასასვლელი ღილაკი
let testi1 = document.getElementById("testi1");
let box5 = document.getElementById("box5");
testi1.addEventListener("click", function () {
  box5.classList.toggle("box5");
});

const clickBack = document.getElementById("clickBack");
clickBack.addEventListener("click", function () {
  box5.classList.remove("box5");
});
// const kaki3 = document.getElementById("kaki2");
// const box5 = document.getElementById("box5");
// kaki3.addEventListener("click", function () {
//   box5.classList.add("kaki2");
// });
