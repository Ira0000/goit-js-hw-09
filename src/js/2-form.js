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
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

fillFormFields();
function fillFormFields() {
  const savedInformation = localStorage.getItem(localStorageKey);
  if (savedInformation) {
    let parsedInformation = JSON.parse(savedInformation);

    formData.email = parsedInformation.email;
    formData.message = parsedInformation.message;

    emailField.value = formData.email;
    textareaField.value = formData.message;
  }
}
feedbackForm.addEventListener('submit', manageSubmit);

function manageSubmit(event) {
  event.preventDefault();

  if (emailField.value == '' || textareaField.value == '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    feedbackForm.reset();
    localStorage.removeItem(localStorageKey);
  }
}
