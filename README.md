# Spots - Social Image Sharing Platform

## Overview

Spots is a responsive web application that implements core functionality of a social image-sharing platform. Users can view, add, like, and delete image-based posts, as well as edit profile information and avatars. The application communicates with a RESTful backend API to retrieve and persist data.

This project emphasizes clean frontend architecture, asynchronous data handling, and separation of concerns between UI logic and network communication.

**Video Overview:**
https://drive.google.com/file/d/1lXqQ6OPK-F5lIkKdSnPIZ3T_O7R_DiHT/view?usp=drive_link

## Features

- Responsive interface supporting desktop, tablet, and mobile screen sizes
- Dynamic rendering of image-based cards retrieved from a backend API
- User profile management, including editing name, description, and avatar
- Ability to add and delete image-based posts
- Like and unlike functionality with server-side persistence
- Asynchronous data fetching with centralized response and error handling
- Adaptive grid layout (1–3 columns) based on viewport width
- Interactive UI elements with hover and transition states

## Reasons/Problems Solved by the Project

This project demonstrates how to build a client-side application that interacts with a RESTful backend service. It addresses common frontend engineering challenges such as:

- Managing asynchronous data flows

- Synchronizing UI state with server-side data

- Structuring frontend code for maintainability and extensibility

- Separating presentation logic from network communication

The project is designed as a scalable foundation that can be extended with additional features as the application grows.

## Technologies & Techniques Used

### Core Technologies

- **HTML5 & Semantic Tags**: Accessible and well-structured markup
- **CSS (Flexbox & Grid)**: Responsive layouts across screen sizes
- **BEM Methodology**: Maintainable and scalable styling architecture
- **CSS Media Queries**: Adaptive layouts for desktop, tablet, and mobile
- **Normalize.css**: Consistent default styling across browsers
- **Font Imports & Fallbacks**: Custom fonts with graceful degradation

### JavaScript & Architecture

- **JavaScript (ES6+)**
  - Modular ES6 classes and components
  - Asynchronous programming with `fetch`, Promises, and `Promise.all`

### API Integration

- **RESTful API**
  - CRUD operations for user profiles and image-based posts
  - Server-side persistence of likes, posts, and profile data
  - Token-based authorization for API requests

### Tooling

- **Git & GitHub**: Version control and project hosting
- **GitHub Pages**: Deployment and live hosting

## API Integration

The application communicates with a RESTful backend service to retrieve and persist data. All network requests are encapsulated within a dedicated `Api` class, which manages request configuration, response handling, and error propagation. This approach keeps UI logic independent from networking concerns and improves maintainability.

## Figma Design

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

## Project Pitch Video

This video [Spots Stage 2 Project Pitch Video](https://drive.google.com/file/d/1D0SEldnP9UOwanusJhr_z6O3pQ4FTnpp/view?usp=sharing) is a brief description of the project and demo of some of its features.
