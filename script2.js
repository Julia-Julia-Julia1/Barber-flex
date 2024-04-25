document.addEventListener("DOMContentLoaded", function () {
  // Найти кнопку закрытия модального окна
  const closeButtonModal = document.querySelector(".modal-close-button");
  // Найти контейнер модального окна
  const modalContainer = document.querySelector(".modal-container");

  // Проверить, что кнопка закрытия и контейнер модального окна существуют
  if (closeButtonModal && modalContainer) {
    // Добавить обработчик события клика на кнопку закрытия модального окна
    closeButtonModal.addEventListener("click", function () {
      // Закрыть модальное окно (скрыть контейнер)
      modalContainer.style.display = "none";
    });
  }

  // Найти кнопку закрытия popover
  const closeButtonPopover = document.querySelector(".popover-close-button");
  // Найти элемент popover-cart
  const popoverCart = document.querySelector(".popover-cart");

  // Проверить, что кнопка закрытия и popover-cart существуют
  if (closeButtonPopover && popoverCart) {
    // Добавить обработчик события клика на кнопку закрытия popover
    closeButtonPopover.addEventListener("click", function () {
      // Закрыть popover-cart (скрыть элемент)
      popoverCart.style.display = "none";
    });
  }

  // Найти все элементы списка с классом 'navigation-item'
  const navigationItems = document.querySelectorAll("li.navigation-item");

  // Перебрать все найденные элементы списка
  navigationItems.forEach(function (item) {
    // Добавить обработчик события для двойного клика
    item.addEventListener("dblclick", function () {
      // Найти элемент popover-cart
      const popoverCart = document.querySelector("div.popover-cart");

      // Проверить, что найден элемент popoverCart
      if (popoverCart) {
        // Отобразить popover-cart (показать элемент)
        popoverCart.style.display = "block";
      }
    });
  });
});
