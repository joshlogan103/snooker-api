# Proposal

## Project Description 

I am building an application that allows users track Snooker players and tournaments. This application will be built on a MEN stack, and the database will contain collections of players, tournaments, users, and metadata on the relationships between these documents. Users will be able query players and tournaments, as well as create documents to track they're on attendence at tournaments. Admins will be able to perform full CRUD on the database and manage players, tournaments and users. This application will automate the creation of additional meta-data containing documents where relationships exist between the core set of collections.

## User Stories

### MVP Goals

For Users:

* AAU, I want to be able to view a list of all professional Snooker players
* AAU, I want to be able to query for a specific Player
* AAU, I want to be able to view a list of all Snooker tournaments
* AAU, I want to be able to query for a specific tournament
* AAU, I want to be able to view a tournament's leaderboard and prizes
* AAU, I want to be able to view all of a player's performances at each tournament they've played
* AAU, I want to be able to find a player's performance for a specific tournament

For Admins:

* AAA, I want to be able to add, update, and delete players in the database
* AAA, I want to be able to add, update, and delete tournaments in the database
* AAA, I want to be able to add, update, and delete users in the database
* AAA, I want the system to automatically generate player performance documents based on tournament data
* AAA, I want player documents to automatically track lifetime earnings and tournaments played

### Stretch Goals

For Users:

* AAU, I want to be able to login persistently to the application
* AAU, if I am logged in, I want to be able to track my attendence at tournaments

For Admins:

* AAA, I want authorizaiton to make sure only admins can manage the database

## Entity Relationship Diagram

![ERD](./Images/Snooker%20ERD.png)

[View ERD on Lucid](https://lucid.app/lucidchart/a634f0c0-61b5-4bc7-bea3-2270a29b5db5/edit?viewport_loc=135%2C154%2C1762%2C851%2C0_0&invitationId=inv_4298a22f-f984-455e-b754-15ff8e46b5d7)

## Front-end Wire Frames

![Home Page](./Images/Snooker%20API%20-%20Home%20Page.png)
[View home page wireframe on Figma](https://www.figma.com/file/J4JhBwQdJ9wohDR4MFKtDm/Snooker-API---Home-Page?type=design&node-id=0-1&mode=design&t=Gj86L80CwUY1zzKY-0)

![User Profile](./Images/Snooker%20API%20-%20User%20Profile.png)
[View user profile wireframe on Figma](https://www.figma.com/file/Be09dSuaPoV75e1VvB0SI8/Snooker-API---User-Profile?type=design&node-id=0-1&mode=design&t=IWsajMHuutBX5jYg-0)

![Admin View](./Images/Snooker%20API%20-%20Admin%20View.png)
[View admin view wireframe on Figma](https://www.figma.com/file/03yDWXOqgcW1Z18OUOxryV/Snooker-API---Admin-View?type=design&node-id=0-1&mode=design&t=l2WsKWXsYZnchYMr-0)

## Project Plan and Task Management

[Trello Board](https://trello.com/invite/b/mZwnLzM8/ATTIc9c38bde6aee4abcefaeee86acaf511c592970A8/snooker-api)

## Timeline - Daily Accountability

| Day       |   | Task                                                            | Status    | Notes |
|-----------|---|-----------------------------------------------------------------|-----------|-------|
| Sunday    |   | Create proposal, make ERD and front-end Wireframes              | Completed |       |
| Monday    |   | Create file structure, connect to database, build all Models    | To Do     |       |
| Tuesday   |   | Build all Routes and Controllers                                | To Do     |       |
| Wednesday |   | Finalize Routes and Controllers, build basic Auth functionality | To Do     |       |
| Thursdary |   | Set up basic front end structure, write all fetch requests      | To Do     |       |
| Friday    |   | Build persistent Auth functionality, add front-end styling      | To Do     |       |
| Saturday  |   | Work on stretch goals                                           | To Do     |       |
| Sunday    |   | Finalize work on stretch goals, prepare presentation            | To Do     |       |
| Monday    |   | Present work                                                    | To Do     |       |

