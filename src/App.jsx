
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import HeadingMain from "./components/HeadingMain";
import FilmRows from "./components/FilmRows";
import { Row } from "react-bootstrap";

function App() {
  return (
    <div className="App bg-dark" data-bs-theme="dark">
      <header className="App-header">
<MyNavbar/>
<HeadingMain/>
<Row className="row-cols-2 row-cols-md-4 row-cols-lg-6"> 


<FilmRows nameOfFilm = "Harry Potter"/>
<FilmRows nameOfFilm= "Star Wars"/>
<FilmRows nameOfFilm= "Batman"/>
</Row>
<MyFooter/>
      </header>
    </div>
  );
}

export default App;
