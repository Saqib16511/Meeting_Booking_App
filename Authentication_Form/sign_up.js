
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpass = document.querySelector('#confirmpass');
const signupbtn = document.querySelector('#signupbtn');





signupbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const formData = {
        first_name: `${fname.value}`,
        last_name: `${lname.value}`,
        Email: `${email.value}`,
        Password: `${password.value}`
    };
    
    // Log the form data
    console.log(formData);
    if(password.value === confirmpass.value){
        // Send the POST request with the form data
        fetch('http://localhost:8000/user/create', {
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
    Swal.fire('Registration Successful')
    .then(() => {
        window.location.href = '/Authentication_Form/sign_In.html'
    })
    

});
}else{
    Swal.fire('Password Does not match')
}


})