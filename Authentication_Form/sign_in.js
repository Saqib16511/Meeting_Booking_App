const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginbtn = document.querySelector('#loginbtn');

loginbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const formData = {
        Email: `${email.value}`,
    Password: `${password.value}`,
};

// Log the form data
console.log(formData);

// Send the POST request with the form data
fetch('http://localhost:8000/user/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response =>{
    const abc = response.json();
    return abc
})
    
.then(data => {
    console.log('Success:', data);
    // Handle success response
})
.catch(error => {
    console.log('Error:', error);
    // console.error
    // Handle error response
});
});