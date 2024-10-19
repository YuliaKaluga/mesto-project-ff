import { openModal } from "./modal.js";

// Функция создания новой карточки
export const createCard = (card, deleteCard) => {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");

  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  // @todo: Поставить лайк
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });

  // @todo: Удалить карточку
  deleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  // @todo: Открыть карточку
  cardImage.addEventListener("click", () => {
    openImagePopup({ name: card.name, link: card.link });
  });

  return cardElement;
};

// @todo: Открыть попап с картинкой
const openImagePopup = ({ name, link }) => {
  const popupImage = document.querySelector(".popup__image");
  const popupCaption = document.querySelector(".popup__caption");
  const popup = document.querySelector(".popup_type_image");

  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openModal(popup);
};
