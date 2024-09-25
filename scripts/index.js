// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

function createCard(card, deleteCard) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    deleteCard(cardElement);
  });

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
const cardsContainer = document.querySelector(".places__list");
initialCards.forEach(function (card) {
  const cardElement = createCard(card, deleteCard);
  cardsContainer.append(cardElement);
});