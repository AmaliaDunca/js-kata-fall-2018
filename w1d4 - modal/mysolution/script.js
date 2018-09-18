"use strict";
document.addEventListener("DOMContentLoaded", init);

function init() {
  let modal = document.querySelector("#modal_window").classList.add("active");
  let modal_container = document
    .querySelector("#modal_container")
    .classList.add("active");
  let button = document.querySelectorAll("#details");
  let linksLeng = button.length;

  let close = document
    .querySelector("#closebutton")
    .addEventListener("click", hideModal);

  function showModal() {
    console.log("Show modal");
    document.querySelector("#modal_window").classList.remove("active");
  }
  function hideModal() {
    console.log("Hide modal");
    document.querySelector("#modal_window").classList.add("active");
  }
  for (var i = 0; i < linksLeng; i++) {
    button[i].addEventListener("click", showModal);
  }
}
