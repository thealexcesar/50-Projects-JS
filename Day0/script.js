document.addEventListener('DOMContentLoaded', function() {
   const panels = document.querySelectorAll('.panel');
   panels.forEach(element  => {
      element.addEventListener('click', () => {
         removeActiveClasses();
         element.classList.add('active');
      });

   });
   function removeActiveClasses() {
      panels.forEach(element => {
         element.classList.remove('active');
      });
   }
});


