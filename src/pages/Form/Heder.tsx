import React from 'react';

function FormHed() {
  
  return(
  
    <div style={{
      
      position: 'absolute',
      marginLeft: '30%',
      marginRight: '30%',
      textAlign: 'center',
      width: '45%',
      color: 'white'
    }}>
     <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" 
     style={{
       display: 'flex',
       width: '150px',
       marginLeft: 'auto',
       marginRight: 'auto',
       marginTop: '10%'
     }}/>
     <h1>
       Inscreva-se grátis e comece a curtir.
     </h1>
      <button style={{
        
        height: '45px',
        width: '50%',
        background: 'blue',
        borderRadius: '30px',
        border: 'none',
        fontSize: '16px',
        textAlign: 'center',
        
      }}>
        
          
        <img src="/image/Face.png" style={{
         height: '30px',
         marginRight: '25px',
         position: 'absolute',
         marginTop: '-6px',
         display: 'flex'
         }}/>
        
        
         <b> Inscreva-se com o Facebook</b>
        
        
        
      </button>
      <br />
      <button style={{
        height: '45px',
        width: '50%',
        background: 'white',
        borderRadius: '30px',
        border: 'none',
        fontSize: '16px',
        textAlign: 'center',
        marginTop: '15px'
      }}>
       <img src="/image/Google.png" style={{
         height: '30px',
         marginRight: '25px',
         position: 'absolute',
         marginTop: '-5px',
         display: 'flex'
         }}/>

       <b> Inscreva-se com o Facebook</b>

      </button>
      <p style={{
        
      }}>
      
      ou
      </p>
    </div>

  ) 
}
export default FormHed;