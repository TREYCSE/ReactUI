import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";

export default function Apod( ) {
    GetApi();
    return (
        <div>
            <h1>Astronomy Picture of the Day!</h1>
        </div>
    );
}

function GetApi () {
const [posts, setPosts] = useState([ ]);

   useEffect(() => {
        const ENDPOINT = 'https://api.nasa.gov/planetary/apod?api_key=QBGjJ6wTBYcDFbjcst4mzrImNL9n4jP74ggi9vZp';
        axios.get(ENDPOINT)

        .then((response) => {
            console.log("RES", response.data);
        if(response.data) {
            
//before setPosts will work, I need to make response.data an array of objects..currently it is an object
//access values in the response.data by adding the specific names of data at the end..they aren't all objects!

            console.log(response.data.date, response.data.explanation)
            console.log(typeof response.data.date, typeof response.data.explanation);

//posts array still empty even using object notation but still using setPosts makes it an object even though pushing individual strings in instead of whole data object
//how to I setPosts so that it will not convert? - do i need API data that actually has objects but it is already objects so how access??
//is each PAGE an object in their data? so get the general link and make an array of the data objects instead of what is inside of this data object?
            setPosts()
            console.log(setPosts)
            console.log(posts)

        }else {
            console.log("ERROR");
            }
        })
        .catch((error) => {
            console.log("ERROR", error);
        });
    }, []);

    return (
        <div>
        { posts.length > 0 ?  <ul> { posts.map(( posts, i ) => <li key={i}>{posts.id}</li>) } </ul>  : <p>Loading...</p> } 
        </div>
    )
}

/*
RESEARCH: NEED TO CONVERT API OBJECTS INTO ARRAYS/PULL ARRAYS FROM OBJECTS SO setPost will keep the array and map will work.

OPTIONS: 
-get ONLY the arrays OUT of the data objects
=get the data objects THEN make it an array

*/