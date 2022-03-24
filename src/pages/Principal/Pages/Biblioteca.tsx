import Padrao from '../Components/Padrão';
function Pendentes(props) {

  return(
    
      <body style={{
        background: 'linear-gradient(#242424, #000000c7)',
        height: '100vh',
        color: 'white',
        
      }}>
        <Padrao/>

        <div style={{
          marginLeft: '25%',
          display: 'flex',
          textAlign: 'center'
        }}>
          <aside  style={{
            height: '280px',
            width: '180px',
            background: 'linear-gradient(130deg, #1f1f1f 40%, #2e2e2e)',
            borderRadius: '5px',
            border: '1px solid gray',
            margin: '10px'
          }}>
            <img src="/image/faveSong.png" style={{
              height: '150px',
              margin: '15px'
            }} />
            <h4 style={{marginTop: '-10px'}}>Favoritos</h4>
          </aside>
          <aside  style={{
            height: '280px',
            width: '180px',
            background: 'linear-gradient(130deg, #1f1f1f 40%, #2e2e2e)',
            borderRadius: '5px',
            border: '1px solid gray',
            margin: '10px'
          }}>
            <img src="/image/relax.jpg" style={{
              height: '150px',
              margin: '15px'
            }} />
            <h4 style={{marginTop: '-10px'}}>Relax</h4>
          </aside>

          <aside  style={{
            height: '280px',
            width: '180px',
            background: 'linear-gradient(130deg, #1f1f1f 40%, #2e2e2e)',
            borderRadius: '5px',
            border: '1px solid gray',
            margin: '10px'
          }}>
            <img src="/image/Music.png" style={{
              height: '150px',
              margin: '15px'
            }} />
            <h4 style={{marginTop: '-10px'}}>Album Sem Nome</h4>
          </aside>

           <aside  style={{
            height: '280px',
            width: '180px',
            background: 'linear-gradient(130deg, #1f1f1f 40%, #2e2e2e)',
            borderRadius: '5px',
            border: '1px solid gray',
            margin: '10px'
          }}>
            <img src="/image/Music.png" style={{
              height: '150px',
              margin: '15px'
            }} />
            <h4 style={{marginTop: '-10px'}}>Album Sem Nome</h4>
          </aside>

          
          
        </div>
        

      </body>
    
  ) 
}
export default Pendentes;