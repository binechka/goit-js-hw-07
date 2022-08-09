import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery")

gallery.innerHTML = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
).join("");


gallery.addEventListener("click", onModalGallery);
function onModalGallery(eve) {
    eve.preventDefault();

    document.addEventListener("keydown", removeEscape)

    function removeEscape(even) { 
        if (even.code !== "Escape") {
            return
        }
        else {
            instance.close()  
            document.removeEventListener("keydown", removeEscape)
        }
    
    }
    const srcBigImages = eve.target.dataset.source;

const instance = basicLightbox.create(`<img src="${srcBigImages}" width="800" height="600">`);

instance.show()

}
