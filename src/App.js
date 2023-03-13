import './App.css';
import Nav from "./components/Nav";
import Container from 'react-bootstrap/Container';
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
        <Nav />
        <div style={{borderBottom: "1px solid #331904"}}></div>
        <div className="container">
            <Content />
        </div>
        <footer>copyright &copy; 2023. 팀명. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
