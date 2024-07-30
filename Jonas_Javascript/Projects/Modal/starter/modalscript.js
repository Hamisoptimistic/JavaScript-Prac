'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModel = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');

// console.log(btnCloseModel);

const closeModal = function () {
    modal.classList.add('hidden')
    //dont select ClassName with '.' i.e dont do This '.hidden'
    overlay.classList.add('hidden')
}

// using forEach method.

// document.querySelectorAll('.show-modal').forEach(element => {
//     element.addEventListener('click', () => {
//         // console.log("this is from for each method")
//     })
// });

// USING for LOOP 
for (let i = 0; i < btnOpenModel.length; i++) {

    // WORST METHOD.
    // document.querySelectorAll('.show-modal').addEventListener('click', () => {
    //     console.log('Hi');
    // })


    btnOpenModel[i].addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })

    btnCloseModel.addEventListener('click', closeModal)
    // Dont call function with parenthesis () inside addEventListner
    overlay.addEventListener('click', closeModal)

    // console.log(btnOpenModel[i].textContent);
}




// the argument passed as event here stores an object which contains details about the keypressed.
// in this case event = which key was pressed and STORED IN OBJECT FORMAT
document.addEventListener('keydown', (event) => {
    // console.log(event.key);

    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})