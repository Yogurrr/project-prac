import './App.css';
import Nav from "./components/Nav";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
        <div className="container">
            <Nav />
            <main>!!!</main>
            <footer>copyright &copy; 2023. 팀명. All Rights Reserved.</footer>
        </div>
    </div>
  );
}

export default App;
