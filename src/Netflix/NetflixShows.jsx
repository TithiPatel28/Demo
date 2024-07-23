import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  var shows = [
    {
      id:4,
      name:"Money Heist"
    },
    {
      id:5,
      name:"The House of Secrets"
    },
    {
      id:6,
      name:"Stranger Things"
    }
  ]
  return (
    <div>
        <h1>Netflix Shows...</h1>
        <ul>
          <li>
            <Link to="/netflix/playshow/1">The Witcher</Link>
          </li>
          <li>
            <Link to="/netflix/playshow/2">The Crown</Link>
          </li>
          <li>
            <Link to="/netflix/playshow/3">Riverdale</Link>
          </li>
        </ul>
        <ul>
          {
            shows.map((show)=>{
              return(
                <li>
                  <Link to={`/netflix/playshow/${show.id}`}>{show.name}</Link>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}
