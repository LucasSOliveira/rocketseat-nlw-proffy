import React from 'react'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import study from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={landingImg} alt='landing-img' className='hero-image' />
        <div className='buttons-container'>
          <a href='/' className='study'>
            <img src={study} alt='estudar-icon' />
            Estudar
          </a>
          <a href='/' className='give-classes'>
            <img src={giveClasses} alt='dar-aulas-icon' />
            Dar Aulas
          </a>
        </div>
        <span className='total-connections'>
          Total de 200 conexões ja realizadas
          <img src={purpleHeart} alt='Coração roxo' />
        </span>
      </div>
    </div>
  )
}

export default Landing
