// @todo: Закрыть на Escape
const handleEscKeyUp = (e) => {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
};

// @todo: Функция открытия попапа
export const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleEscKeyUp);
};

// @todo: Функция закрытия попапа
export const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEscKeyUp);
};

// @todo: Установить слушателей
export const addPopupListeners = (popupElement) => {
  const closeButton = popupElement.querySelector(".popup__close");

  closeButton.addEventListener("click", () => {
    closeModal(popupElement);
  });

  popupElement.addEventListener("mousedown", (event) => {
    if (event.target === popupElement) {
      closeModal(popupElement);
    }
  });
};