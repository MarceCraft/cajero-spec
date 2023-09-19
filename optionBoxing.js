'use strict';
const ulContent = document.querySelector("ul");
const infoImtem = document.getElementById("info-item");

ulContent.addEventListener("click",e => {
    infoImtem.value = e.target;
})