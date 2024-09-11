document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correctUsername = 'Reyvan';
    const correctPassword = 'Reyvan';
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === correctUsername && password === correctPassword) {
        alert('Login berhasil');
        console.log('Berhasil');
        window.location.href = 'index.html';
    } else {
        alert('Login Gagal');
        console.log('Gagal');
    }
});
