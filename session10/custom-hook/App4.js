import Search from "./Search";
import List from "./List"
import React from "react";
import './App.css';
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";


function App4(){

    const stories=
[
    {
        title:'React',
        url:'https://reactjs.org/',
        author:'Jordan',
        num_comments:3,
        points:4,
        object_id:0,
        createdAt: "2021-10-01T11:32:02.089Z",

    },
    {
        title:'Redux',
        url:'https://redux.js.org/',
        author:'Andrew',
        num_comments:2,
        points:5,
        object_id:1,
        createdAt: "2021-10-01T11:32:02.089Z",

    },
];

const [searchTerm,setSearchTerm]=useSemiPersistenceState()
  const handleOnSearch=(event) => {
     setSearchTerm(event.target.value);
  }

  const newstory =stories.filter((story) =>
  story.author.toLowerCase().includes(searchTerm.toLowerCase()) );

  return(<center>
    <div>
    
   <Search  onSearch={handleOnSearch}/>
   <h4>Searching For:{searchTerm}</h4>
   <List stories={newstory}></List>
   </div></center>
  );
}

export default App4