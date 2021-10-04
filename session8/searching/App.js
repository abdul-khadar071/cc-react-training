import logo from './logo.svg';
import './App.css';
import List from './List';
import Search from './Search';
import { useState } from 'react';

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
]



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searched= stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm)||
    story.author.toLowerCase().includes(searchTerm)||
    story.createdAt.toLowerCase().includes(searchTerm)
    
  );

  return (
    <center>
    <div >
      <Search onSearch={handleSearch}/> 
      <List stories={searched} />
    </div>
    </center>
  );
}

export default App;
