let hubQty = document.querySelector("#sticker1");
let slkQty = document.querySelector("#sticker2");
let gitQty = document.querySelector("#sticker3");
let button = document.querySelector("#button");
let text   = document.querySelector("#text");


button.addEventListener('click', () => {
    let resultado = (parseInt(hubQty.value) + parseInt(slkQty.value)+ parseInt(gitQty.value));
    
    if( resultado <= 10){
        text.textContent = `llevas ${resultado} stickers`
    }else{
        text.textContent = "Llevas demasiados stickers"
    }
    
})