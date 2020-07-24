// This is where it all goes :)
//navbar
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = 'transition duration-300 bg-transparent fixed w-screen'; else nav.className = 'transition duration-300 bg-white fixed w-screen';
};
