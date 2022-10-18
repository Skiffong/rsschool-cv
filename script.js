document.addEventListener("DOMContentLoaded", () => {
  /*burger menu*/
  let header__burger = document.querySelector(".header__burger");
  let header__body = document.querySelector(".header__body");
  let header__menu = document.querySelector(".header__menu");
  let lock = document.querySelector("body");
  let header__list = document.querySelector(".header__list");

  header__burger.onclick = function () {
    header__burger.classList.toggle("active");
    header__menu.classList.toggle("active");
    lock.classList.toggle("lock");
  };

  header__list.onclick = function () {
    header__burger.classList.toggle("active");
    header__menu.classList.toggle("active");
    lock.classList.remove("lock");
  };

  //scroll
  function scrollFunction() {
    if (document.documentElement.clientWidth >= 768) {
      window.onscroll = function () {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          header__body.style.height = "50px";
        } else {
          header__body.style.height = "80px";
        }
      };
    }
  }
  window.addEventListener(
    "resize",
    () => {
      if (document.documentElement.clientWidth >= 768) {
        window.onscroll = function () {
          scrollFunction();
        };
      } else {
        header__body.style.height = "50px";
      }
    },
    true
  );
});
