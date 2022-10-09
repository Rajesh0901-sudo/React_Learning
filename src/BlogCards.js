import React from "react";
import classes from './block.module.css';
import { dumpLogs } from "./isEmpty";

const BlogCards = (props)=> {

    dumpLogs(props);
    
    return (
        <div className={classes.Card}>
            <h2>Blogs Title {props.title}</h2>
            <p>just the description</p>
            <p>Like Count-{props.likeCount}</p>
            <button onClick={props.onLikeButtonClick}>Like</button>
        </div>   
    )
    
}

export default BlogCards;