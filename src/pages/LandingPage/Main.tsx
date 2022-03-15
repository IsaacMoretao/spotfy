import React from 'react';
import Link from 'next/link'

function Main(props) {
  return(

      <div  style={{
        background: '#2941ab',
        height: '140vh',
        
      }}>

     <img src="/image/pexels-andrea-piacquadio-3807536.jpg"
      style={{
        height: '100%',
        width: '100%'
        
      }}
       
     />
     <div style={{
       
       position: 'absolute',
       width: '100%',
       textAlign: 'center',
       color: '#1ed760',
       marginTop: '-70%'
     }}>
       <h1 style={{
         fontSize:'150px'
       }}>Escutar muda<br />
       tudo</h1>

       <p style={{
         width: '40%',
         marginLeft: 'auto',
         marginRight: 'auto',
         fontSize: '25px'
         }}> <b>
           Milhões de músicas e podcasts para explorar. E nem precisa de cartão de   crédito.
           </b> 
       </p>

       <link href='/login/header.tsx'  style={{
           height: '50px',
           width: '160px',
           borderRadius: '30px',
           background: '#1ed760',
           cursor: 'Pointer'
          }}><h4 style={{
           margin: '0px',
           color: '#2941ab'
          }}>Baixe o spotify Free</h4>
       </link>
     </div>
     
    </div>
    
  ) 
}
export default Main