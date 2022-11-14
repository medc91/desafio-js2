let d1 = document.querySelector("#d1");
let d2 = document.querySelector("#d2");
let d3 = document.querySelector("#d3");
let button = document.querySelector("#button");
let answer = document.querySelector("#answer");

button.addEventListener('click', () => {
    password = d1.value + d2.value + d3.value;

    if (password == "911") {

        answer.textContent = "password 1 correcto";

    } else if (password == "714") {

        answer.textContent = "password 2 correcto";

    } else {
        answer.textContent = "password incorrecto";
    }

})