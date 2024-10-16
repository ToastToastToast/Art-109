function validateTextarea1() {
    const textarea = document.getElementById('message1');
    const errorMessage = document.getElementById('error-message1');
    const submitBtn = document.getElementById('submit-btn');
    const minLength = 1000;
    const maxLength = 20000;
    const textLength = textarea.value.length;

    if (textLength < minLength || textLength > maxLength) {
        errorMessage.style.display = 'inline';
        submitBtn.disabled = true;  // Disable the submit button
    } else {
        errorMessage.style.display = 'none';
        submitBtn.disabled = false;  // Enable the submit button
    }
}

function validateTextarea2() {
    const textarea = document.getElementById('message2');
    const errorMessage = document.getElementById('error-message2');
    const submitBtn = document.getElementById('submit-btn');
    const minLength = 1000;
    const maxLength = 20000;
    const textLength = textarea.value.length;

    if (textLength < minLength || textLength > maxLength) {
        errorMessage.style.display = 'inline';
        submitBtn.disabled = true;  // Disable the submit button
    } else {
        errorMessage.style.display = 'none';
        submitBtn.disabled = false;  // Enable the submit button
    }
}

function validateTextarea3() {
    const textarea = document.getElementById('message3');
    const errorMessage = document.getElementById('error-message3');
    const submitBtn = document.getElementById('submit-btn');
    const minLength = 1000;
    const maxLength = 20000;
    const textLength = textarea.value.length;

    if (textLength < minLength || textLength > maxLength) {
        errorMessage.style.display = 'inline';
        submitBtn.disabled = true;  // Disable the submit button
    } else {
        errorMessage.style.display = 'none';
        submitBtn.disabled = false;  // Enable the submit button
    }
}