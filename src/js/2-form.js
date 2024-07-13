let formData = {
  email: '',
  message: '',
};
const localStorageKey = 'feedback_form_state';
const emailField = document.querySelector('input[name="email"]');
const textareaField = document.querySelector('textarea[name="message"]');

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', setOutput);

function setOutput(event) {
  if (event.target.type === 'email') {
    const email = event.target.value;
    formData.email = email;
  } else {
    const message = event.target.value;
    formData.message = message;
  }
}

feedbackForm.addEventListener('click', manageSubmit);

function manageSubmit(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (formData.message === '' || formData.email === '') {
    alert('Fill please all fields');
  } else {
    localStorage.setItem(localStorageKey, JSON.stringify(formData));

    feedbackForm.reset();
  }
}
fillFormFields();
function fillFormFields() {
  const savedInformation = JSON.parse(localStorage.getItem(localStorageKey));
  console.log(savedInformation);

  emailField.value = savedInformation.email ?? '';
  textareaField.value = savedInformation.message ?? '';
}
