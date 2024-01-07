
const form = document.querySelector('.feedback-form');

const data = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

form.elements.email.value = data.email ?? '';
form.elements.message.value = data.message ?? '';

form.addEventListener('input', handleInput);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (data.email && data.message) {
    form.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(data);
  } else {
    alert('Fill all the fields');
  }
});

function handleInput(e) {
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => (data[key] = value.trim()));
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}