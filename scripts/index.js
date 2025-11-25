const editProfileBtn = document.querySelector(".profile__edit-btn");
const addCardBtn = document.querySelector(".profile__new-post-btn");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const profileAvatarEl = document.querySelector("#profile-avatar");
const avatarEditButton = document.querySelector(".profile__avatar-edit-button");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close");
const editProfileSubmitBtn = editProfileModal.querySelector(
  ".modal__submit-button"
);
const editFormEl = editProfileModal.querySelector(".modal__form");
const nameInputEl = editFormEl.querySelector("#profile-name-input");
const descriptionInputEl = editFormEl.querySelector(
  "#profile-description-input"
);

const addCardModal = document.querySelector("#add-card-modal");
const addCardCloseBtn = addCardModal.querySelector(".modal__close");
const addCardFormEl = addCardModal.querySelector(".modal__form");
const cardSubmitBtn = addCardModal.querySelector(".modal__submit-button");
const captionInputEl = addCardFormEl.querySelector("#card-caption-input");
const linkInputEl = addCardFormEl.querySelector("#card-link-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

const deleteCardModal = document.querySelector("#delete-card-modal");
const deleteCardFormEl = deleteCardModal.querySelector(".modal__form");
const deleteCardSubmitBtn = deleteCardModal.querySelector(
  ".modal__submit-button"
);
const deleteCardCloseBtn = deleteCardModal.querySelector(".modal__close");

const editAvatarModal = document.querySelector("#edit-avatar-modal");
const editAvatarFormEl = editAvatarModal.querySelector(".modal__form");
const editAvatarSubmitBtn = editAvatarModal.querySelector(
  ".modal__submit-button"
);
const editAvatarCloseBtn = editAvatarModal.querySelector(".modal__close");
const avatarLinkInputEl = editAvatarFormEl.querySelector("#avatar-link-input");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");
let selectedCardElement = null;
let selectedCardId = null;

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.dataset.id = data._id;

  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;
  const cardId = data._id;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");

  if (data.isLiked) {
    cardLikeBtnEl.classList.add("card__like-button_active");
  }

  cardLikeBtnEl.addEventListener("click", () => {
    const cardId = cardElement.dataset.id;
    const isLiked = cardLikeBtnEl.classList.contains(
      "card__like-button_active"
    );

    api
      .changeLikeStatus(cardId, isLiked)
      .then((updatedCard) => {
        if (updatedCard.isLiked) {
          cardLikeBtnEl.classList.add("card__like-button_active");
        } else {
          cardLikeBtnEl.classList.remove("card__like-button_active");
        }
      })
      .catch(console.error);
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
  cardDeleteBtnEl.addEventListener("click", () => {
    selectedCardElement = cardElement;
    selectedCardId = cardId;
    openModal(deleteCardModal);
  });

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");

  function handleOverlayClick(event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  }

  function handleEscKey(event) {
    if (event.key === "Escape") {
      closeModal(modal);
    }
  }

  modal._handleOverlayClick = handleOverlayClick;
  modal._handleEscKey = handleEscKey;

  modal.addEventListener("click", handleOverlayClick);
  document.addEventListener("keydown", handleEscKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");

  modal.removeEventListener("click", modal._handleOverlayClick);
  document.removeEventListener("keydown", modal._handleEscKey);

  delete modal._handleOverlayClick;
  delete modal._handleEscKey;
}

editProfileBtn.addEventListener("click", function () {
  nameInputEl.value = profileNameEl.textContent;
  descriptionInputEl.value = profileDescriptionEl.textContent;
  resetValidation(editFormEl, [nameInputEl, descriptionInputEl]);

  openModal(editProfileModal);
});

avatarEditButton.addEventListener("click", () => {
  profileAvatarEl.click();
});

profileAvatarEl.addEventListener("click", () => {
  editAvatarFormEl.reset();
  resetValidation(editAvatarFormEl, [avatarLinkInputEl]);
  openModal(editAvatarModal);
});

addCardBtn.addEventListener("click", function () {
  openModal(addCardModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

previewModalCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

addCardCloseBtn.addEventListener("click", function () {
  closeModal(addCardModal);
});

editAvatarCloseBtn.addEventListener("click", () => {
  closeModal(editAvatarModal);
});

deleteCardCloseBtn.addEventListener("click", () => {
  closeModal(deleteCardModal);
});

editFormEl.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = nameInputEl.value;
  const about = descriptionInputEl.value;

  editProfileSubmitBtn.textContent = "Saving...";

  api
    .editUserInfo({ name, about })
    .then((updatedUser) => {
      profileNameEl.textContent = updatedUser.name;
      profileDescriptionEl.textContent = updatedUser.about;
      closeModal(editProfileModal);
    })
    .catch(console.error)
    .finally(() => {
      editProfileSubmitBtn.textContent = "Save";
    });
});

editAvatarFormEl.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const avatar = avatarLinkInputEl.value;

  editAvatarSubmitBtn.textContent = "Saving...";

  api
    .editAvatar(avatar)
    .then((updatedUser) => {
      profileAvatarEl.src = updatedUser.avatar;
      closeModal(editAvatarModal);
    })
    .catch(console.error)
    .finally(() => {
      editAvatarSubmitBtn.textContent = "Save";
    });
});

addCardFormEl.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = captionInputEl.value;
  const link = linkInputEl.value;

  cardSubmitBtn.textContent = "Saving...";

  api
    .addCard({ name, link })
    .then((newCard) => {
      const cardElement = getCardElement(newCard);
      cardsList.prepend(cardElement);
      closeModal(addCardModal);
      addCardFormEl.reset();
      disableButton(cardSubmitBtn);
    })
    .catch(console.error)
    .finally(() => {
      cardSubmitBtn.textContent = "Save";
    });
});

deleteCardFormEl.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (!selectedCardElement || !selectedCardId) {
    return;
  }

  deleteCardSubmitBtn.textContent = "Deleting...";

  api
    .removeCard(selectedCardId)
    .then(() => {
      selectedCardElement.remove();
      selectedCardElement = null;
      selectedCardId = null;
      closeModal(deleteCardModal);
    })
    .catch(console.error)
    .finally(() => {
      deleteCardSubmitBtn.textContent = "Yes, delete";
    });
});

api
  .getAppInfo()
  .then(([userData, cards]) => {
    profileNameEl.textContent = userData.name;
    profileDescriptionEl.textContent = userData.about;
    profileAvatarEl.src = userData.avatar;

    cards.forEach((cardData) => {
      const cardElement = getCardElement(cardData);
      cardsList.append(cardElement);
    });
  })
  .catch(console.error);
