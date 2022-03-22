import React from 'react';

function Opções() {
  
  return(
  
    <article style={{
      background: 'black',
      width: '20%',
      height: '100vh',
      position: 'fixed',
      color: 'white'
    }}>
      <img style={{
        display: 'flex',
        width: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom:  '30px',
        marginTop:  '20px'
      }} src="/image/SpotifyLogoBranco.png"/>
     <a href="http://localhost:3000" style={{
       display: 'flex',
       color: 'white',
       textDecoration: 'none'
     }}>
       <section style={{
        textAlign: 'center',
        height: '40px',
        marginLeft: '10px',
        marginRight: '10px',
        display: 'flex',
        cursor: 'pointer',
        
      }}>
        <div style={{
          marginRight: '5px',
          marginLeft: '10px',
          
        }}
        ><img style={{
          height: '30px'
        }} src="/image/livros.png"/></div>
        <div style={{
          height: '30px',
          width: '180px',
          fontSize: '15px',
        
          
        }}> <b>Home</b> </div>
      </section>
     </a>
      

      <section style={{
        textAlign: 'center',
        height: '40px',
        marginLeft: '10px',
        marginRight: '10px',
        display: 'flex',
        marginTop: '15px',
        cursor: 'pointer',
        
      }}>
        <div style={{
            marginRight: '5px',
            marginLeft: '10px',
            
          }}
          ><img src="/image/livros (1).png" style={{
            height: '30px'
          }}/>
        </div>
        <div style={{
          height: '30px',
          marginTop: '5px',
          width: '185px',
          fontSize: '15px',
          
        }}> <b>Biblioteca</b> </div>
      </section>

      <section style={{
        textAlign: 'center',
        height: '40px',
        marginLeft: '10px',
        marginRight: '10px',
        display: 'flex',
        marginTop: '15px',
        borderBottom: '1px solid grey',
        cursor: 'pointer',
        
      }}>
      <a href="http://localhost:3000/Principal/Pages/Pesquisar" style={{
        display: 'flex',
        color: 'white',
        textDecoration: 'none'
        }}>
        <div style={{
          marginRight: '5px',
          marginLeft: '10px',
          
        }}
        ><img src="/image/livros (2).png"
        style={{
          height: '20px'
        }}/></div>
        <div style={{
          height: '30px',
          marginTop: '3px',
          width: '200px',
          fontSize: '15px',
          
        }}> <b>Procurar</b>
        </div>
      </a>


      </section>

      <section style={{
        display: 'flex',
        marginTop: '53vh',
        textAlign: 'center',
        marginLeft: '10px',
        marginRight: '10px',
        cursor: 'pointer'
        
        
      }}>
        <section>

        </section>
        <div style={{
            marginRight: '5px',
            marginLeft: '10px',
            cursor: 'pointer',}}>
          <img style={{
            height: '25px'
          }} src="/image/baixar.png" />
        </div>
        <div style={{
          height: '30px',
          marginTop: '3px',
          width: '200px',
          fontSize: '15px',
        }}>
         <b>Instalar App</b> 
        </div>
      </section >
      
    </article>

  ) 
}
export default Opções;