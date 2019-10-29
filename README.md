# Maths Review and api
The general aim for this is to have the computer ask maths questions on a variety of topics. Each question will have a rating (kind of like a chess ELO). So will the user. These ratings will change in the same way as ratings change when chess players win or lose a game of chess. Generally: a strong user answering a weak question will result in hardly any change. But a weak user answering a hard question will lower the rating of the question and raise the rating of the user -- by quite a bit.

I aim to allow the user to be able to select questions (by subject or difficulty). And the computer can also select questions (to review a topic and also to challenge the user with questions they haven't seen before.) Many questions will also have links to online resources (BBC bitesize, for one). 

## So far: this is as far as I've got!
There is a user interface. It began on the [Maths ELO repository](https://github.com/Samir70/maths-elo), which was copied to this repo's client folder. That repo probably won't change anymore. In this copy: still only has a few questions, the user rating changes properly but is not saved between sessions. The question ratings are saved to a sqlite3 database. This works great on a home computer, but (hosted on Heroku) it won't persist data when the dyno gets reset. All I need to do is find another place to host my database. 

Here's a link to the [working math-elo app on Heroku](https://math-elo-api.herokuapp.com/). The api is also available on that URL, eg: here is the [list of question types](https://math-elo-api.herokuapp.com/qratings/all) ordered by rating.

## If you want to run this app on your own computer:
Clone the repo.

Then you need to `npm install` for both the root directory (for the server) and in the client directory (for the UI).
It's easiest to start server and UI from differnt command lines. `npm start` is suitable for both.

## Tech stack
Main app: React and Redux
Backend: Node and Express
Database: sqlite3

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


