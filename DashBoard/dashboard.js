// const { duration } = require("moment");

// const { duration } = require("moment");

const addbookingBtn = document.querySelector('.add-booking');
const bookingContainer = document.querySelector('.booking-container');
const cancelbtn = document.querySelector('.cancelbtn');
const description = document.querySelector('#description');
const rightmain = document.querySelector('.right-main');
const table = document.querySelector('.table');
const scheddiv = document.querySelector('.sched-div');
const ppdiv =document.querySelector('.ppdiv');
const signout =document.querySelector('.signout');
const profilepic = document.querySelector('.profile-pic');
const container = document.querySelector('.container');
const AddBooking = document.querySelector('#add');
const rightMain = document.querySelector('.right-main');
const addSchelulebtn = document.querySelector('.add-schedule-btn');
const schedulecontainer = document.querySelector('.schedule-container');
const schcanceladdd = document.querySelector('#schcancel-addd');
const schformtitleinput = document.querySelector('#schedule-title-input');
const schadd = document.querySelector('#schadd');
const schformtime = document.querySelector('#sch-form-time');
const sidebar =document.querySelector('.sidebar');
const menubarbtn = document.querySelector('.menu-bar');
const editbookingContainer = document.querySelector('.editbooking-container');
const editgettitle = document.querySelector('#editgettitle');
const edittimeget = document.querySelector('#edittimeget');
const editbookingdescription = document.querySelector('.editbookingdescription');

addbookingBtn.addEventListener('click',()=>{
    if(bookingContainer.style.display = 'none'){
        bookingContainer.style.display = 'block'
    };
})
window.addEventListener('click',(e)=>{
    if(e.target.classList.contains('booking-container')){
        bookingContainer.style.display = 'none'
    };
    let check = !e.target.classList.contains('signout');
    let checked = !e.target.classList.contains('imgage');
    console.log(check)
    if(check && checked){
        signout.style.display = 'none'
        profilepic.classList.remove('active');
    }


})



cancelbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(bookingContainer.style.display = 'block'){
        bookingContainer.style.display = 'none'
    }
})
// SCHEDULE PAGE
scheddiv.addEventListener('click',()=>{
    if(table.style.display = 'none'){
        table.style.display = 'block'
        scheddiv.style.textDecoration = "underline";
        scheddiv.style.textUnderlineOffset = "0.4em";
        ppdiv.style.textDecoration = 'none'
        rightmain.style.display = 'none'
        bookingContainer.style.display = 'none'
        schedulecontainer.style.display = 'none'

    };
})
// SCHEDULE FORM
addSchelulebtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(schedulecontainer.style.display = 'none'){
        schedulecontainer.style.display = 'block'
    };
})
window.addEventListener('click',(e)=>{
    if(e.target.classList.contains('schedule-container')){
        schedulecontainer.style.display = 'none'
    }
})
schcanceladdd.addEventListener('click',(e)=>{
    e.preventDefault();
    if(schedulecontainer.style.display = 'black'){
        schedulecontainer.style.display = 'none'
    }
})
// SCHEDULE FORM END

// SCHEDULE TABLE RENDERING
schadd.addEventListener('click',(e)=>{
    e.preventDefault()
    const tr = document.createElement('tr');
    const tbody = document.querySelector('.tbody');
    tbody.appendChild(tr);
    
    const titletd = document.createElement('td');
    tr.appendChild(titletd);
    titletd.textContent = schformtitleinput.value;
    
    const bbokingtime = document.createElement('td');
    tr.appendChild(bbokingtime);
    bbokingtime.textContent = schformtime.value;
    
    const scheedday = document.createElement('td');
    tr.appendChild(scheedday);
    let inputElements = document.querySelectorAll('.schdaybox');
    for(let i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){
            scheedday.textContent = inputElements[i].value;
               break;
            };
          };

    const activestatus = document.createElement('td');
    tr.appendChild(activestatus);
    const activestatusdiv = document.createElement('button');
    activestatus.appendChild(activestatusdiv);
    activestatusdiv.classList.add('activestatus');
    activestatusdiv.textContent = 'Active';
    
    const cancelstatus =  document.createElement('td');
    tr.appendChild(cancelstatus);
    const cancelstatusdiv = document.createElement('button');
    cancelstatus.appendChild(cancelstatusdiv)
    cancelstatusdiv.textContent = 'Cancel'
    cancelstatusdiv.classList.add('cancelstatus');
    schedulecontainer.style.display = 'none'

cancelstatus.addEventListener('click',(e)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        e.target.parentElement.parentElement.remove();

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
});

});
    
// BOOKING CARD PAGE
ppdiv.addEventListener('click',()=>{
    if(rightmain.style.display = 'none'){
        rightmain.style.display = 'block'
        scheddiv.style.textDecoration = "none";
        ppdiv.style.textDecoration = 'underline'
        ppdiv.style.textUnderlineOffset = "0.4em"
        table.style.display = 'none';
        bookingContainer.style.display = 'none';
        schedulecontainer.style.display = 'none'

    }
});
// SIDEBAR START
sidebar.style.display = 'none'
menubarbtn.addEventListener('click',()=>{
    if(sidebar.style.display == 'none'){
        sidebar.style.display = 'block'
        menubarbtn.classList.add('active-bar');
        menubarbtn.style.display = 'block'
        sidebar.style.left = '75%'
        schedulecontainer.style.display = 'none';
        bookingContainer.style.display = 'none';

        // console.log('hiii')
    }else{
       sidebar.style.display = 'none'
       console.log('jajaja')
       menubarbtn.classList.remove('active-bar');

    }
})
// SIDEBAR END

// SIDEBAR GO TO BOOKING PAGE START
const sidebarbooking = document.querySelector('.sidebar-booking').addEventListener('click',()=>{
    if(rightmain.style.display = 'none'){
        rightmain.style.display = 'block'
        table.style.display = 'none';
       sidebar.style.display = 'none';
       menubarbtn.classList.remove('active-bar');
    }
});
// SIDEBAR GO TO BOOKING PAGE END


// SIDEBAR GO TO SCHEDULE PAGE START
const sidebarschedule = document.querySelector('.sidebar-schedule').addEventListener('click',()=>{
    if(table.style.display = 'none'){
        table.style.display = 'block'
        rightmain.style.display = 'none';
       menubarbtn.classList.remove('active-bar');
       sidebar.style.display = 'none';

    };
});
// SIDEBAR GO TO SCHEDULE PAGE END

// SIDEBAR GO TO PROFILE START
const sidebarprofile = document.querySelector('.sidebar-profile').addEventListener('click',()=>{
    window.location.href = "../Authentication_Form/editpro.html";
});


const sidebarsignout = document.querySelector('.sidebar-signOut').addEventListener('click',()=>{
    window.location.href = "../Authentication_Form/sign_In.html";
})

// SIGN OUT BOX
profilepic.addEventListener('click',()=>{
    if(signout.style.display === 'flex'){
        signout.style.display = 'none'
        profilepic.classList.toggle('active')
        // console.log('hiii')
    }else{
       signout.style.display = 'flex'
       profilepic.style.display = 'block'
       profilepic.classList.toggle('active');

    }
});

// DESCRIPTION TEXTAREA
// ClassicEditor
// .create( document.querySelector( '#description' ) )
//                 .then( editor => {
//                         console.log( editor );
//                 } )
//                 .catch( error => {
//                         console.error( error );
//                 } );

                
// CARD RENDERING

let bookingform = document.querySelector('#booking-form');
bookingform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const titlevalue = document.querySelector('#gettitle').value;
    const duevalue = document.querySelector('#timeget').value
    const desvalue = document.querySelector('#description').value
    bookingContainer.style.display = 'none'

    // const title = titlevalue.value
        console.log(titlevalue);
    const formData = {
        title: `${titlevalue}`,
        description: `${desvalue}`,
        duration: `${duevalue}`
    };

    // Log the form data
    console.log(formData);

    // Send the POST request with the form data
    fetch('http://localhost:8000/booking/create', {
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







    const cardSection = document.querySelector('.cards-section')
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardSection.appendChild(cardContainer);

    const img = document.createElement('img');
    img.src = './meeting5.png'
    cardContainer.appendChild(img);

    const first = document.createElement('div');
    first.classList.add('first');
    cardContainer.appendChild(first);

    const cardtitle = document.createElement('div');
    cardtitle.classList.add('title');
    first.appendChild(cardtitle);

    // TITTLE DIV
    const tittleheader = document.createElement('h1');
    cardtitle.appendChild(tittleheader);
    const gettitle = document.querySelector('#gettitle');
    tittleheader.textContent = gettitle.value;

    const second = document.createElement('div');
    second.classList.add('second');
    cardContainer.appendChild(second);

    // TIME DIV
    const clocklogo = document.createElement('i');
    // clocklogo.classList.add('fa-regular fa-clock');
    clocklogo.className = 'fa-regular fa-clock'
    second.appendChild(clocklogo);

    const timediv = document.createElement('div');
    second.appendChild(timediv);
    const timeminut = document.createElement('div');
    second.appendChild(timeminut);

    const timeget =document.querySelector("#timeget");
    timediv.textContent = timeget.value;

    const minutestime = document.querySelector('#minutestime');
    timeminut.textContent = minutestime.innerHTML

    const third = document.createElement('div')
    third.classList.add('third');
    cardContainer.appendChild(third);

    // BOOKING ON OFF BTN
    // const onoff = document.createElement('input');
    // onoff.setAttribute('type','checkbox');
    // onoff.setAttribute('id','check')
    // third.appendChild(onoff);
    // // console.log(onoff)

    // const inplabel = document.createElement('label');
    // inplabel.setAttribute('for','check');
    // inplabel.classList.add('switchlabel')
    // third.appendChild(inplabel);

    const bookingp = document.createElement('p');
    bookingp.textContent = 'BOOKING'
    third.appendChild(bookingp);

    const description = document.createElement('div');
    description.classList.add('discription');
    cardContainer.appendChild(description);

    // DESCRIPTION BOX
    const descriptdiv = document.createElement('div');
    description.appendChild(descriptdiv);

    const bookingdescription = document.querySelector('.bookingdescription');
    descriptdiv.textContent = bookingdescription.value;


    const fourth = document.createElement('div');
    fourth.classList.add('fourth');
    cardContainer.appendChild(fourth);

    const copylink = document.createElement('div');
    copylink.classList.add('copylink');
    fourth.appendChild(copylink);

    const linkI = document.createElement('i');
    linkI.className = 'fa-solid fa-copy'
    copylink.appendChild(linkI);

    // COPY LINK
    let anchor = document.createElement('a');
    anchor.textContent = 'Copy link';
    copylink.appendChild(anchor);
    anchor.style.cursor = 'pointer'

    let copylinkdiv = document.createElement('div');
    copylink.appendChild(copylinkdiv);
    copylinkdiv.innerHTML = '/DashBoard/dashboard.html'
    copylinkdiv.style.display = 'none'
    // COPY CLIPBOARD
    anchor.addEventListener('click',()=>{
        navigator.clipboard.writeText(copylinkdiv.innerHTML)  
        alert('Link Copied')
    })

    const deletee = document.createElement('div');
    deletee.classList.add('delete');
    fourth.appendChild(deletee);

    const trash = document.createElement('i');
    trash.className = 'fa-solid fa-trash';
    deletee.appendChild(trash);
    // DELETE CARD
    trash.addEventListener('click',(e)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                e.target.parentElement.parentElement.parentElement.remove();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });

    });

    const edit = document.createElement('i');
    edit.className ='fas fa-edit';
    deletee.appendChild(edit);

    // EDIT CARD
    // edit.addEventListener('click',(e)=>{
    //     bookingContainer.style.display = 'block'
    //     gettitle.value =   tittleheader.textContent;
    //     timeget.value = timediv.textContent;
    //     bookingdescription.value = descriptdiv.textContent;                
            
    // });
    // const checkboxunchecked = document.querySelectorAll('.daybox')
    // bookingContainer.style.display = 'none'
    // bookingdescription.value = ''
    // timeget.value = '';
    // gettitle.value = '';
    // checkboxunchecked.forEach(e=>{
    //     e.checked = false;
    // });
    


});


// bookingform.addEventListener('submit', function(event) {
//     // event.preventDefault(); // Prevent the form from submitting the traditional way
//     const titlevalue = document.querySelector('#gettitle');
//     const title = titlevalue.value
//         console.log(title)
//     // const titlevalue = document.querySelector('#gettitle').value;
//     //     console.log(titlevalue)

//     // Create a FormData object to hold the form data
//     // const formData = new FormData(bookingform);
//     // console.log(formData)
//     // Convert FormData to JSON
//     // titlevalue.value
//     // console.log(titlevalue.value)
//     const data = {
//         title: titlevalue
//     };
//     // console.log(data)
//     // formData.forEach((value, key) => {
//     //     console.log(data[key] = data[value])
//     // });
//     // const formData = new FormData(bookingform)
//     // console.log(formData);
//     // for (const [key, value] of formData.entries()) {
//     //     data[key] = value;
//     //     console.log(value)
//     // }


//     // Send the POST request using Fetch API
//     fetch('http://localhost:8000/booking/create', { // Replace with your server URL
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         // You can handle the success response here
//     })
// });


// USERS API
const api = 'http://localhost:8000/bookings'

async function fetchapi(){
    const response = await fetch(api);
    const result = response.json()
    return result
};

fetchapi()
.then(data=>{
    data.map(element => {
        // console.log(element.id);
    const cardSection = document.querySelector('.cards-section')
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardContainer.setAttribute('data-id',`${element.id}`)
    cardSection.appendChild(cardContainer);


    const img = document.createElement('img');
    img.src = './meeting5.png'
    cardContainer.appendChild(img);

    const first = document.createElement('div');
    first.classList.add('first');
    cardContainer.appendChild(first);

    const cardtitle = document.createElement('div');
    cardtitle.classList.add('title');
    first.appendChild(cardtitle);

    // TITTLE DIV
    const tittleheader = document.createElement('h1');
    cardtitle.appendChild(tittleheader);
    const gettitle = document.querySelector('#gettitle');
    tittleheader.textContent = element.title;

    const second = document.createElement('div');
    second.classList.add('second');
    cardContainer.appendChild(second);

    // TIME DIV
    const clocklogo = document.createElement('i');
    // clocklogo.classList.add('fa-regular fa-clock');
    clocklogo.className = 'fa-regular fa-clock'
    second.appendChild(clocklogo);

    const timediv = document.createElement('div');
    second.appendChild(timediv);
    const timeminut = document.createElement('div');
    second.appendChild(timeminut);

    const timeget =document.querySelector("#timeget");
    timeget.textContent = element.duration;
        // console.log(timediv)
    const minutestime = document.querySelector('#minutestime');
    timeminut.textContent = minutestime.innerHTML

    const third = document.createElement('div')
    third.classList.add('third');
    cardContainer.appendChild(third);
    third.setAttribute('data-id',element.id);

    // BOOKING ON OFF BTN
    const onoff = document.createElement('div');
    onoff.setAttribute('data-id',element.id)
    onoff.classList.add('track');
    third.appendChild(onoff);
    
    const sliderspan = document.createElement('span');
    sliderspan.classList.add('slider')
    sliderspan.setAttribute('data-id',element.id)
    onoff.appendChild(sliderspan);

    if(element.active == 1){
        sliderspan.style.left = '60%'
        onoff.style.background = 'blue'
        console.log('hi')

    }
    // const switchround = document.querySelectorAll('.switch')
    // const switchbtn = document.querySelectorAll('.track');
    // switchbtn.addEventListener('click',()=>{
        
      
    // });
    
   
        //   JavaScript for handling toggle functionality
// document.addEventListener('DOMContentLoaded', () => {
//     // Select all toggle buttons
//     document.querySelectorAll('.track').forEach(btn => {
//         // Attach a change event listener to each toggle button
//         console.log('ssss ')
//         btn.addEventListener('change', function(e) {
//             const test = element.id;
//             console.log(e.target.getAttribute('data-id'))
//             console.log('check --' + test);
//             // Find the closest parent card element
//             const cardElement = this.closest('.third');
//             // console.log(cardElement)
//             const cardId = cardElement.dataset.id;
//             // console.log(cardId)
//             const isChecked = this.checked;
//             // console.log(isChecked)

//             // Log the state change
//             // console.log(`Card ${cardId} is ${isChecked ? 'ON' : 'OFF'}`);

//             // Example: Update the card's background color based on the toggle state
//             if (isChecked) {
//                 cardElement.style.backgroundColor = '#e0f7fa';
//             } else {
//                 cardElement.style.backgroundColor = '';
//             }

//             // Optionally, you could make an API call here to update the server
//             /*
//             fetch(`http://your-api-url/cards/${cardId}`, {
//                 method: 'PUT', // or 'PATCH' depending on your API
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ isActive: isChecked })
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Card update response:', data);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//             */
//         });
//     });
// });
      

    const bookingp = document.createElement('p');
    bookingp.textContent = 'BOOKING'
    third.appendChild(bookingp);

    // const switchLabel = document.querySelectorAll('.switchlabel')
    // console.log(switchLabel);
    // switchLabel.map(item=>{
    //     item.addEventListener('click',(e)=>{
    //         console.log(item)
    //     })
    // })

    const description = document.createElement('div');
    description.classList.add('discription');
    cardContainer.appendChild(description);

    // DESCRIPTION BOX
    const descriptdiv = document.createElement('div');
    description.appendChild(descriptdiv);

    const bookingdescription = document.querySelector('.bookingdescription');
    descriptdiv.textContent = element.description;


    const fourth = document.createElement('div');
    fourth.classList.add('fourth');
    cardContainer.appendChild(fourth);

    const copylink = document.createElement('div');
    copylink.classList.add('copylink');
    fourth.appendChild(copylink);

    const linkI = document.createElement('i');
    linkI.className = 'fa-solid fa-copy'
    copylink.appendChild(linkI);

    // COPY LINK
    let anchor = document.createElement('a');
    anchor.textContent = 'Copy link';
    copylink.appendChild(anchor);
    anchor.style.cursor = 'pointer'

    let copylinkdiv = document.createElement('div');
    copylink.appendChild(copylinkdiv);
    copylinkdiv.innerHTML = '/DashBoard/dashboard.html'
    copylinkdiv.style.display = 'none'
    // COPY CLIPBOARD
    anchor.addEventListener('click',()=>{
        navigator.clipboard.writeText(copylinkdiv.innerHTML)  
        alert('Link Copied')
    })

    const deletee = document.createElement('div');
    deletee.classList.add('delete');
    fourth.appendChild(deletee);

    const trash = document.createElement('i');
    trash.className = 'fa-solid fa-trash';
    deletee.appendChild(trash);
    // DELETE CARD
    trash.addEventListener('click',(e)=>{
        deletecard(element.id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                e.target.parentElement.parentElement.parentElement.remove();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        // if(confirm('Do You Want TO Delete This Card?') == true){
        //     e.target.parentElement.parentElement.parentElement.remove();
        // }      
    });

    const edit = document.createElement('i');
    edit.className ='fas fa-edit';
    deletee.appendChild(edit);

    // EDIT CARD
    edit.addEventListener('click',(e)=>{
        e.preventDefault()
        // function editcard(element){}
        const editid = element.id
        editbookingContainer.style.display = 'block'
        editgettitle.value =   tittleheader.textContent;
        edittimeget.value = timediv.textContent;
        editbookingdescription.value = descriptdiv.textContent;                
        
        // UPDATE API START
        const editsavecard = document.querySelector('#editbooking-form')
        editsavecard.addEventListener('submit',()=>{
            cardeditapi(element.id)
            
        })
        function cardeditapi(item){
            console.log(item)
            const formData = {
                title: `${editgettitle.value}`,
                duration: `${edittimeget.value}`,
                description: `${editbookingdescription.value}`
            };
            console.log(formData)
            console.log(editid)
            fetch('http://localhost:8000/booking/'+ item, {
                method: 'PUT',
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
        }

        // UPDATE API END
    });
    

        // CANCEL EDIT FORM
        document.querySelector('#editcancelbtn').addEventListener('click',(e)=>{
            e.preventDefault()
            editbookingContainer.style.display = 'none'

        });
 

    });
})
.catch(e=> console.log(e));

document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        // console.log('timeout')
        // console.log(document.querySelectorAll('.switch'))
        // Select all toggle buttons
        document.querySelectorAll('.track').forEach(btn => {
            // console.log(btn.getAttribute('data-id'))
            // Attach a change event listener to each toggle button
            btn.addEventListener('click', function(e) {
                const bol = e.target.getAttribute('data-id');
                const test = e.target;
                const btn = e.target.children[0];
                // console.log(bol)
                // console.log()
               if(btn.style.left == '60%'){
                   btn.style.left = '0%'
                   btn.style.transition = '0.5s'
                   test.style.background = 'grey'
                   test.style.transition = '0.5s'


                   const obj ={
                    id: bol,
                    active: 0
                }
                // start
                fetch('http://localhost:8000/booking/status',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
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
        // end
                   
                }else{
                    btn.style.left = '60%'
                    localStorage.setItem('on' , `${btn.style.left == '60%'}`)
                    btn.style.transition = '0.5s'
                    test.style.transition = '1s'
                    test.style.background = 'blue'
                    const obj ={
                        active: 1,
                        id: bol
                    }
                    // start
                    fetch('http://localhost:8000/booking/status',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
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
                    // end
               }
                
            });
        });
    }, 1500);
    
});

// SCHEDULE API
const sheduleapi = 'http://localhost:8000/schedules'

async function schedulesapi(){
    const response = await fetch(sheduleapi);
    const result = response.json()
    return result
};

schedulesapi()
.then(data=>{
    // console.log(data)
    data.map(item =>{
        const tr = document.createElement('tr');
    const tbody = document.querySelector('.tbody');
    tbody.appendChild(tr);
    
    const titletd = document.createElement('td');
    tr.appendChild(titletd);
    titletd.textContent = item.fullname;
    
    const bbokingtime = document.createElement('td');
    tr.appendChild(bbokingtime);
    bbokingtime.textContent = item.email;
    
    const scheedday = document.createElement('td');
    tr.appendChild(scheedday);
    // let inputElements = document.querySelectorAll('.schdaybox');
    const formattedDate = item.updated_at.slice(0, 10);
           scheedday.textContent = formattedDate
            console.log(formattedDate); // "2021-07-14"

    const activestatus = document.createElement('td');
    tr.appendChild(activestatus);
    const activestatusdiv = document.createElement('button');
    activestatus.appendChild(activestatusdiv);
    activestatusdiv.classList.add('activestatus');
    activestatusdiv.textContent = 'Active';
    
    const cancelstatus =  document.createElement('td');
    tr.appendChild(cancelstatus);
    const cancelstatusdiv = document.createElement('button');
    cancelstatus.appendChild(cancelstatusdiv)
    cancelstatusdiv.textContent = 'Cancel'
    cancelstatusdiv.classList.add('cancelstatus');
    schedulecontainer.style.display = 'none'

cancelstatus.addEventListener('click',(e)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        e.target.parentElement.parentElement.remove();

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
});
    })
})
.catch(e=> console.log(e));



// const sheduleapidelete = 'http://localhost:8000/schedule/3'

// async function sheduledelete(){
//     const response = await fetch(sheduleapidelete);
//     const result = response.json();
//     return result
// };
// sheduledelete()
// .then(data=>{
//     console.log(data);
//     data.map(item=>{
        
        
//     })
// }).catch(e=> console.log(e));


// DELETE API 
function deletecard(id){
        fetch('http://localhost:8000/booking/delete/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
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
}
