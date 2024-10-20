// Створення об'єкт formData
const formData = { email: "", message: "" };

// Делегування подій для відстеження змін у формі та зберігання даних у локальне сховище
const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = "";
  formData.message = "";
});

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.email.value = parsedData.email;
    form.message.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
});