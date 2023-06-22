import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const imageEl = createImageGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imageEl);


function createImageGallery (items) {
    return items.map(
        ({preview, original, description}) => {
            return `<li class="gallery__item"><a class = "gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a></li>
            `;
        }).join("")
}
galleryEl.addEventListener('click', onClick);
function onClick(e) {
    e.preventDefault();
    if (e.target.classList.contains("gallery")){
        return;
    };
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
       `)
    
    instance.show();
};


// console.log(galleryItems);
