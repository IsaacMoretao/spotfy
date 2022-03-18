import React from 'react';
import Style from './Heder.module.css';

function LogHed() {
  
  return(
  
    <div  style={{
      display: 'flex',
      justifyContent: 'space-around',
      background: 'black',
      marginBottom: 'auto',
      height: '15vh',
      color: 'white',
    }}>

     <div style={{
       marginRight: '40%'
     }}>
       <a href="">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" style={{
        display: 'flex',
        height: '60px',
        marginTop: '15px',
      }} />
      </a>
     </div>
     <div className={Style.div} style={{
       display: 'flex'
       
       }}>
      <a className={Style.a} 
      href="https://www.spotify.com/br/premium/" >Premium</a>

      <a className={Style.a}
      href="https://support.spotify.com/br/?_ga=2.107507778.1359101702.1647618291-1438987607.1647008417">Suport</a>

      <a className={Style.a}
      href="https://www.spotify.com/br/download/windows/">Baixar</a>

      <a className={Style.a}> | </a>
      <a className={Style.a}
      href="http://localhost:3000/Inicial/Form/Form">Inscrever-se</a>

      <a className={Style.a}
      href="http://localhost:3000/Inicial/Form/Form">Entrar</a>
      
      <button  className={Style.But}>
        <section className={Style.Hab}></section>
        <section  className={Style.Hab}></section>
        <section className={Style.Hab} style={{
          marginBottom: '25px'
        }}></section>
      </button>

     </div>
       
    </div>
  ) 
}
export default LogHed;