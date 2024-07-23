import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayShows = () => {
    const{id} = useParams();
  return (
    <div>
        <h1>Playing....{id}</h1>
    </div>
  )
}
