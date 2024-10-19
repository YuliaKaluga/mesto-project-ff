import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import {
  openModal,
  closeModal,
  addPopupListeners,
} from "./components/modal.js";
import { createCard } from "./components/card.js";

const editProfilePopup = document.querySelector(".popup_type_edit");
addPopupListeners(editProfilePopup);
const addCardPopup = document.querySelector(".popup_type_new-card");
addPopupListeners(addCardPopup);
const imagePopup = document.querySelector(".popup_type_image");
addPopupListeners(imagePopup);

// @todo: Кнопки открытия попапов
const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", fillFormWithCurrentValues);

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => openModal(addCardPopup));

// @todo: Заполнить форму текущими значениями
function fillFormWithCurrentValues() {
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  const nameInput = editProfilePopup.querySelector(".popup__input_type_name");
  const jobInput = editProfilePopup.querySelector(
    ".popup__input_type_description"
  );

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editProfilePopup);
}

// @todo: Отредактировать профиль
const formElement = editProfilePopup.querySelector(
  '.popup__form[name="edit-profile"]'
);
formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const nameInput = formElement.querySelector(".popup__input_type_name");
  const jobInput = formElement.querySelector(".popup__input_type_description");
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editProfilePopup);
});

// @todo: Добавить карточки
const newCardForm = addCardPopup.querySelector(
  '.popup__form[name="new-place"]'
);
newCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const cardNameInput = newCardForm.querySelector(
    ".popup__input_type_card-name"
  );
  const cardLinkInput = newCardForm.querySelector(".popup__input_type_url");

  const newCardElement = createCard(
    { name: cardNameInput.value, link: cardLinkInput.value },
    deleteCard
  );
  cardsContainer.prepend(newCardElement);

  closeModal(addCardPopup);
  newCardForm.reset();
});

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
const cardsContainer = document.querySelector(".places__list");
initialCards.forEach((card) => {
  const cardElement = createCard(card, deleteCard);
  cardsContainer.append(cardElement);
});
