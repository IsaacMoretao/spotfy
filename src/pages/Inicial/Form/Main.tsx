import React from 'react';

function FormMin() {
  
  return(
  
    <>
     <div style={{
       
       position: 'absolute',
       width: '50%',
       marginLeft: '28%',
       marginTop: '30%',
       color: 'white',
       textAlign: 'center',
       background: 'rgba( 255, 255, 255, 0.1 );',
       backdropFilter: 'blur( 3px )',
       WebkitBackdropFilter: 'blur( 5px )',
       borderRadius: '10px'

     }}>

     <div
     style={{
      width: '100%',
      color: 'white'
     }}
     >
       <p style={{
       marginLeft: '20px'
     }}> <b> Qual é seu e-mail? </b> </p>
     <input style={{
       marginLeft: '20px',
       height: '40px',
       width: '90%',
       background: '#00000075',
       border: '1px solid rgba(255, 255, 255, 0.3)',
       color: 'white',
       marginBottom: '10px'
     }}/>
     </div>
     <div
     style={{
      width: '100%',
      color: 'white'
     }}
     >
       <p style={{
       marginLeft: '20px'
     }}> <b> Confirme seu e-mail </b> </p>
     <input style={{
       marginLeft: '20px',
       height: '40px',
       width: '90%',
       background: '#00000075',
       color: 'white',
       border: '1px solid rgba(255, 255, 255, 0.3)',
       marginBottom: '10px'
     }}/>
     </div> 

     <div
     style={{
      width: '100%',
      color: 'white'
     }}
     >
       <p style={{
       marginLeft: '20px'
     }}> <b> Crie uma senha </b> </p>
     <input style={{
       marginLeft: '20px',
       height: '40px',
       width: '90%',
       background: '#00000075',
       border: '1px solid rgba(255, 255, 255, 0.3)',
       color: 'white',
       marginBottom: '10px'
     }}/>
     </div>

     <div
     style={{
      width: '100%',
      color: 'white'
     }}
     >
       <p style={{
       marginLeft: '20px'
     }}> <b> Como devemos chamar você ? </b> </p>
     <input style={{
       marginLeft: '20px',
       height: '40px',
       width: '90%',
       background: '#00000075',
       border: '1px solid rgba(255, 255, 255, 0.3)',
       color: 'white',
       marginBottom: '10px'
     }}/>
     </div>
     <p style={{
      color: 'white',
      marginLeft: '30px'
     }}><b> Em que Ano você naceu ? </b></p>
        <div style={{
          display: 'flex'
        }}>
          <div
          style={{
           width: '100%',
           color: 'white',
           
          }}
          >
            <p style={{
            marginLeft: '20px'
          }}>  Dia:  </p> 
          <input style={{
            marginLeft: '20px',
            height: '40px',
            width: '80%',
            background: '#00000075',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            marginBottom: '10px'
          }}/>
          </div>

          <div
           style={{
           width: '100%',
           color: 'white'
          }}
          >
            <p style={{
            marginLeft: '10px'
          }}> Mês: </p>
          <input style={{
            marginLeft: '10px',
            height: '40px',
            width: '80%',
            background: '#00000075',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            marginBottom: '10px'
          }}/>
          </div>

          <div
           style={{
            width: '100%',
            color: 'white'
           }}
           >
             <p style={{
             marginLeft: '0px'
           }}> Ano: </p>
           <input style={{
             marginLeft: '0px',
             height: '40px',
             width: '80%',
             background: '#00000075',
             border: '1px solid rgba(255, 255, 255, 0.3)',
             color: 'white',
             marginBottom: '10px'
           }}/>
          </div>


        </div>

        <p style={{
      color: 'white',
      marginLeft: '30px'
     }}><b> Qual seu genero ? </b></p>
     <div style={{
      display: 'flex',
      color: 'white',
      marginLeft: '25px'
     }}>
       <b> Mascolino:</b>
        <input style={{
         marginRight:'30px'
       }} type="radio" name='eu' />

        <b> Feminino:</b>
        <input style={{
         marginRight:'30px'
       }} type="radio" name='eu' />

        <b> Outro:</b>
        <input type="radio" name='eu' />
     </div>
      <br /><br />

      <div style={{
      display: 'flex',
      color: 'white',
      marginLeft: '25px'
     }}>
        <input type="checkbox" />
        <p>Não quero receber mensagens de marketing do Spotfy</p>
      </div><br /><br />

      <section style={{
      display: 'flex',
      color: 'white',
      marginLeft: '25px'
     }}>
        <input type="checkbox" />
        <p>Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.</p>
      </section><br /><br />

      <section style={{
      display: 'flex',
      color: 'white',
      marginLeft: '25px'
     }}>
        <input type="checkbox" />
        <p>Eu concordo com os <a style={{color: 'rgba(23, 211, 54, 0.863)'}} href="https://www.spotify.com/br/legal/end-user-agreement/">termos e condições de uso do Spotfy</a>.</p>
      </section><br /><br />

    <p>
     Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a <a style={{color: 'rgba(23, 211, 54, 0.863)'}} href="https://www.spotify.com/br/legal/end-user-agreement/">Política de Privacidade do Spotify</a>  
    </p>
      <button style={{
       height: '40px',
       width: '20%',
       background: 'rgba(23, 211, 54, 0.863)',
       borderRadius: '30px',
       border: 'none',
       color: 'black'
      }}>
        <b>Iscrever-se</b>
      </button>
      <p>
        <h4>Já tem uma conta? <a style={{color: 'rgba(23, 211, 54, 0.863)'}} href="http://localhost:3000/Inicial/Login/Login">Faça loguin</a>.</h4>
      </p>

      </div>
     <img src="/image/pexels-shvets-production-7533328.jpg"  
     style={{
       width:'100%',
       height: '200%'
     }}/>
     
    
      
    </>

  ) 
}
export default FormMin;