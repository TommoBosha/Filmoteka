const refs = {
  openModal: document.querySelector('.js-open-modal-footer'),
  closeModal: document.querySelector('.js-close-modal-footer'),
  teamBackdrop: document.querySelector('.backdrop-footer'),
};

refs.openModal.addEventListener('click', openModalTeam);
refs.closeModal.addEventListener('click', closeModalTeam);

function openModalTeam(event) {
  refs.teamBackdrop.classList.remove('team__backdrop--hidden');
  document.addEventListener('keydown', onEscapeClose);
  document.addEventListener('click', onBackdropClose);
  document.body.style.overflow = 'hidden';
}

function closeModalTeam(event) {
  refs.teamBackdrop.classList.add('team__backdrop--hidden');
  document.removeEventListener('keydown', onEscapeClose);
  document.body.style.overflow = '';
}

function onEscapeClose(event) {
  if (event.code === 'Escape') {
    closeModalTeam();
  }
}

function onBackdropClose(event) {
  if (event.target === refs.teamBackdrop) {
    closeModalTeam();
  }
}
