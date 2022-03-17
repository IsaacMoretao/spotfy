import React from 'react';


function LoginHeder(props) {
  return(

    <div style={{
      height: '10vh',
      borderBottom: '1px solid gray'
    }}>
      <a href='http://localhost:3000'>
        <img src="/image/SpotfyLogo.png" alt="Logo-Spotfy" style={{
         height: '8vh',
         display: 'flex',
         marginLeft: 'auto',
         marginRight: 'auto',
         marginTop: '1vh'

       }}/>
      </a>
       

    </div>
    
  ) 
}
export default LoginHeder;