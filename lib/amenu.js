(() => {
  let burgerWidth = 0,
  lastWidthItem = 0;

const init = (menu, menuList, menuItems, menuBurger) => {
  menuItems.forEach(elem => {
    elem.classList.add('amenu__item');
  });

  menuBurger.classList.add('amenu__burger');

  const [burgerBtn, burgerList] = creatMenuBurger(menuBurger);

  updateMenu(menu, menuList, menuBurger, burgerBtn, burgerList);

  window.addEventListener('resize', () => {
    updateMenu(menu, menuList, menuBurger, burgerBtn, burgerList);
  });
}; 

const creatMenuBurger = (parentBurger) => {
  const burgerBtn = document.createElement('button');
  parentBurger.append(burgerBtn);
  burgerBtn.classList.add('amenu__burger-btn');

  burgerBtn.addEventListener('click', () => {
    parentBurger.classList.toggle('amenu__burger-open')
  });

  const burgerList = document.createElement('ul');
  parentBurger.append(burgerList);
  burgerList.classList.add('amenu__burger-list');

  return [burgerBtn, burgerList];
}

const updateMenu = (menu, menuList, menuBurger, burgerBtn, burgerList) => {
  const menuItems = menuList.querySelectorAll('.amenu__item');
  const burgerItems = burgerList.querySelectorAll('.amenu__item');

  const widthMenu = menu.offsetWidth;

  burgerWidth = menuBurger.offsetWidth || burgerWidth;
  
  const widthAllItems = [...menuItems].reduce((acc, elem) => {
    return acc + elem.offsetWidth + parseFloat(getComputedStyle(elem).marginRight)}, 0) + burgerWidth;

  if (widthMenu < widthAllItems) {
    const lastItem = menuItems[menuItems.length - 1];
    lastWidthItem = lastItem.offsetWidth + parseFloat(getComputedStyle(lastItem).marginRight);
    burgerList.prepend(lastItem);
    return updateMenu(menu, menuList, menuBurger, burgerBtn, burgerList);
  }

  if (widthMenu > widthAllItems + lastWidthItem && burgerItems.length) {
    const firstElem = burgerItems[0];
    menuList.append(firstElem);
    return updateMenu(menu, menuList, menuBurger, burgerBtn, burgerList);
  };

  checkBurgerItems(burgerItems.length, burgerBtn, menuBurger);

}

  const checkBurgerItems = (burgerItemsCount, burgerBtn, menuBurger) => {
    if (burgerItemsCount){
      burgerBtn.classList.add('amenu__burger-btn_active')  
    } else {
      burgerBtn.classList.remove('amenu__burger-btn_active');
      menuBurger.classList.remove('amenu__burger-open');
    }
  };


window.amenu = (selectorMenu, selectorMenuList,
  selectorMenuItems, selectorMenuBurger) => {
    const menu = document.querySelector(selectorMenu),
      menuList = document.querySelector(selectorMenuList),
      menuItems = document.querySelectorAll(selectorMenuItems),
      menuBurger = document.querySelector(selectorMenuBurger);

      init(menu, menuList, menuItems, menuBurger);
}; 
})() 
