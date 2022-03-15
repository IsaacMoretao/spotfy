import React from 'react';

function LogHed() {
  
  return(
  
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      background: 'black',
      marginBottom: 'auto',
      height: '15vh',
      color: 'white'
    }}>

     <div style={{
       marginRight: '40%'
     }}>
       <a href="">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" style={{
        display: 'flex',
        height: '60px',
        marginTop: '15px'
      }} />
      </a>
     </div>
     <div style={{
       display: 'flex'
       
       }}>
      <a href="">Ancora</a>
      <a href="">Ancora</a>
      <a href="">Ancora</a>
      <p> | </p>
      <a href="">Ancora</a>
      <a href="">Ancora</a>
     </div>

    </div>
  ) 
}
export default LogHed;