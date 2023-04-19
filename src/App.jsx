import { useState } from 'react'
import './App.css'
import groups from "./assets/groups.json"


function App() {

  return (
    <>
      <article className='card'>
        <h3 className='card__id'>{groups.id}</h3>
        <h4 className='card__group__name'>Nombre de grupo!</h4>
        <h5 className='card__group__Leader'>{groups.leader}</h5>
        <ul className='card__group__members'>
          {groups.members.map( e => 
            <li className='card__group__member'>{e}</li>
            )}
        </ul>
      </article>
      <footer className='footer'>Projecto inicial CodoACodo React</footer>
    </>
  )
}

export default App
