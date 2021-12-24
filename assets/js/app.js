let dice = document.getElementById("dice");
function roll() {
    let randomnum = Math.floor(Math.random() * 6) + 1;
    dice.classList.add("roll")
    setTimeout(function() {dice.classList.remove("roll")} , 1000)
    switch (randomnum) {
        case 1: dice.src = "assets/img/1.png"
        break;
        case 2: dice.src = "assets/img/2.png"
        break;
        case 3: dice.src = "assets/img/3.png"
        break;
        case 4: dice.src = "assets/img/4.png"
        break;
        case 5: dice.src = "assets/img/5.png"
        break;
        case 6: dice.src = "assets/img/6.png"
        break;
    };
}