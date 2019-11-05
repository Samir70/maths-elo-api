# Maths Review and api
The general aim for this is to have the computer ask maths questions on a variety of topics. Each question will have a rating (kind of like a chess ELO). So will the user. These ratings will change in the same way as ratings change when chess players win or lose a game of chess. Generally: a strong user answering a weak question will result in hardly any change. But a weak user answering a hard question will lower the rating of the question and raise the rating of the user -- by quite a bit.

I aim to allow the user to be able to select questions (by subject or difficulty). And the computer can also select questions (to review a topic and also to challenge the user with questions they haven't seen before.) Many questions will also have links to online resources (BBC bitesize, for one). 

## So far: this is as far as I've got!
There is a user interface. It began on the [Maths ELO repository](https://github.com/Samir70/maths-elo), which was copied to this repo's client folder. That repo probably won't change anymore. In this copy: still only has a few questions, the user rating changes properly but is not saved between sessions. 

The question ratings are saved to a database. When working as a developer, the data is saved locally to a sqlite3 database. This works great on a home computer, but (hosted on Heroku) it won't persist data when the dyno gets reset. So, on Heroku, the data is saved to a postgresql database. So that is two different databases. Not perfect, but it will do for now. And it means there are no special passwords or anything for developers to work locally on their own additions. Development wise... The client (react app) knows nothing about these two systems. It sends the same requests they get dealt with differently by the Node-app.

Here's a link to the [working math-elo app on Heroku](https://math-elo-api.herokuapp.com/). The api is also available on that URL, eg: here is the [list of question types](https://math-elo-api.herokuapp.com/qratings/all) ordered by rating.

## Aims for the project
### Questions
* Obviously: more questions
* It should be possible to save questions, to bookmark or link them
* The question providers are not pure functions. Possibly refactor so that the random numbers they need are passed to them as parameters.
* Help for users who do not already know the topic. This can be with links to BBC bitesize or with a dedicated page on the website.
* Users can suggest topics -- possibly with a Patreon donation

### GUI
* Responsive GUI, so it works better on mobiles
* Clearer pointer to answer format. When answer requires hr, min , sec these should be in input boxes with placeholders/context labels
* Some of the vocab questions would be better with the answer as a missing word in the sentence

### User data
* User login, with password
* Data for each user on which questions they tend to get right or wrong. This should be displayed for the user in a heat map.
* Longterm: the computer should analyse this data in order to figure out what a student should learn next. If they are working on Pythagoras, but are struggling, then the computer should look at the difference between what a struggling student knows and those who manage Pythagoras. Gaps in knowledge should be filled. Some of these knowledge dependencies will be obvious, and they could be programmed by a human. But I want the computer to learn to be a better task-master to improve how students learn.

## If you want to run this app on your own computer:
Clone the repo.

Then you need to `npm install` in both the root directory (for the server) and in the client directory (for the UI).
It's easiest to start server and UI from differnt command lines. `npm start` is suitable for both.

## Tech stack
#### Main app: React and Redux
#### Backend: Node and Express
#### Database: sqlite3 and postgresql

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


