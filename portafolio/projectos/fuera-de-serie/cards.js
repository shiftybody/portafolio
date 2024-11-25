const images = document.querySelectorAll('.image-item');
let enlargedImage = null;  // Para rastrear la imagen actualmente ampliada

images.forEach((image) => {
    image.addEventListener('click', (event) => {
        event.stopPropagation();  // Evita que el clic se propague al documento
        if (!image.classList.contains('enlarged')) {
            if (enlargedImage) {
                closeImage(enlargedImage);  // Cierra cualquier imagen previamente ampliada
            }
            image.classList.add('enlarged');
            enlargedImage = image;  // Actualiza la imagen actualmente ampliada
        } else if (!image.classList.contains('faded')) {
            image.classList.add('faded');
            const description = document.createElement('div');
            description.className = 'description';
            description.textContent = image.getAttribute('data-description');
            image.parentNode.insertBefore(description, image.nextSibling);
        } else {
            closeImage(image);
        }
    });
});

// Cierra la imagen cuando se hace clic fuera de ella
document.addEventListener('click', () => {
    if (enlargedImage) {
        closeImage(enlargedImage);
    }
});

function closeImage(image) {
    image.classList.remove('enlarged', 'faded');
    if (image.nextSibling && image.nextSibling.classList.contains('description')) {
        image.nextSibling.remove();
    }
    enlargedImage = null;  // Restablece la imagen ampliada actual
}
