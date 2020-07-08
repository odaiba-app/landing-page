// This is where it all goes :)

//navbar
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = 'bg-transparent fixed w-full p-6 m-auto z-50'; else nav.className = 'bg-white fixed w-full p-6 m-auto z-50';
};
