# Snooker API - Maximum Break

## Background

This is an API for an application that allows Snooker enthusiasts to browse tournaments, analyze player performances, and track their attendence of events.

This API services 5 collections in a MongoDB database.
- Players: Full CRUD available for managing players in the database
- Tournaments: Full CRUD available for managing tournaments in the database
- Users: Full CRUD available for managing users in the database
- Performances: Full CRUD available for managing player performances at tournaments in the datase. Services exist in the API to automatically manage performances based on player and tournament documents
- Attendances: Full CRUD available for managing user attendances of events in the database.

There is a front-end web application for the API called Maximum Break.

## Access API

[View API](https://maximum-break-api-943feb008688.herokuapp.com/)

## Access Front End

[View Front End](https://maximum-break.vercel.app/index.html)

## Front-end Application Screenshots

![Home Page](./images/Maximum-Break-Home-Page.png)

![User Profile Page](./images/Maximum-Break-User-Profile.png)

![Admin Portal](./images/Maximum-Break-Admin-Portal.png)

## Technologies Used

- Javascript
- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- JSON
- HTML5
- CSS
- Figma (Wireframing)
- Lucid (ERD)

## Project Plan and Task Management

[Trello Board](https://trello.com/invite/b/mZwnLzM8/ATTIc9c38bde6aee4abcefaeee86acaf511c592970A8/snooker-api)

## Timeline - Daily Accountability

| Day       |   | Task                                                            | Status    | Notes |
|-----------|---|-----------------------------------------------------------------|-----------|-------|
| Sunday    |   | Create proposal, make ERD and front-end Wireframes              | Completed |       |
| Monday    |   | Create file structure, connect to database, build all Models    | Completed |       |
| Tuesday   |   | Build all Routes and Controllers                                | Completed |       |
| Wednesday |   | Finalize Routes and Controllers, build basic Auth functionality | Completed |       |
| Thursdary |   | Set up basic front end structure, write all fetch requests      | Completed |       |
| Friday    |   | Build persistent Auth functionality, add front-end styling      | Completed |       |
| Saturday  |   | Work on stretch goals                                           | Completed |       |
| Sunday    |   | Finalize work on stretch goals, prepare presentation            | Completed |       |
| Monday    |   | Present work                                                    | Completed |       |

## Attributions

- Fonts: 
  * Google Fonts: [Cantarell](https://fonts.google.com/specimen/Cantarell)

## Next Steps

- Remove mock data from database and replace with actual data from another Snooker API
- Build out additional functionality on the front end for viewing tournaments, having comment sections on player and tournament pages, etc.
- Do a polish pass on art and styling across the board