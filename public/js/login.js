import axios from 'axios';

const login = async (email, password) => {
    console.log(email, password);
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/users/login',
            data: {
                email,
                password
            }
        });
        console.log(res.data); // Output the response data
    } catch (err) {
        console.error(err.response.data); // Output the error response data
    }
};

document.querySelector('.form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login(email, password);
});


