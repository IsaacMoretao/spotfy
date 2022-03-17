import React from 'react';


function LoginMain(props) {
return(

<div style={{
      display: 'flex',
      textAlign: 'center',
      background: 'rgba( 255, 255, 255, 0.1 );',
      backdropFilter: 'blur( 5px )',
      WebkitBackdropFilter: 'blur( 5px )',
      borderRadius: '10px',
      width: '50%',
      height: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '5vh',
      marginBottom: '5vh',
      
    }}>
  <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}>

    <h5>Para continuar faça loguin no Spotfy</h5>

    <button style={{
          width: '40%',
          borderRadius: '30px',
          border: 'none',
          margin: '5px',
          background: 'blue'
        }}>

      <p>
        <img src="https://img.icons8.com/color/480/facebook.png" style={{
              display: 'flex',
              height: '30px',
              position: 'absolute',
              marginLeft: '10px',
              marginTop: '-8px'
            }} />
        Continuar Com o Facebook
      </p>

    </button>
    <button style={{
          width: '40%',
          borderRadius: '30px',
          border: 'none',
          margin: '5px',
          background: 'black',
          color: 'white'
        }}>
      <p>
        <img src="/image/Aplle.png" style={{
               display: 'flex',
               height: '30px',
               position: 'absolute',
               marginLeft: '15px',
               marginTop: '-7px'
            }} />
        Continuar Com o Aplle
      </p>
    </button>
    <button style={{
          width: '40%',
          borderRadius: '30px',
          border: 'none',
          margin: '5px'
        }}>
      <p>
        <img src="/image/Google.png" style={{
              height: '30px',
              marginLeft: '11px',
              position: 'absolute',
              marginTop: '-8px',
              display: 'flex'
            }} />
        Continuar Com o Google
      </p>
    </button>
    <button style={{
          width: '40%',
          borderRadius: '30px',
          border: 'none',
          margin: '5px',
          background: 'rgb(148, 148, 148)'
        }}>
      <p>
        <img src="" alt="" />
        Continuar Com um número de telefone
      </p>
    </button>

    <p>ou</p>
    <h5 style={{
          textAlign: 'start',
          width: '60%',
          margin: '5px'
        }}>Endereço de e-mail ou nome de usuario:</h5>

    <input type="text" style={{
          textAlign: 'start',
          width: '60%',
          height: '35px',
          background: 'rgba(0, 0, 0, 0.438)',
          border: '1px, solid, Black',
          borderRadius: '5px',
          color: 'white'
          }} /> <br />

    <h5 style={{
          textAlign: 'start',
          width: '60%',
          margin: '5px'
        }}>Senha:
    </h5>

    <input type="text" style={{
          textAlign: 'start',
          width: '60%',
          height: '35px',
          background: 'rgba(0, 0, 0, 0.438)',
          border: '1px, solid, Black',
          borderRadius: '5px',
          color: 'white'
    }} /> <br />
    <a href="#">
      <button style={{
        height: '35px',
        width: '120px',
        borderRadius: '30px',
        background: 'rgba(23, 211, 54, 0.863)'
      }}>Entrar
      </button>
    </a>
    
  </main>
</div>


)
}
export default LoginMain;