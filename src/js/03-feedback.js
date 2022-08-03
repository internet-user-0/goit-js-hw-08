import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'storageKey';
const form = document.querySelector('.feedback-form');

const storageKey = {};


initForm();


form.addEventListener('submit', evt => {
   evt.preventDefault();
   const formData = new FormData(form);
   formData.forEach((value, name) => console.log(value, name))

   localStorage.removeItem(LOCALSTORAGE_KEY);
   evt.currentTarget.reset();
});



form.addEventListener('input', throttle(saveText, 500));

function saveText(evt) {
   storageKey[evt.target.name] = evt.target.value;
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storageKey));
};


function initForm() {
   const nevStorageKey = localStorage.getItem(LOCALSTORAGE_KEY);
   if (nevStorageKey) {
      const lastObject = JSON.parse(nevStorageKey);
      Object.entries(lastObject).forEach(([name, value]) => {
         form.elements[name].value = value;
      });
      // storageKey = new Object.entries(lastObject).forEach(([name, value]) => {     ///// ЭТО СОВСЕМ НЕ РАБОТАЕТ
      //    form.elements[name].value = value;
      // });
   }
};
