# Maths Review and api
The general aim for this is to have the computer ask maths questions on a variety of topics. Each question will have a rating (kind of like a chess ELO). So will the user. These ratings will change in the same way as ratings change when chess players win or lose a game of chess. Generally: a strong user answering a weak question will result in hardly any change. But a weak user answering a hard question will lower the rating of the question and raise the rating of the user -- by quite a bit.

I aim to allow the user to be able to select questions (by subject or difficulty). And the computer can also select questions (to review a topic and also to challenge the user with questions they haven't seen before.) Many questions will also have links to online resources (BBC bitesize, for one). 

## So far: this is as far as I've got!
There is a user interface. It began on the [Maths ELO repository](https://github.com/Samir70/maths-elo), which was copied to this repo's client folder. That repo probably won't change anymore. In this copy: still only has a few questions, the user rating changes properly but is not saved between sessions. 

The question ratings are saved to a database. When working as a developer, the data is saved locally to a sqlite3 database. This works great on a home computer, but (hosted on Heroku) it won't persist data when the dyno gets reset. So, on Heroku, the data is saved to a postgresql database. So that is two different databases. Not perfect, but it will do for now. And it means there are no special passwords or anything for developers to work locally on their own additions. Development wise... The client (react app) knows nothing about these two systems. It sends the same requests they get dealt with differently by the Node-app.

Here's a link to the [working math-elo app on Heroku](https://math-elo-api.herokuapp.com/). The api is also available on that URL, eg: here is the [list of question types](https://math-elo-api.herokuapp.com/qratings/all) ordered by rating.

## Using the app
The main page is the test page, where the computer asks questions and the user answers. Most answers are either a number or a word. Symbols like £, %, etc are generally not needed in the numerical answers. The computer will mark the answer. If the answer is correct then the user's rating goes up and the question's rating goes down. The reverse happens if the user is wrong.

### The Classroom
The classroom lists five questions and reveals the answer when the user clicks on the 'reveal answer' button. This can be useful if you are having trouble getting the correct format for an answer. (Eventually, I will add more user instructions so the format of the answer is clearer when it is not just a number). No rating changes happen here.

There are two ways to get to the classroom: 
- straight from the test area. (Find the link in the drop down menu at the top of the page). In this case you get five questions on the exact same topic which was just being tested. (You can see its type and sub-type in the status bar under the main heading)
- via the topic select page

You can refresh a question by clicking on it. It will be replaced by another of the same topic.

### The topic select page
You can get to this page via the drop-down menu at the top of the page. Then you can select which topics you want to focus on in the classroom. There is a button to clear all the topics, and another to select them all. With or without using these, you can click on each individual topic to toggle its selection. 

Most topics have sub-topics. Eventually I will enable selecting sub topics, but it is not possible right now. 

When you have made your seleciton: click on the 'go to the classroom' link under the 'select all' button. Questions in the classroom can still be refreshed by clicking on them. They will be replaced by another from the same topic. If you like, you can do this a few times to see the range of related sub-topics. Again: no rating changes take place in the classroom.

Note: when you go back to the test area, the computer will go on picking random topics -- starting from the question that was there when you left the test area. Eventually: I will modify the topic selection algorithm so that the computer will track the user's ability and aim to raise this. But users can't even log in, yet. So there is no point in collecting the data.

## Aims for the project
### Questions
* Obviously: more questions
* Some wrong answers are predictable and indicate a particular misconception. It would be useful to have the computer respond to these with more than just an opportunity to guess again. A break from a question they are getting wrong, so that they can be faced with questions which will help overcome their misconception.
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

### Adding a new topic to the questions
There is a template in the newQs folder, with instructions. That's the way I do it now. But here are some pointers:

* Create a file in the newQs folder (or a subfolder of this) eg: substitution.js
* this file should export a function that returns a question object, minimum requirement is q and a properties eg:
```
export const substitutionQ = (level) => {
    return {
        q : 'What is the value of 2x+3 when x = 4 ',
        a : 11
    }
}
```
* if the topic is a subtopic, then add a reference to the list of subQtypes for the main topic. eg: in AlgebraQs.js we would add:
```
const subQTypes = [
    null, 'simplifyAddSub', 'expandBracket', 'expand2Simplify', 'factorise1', 'factorise2', 'substitution'
];
```
AlgebraQs also generates a fuller object called qAndA with more properties like: qType, answerFormat and furtherinstructions. 
* add the case to handle when the qSubType is 'substitution'. This should set newQ to the object returned by our question function. This is later added to the qAndA object.


While developing the new topic, I like to set the subQType to that new type so the question type is always selected. Just remember to set it back when finished.
```
const subQType = 'substitution' //subType || RandomElement(subQTypes.slice(1));
```
Just set it back afterwards!

## Tech stack
#### Main app: React and Redux
#### Backend: Node and Express
#### Database: sqlite3 and postgresql

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


