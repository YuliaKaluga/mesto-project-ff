import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import {
  openModal,
  closeModal,
  addPopupListeners,
} from "./components/modal.js";
import { createCard, deleteCard, handleLike } from "./components/card.js";

// @todo: Попапы
const editProfilePopup = document.querySelector(".popup_type_edit");
addPopupListeners(editProfilePopup);
const addCardPopup = document.querySelector(".popup_type_new-card");
addPopupListeners(addCardPopup);
const imagePopup = document.querySelector(".popup_type_image");
addPopupListeners(imagePopup);

// @todo: Кнопки открытия попапов
const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", openEditForm);

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => openModal(addCardPopup));

// @todo: Заполнить и открыть форму редактирования профиля
function openEditForm() {
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
const editProfileForm = editProfilePopup.querySelector(
  '.popup__form[name="edit-profile"]'
);
editProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const nameInput = editProfileForm.querySelector(".popup__input_type_name");
  const jobInput = editProfileForm.querySelector(
    ".popup__input_type_description"
  );
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
    deleteCard,
    handleLike,
    openImagePopup
  );
  cardsContainer.prepend(newCardElement);

  closeModal(addCardPopup);
  newCardForm.reset();
});

// @todo: Вывести карточки на страницу
const cardsContainer = document.querySelector(".places__list");
initialCards.forEach((card) => {
  const cardElement = createCard(card, deleteCard, handleLike, openImagePopup);
  cardsContainer.append(cardElement);
});

// @todo: Открыть попап с изображением
const openImagePopup = ({ name, link }) => {
  const popupImage = document.querySelector(".popup__image");
  const popupCaption = document.querySelector(".popup__caption");

  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openModal(imagePopup);
};