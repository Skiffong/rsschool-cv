document.addEventListener('DOMContentLoaded', () => {
  
  amenu(".menu", ".menu__list", ".menu__item", ".menu__burger");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar-right").style.padding = "25px";
      document.getElementById("logo").style.maxWidth = "100px";
      document
        .getElementById("logo").setAttribute("src", "img/3.png");
    } else {
      document.getElementById("navbar-right").style.padding = "50px";
      document.getElementById("logo").style.maxWidth = "150px";
      document.getElementById("logo").setAttribute("src", "../img/4.png");
    }
  }

    
})