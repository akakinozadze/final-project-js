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
// submitHeader // cookies
loginBox.addEventListener("submit", function (e) {
  e.preventDefault();
  let ChecBox = document.getElementById("ChecBox");
  if (ChecBox.checked) {
    let userNameValue = document.getElementById("userName").value;
    Cookies.set("username", userNameValue);
  } else {
    Cookies.remove("username");
  }
  e.target.submit();
});

let sevedCookies = Cookies.get("username");
if (sevedCookies) {
  document.getElementById("userName").value = sevedCookies;
  document.getElementById("ChecBox").checked = true;
}

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
import { sliderFnc } from "./slider.js";
sliderFnc();
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
//..
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
// სერჩი
const searchBox = document.getElementById("searchBox");
const inputSearch11 = document.getElementById("inputSearch11");
searchBox.addEventListener("click", (e) => {
  e.stopPropagation();
  inputSearch11.classList.toggle("inputSearch12");
});
// let inputSearch2 = document.getElementById("inputSearch1");
// let result = document.getElementById("result");
// let itemList = [];
// async function asyncFncfetch() {
//   const response = await fetch("https://reqres.in/api/users?page=1");
//   console.log(response);
//   if (!response.ok) {
//     throw new Error("can not fetch data");
//   }
//   const mosuliInfo = await response.json();
//   return mosuliInfo;
// }

// asyncFncfetch()
//   .then((responseData) => {
//     // console.log(responseData);
//     responseData.data.forEach((element) => {
//       let li = document.createElement("li");
//       li.textContent = `${element.first_name} ${element.last_name}`;
//       itemList.push(li);
//       result.appendChild(li);
//     });
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// function filterData(searchItem) {
//   itemList.forEach((item) => {
//     console.log(item); //li

//     if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
//       item.classList.remove("hide");
//     } else {
//       item.classList.add("hide");
//     }
//   });
// }

// inputSearch2.addEventListener("keyup", function () {
//   // console.log(this);
//   filterData(this.value);
// });

// ----
// function getComments(commnetId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (commnetId > 100) {
//         resolve("Comments Ok Status");
//       } else {
//         reject("Comemnt Not Ok Status");
//       }
//     }, 2000);
//   });
// }

// async function renderPage() {
//   try {
//     let comments = await getComments(40);
//     console.log(comments);
//   } catch (e) {
//     console.log("შეცდომის ტექსტი", e);
//   }
// }

// renderPage();
