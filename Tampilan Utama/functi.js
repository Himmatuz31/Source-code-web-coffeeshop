window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
   });


   function toggleMenu(){
       const menuToggle = document.querySelector('.menuToggle');
       const navigation = document.querySelector('.navigation');
       menuToggle.classList.toggle('active');
       navigation.classList.toggle('active');
   }
</script>
<script>
   const popup = document.querySelector('.popup');
   const close = document.querySelector('.close');

   window.onload = function(){
       setTimeout(function(){
           popup.style.display = "block";

           // Add some time delay to show popup 
       }, 2000)
   }
   close.addEventListener('click', () => {
       popup.style.display = "none";
   })