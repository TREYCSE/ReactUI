import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";

export default function Earth() {

const [posts, setPosts] = useState([ ]);

useEffect(() => {
    getData();
}, []);

const getData = () => {
    const ENDPOINT = 'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=QBGjJ6wTBYcDFbjcst4mzrImNL9n4jP74ggi9vZp';
    axios.get(ENDPOINT)

    .then((response) => {
        console.log("RES", response.data);
        console.log(typeof posts, posts)
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

return (
    <div>
    <h1>GET OUTTA ERE!🛸</h1>
    </div>
  );
}

//UPDATE ONCE FUNCTIONING IN APOD - syntax is dif - { posts.length > 0 ?  <ul> { posts.map(( posts, i ) => <li key={i}>{posts.id}</li>) } </ul>  : <p>Loading...</p> } 