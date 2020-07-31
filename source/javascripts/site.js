// This is where it all goes :)
//navbar
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = 'transition duration-300 bg-transparent fixed w-screen'; else nav.className = 'transition duration-300 bg-white fixed w-screen';
};

//modal
const modalTriggers = document.querySelectorAll('.popup-trigger');
console.log(modalTriggers);
const modalCloseTrigger = document.querySelector('.popup-modal__close');
console.log(modalCloseTrigger);
const bodyBlackout = document.querySelector('.body-blackout');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    console.log(trigger.dataset)
    const { popupTrigger } = trigger.dataset
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

    popupModal.classList.add('is--visible')
    bodyBlackout.classList.add('is-blacked-out')

    popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
       popupModal.classList.remove('is--visible')
       bodyBlackout.classList.remove('is-blacked-out')
    });

    bodyBlackout.addEventListener('click', () => {
      // TODO: Turn into a function to close modal
      popupModal.classList.remove('is--visible')
      bodyBlackout.classList.remove('is-blacked-out')
    });
  });
});
