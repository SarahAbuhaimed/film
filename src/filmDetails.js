import React from 'react';



const FilmDetails = (props) => {

  let Details;
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`

  function makeDetails(props) {
    if (String(props.film.id) === '') {
      return (
        <div className="film-detail" >
          <p><i className="material-icons">subscriptions</i>
            <span>No film selected</span>
          </p>
        </div >
      )
    }
    else {
      return (
        <div className="film-detail is-hydrated">
          <figure className="film-backdrop">
            <img src={backdropUrl} alt="" />
            <h1 className="film-title">{props.film.title}</h1>
          </figure>

          <div className="film-meta">
            <h2 className="film-tagline">{props.film.tagline}</h2>
            <p className="film-detail-overview">
              <img src={posterUrl} className="film-detail-poster" alt={props.film.title} />
              {props.film.overview}
            </p>
          </div>
        </div>
      )
    }
  }

Details = makeDetails(props)


  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {Details}
    </div>
  )
}

export default FilmDetails;