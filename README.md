# Daily NYT Reader

Welcome to Daily NYT Reader--a new app for you to peruse top story summaries from the NYT with the option to go to the article to read it. 


# Table of Contents

1. [Overview](#overview)
2. [Installation Instructions](#installationInstructions)
3. [Project Goals](#projectGoals)
4. [Directions and Features](#directions)
5. [Code Architecture](#codeArchitecture)
6. [Technologies Used](#techUsed)
7. [Testing](#testing)
8. [Project Challenges](#projectChallenges)
9. [Project Wins](#projectWins)
10. [Authors](#authors)

## Overview <a name="overview"></a>

Daily NYT Reader is a solo take home challenge giving by Turing School of Software and Design. It is intended to be completed in about 8 hours. The goal is to create an application where a user can view top stories from the NYT, sort them in some way, and be able to view details about the article, and link to the article itself. 

- Project Spec here: [Take-Home](https://mod4.turing.edu/projects/take_home/take_home_fe)


## Installation Instructions <a name="installationInstructions"></a>

1. Clone down [this repository](https://github.com/krdurrett/Daily_NYT_Reader)
2. Run `npm install`
3. Run `npm start` in your terminal
4. Go to http://localhost:3000/ and you should see the website
5. Enter `control + c` in your terminal to stop the server at any time.

## Project Goals <a name="projectGoals"></a>

- Demonstrate a strong understanding of React JS and Front-End best practices
- Ability to prioritize for MVP
- Understanding of basic usability practices and standards
- A clear hierarchy of information
- Clear, well thought out code

## Directions and Features <a name="directions"></a>

On page load, see a list of articles. 

![landing_page_view](https://media.giphy.com/media/sTLP9pzQakTRDF1Tvz/giphy.gif)

## Code Architecture <a name="codeArchitecture"></a>

The React architecture is based on seven functional components (App.js, ArticleCard.js, ArticleContainer.js, ArticleDetails.js, Error404.js, ErrorModal.js, NavBar.js). Hooks are used to manage state and network requests.

## Technologies Used <a name="techUsed"></a>

### Frontend Technologies
- React
- React Router
- Javascript
- CSS3
- HTML5
- Fetch API
- NPM
- Cypress

## Testing <a name="testing"></a>

Cypress was used for E2E and integration testing. To test the application: run `npm run cypress` and you will have a window open that gives you the ability to click on each test and see whether they pass. Make sure you've run `npm start` in a separate terminal tab before you begin the testing. 


## Project Challenges <a name="projectChallenges"></a>

- Creating a limited-scope application from concept to MVP in 8 hours
- Responsive design, making application is accessible and easy to use on any size device
- Learning Hooks to manage state


## Project Wins <a name="projectWins"></a>

- Created a fully funtional MVP with time scope of 8 hours
- Continued to build a strong understanding of React framework 
- Completed a thorough project plan and wireframe
- Implemented React Router for a multi-page UX
- Continued to gain competency with Cypress E2E testing framework
- Designed UI to be responsive to multiple screen sizes

## Authors

- [Kayla Durrett](https://github.com/krdurrett)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
