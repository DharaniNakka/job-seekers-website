// Function to handle signup form submission
function handleSignup(event) {
  event.preventDefault();
  const formData = new FormData(signupForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://127.0.0.1:5500/signup', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Signup successful!');
      // Redirect to dashboard or login page
      window.location.href = 'http://127.0.0.1:5500/login.html'; // Replace with your dashboard URL
    } else {
      console.error('Error signing up:', xhr.statusText);
    }
  };
  xhr.send(formData);
}

// Function to handle login form submission
function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://127.0.0.1:5500/login', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Login successful!');
      // Redirect to dashboard or home page
      window.location.href = 'http://127.0.0.1:5500/index.html'; // Replace with your home URL
    } else {
      console.error('Error logging in:', xhr.statusText);
    }
  };
  xhr.send(formData);
}