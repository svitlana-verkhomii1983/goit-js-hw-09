// Ініціалізація об'єкту для збереження даних форми
const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');

// Функція для збереження даних в локальне сховище
const saveToLocalStorage = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Функція для оновлення об'єкту formData і збереження даних в локальне сховище
const handleInput = (event) => {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
};

// Функція для відтворення данних з локального сховища
const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        Object.assign(formData, JSON.parse(savedData));
        form.email.value = formData.email;
        form.message.value = formData.message;
    }
};

// Функція для обробки відправки форми
const handleSubmit = (event) => {
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
};

// Додавання слухачів подій
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

// Відновлення даних з локального сховища при завантаженні сторінки
loadFromLocalStorage();