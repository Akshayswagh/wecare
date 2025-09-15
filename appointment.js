document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('form');  // Select your form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzTlPmsQRSWGIfkocEdTdXVJDmJ4SWpu3uslaw7LpERAAiZw1g7i_YFADXEYY5vvXjb/exec';

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => response.json())
      .then(data => {
        if(data.result === 'success'){
          alert('Appointment booked successfully');
          form.reset();  // Clear the form
        } else {
          alert('Error submitting form, try again.');
        }
      })
      .catch(() => alert('Error connecting to server'));
  });
});
