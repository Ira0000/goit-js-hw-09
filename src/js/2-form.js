let formData = {
  email: '',
  message: '',
};
const localStorageKey = 'feedback_form_state';
const feedbackForm = document.querySelector('.feedback-form');

const emailField = document.querySelector('input[name="email"]');
const textareaField = document.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', setOutput);

function setOutput(event) {
  if (event.target.type === 'email') {
    const email = event.target.value;
    formData.email = email;
  } else {
    const message = event.target.value;
    formData.message = message;
  }
  // console.log(formData);
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

fillFormFields();
function fillFormFields() {
  const savedInformation = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedInformation) {
    emailField.value = savedInformation.email;
    textareaField.value = savedInformation.message;
  }
}
feedbackForm.addEventListener('click', manageSubmit);

function manageSubmit(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (emailField.value === '' || textareaField.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    feedbackForm.reset();
    localStorage.removeItem(localStorageKey);
  }
}
