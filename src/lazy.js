
const isIntersecting = (entry) => {
    return entry.isIntersecting; // true (dentro de la pantalla)
};

const loadImage = (entry) => {
    const container =  entry.target; //contenedor
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    // load imagen
    imagen.src = url;

    // des registra la imagen (listener)
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

//
export const registerImage = (imagen) => {
    //IntersectationObserver -> observer(Image)
    observer.observe(imagen);
};