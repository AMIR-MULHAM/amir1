const btnW = document.querySelector('.social-icon:nth-of-type(1)');
btnW.onclick = () => {
    alert('WhatsUp: 0544225320');
}

const btnS = document.querySelector('.social-icon:nth-of-type(2)');
btnS.onclick = () => {
    alert('SnapChat: amir717sd');
}

const btnI = document.querySelector('.social-icon:nth-of-type(3)');
btnI.onclick = () => {
    alert('Instagram: amir717sd');
}

const img1 = document.querySelector('.py-0');
img1.onclick = () => {
    alert('Alt+Shift صرماية الرئيس على راسك')
}

let form = document.querySelector('form');
let input = document.querySelector('#text');
form.addEventListener('submit', (x) =>{
    x.preventDefault();
    alert('قلنالك رأيك غير مهم ليش ترسل؟؟!');
    input.value = "";
})