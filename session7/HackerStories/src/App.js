import logo from './logo.svg';
import './App.css';
import List from './List';
import Search from './Search';

const item=
[
    {
        title:'React',
        url:'https://reactjs.org/',
        author:'Jordan',
        num_comments:3,
        points:4,
        object_id:0

    },
    {
        title:'Redux',
        url:'https://redux.js.org/',
        author:'Andrew',
        num_comments:2,
        points:5,
        object_id:1

    },
]
function App() {
  return (
    <div className="App">
      <Search/>
      <br/>
     <List  item={item}/>
    </div>
  );
}

export default App;
