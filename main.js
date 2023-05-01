const form = document.querySelector('form');
const fileInput = document.querySelector('#image');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('image', fileInput.files[0]);
  fetch('/predict', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    result.textContent = `Prediction Result: ${data.result}`;
  })
  .catch(error => {
    console.error(error);
  });
});