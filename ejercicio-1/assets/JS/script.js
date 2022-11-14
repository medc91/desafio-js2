let image = document.querySelector("#image");
let border = false;


image.addEventListener('click', () => {
    console.log("me diste click");
    if (border == false) {
        image.style.border = "solid 2px red";
        border = true;
    } else {
        image.style.border = "none";
        border = false;
    }
})