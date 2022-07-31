import throttle from 'lodash.throttle';

// const LOCALSTORAGE_KEY = 'storageKey';
const form = document.querySelector('.feedback-form');

const storageKey = {};


initForm();


form.addEventListener('submit', evt => {
   evt.preventDefault();
   const formData = new FormData(form);
   formData.forEach((value, name) => console.log(value, name))

   localStorage.removeItem(storageKey);
   evt.currentTarget.reset();
});



form.addEventListener('input', throttle(saveText, 500));

function saveText(evt) {
   storageKey[evt.target.name] = evt.target.value;
   localStorage.setItem(storageKey, JSON.stringify(storageKey));
};


function initForm() {
   const nevStorageKey = localStorage.getItem(storageKey);
   if (nevStorageKey) {
      const historyCheck = JSON.parse(nevStorageKey);
      Object.entries(historyCheck).forEach(([name, value]) => {
         form.elements[name].value = value;
      });
   }
};
