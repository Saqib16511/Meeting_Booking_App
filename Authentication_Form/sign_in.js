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
    document.cookie = `Token = ${data.accessToken}`
    document.cookie = `RefreshToken = ${data.refershToken}`
    // Handle success response
})
.catch(error => {
    console.log('Error:', error);
    // console.error
    // Handle error response
});
});

// NEW TOKEN
function getUser(){
    try {fetch('http://localhost:8000/user/51', {
        // method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + getCookie('Token') 
    },
    // body: JSON.stringify(formData)
})
.then(response =>{
    const abc = response.json();
    
    return abc
})

.then(data => {
    console.log('Success:', data);
    // document.cookie = `Token = ${data.accessToken}`
    // document.cookie = `RefreshToken = ${data.refershToken}`
    
    // Handle success response
})
.catch(error => {
    console.log('Error:', error);
    // console.error
    // Handle error response
});
        
    } catch (error) {

    }
}
getUser()


// GET TOKEN FROM COOKIE
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    let cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}