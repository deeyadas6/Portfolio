// Toggle dark mode
function toggleTheme() {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    if (darkModeSwitch.checked) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#f4f4f4';
        document.querySelectorAll('header, footer').forEach(el => el.style.backgroundColor = '#222');
        document.querySelectorAll('section').forEach(el => el.style.backgroundColor = '#444');
        document.querySelectorAll('form input, form textarea').forEach(el => el.style.backgroundColor = '#555');
        document.querySelectorAll('form input, form textarea').forEach(el => el.style.color = '#f4f4f4');
    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
        document.querySelectorAll('header, footer').forEach(el => el.style.backgroundColor = '#333');
        document.querySelectorAll('section').forEach(el => el.style.backgroundColor = '#fff');
        document.querySelectorAll('form input, form textarea').forEach(el => el.style.backgroundColor = '#fff');
        document.querySelectorAll('form input, form textarea').forEach(el => el.style.color = '#333');
    }
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        return true;
    } else {
        alert('Please fill out all fields.');
        return false;
    }
}
