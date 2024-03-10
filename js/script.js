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

const ulBox = document.querySelectorAll(".ulBox");

ulBox.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.add("newUlBox");
  });
  console.log(element);
});
// console.log(ulBox);
// const ulBox = document.querySelector(".ulBox");

// ulBox.addEventListener("click", function () {
//   ulBox.classList.add("newUlBox");
// });

// const ulBox = document.querySelectorAll(".ulBox");

// ulBox.addEventListener("click", function () {
//   ulBox.classList.add("newUlBox");
// });
// ulBox.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.classList.toggle("garmon2");
//   });
// });
const iconBack = document.getElementById("icon_back");



// iconBack.addEventListener("click", function (e) {
//   e.stopPropagation();
//   ulBox.classList.remove("newUlBox");
// });
