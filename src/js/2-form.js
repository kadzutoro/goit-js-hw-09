const form = document.querySelector('.feedback-form');

const USER_DATA_STORAGE_KEY = 'feedback-form-state';

let userData = JSON.parse(localStorage.getItem(USER_DATA_STORAGE_KEY)) ?? {};

try {
  form.elements.email.value = userData.email ?? '';
  form.elements.message.value = userData.message ?? '';
} catch (error) {
  console.error(error.message);
}

form.addEventListener('input', () => {
  const formData = new FormData(form);

  formData.forEach((value, key) => (userData[key] = value.trim()));
  localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(userData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (userData.email && userData.message) {
    console.log(userData);
    localStorage.removeItem(USER_DATA_STORAGE_KEY);
    userData = {};
  } else {
    alert('Please, fill in the form!');
  }
  form.reset();
});
