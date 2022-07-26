import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')

const storageKey = "feedback-form-state";

form.addEventListener('input', throttle(onInputChange, 500))


form.addEventListener('submit', (e) => {
   e.preventDefault();
   const formData = new FormData(form);
   formData.forEach((name, value) => {
      console.log(name, value);
   })});


   function onInputChange (e) {
      let parsedForm = localStorage.getItem(storageKey);
      parsedForm = parsedForm ? JSON.parse(parsedForm) : {};
      parsedForm[e.target.name] = e.target.value;
      localStorage.setItem(storageKey, JSON.stringify(parsedForm))
   };



const saveValue = {};

form.addEventListener('submit', evt =>{
   saveValue[evt.target.email] = evt.target.email.value;
   saveValue[evt.target.message] = evt.target.message.value;

   localStorage.setItem('saveValue', JSON.stringify(saveValue));
});