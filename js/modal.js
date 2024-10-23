const openModal = document.querySelector('.submit');
const modal = document.querySelector('.check-modal');
const closeModal = document.querySelector('.close-modal svg');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})
