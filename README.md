# ReactUI

Assigned from:
[GA users only](https://git.generalassemb.ly/dc-wdi-react-redux/api-ui-pattern)

## Description
The NASA official website is full of cool scientific facts for strangers of science and those who are married to it.
Therefore, I used the NSA API to render in to build a mock using React.js, and axios to get the API.

## NASA Website Snapshot
  ![image](https://i.imgur.com/6rDHZth.jpg)

## PROGRESS - Coding Tracker
  ![image](https://i.imgur.com/ZPn7tho.jpg)
> 1. useEffect - 
> 2. setToggleTab -

## Features
1. BRONZE:  significant progress: fetch and render all api to pages as mock

2. SILVER: in progress: tbd

3. Gold: incomplete: tbd

## Technologies/Requirements for the software and other tools to build, test and push
>1. React.js
>2. Node.js
>3. Axios

## Fetching NASA's API w/ Axios
   useEffect(() => {
        const ENDPOINT = 'https://api.nasa.gov/planetary/apod?api_key=6HbYrzwibnjgCvHxIbCyHMCDgUVsJ5ALKVOshnaR';
        axios.get(ENDPOINT)

        .then((response) => {
            console.log("RES", response.data);
        if(response.data) {
            console.log(response.data)
            setPosts(response.data)
            //console.log(setPosts)
            console.log(typeof posts, posts) //i.e. an object, empty array delared inside object - 
        }else {
            console.log("ERROR");
            }
        })
        .catch((error) => {
            console.log("ERROR", error);
        });
    }, []);


## Main Error in progress
posts.map will not work because it is not an array so it can not be iterated over to render API data to screen. Need to remove need for function as dependency to get useEffect to work properly and properly fill the posts array so that it may be mapped.

Current status: (excerpt from https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)

"🤔 Question: How do I correctly fetch data inside useEffect? What is []?

This article is a good primer on data fetching with useEffect. Make sure to read it to the end! It’s not as long as this one.
[] means the effect doesn’t use any value that participates in React data flow, and is for that reason safe to apply once.
It is also a common source of bugs when the value actually is used. You’ll need to learn a few strategies
(primarily useReducer and useCallback)that can remove the need for a dependency instead of incorrectly omitting it."




### Installation Instructions / Getting Started
To set up application, follow these steps:
>(1) FORK this repository
>(2) CLONE this repository to your local
>(3) NEW local branch
>(4) OPEN, edit, and commit

## Authors
  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)
