// const initialCards = [
//   {
//     name: "Val Thorens",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
//   {
//     name: "Restaurant terrace",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
//   },
//   {
//     name: "An outdoor cafe",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
//   },
//   {
//     name: "A very long bridge, over the forest and through the trees",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
//   },
//   {
//     name: "Tunnel with morning light",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
//   },
//   {
//     name: "Mountain house",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
// ];

// // Selecting Elements
// const editButton = document.querySelector(".profile__edit-btn");
// const modal = document.querySelector(".modal");
// const closeButton = document.querySelector(".modal__close-button");

// // Function to Open Modal
// function openModal() {
//   modal.classList.add("modal_open");
// }

// // Function to Close Modal
// function closeModal() {
//   modal.classList.remove("modal_open");
// }

// // Event Listeners
// editButton.addEventListener("click", openModal);
// closeButton.addEventListener("click", closeModal);

// // Close Modal When Clicking Outside
// modal.addEventListener("click", (event) => {
//   if (event.target === modal) {
//     closeModal();
//   }
// });

// // Select the "New Post" button
// const newPostBtn = document.querySelector(".profile__add-btn");
// // Select the modal for adding new posts
// const addPostModal = document.querySelector("#add-post-modal"); // Ensure your modal has this ID

// // Open the modal when "New Post" button is clicked
// newPostBtn.addEventListener("click", () => {
//   addPostModal.classList.add("modal_opened");
// });

// // Select form & input fields
// const addPostForm = document.querySelector("#add-post-form"); // Ensure your form has this ID
// const postTitleInput = document.querySelector("#post-title");
// const postImageInput = document.querySelector("#post-image");

// // Handle form submission
// addPostForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent page reload

//   // Get user input values
//   const title = postTitleInput.value;
//   const image = postImageInput.value;

//   // Create a new card using the function from the videos
//   const newCard = getCardElement({ name: title, link: image });

//   // Add the new card to the cards list
//   document.querySelector(".cards__list").prepend(newCard);

//   // Close the modal
//   addPostModal.classList.remove("modal_opened");

//   // Clear form inputs
//   addPostForm.reset();
// });

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

// // Select modal and buttons
// const addPostModal = document.querySelector("#add-post-modal");
// const addPostButton = document.querySelector(".profile__add-btn"); // "New Post" button
// const closePostModalButton = addPostModal.querySelector(".modal__close-btn");

// // Function to open modal
// function openAddPostModal() {
//   addPostModal.classList.add("modal_opened");
// }

// // Function to close modal
// function closeAddPostModal() {
//   addPostModal.classList.remove("modal_opened");
// }

// // Event listeners
// addPostButton.addEventListener("click", openAddPostModal);
// closePostModalButton.addEventListener("click", closeAddPostModal);

// // Close modal when clicking outside of it
// addPostModal.addEventListener("click", (event) => {
//   if (event.target === addPostModal) {
//     closeAddPostModal();
//   }
// });

// // Select form and input fields
// const addPostForm = document.querySelector("#add-post-form");
// const postTitleInput = document.querySelector("#post-title");
// const postImageInput = document.querySelector("#post-image");
// const addCardList = document.querySelector(".cards__list");
// const addCardTemplate = document
//   .querySelector("#card-template")
//   .content.querySelector(".card");

// // Function to create a new card
// function createCard(title, imageUrl) {
//   const card = cardTemplate.cloneNode(true);
//   card.querySelector(".card__image").src = imageUrl;
//   card.querySelector(".card__image").alt = title;
//   card.querySelector(".card__title").textContent = title;

//   // Add delete functionality
//   card.querySelector(".card__delete-btn").addEventListener("click", () => {
//     card.remove();
//   });

//   return card;
// }

// // Handle form submission
// addPostForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const title = postTitleInput.value;
//   const imageUrl = postImageInput.value;

//   if (title && imageUrl) {
//     const newCard = createCard(title, imageUrl);
//     cardList.prepend(newCard); // Add new card to the top of the list
//     closeAddPostModal();
//     addPostForm.reset(); // Clear form
//   }
// });

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

// Function to Create a Card Element

// function getCardElement(data) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImage = cardElement.querySelector(".card__image");
//   const cardTitle = cardElement.querySelector(".card__title");

//   cardImage.src = data.link;
//   cardImage.alt = data.name;
//   cardTitle.textContent = data.name;

//   return cardElement;
// }

// function getCardElement(data) {
//   const cardTemplate = document.querySelector("#card-template").content;
//   const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

//   cardElement.querySelector(".card__title").textContent = data.name;
//   cardElement.querySelector(".card__image").src = data.link;
//   cardElement.querySelector(".card__image").alt = data.name;

//   return cardElement;
// }

function getCardElement(data) {
  const cardTemplate = document.querySelector("#card-template");
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

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
