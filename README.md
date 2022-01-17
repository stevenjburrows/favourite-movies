# Lumina Learning Ltd - Graduate Software Developer Assignment
We kindly ask you to solve the task below. By solving and submitting this assignment you provide us with insights in how you solve real-world problems. What we will be looking at are topics such as: choice of technology, structuring of code, selection of 3rd party libraries, documentation etc.
## Tech Stack
For this I have used PostgreSQL, Node.JS, Express.JS and React.JS
I used PostgreSQL as I already had that installed on my Mac and it allowed me to quickly get up and running with sql quickly
I am more familiar with Node and Express recently so decided to go with that and most of my projects recently have been with React and I am more familiar with it that the other frameworks listed below

## The App
I was able to build the app using React from the bonus task. The app also has basic authentication and the backend and PostgreSQL is hosted in Heroku and the frontend is hosted in Netlify.

For the CSS I used a background generator to add some basic background to the app while keeping it lightweight.  I also used [coolos.co](https://coolors.co) to help get colours that go together and don't clash.

This app assumes you know the IMDB ID for the film you want 

## Improvements and thoughts
At the moment the app is using plain text for the password, both in storing and passing from frontend to backend.  Passwords really should be hashed and slated but due to the nature of this task and time frame it was not completed.

When someone logs in the front end is retrieving the favourite movies as this was where I was more comfortable.  I would like to have seen the backend retrieve the favourite movie details from the OMDb then serve everything up to the frontend.

I have done some styling but it would also would have been nice to use something like Material UI to help make buttons and input fields a standard but I didn't want to compromise the app in the time frame

ANother improvement would be to att OMDb's search using the name and year so if you don't know the ID you can still find your film
## The task
- Build a service with PHP or JavaScript (NodeJs as webserver) as the server side language
- Use MySQL, MariaDB, PostgreSQL, SQL Server or SQLite as the database

Build an SPA (Single Page Application) that shows everyone's favourite movies from database, it should at least show movie Title, Poster, and Plot synopsis using [OMDb API](https://www.omdbapi.com) or any other public movie API that supports IMDb ID (e.g. tt8526872)

It should also be able to add or remove list of favourite movies.

Please use the data set provided in the SQL dump in this repo as a base.
You can change original asset that you think will make the solution better.
You are allowed to use any library or framework to help you with the task.

## Bonus task
You are not required to complete all of the bonus tasks, but great if you do! We may want to discuss your approach to the bonus tasks during interview so please think of your approach to these challenges even if you do not complete them.

- Use client side framework such as AngularJS, Angular, ReactJS, Vue, etc.
- Add simple authentication for any user (or all users) and only authenticated user could view or edit their favourite movies. You could adjust the database structure if needed.
- Add unit tests
- Serve your solution somewhere on cloud hosting solution e.g. Heroku, DigitalOcean, etc. (just use the free tier one if available, we don't expect you to spend any money for hosting)
- Any other improvement or modification (please add it into the readme and explain your reasoning of the improvement or modification)

## Expectations
Make a copy of this repo. Solve the task. Push your code to a public repo, and send us the link as a reply to our email.

Your solution should include a short readme describing your assumptions regarding the task, technology choice, your solution, how to use/test it and any final considerations such as known errors, limitation, something you struggle with, next steps, security concerns etc. 

Don't worry we are not expecting this thing to be perfect.

## Note
To get an API key in [OMDb API](https://www.omdbapi.com), you will need to register with your name and email address. If you do not consent to give such details to OMDb API, please let us know and we will happily give you an API key for this assignment.
