import { Component } from "react";
import { Col } from "react-bootstrap";

class FilmRows extends Component {
state = {
    films : {}
}

fetchFilms = () => {
    this.setState({ isLoading: true });

    console.log("fetch in corso...");
    fetch(`http://www.omdbapi.com/?apikey=723bc045&s=${this.props.nameOfFilm}` )
      .then(response => {
        if (response.ok) {
    
          return response.json();
        } else {
          throw new Error("Errore ");
        }
      })
      .then(movies => {
 
        console.log(movies.Search);

   
        this.setState({ films: movies.Search });
      })
      .catch(err => {
        console.log(err);
       
      })
     
  };
  
  componentDidMount() {
   
   
    this.fetchFilms();
  }
  render() {
    return (

        <>

       {this.state.films !== undefined &&
            this.state.films.slice(0, 6).map((film ) => {
              return (
                <Col key={film.imdbID} className=" mb-2 text-center px-1 film-poster">
                  <img className="img-fluid" src={film.Poster} alt={film.Title} />
                  <p className="text-white">{film.Title}</p>
                  <i class="bi bi-play-circle"></i>
                </Col>
              );
            })} 
         
             </>
    )
  }
}
export default FilmRows