import './App.css';
import Nav from "./components/Nav";
import Container from 'react-bootstrap/Container';
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Nav />
            <Content />
            <div className="footerBorder"></div>
            <footer>copyright &copy; 2023. 팀명. All Rights Reserved.</footer>
        </div>
    </div>
  );
}

export default App;
