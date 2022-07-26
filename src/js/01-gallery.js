// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

console.log(galleryItems);


const markingPlace = document.querySelector(".gallery");

const imagesMarkup = createImagesMarkup(galleryItems);


markingPlace.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(items) {
return items
   .map(({ preview, original, description }) => {
      return `
      <a href="${original}" >
      <img
      src="${preview}"
      data-source="${original}"
      alt="${description}"
   />
   </a>`;
   })
   .join("");
}
console.log(imagesMarkup);

markingPlace.addEventListener("click", SimpleLightbox);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	
});