// This is where it all goes :)

//wait for DOM to load
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

//navbar
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = 'transition duration-300 bg-transparent fixed w-full p-6 m-auto z-50'; else nav.className = 'transition duration-300 bg-white fixed w-full p-6 m-auto z-50';
};

//toggle sidebar
const sidebar = document.querySelector('.side-menu');
const ham = document.querySelector('#hamburger');

ham.addeventlistener('click', function() {
 sidebar.classList.toggle('.hidden')
});
