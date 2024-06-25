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
// console.log(formData);

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
async function getUser(){
    try {
       
        await fetch('http://localhost:8000/user/51', {
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
    console.log(data)
 
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
        console.log(error)
        
    }
}
getUser()



// GET NEW TOKEN
async function newToken(){

    await fetch('http://localhost:8000/token', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + getREFRESHCookie('RefreshToken')
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
}

// newToken()


// GET TOKEN FROM COOKIE
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    const cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split("=");
        
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

// GET REFRESHTOKEN FROM COOKIE
function getREFRESHCookie(name) {
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
};