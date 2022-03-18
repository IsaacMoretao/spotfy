import React from 'react';


function HederFixed(props) {
  return(


    <header style={{
      display: 'flex',
      marginLeft: '20%',
      height: '8vh',
      justifyContent: 'space-around'
    }}>
      <section style={{
        height: '26px',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: '50%'
      }}>
        <button style={{
         marginRight: '10px',
         borderRadius: '30px',
         height: '30px',
         width: '30px',
         border: 'none',
         background: 'gray',
         cursor: 'pointer'
        }}> <b>&lt;</b> </button>
        <button style={{
          marginRight: '15px',
          borderRadius: '30px',
          height: '30px',
          width: '30px',
          border: 'none',
          background: 'gray',
          cursor: 'pointer'
        }}> <b>&gt;</b> </button>
      </section>
      <article style={{
        marginTop: 'auto',
        marginBottom: 'auto',
        background: 'rgb(88, 88, 88)',
        width: '120px',
        height: '25px',
        borderRadius: '30px',
        fontSize: '15px',
        color: 'white',
        cursor: 'pointer'
      }}>
        <img style={{
          height: '20px',
          marginRight: '10px',
          marginLeft: '10px',
          position: 'absolute',
          marginTop: '1px'
        }} src="/image/Usuario.png"/>
        <p style={{
          margin: '0px',
          textAlign: 'end',
          marginTop: '3px',
          marginRight: '10px'
        }}>Isaac Mo...</p>
      </article>
      <section style={{
        position: 'absolute',
        height: '200px',
        width: '150px',
        background: 'red',
        marginTop: '8vh',
        marginLeft: '55%',
        display: 'none'
      }}>
        <div>Conta</div>
        <div>Perfil</div>
        <div>Premium</div>
        <div>Suporte</div>
        <div>Baixar</div>
        <div>Terminar sessão</div>
      </section>
    </header>
    
  ) 
}
export default HederFixed;