// 'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModel = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');

console.log(btnCloseModel);

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (i = 0; i < btnOpenModel.length; i++) {

    // WORST METHOD.
    // document.querySelectorAll('.show-modal').addEventListener('click', () => {
    //     console.log('Hi');
    // })

    btnOpenModel[i].addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })

    btnCloseModel.addEventListener('click', closeModal)
    overlay.addEventListener('click', closeModal)

    // console.log(btnOpenModel[i].textContent);
}