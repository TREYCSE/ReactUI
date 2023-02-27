# ReactUI

Assigned from:
[GA users only](https://git.generalassemb.ly/dc-wdi-react-redux/api-ui-pattern)

## Description
The NASA official website is full of cool scientific facts for strangers for science and those who are married to it.
Therefore, I used the NSA API to render in to build a mock using React.js, and axios to get the API.


## NASA Website Snapshot
  ![image](https://i.imgur.com/6rDHZth.jpg)

## PROGRESS - Coding Tracker
  ![image](https://i.imgur.com/UzB44CK.jpg)
> 1. useEffect - 
> 2. setToggleTab -

## Features
1. BRONZE:  significant progress: 

2. SILVER: in progress: 

3. Gold: incomplete:

## Technologies
>1. 
>2. 
>3. 


### Prerequisites to Build - React.js, Axios

Requirements for the software and other tools to build, test and push 
- [etc...](https://www.w3schools.com/js/js_htmldom.asp)

### React.js 

1. 
> 1. 
> 2. 
> 2. 

2. 

### JSON/JSX/DOM/AJAX
JSON

        startGame = () => {
          questionCounter = 0;
          score = 0;
          availableQuestions = [...questions];
          console.log(availableQuestions);
          getNewQuestion();
        };



## API

    saveScore = e => {
        e.preventDefault();

        const score = {
            score: Math.floor(Math.random() * 100),
            name: username.value
        };
        highScores.push(score);
        highScores.push((a, b) => b.score - a.score);
        highScores.splice(5);

        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.assign("index.html");
    };


AXIOS - what is used for this application.
> 1. 
> 2. 
> 3. 



### Installation Instructions / Getting Started
To set up application, follow these steps:
>(1) FORK this repository
>(2) CLONE this repository to your local
>(3) NEW local branch
>(4) OPEN, edit, and commit

### CONTRIBUTION GUIDELINES
This section should offer guidance on where and how users can contribute to your code, identify bugs, and propose improvements
LINKS:
> 1. Main repository: (https://github.com/TREYCSE/ReactUI)
> 2. Issue Tracker: (https://docs.google.com/spreadsheets/d/1h3rOtnA9zg10dT5oqklCbmK6vP9EDftnQArKYl7rBWg/edit#gid=1609337283)

## Authors
  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)
