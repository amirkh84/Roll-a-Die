let number = document.querySelector(".number");
let button = document.querySelector(".btn");
function rn() {
    let randomnum = Math.floor(Math.random() * 6) + 1;
    number.innerHTML = randomnum;
    switch(randomnum) {
        case 1: number.style.backgroundColor = "#ffea00";
        break;
        case 2: number.style.backgroundColor = "#ffd000";
        break;
        case 3: number.style.backgroundColor = "#ffb700";
        break;
        case 4: number.style.backgroundColor = "#ffaa00";
        break;
        case 5: number.style.backgroundColor = "#ff9500";
        break;
        case 6: number.style.backgroundColor = "#ff7b00";
        break;
    }
    number.classList.toggle("size")
};
rn();
button.addEventListener("click" , rn);