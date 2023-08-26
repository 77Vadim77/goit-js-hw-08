// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import "Simplelightbox/dist/Simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

function renderGaleery() {
    const createEl = galleryItems
        .map(
            (item) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
        </a>
        </li>`
        )
        .join("");
    gallery.innerHTML = createEl;
}

renderGaleery();

let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});
console.log(lightbox)

