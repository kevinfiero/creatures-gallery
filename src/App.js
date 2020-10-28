import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import creatures from './data.js';

function App() {
  return (
    <>
    <Header/>
    <ImageList creatures={creatures}/>
    </>
  );
}

export default App;
