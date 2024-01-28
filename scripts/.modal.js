const modal = document.querySelector('#modal');
const openModalArray = document.querySelectorAll('.button--main');
const closeModal = document.querySelector('.modal__close');

for (const modalButton of openModalArray) {
    modalButton.addEventListener('click', () => {
        modal.showModal();
    })
}

closeModal.addEventListener('click', () => {
    modal.close();
})