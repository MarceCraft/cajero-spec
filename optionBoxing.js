'use strict';
const ulContent = document.querySelector("ul");
const infoImtem = document.getElementById("info-item");

ulContent.addEventListener("click",e => {
    infoImtem.value = e.target;
})

function repeatFooter() {
    let count = 0;
    const interval = setInterval(() => {
        console.log('footer '+count);
        count++;
        if(count === 10) clearInterval(interval);
    }, 2000);
}

repeatFooter();