const initNavigationMenu=()=>{const i=document.querySelector(".main-navigation__list"),n=document.querySelector(".main-navigation__toggle");n&&(i.classList.remove("main-navigation__list--nojs"),n.addEventListener("click",(function(){i.classList.contains("main-navigation__list--close")?(i.classList.remove("main-navigation__list--close"),i.classList.add("main-navigation__list--opened")):(i.classList.add("main-navigation__list--close"),i.classList.remove("main-navigation__list--opened"))})))};initNavigationMenu();