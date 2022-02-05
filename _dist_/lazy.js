
const isIntersecting = (entry) => {
    return entry.isIntersecting // true (dentro de la pantalla)
};

const accion = (entry) => {
    const nodo =  entry.target
    console.log("holis");

    // des registra la imagen (listener)
    observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
});

//
export const registerImage = (imagen) => {
    //IntersectationObserver -> observer(Image)
    observer.observe(imagen);
};