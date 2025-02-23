

document.getElementById('HTML').style.display = 'none';
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '0'; // Replace with your actual password

    if (password === correctPassword) {
        document.getElementById('passwordSection').style.display = 'none';
        document.getElementById('HTML').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
