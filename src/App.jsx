import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='mainWrapper'>
      <nav>
        <h1>Paris - Plomberie</h1>
      </nav>
      <header>
        <div className='leftSideHeader'>
          <h2 className='h2Titlte'>Plomberie 24/24 - 7/7</h2>
          <p className='text'>Bienvenue chez Paris - Plomberie, votre plombier de confiance à Paris. Nous sommes fiers de fournir des services de qualité en matière de dépannage, d’urgence et de réparation de plomberie. </p>
          <button className='btnContactezNous btnHeader'>
            <a href="tel:+33769084998" class="a">Appelez-nous</a>
          </button>
          <div className="stats">
            <h3 className='nombresGras'>1200+ <br /> <span className='smallUnderText'>Clients satisfaits</span></h3>
            <h3 className='nombresGras'>600 + <br /> <span className='smallUnderText'>Travaux terminés</span></h3>
          </div>
        </div>
        <div className='rigthSideHeader'>
          <h3 className='h3Titlte'><span className='orange-dot'></span>Comment ça fonctionne</h3>
          <p className='smallUnderTextForH3'>nous vous accompagnons au mieux</p>
          <ul>
            <li>contactez nous</li>
            <li>identification</li>
            <li>prise de rendez-vous</li>
            <li>réparation</li>
          </ul>
        </div>
        <div className='headerBottomLine'></div>
      </header>
    </div>
  )
}

export default App