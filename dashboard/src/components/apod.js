import  React from 'react';
import { useEffect } from 'react'
import axios from "axios";

export default function Apod( ) {
function GetApi ()  {
    const response = response.data

    const getData = () => {
    const ENDPOINT = 'https://api.nasa.gov/planetary/apod?api_key=6HbYrzwibnjgCvHxIbCyHMCDgUVsJ5ALKVOshnaR';
    axios.get(ENDPOINT)
        .then((response) => {
            console.log("RES", response.data);
        if(response.data) {
            console.log(response.data)
        }else {
            console.log("ERROR");
            }
        })
        .catch((error) => {
            console.log("ERROR", error);
        }); 
};
useEffect(() => {
    getData();
}, []);
    return <h1>{response.data}</h1>
    
}
    return (
        <div>
            <h1>Astronomy Picture of the Day!</h1>
            <h1 onClick={GetApi}>test</h1>
        </div>
    );
}

//not getting array back just getting one object at a time, so NO MAPPING, reconfigure my architecture, every time click get an object back, 
//just render it don't map over it


//const [posts, setPosts] = useState([]);
/* useEffect ERROR notes - continue debugging at later date (the reason why cannot iterate over posts array - it is not an array but an object)
🤔 Question: How do I correctly fetch data inside useEffect? What is []?

This article is a good primer on data fetching with useEffect. Make sure to read it to the end! It’s not as long as this one.
[] means the effect doesn’t use any value that participates in React data flow, and is for that reason safe to apply once.
It is also a common source of bugs when the value actually is used. You’ll need to learn a few strategies
(primarily useReducer and useCallback)that can remove the need for a dependency instead of incorrectly omitting it.
*/
   /*useEffect(() => {
        const ENDPOINT = 'https://api.nasa.gov/planetary/apod?api_key=6HbYrzwibnjgCvHxIbCyHMCDgUVsJ5ALKVOshnaR';
        axios.get(ENDPOINT)

        .then((response) => {
            console.log("RES", response.data);
        if(response.data) {
            console.log(response.data)
            setPosts(response.data)
            console.log(posts)
            console.log(typeof posts, posts) //i.e. an object, empty array delared inside object - 
        }else {
            console.log("ERROR");
            }
        })
        .catch((error) => {
            console.log("ERROR", error);
        });
    }, []);

*/
/* CODE WRITTEN BUT NEVER RAN DUE TO ERROR - rendering specific pieces of data from the API, 
not working b/c need to edit useEffect (notes on bug below)

    const postsRenderer = posts.map((post) => (
        <div className='post-container' key={post.id}>
            <a href={post.url_for_post} target="_blank" className='title'>{post.date}</a>

            {post.date?.length > 0 && (
                <div className='dates'> 
                    {post.dates.map((date) => (
                <div key={date} className="label">
                    {date}
                </div>
            ))}
        </div>
    )}
        <div>{post.content}</div>
    </div>
    ));
*/
