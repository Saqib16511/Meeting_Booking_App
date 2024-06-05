const propic = document.querySelector('.pro-pic');
const imge = document.querySelector('.imge');
const blankdp = document.querySelector('#blankdp');
propic.addEventListener('change',()=>{
    const reader = new FileReader();
    reader.readAsDataURL(propic.files[0]);
    reader.onload = ()=>{
        imge.style.backgroundImage = `url(${reader.result})`
        blankdp.style.display = 'none'

    }
})