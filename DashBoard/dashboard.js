const addbooking = document.querySelector('.add-booking');
const bookingContainer = document.querySelector('.booking-container');
const cancelbtn = document.querySelector('.cancelbtn');


addbooking.addEventListener('click',(event)=>{
    if(bookingContainer.style.display = 'none'){
        bookingContainer.style.display = 'block'
    };
})
window.addEventListener('click',(e)=>{
    if(e.target.classList.contains('booking-container')){
        bookingContainer.style.display = 'none'
    }


})
cancelbtn.addEventListener('click',()=>{
    if(bookingContainer.style.display = 'block'){
        bookingContainer.style.display = 'none'
    }
})