// Selecting Elements
const editButton = document.querySelector(".profile__edit-btn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-button");
const form = document.querySelector(".modal__form");
const nameInput = document.querySelector("#profile-name-input");
const descriptionInput = document.querySelector("#profile-description-input");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".cards__list");

// Initial Cards Data
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://images.pexels.com/photos/20401488/pexels-photo-20401488/free-photo-of-yosemite-national-park.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Lake Louise",
    link: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bald Mountains",
    link: "https://images.pexels.com/photos/3738698/pexels-photo-3738698.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Latemar",
    link: "https://images.pexels.com/photos/5281278/pexels-photo-5281278.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Vanoise National Park",
    link: "https://images.pexels.com/photos/14142455/pexels-photo-14142455.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Lago di Braies",
    link: "https://images.pexels.com/photos/456710/pexels-photo-456710.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Function to Open Modal & Pre-fill Form Fields
function openModal() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  modal.classList.add("modal_open");
}

// Function to Close Modal
function closeModal() {
  modal.classList.remove("modal_open");
}

// Function to Handle Form Submission
function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal();
}

// function getCardElement(data) {
//   const cardTemplate = document.querySelector("#card-template");
//   const cardElement = cardTemplate.content
//     .querySelector(".card")
//     .cloneNode(true);

//   const cardImage = cardElement.querySelector(".card__image");
//   const cardTitle = cardElement.querySelector(".card__title");

//   cardTitle.textContent = data.name;
//   cardImage.src = data.link;
//   cardImage.alt = data.name;

//   return cardElement;
// }

function getCardElement(data) {
  // Clone the card template
  const cardElement = cardTemplate.cloneNode(true).querySelector(".card");

  // Select elements within the cloned card
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  // Set the content from data
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  // // Create heart button
  // const likeButton = document.createElement("button");
  // likeButton.classList.add("card__like-btn");

  // // Append the button inside the card content
  // const cardContent = cardElement.querySelector(".card__content");
  // cardContent.appendChild(likeButton);

  let likeButton = cardElement.querySelector(".card__like-btn");

  if (!likeButton) {
    likeButton = document.createElement("button");
    likeButton.classList.add("card__like-btn");
    likeButton.innerHTML = '<img src="images/Union.svg" alt="Heart">';

    const cardContent = cardElement.querySelector(".card__content");
    if (cardContent) {
      cardContent.appendChild(likeButton);
    }
  }

  return cardElement;
}

// Function to Render Initial Cards
function renderCards() {
  initialCards.forEach((card) => {
    const cardElement = getCardElement(card);
    cardList.prepend(cardElement);
  });
}

// Event Listeners
editButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
form.addEventListener("submit", handleFormSubmit);

// Render Cards on Page Load
renderCards();

// Select Elements
const addPostBtn = document.querySelector(".profile__add-btn");
const addPostModal = document.querySelector("#add-post-modal");
const addPostForm = document.querySelector("#add-post-form");
const postTitleInput = document.querySelector("#post-title");
const postImageInput = document.querySelector("#post-image");
const addPostCloseBtn = addPostModal.querySelector(".modal__close-btn");

// Function to Open Modal
addPostBtn.addEventListener("click", () => {
  addPostModal.classList.add("modal_open");
});

// Function to Close Modal
addPostCloseBtn.addEventListener("click", () => {
  addPostModal.classList.remove("modal_open");
});

// Function to Handle Form Submission
addPostForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page refresh

  const title = postTitleInput.value;
  const image = postImageInput.value;

  if (!title || !image) {
    alert("Please enter a title and image URL.");
    return;
  }

  // Create new card element
  const cardElement = getCardElement({ name: title, link: image });

  // Add to the top of the list
  document.querySelector(".cards__list").prepend(cardElement);

  // Close modal & clear inputs
  addPostModal.classList.remove("modal_open");
  postTitleInput.value = "";
  postImageInput.value = "";
});

document
  .querySelector(".profile__add-btn")
  .addEventListener("click", function () {
    console.log("New Post button clicked!");
  });

document.addEventListener("DOMContentLoaded", function () {
  const addPostButton = document.querySelector(".profile__add-btn");
  const addPostModal = document.querySelector("#add-post-modal");

  addPostButton.addEventListener("click", function () {
    console.log("New Post button clicked, opening modal...");
    addPostModal.classList.add("modal_open");
  });
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("card__like-btn")) {
    event.target.classList.toggle("card__like-btn_active");
  }
});

// Select all input fields inside the modal form
const modalInputs = document.querySelectorAll(".modal__input");

// Function to check if the input field is empty or filled
function checkInputState(input) {
  if (input.value.trim() !== "") {
    input.classList.add("filled"); // Add class when input has text
    console.log(
      `✅ Added .filled to: ${input.id} (Current value: ${input.value})`
    );
  } else {
    input.classList.remove("filled"); // Remove class when input is empty
    console.log(
      `❌ Removed .filled from: ${input.id} (Current value: ${input.value})`
    );
  }
}

// Run check when the user types in the input field
modalInputs.forEach((input) => {
  input.addEventListener("input", () => checkInputState(input));
});

// Ensure `.filled` is applied when modal opens
function openModal() {
  // Fill inputs from profile values
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  // Check if the inputs have text and apply `.filled`
  modalInputs.forEach((input) => checkInputState(input));

  // Show the modal
  modal.classList.add("modal_open");
}
