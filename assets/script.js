function showMenu() {
   const mobileMenu = document.querySelector('.nav_list_responsive')
   if (mobileMenu.classList.contains('nav_list_responsive_open')){
      mobileMenu.classList.remove('nav_list_responsive_open')
   } else {
      mobileMenu.classList.add('nav_list_responsive_open')
   }
}