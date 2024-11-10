document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-link'); 
  let currentFocus = 0; 

  function setFocus(index) {
      navItems.forEach(item => item.blur());
      navItems[index].focus(); 
  }

  document.addEventListener('keydown', function (event) {
      if (document.activeElement.classList.contains('nav-link')) {
          if (event.key === 'ArrowLeft') {
              currentFocus = (currentFocus > 0) ? currentFocus - 1 : navItems.length - 1;
              setFocus(currentFocus);
              event.preventDefault(); 
          } else if (event.key === 'ArrowRight') {
              currentFocus = (currentFocus < navItems.length - 1) ? currentFocus + 1 : 0;
              setFocus(currentFocus);
              event.preventDefault(); 
          }
      }
  });

  setFocus(currentFocus);
});