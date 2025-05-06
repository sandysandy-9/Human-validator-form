const form = document.getElementById('validatorForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let valid = true;

  // Full Name Validation
  if (name.length < 5) {
    document.getElementById('nameError').innerText = 'Name must be at least 5 characters';
    valid = false;
  } else {
    document.getElementById('nameError').innerText = '';
  }

  // Email Validation
  if (!email.includes('@')) {
    document.getElementById('emailError').innerText = 'Enter a valid email ID';
    valid = false;
  } else {
    document.getElementById('emailError').innerText = '';
  }

  // Phone Validation
  if (!/^\d{10}$/.test(phone) || phone === '1234567890') {
    document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number';
    valid = false;
  } else {
    document.getElementById('phoneError').innerText = '';
  }

  // Password Validation
  if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase()) {
    document.getElementById('passwordError').innerText = 'Password is too weak';
    valid = false;
  } else {
    document.getElementById('passwordError').innerText = '';
  }

  // Confirm Password Validation
  if (password !== confirmPassword) {
    document.getElementById('confirmError').innerText = 'Passwords do not match';
    valid = false;
  } else {
    document.getElementById('confirmError').innerText = '';
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
}
