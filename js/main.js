const form = document.querySelector('form');
const result = document.getElementById('wrapper');

const sendWeight = document.getElementById('sendWeight');
const sendHeight = document.getElementById('sendHeight');
const sendBoot = document.getElementById('sendBoot');
const sendEmail = document.getElementById('sendEmail');

const input = document.getElementById('input');

const addForm = (e) => {

    e.preventDefault()

    const titleWeight = sendWeight.value;
    const titleHeight = sendHeight.value;
    const titleBoot = sendBoot.value;
    const titleEmail = sendEmail.value;

    sendWeight.value = '';
    sendHeight.value = '';
    sendBoot.value = '';
    sendEmail.value = '';

    result.textContent = `Weight: ${titleWeight}  | Height: ${titleHeight} | Boot: ${titleBoot} | Email: ${titleEmail}`;
    result.style.display = "block";

}

    // const addBoot = () =>{
    //     let bind = 0.5;

    //     if (titleBoot === '') {
    //         alert('Please Enter Value *')
    //     } else {
    //         const resultBoot = Math.floor(titleBoot) + bind;
    //         return resultBoot;
    //     }
    // }
    // addBoot();



form.addEventListener('submit', addForm);