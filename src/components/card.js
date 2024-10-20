import { openModal } from "./modal.js";

// @todo: Функция создания новой карточки
export const createCard = (card, deleteCard, handleLike, openImagePopup) => {
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
    handleLike(likeButton);
  });

  // @todo: Удалить карточку
  deleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  // @todo: Открыть попап с изображением
  cardImage.addEventListener("click", () => {
    openImagePopup({ name: card.name, link: card.link });
  });

  return cardElement;
};

// @todo: Функция удаления карточки
export const deleteCard = (cardElement) => {
  cardElement.remove();
};

// @todo: Функция лайка карточки
export const handleLike = (likeButton) => {
  likeButton.classList.toggle("card__like-button_is-active");
};