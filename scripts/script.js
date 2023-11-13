const open = document.getElementById("open")
const modal_container = document.getElementById("modal_container")
const modal_container2 = document.getElementById("modal_container2")
const modal_container3 = document.getElementById("modal_container3")

const close = document.getElementById("close")
const open1 = document.getElementById("open1")
const close2 = document.getElementById("close2")
const registrarse = document.getElementById("registrarse")
const catalogo = document.getElementById("catalogo")


open.addEventListener("click", () => {
    modal_container.classList.add("show")
});

close.addEventListener("click", () => {
    modal_container.classList.remove("show")
});

open1.addEventListener("click", () => {
    modal_container2.classList.add("show")
});

close2.addEventListener("click", () => {
    modal_container2.classList.remove("show")
});

registrarse.addEventListener("click", () => {
    modal_container3.classList.add("show")
});

catalogo.addEventListener("click", () => {
    alert("Aca deberia descargarse el catalogo...")
});


    