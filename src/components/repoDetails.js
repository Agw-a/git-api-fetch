import React from 'react';
import { useParams } from "react-router-dom";

const RepoDeatils = (props) => {

  const {title} = useParams();

  return (



    <div>
       {props.filter(item => item.title === title).map((item) => {
    return (
      // <RepoDeatils key={item.id} {...item}/>
      <div>
      <div>
      <a href={props.html_url} target='_blank' rel='noreferrer'>Source Code</a>
      </div>
      <div>        
          <ul key={"index"}>
              <li>{props.stargazers_count.toLocaleString()} stars</li>
              <li>{props.watchers_count.toLocaleString()} watchers</li>
          </ul>
      </div>
      <div>
          <p>{props.description}</p>
          <p>{props.language}</p>
          <ul>
            {props.language && (props.topics.map((topic, index) => {
                  return (
                      <li key={index}>{topic}</li>
                  )
              })) }
              
          </ul>
          
      </div>
      </div>
    )
  })}


    </div>
  )
}

export default RepoDeatils;
