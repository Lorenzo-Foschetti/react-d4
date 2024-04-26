
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import HeadingMain from "./components/HeadingMain";
import FilmRows from "./components/FilmRows";

function App() {
  return (
    <div className="App bg-dark" data-bs-theme="dark">
      <header className="App-header">
<MyNavbar/>
<HeadingMain/>
<FilmRows nameOfFilm = "Harry Potter"/>
<MyFooter/>
      </header>
    </div>
  );
}

export default App;
