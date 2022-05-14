//Getting our buttons
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const closeBtn = document.querySelector('#close-btn');

//Getting our elements
const modal = document.querySelector('.modal-hidden');
const sidebar = document.querySelector('.sidebar-container-hidden');


//Buttons functionalities
hamburgerBtn.addEventListener('click', () => {

  modal.classList.add("modal-shown");
  sidebar.classList.add("sidebar-container-shown");
});

closeBtn.addEventListener('click', () => {

  modal.classList.remove('modal-shown');
  sidebar.classList.remove("sidebar-container-shown");
});

//Elements functionalities
/*  When we click on the modal, we also want to close it  */
modal.addEventListener('click', () => {

  modal.classList.remove('modal-shown');
  sidebar.classList.remove("sidebar-container-shown");
});