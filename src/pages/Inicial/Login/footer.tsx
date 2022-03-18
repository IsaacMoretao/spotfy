import React from 'react';


function LoginFooter(props) {
  return(

    <div style={{
      textAlign: 'center'
    }}>
   
      <h4 style={{
        paddingTop: '50px',
        marginTop: '-30px',
        marginLeft: '33%',
        marginRight: '33%',
        borderTop: '1px solid gray'
        }}>Não tem uma conta?
      </h4>
      <a href="http://localhost:3000/Inicial/Form/Form">
        <button style={{
          height: '40px',
          width: '30%',
          borderRadius: '30px',
          border: 'none',
          background: 'rgba(107, 107, 107, 0.561)',
          fontFamily: 'unset',
          marginBottom: '5%',
          cursor: 'pointer'
        }}>
          Inscrever-se no Spotfy
        </button>
      </a>
      
      
    </div>
    
  ) 
}
export default LoginFooter;