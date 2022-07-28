import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'storageKey';
const form = document.querySelector('.feedback-form');


initForm();


form.addEventListener('submit', evt => {
   evt.preventDefault();
   const formData = new FormData(form);
   formData.forEach((value, name) => console.log(value, name))
});



form.addEventListener('input', throttle(evt => {
   let nevStorageKey = localStorage.getItem(LOCALSTORAGE_KEY);
   nevStorageKey = nevStorageKey ? nevStorageKey = JSON.parse(nevStorageKey) : {};

   nevStorageKey[evt.target.name] = evt.target.value;
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(nevStorageKey));
}, 500));

form.addEventListener('submit', evt => {
   localStorage.removeItem(LOCALSTORAGE_KEY);
   Object.keys(LOCALSTORAGE_KEY).forEach(name => {
      form.elements[name].value = "";
   });
});

function initForm() {
   let nevStorageKey = localStorage.getItem(LOCALSTORAGE_KEY);
   if (nevStorageKey) {
      nevStorageKey = JSON.parse(nevStorageKey);
      Object.entries(nevStorageKey).forEach(([name, value]) => {
         form.elements[name].value = value;
      });
   }
};
