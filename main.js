const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

// // form.addEventListener("submit", sumarInputValues);

// // function sumarInputValues(event) {
// //     console.log({event});
// //     event.preventDefault();
// //     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
// //     result.innerText = "Resultado: " + sumaInputs;
// // }


btn.addEventListener("dblclick", sumarInputValues);

btn.addEventListener("mouseover", () => {
    btn.style.background = "green";  //lo ideal es btn.classList.add('green'); green la tenemos que definir en css
})

btn.addEventListener("mouseleave", () => {
    btn.style.background = "white";
})

btn.addEventListener("mousedown", () => {
    console.log("pulsando el click")
})

btn.addEventListener("mouseup", () => {
    console.log("soltando el click")
})

btn.addEventListener("mousemove", () => {
    console.log("muevo el mouse en el btn")
})

input2.addEventListener('keydown', () => {
    console.log("has pulsado una tecla");
})

input2.addEventListener('keyup', () => {
    console.log("has soltado una tecla");
})

input2.addEventListener('keypress', () => {
    console.log("estas pulsando una tecla");
})


function sumarInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + sumaInputs;
}




