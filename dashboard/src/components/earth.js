import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";

export default function Earth() {

const [posts, setPosts] = useState([ ]);

useEffect(() => {
    getData();
}, []);

//get correct API link, changing end of URL gets axios error
const getData = () => {
    const ENDPOINT = '';
    axios.get(ENDPOINT)

    .then((response) => {
        console.log("RES", response.data);
    if(response) {
        setPosts(response.data)
    }else {
        console.log("ERROR");
        }
    })
    .catch((error) => {
        console.log("ERROR", error);
    });
};

console.log(posts)

return (
    <div>
    <h1></h1>

    { posts.length > 0 ?  <ul> { posts.map(( posts, i ) => <li key={i}>{posts.id}</li>) } </ul>  : <p>Loading...</p> } 

    </div>
  );
}

//UPDATE ONCE FUNCTIONING IN APOD - syntax is dif +