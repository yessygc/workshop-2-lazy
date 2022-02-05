import { registerImage } from './lazy'

// crear 1 imagen
// agregar #imagen

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const container = document.createElement("div")
    container.className = "p-4";

    const imagen = document.createElement('img')
    imagen.className = "mx-auto";
    imagen.width = '320'
    imagen.dataset.src = `https://source.unsplash.com/collection/${random()}881002`; //TODO

    container.appendChild(imagen);

    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector("button");

//
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener("click", addImage);
