import { openModal } from "./modal.js";

// @todo: Функция создания новой карточки
export const createCard = (card, deleteCard, handleLike) => {
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

  // @todo: Поставить лайк, используя переданный обработчик
  likeButton.addEventListener("click", () => {
    handleLike(likeButton);
  });

  // @todo: Удалить карточку
  deleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  return cardElement;
};