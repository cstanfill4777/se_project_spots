# Project 3: Spots

### Overview

- Intro
- Figma
- Images

# Project Name

Spots - A Social Image Sharing Platform

## Project Description

Spots is a responsive web application that simulates a social media platform where users can upload, view, and interact with image-based content.

**Video Overview:**
https://drive.google.com/file/d/1lXqQ6OPK-F5lIkKdSnPIZ3T_O7R_DiHT/view?usp=drive_link

## Features

The application is responsive to multiple screen resolutions. It can be viewed on desktop, tablet, or mobile devices. It features cards with images and titles that are structured in a grid format. The simulated "New Post", "Edit Profile", and "like" buttons feature distinct hover states. The number of columns varies from 1 to 3 and is responsive to the width of the screen.

## Reasons/Problems Solved by the Project

This project is the foundation of a social media platform. Further implementation would lead to clickable buttons, providing the functionality for making new posts, editing the profile, and liking posts. Additional implementation would provide interactivity between users on the same platform. The problem solved by the project is how to create a platform that enables users to interact in these ways, which it would accomplish with further implementation.

## Technologies & Techniques Used

- **HTML5 & Semantic Tags**: Used to create an accessible and structured document.
- **CSS (Flexbox & Grid)**: For responsive layouts.
- **BEM Methodology**: To make the code more maintainable and organized.
- **CSS Media Queries**: To transition between desktop and mobile versions of the app.
- **Normalize.css**: Standardized default browser styles for consistency.
- **Font Imports & Fallbacks**: To use a custom font with proper fallbacks.
- **Git & GitHub**: Version control and project hosting.

**Hover Effects for New Post & Edit Profile Buttons**

- **CSS Transform: Scale Property** – Enlarges the button slightly when hovered.
- **Font Color Change** -
  For the Edit Profile button.

**Like Button (SVG-Based Hover Effect)**
The Like button hover effect was created by **modifying the raw SVG code** of the heart icon and **swapping it on hover**.

**Techniques Used**

- **Custom SVG Editing** – A second version of the heart icon (`heart-hover.svg`) was created with different properties.
- **CSS `background-image` Swap** – The hover state triggers a switch between the default icon and the edited icon using the background-image property in CSS.

## Figma

- [Link to the project on Figma](https://www.figma.com/file/BBNm2bC3lj8QQMHlnqRsga/Sprint-3-Project-%E2%80%94-Spots?type=design&node-id=2%3A60&mode=design&t=afgNFybdorZO6cQo-1)

## Images

![Avatar](images/demo/image-2.png)

_The user profile includes an avatar._

![Card 1](images/demo/pexels-kassandre-pedro-8639743-1.png)

![Card 2](<images/demo/pexels-kassandre-pedro-8639743-1-(2).png>)

![Card 3](<images/demo/pexels-kassandre-pedro-8639743-1-(3).png>)

![Card 4](<images/demo/pexels-kassandre-pedro-8639743-1-(4).png>)

![Card 5](<images/demo/pexels-kassandre-pedro-8639743-1-(5).png>)

![Card 6](<images/demo/pexels-kassandre-pedro-8639743-1-(6).png>)

_Each card represents an uploaded post._

## Live Demo

You can view and use the project directly here:  
**[Spots](https://cstanfill4777.github.io/se_project_spots/)**
