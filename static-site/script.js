// Page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

// Contact form handling
function submitContactForm(event) {
    event.preventDefault();
    
    // Clear previous errors
    clearErrors(['name-error', 'email-error', 'message-error']);
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (message.length < 10) {
        showError('message-error', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('contact-success').style.display = 'block';
    }
}

// Login form handling
function submitLoginForm(event) {
    event.preventDefault();
    
    clearErrors(['login-email-error', 'login-password-error']);
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    let isValid = true;
    
    if (!isValidEmail(email)) {
        showError('login-email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (password.length < 6) {
        showError('login-password-error', 'Password must be at least 6 characters long');
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('login-success').style.display = 'block';
    }
}

// Sign up form handling
function submitSignupForm(event) {
    event.preventDefault();
    
    clearErrors(['signup-name-error', 'signup-email-error', 'signup-password-error', 'confirm-password-error']);
    
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    let isValid = true;
    
    if (name.length < 2) {
        showError('signup-name-error', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    if (!isValidEmail(email)) {
        showError('signup-email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (password.length < 8) {
        showError('signup-password-error', 'Password must be at least 8 characters long');
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        showError('confirm-password-error', 'Passwords do not match');
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('signup-success').style.display = 'block';
    }
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors(errorIds) {
    errorIds.forEach(id => {
        document.getElementById(id).textContent = '';
    });
}