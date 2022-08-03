// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";



const markingPlace = document.querySelector(".gallery");

const imagesMarkup = createImagesMarkup(galleryItems);


markingPlace.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(items) {
return items
   .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
   <a class="gallery__link" href="${original}" >
   <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
   />
   </a>
</div>`;
   })
   .join("");
}


new SimpleLightbox(".gallery a", {
   captionSelector: "img",
   captionData: "title",
   captionPosition: "bottom",
   captionsData: "alt",
   captionDelay: 250,
});