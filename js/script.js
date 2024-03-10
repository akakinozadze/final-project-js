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
