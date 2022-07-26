import throttle from 'lodash.throttle';

const formRem = document.querySelector('.feedback-form')

const storageKey = "feedback-form-state";

formRem.addEventListener('change', throttle(onInputChange, 500))


formRem.addEventListener('submit', (e) => {
   e.preventDefault();
   const formData = new FormData(formRem);
   formData.forEach((name, value) => {
      console.log(name, value);
   })

   formRem.reset(); 
   localStorage.removeItem(storageKey);   
});

function updateInput(e) {
   let inputListSaved = localStorage.getItem(storageKey);
   
   if(inputListSaved){
      inputListSaved = JSON.parse(inputListSaved);
      console.log(inputListSaved); 
      Object.entries(inputListSaved).forEach(([name, value]) => {
         formRem.elements[name].value = value;
      });
   };
};

function onInputChange (e) {    
   let parsedForm = localStorage.getItem(storageKey);
   parsedForm = parsedForm ? JSON.parse(parsedForm) : {};
   parsedForm[e.target.name] = e.target.value;
   localStorage.setItem(storageKey, JSON.stringify(parsedForm))
};