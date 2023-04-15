
document.addEventListener("click", function (e) {
   const targetElement = e.target;

   if (targetElement.closest('.burger')) {
      document.documentElement.classList.toggle('burger-open');
      e.preventDefault();
   }

})