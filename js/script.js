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

//!  სლაიდერის ღილაკები
let testi1 = document.getElementById("testi1");
let box5 = document.getElementById("box5");
testi1.addEventListener("click", function () {
  box5.classList.toggle("box5");
});
//2
let testi2 = document.getElementById("testi2");
let box6 = document.getElementById("box6");
testi2.addEventListener("click", function () {
  box6.classList.toggle("box6");
});
let testi3 = document.getElementById("testi3");
let box7 = document.getElementById("box7");
testi3.addEventListener("click", function () {
  box7.classList.toggle("box7");
});
let testi4 = document.getElementById("testi4");
let box8 = document.getElementById("box8");
testi4.addEventListener("click", function () {
  box8.classList.toggle("box8");
});
let testi5 = document.getElementById("testi5");
let box9 = document.getElementById("box9");
testi5.addEventListener("click", function () {
  box9.classList.toggle("box9");
});
let testi6 = document.getElementById("testi6");
let box10 = document.getElementById("box10");
testi6.addEventListener("click", function () {
  box10.classList.toggle("box10");
});
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  pagination: false,
  autoplay: true,
  inerval: 2000,
});
splide.mount();

// !  დავუბრუნდები
// import { sliderFnc } from "./slider";
// sliderFnc();

//!  ქლიქი ფეიჯის გათიშვა
const clickBack = document.getElementById("clickBack");
clickBack.addEventListener("click", function () {
  box5.classList.remove("box5");
});
const clickBack1 = document.getElementById("clickBack1");
clickBack1.addEventListener("click", function () {
  box6.classList.remove("box6");
});
const clickBack2 = document.getElementById("clickBack2");
clickBack2.addEventListener("click", function () {
  box7.classList.remove("box7");
});
const clickBack3 = document.getElementById("clickBack3");
clickBack3.addEventListener("click", function () {
  box8.classList.remove("box8");
});
const clickBack4 = document.getElementById("clickBack4");
clickBack4.addEventListener("click", function () {
  box9.classList.remove("box9");
});
const clickBack5 = document.getElementById("clickBack5");
clickBack5.addEventListener("click", function () {
  box10.classList.remove("box10");
});


//! ასინქრონული

const teamMembers = document.getElementById("teamMembers");
const teamMenbersNames = document.getElementById("teamMenbersNames");
const MembersNameUl2 = document.getElementById("MembersNameUl2");
async function TeamMembersFnc() {
  try {
    const respons = await axios.get(
      "https://akakinozadze.github.io/server/server.json"
    );
    respons.data.posts.forEach((element) => {
      AboutMembersFnc(element);
    });
  } catch (error) {
    console.error(error);
  }
}
TeamMembersFnc();

function AboutMembersFnc(item) {
  const MainBox = document.createElement("div");
  MainBox.setAttribute("item-id", item.id);
  MainBox.classList.add("MainBox");
  //
  let li = document.createElement("li");
  li.innerText = `${item.first_name} ${item.last_name}`;
  li.classList.add("MembersName");
  //
  let ul = document.createElement("ul");
  ul.classList.add("MembersNameUl");

  //
  let img = document.createElement("img");
  img.classList.add("TeamMembersImage");
  img.setAttribute("src", item.avatar);
  //
  let pharagarapHistori = document.createElement("p");
  pharagarapHistori.getAttribute("item-id");
  pharagarapHistori.innerText = `${item.about}`;
  pharagarapHistori.classList.add("pharagarapHistori");
  //

  ul.appendChild(li);
  li.appendChild(MainBox);
  MainBox.appendChild(img);
  MainBox.appendChild(pharagarapHistori);
  teamMembers.appendChild(ul);
}
