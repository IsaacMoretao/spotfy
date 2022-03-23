import Padrao from '../Components/Padrão';

function Playlist(props) {

  return(
    
      <body style={{
        background: 'linear-gradient(#000000c7, #242424)',
        height: '100vh',
        color: 'white',
      }}>
        <Padrao/>
         <section style={{
          marginTop: '-52px',
          background: 'linear-gradient(#2c2c2c71, #242424)',
          marginLeft: '20%',
          height: '25vw',
          display: 'flex',
          borderBottom: '1px solid grey'
        }}>
          <div style={{
            width: '300px',
            height: '100%',
            textAlign: 'center'
          }}>
            <img src="/image/Relax.jpg" style={{
              height: '250px',
              width: '250px',
              marginTop: '20%'
            }}/>
          </div>
          <div style={{
            marginTop: '7%'
          }}>
             <h4>LISTA DE REPRODUÇÃO</h4>
             <h1 style={{
               fontSize: '50px',
               margin: '0px'
             }}>Relax</h1>
             <p>&copy; Isaac Moretão</p>
          </div>
        </section>

       <main style={{
         marginLeft: '25%'
       }}>
         <aside style={{
           marginRight: '5%',
           marginTop: '5px'
         }}>
           <div>
            <button style={{
              height: '70px',
              width: '70px',
              borderRadius: '40px',
              border: 'none',
              background: '#22aa00',
              cursor: 'pointer'
            }}>
             <img src="http://simpleicon.com/wp-content/uploads/play1.png" style={{
            height: '70px',
            marginLeft: '-3px'
            }} />
            </button>
           </div>
           <div style={{
             display: 'flex',
             justifyContent: 'space-around'
           }}>
              <p>Nome:</p> <p></p> <p>Álbum:</p>
           </div>
         </aside>
        <aside style={{display: 'flex', justifyContent: 'space-around'}}>
          <p style={{
          width: '50%',
          marginLeft: '14%',
          marginBottom: '5px'
          
          }}>
          
              <img src="/image/Relax.jpg"
              style={{
               height: '30px',
              }}/> Name</p>
            
          <p style={{
            width: '50%',
            marginLeft: '38%'
          }}>TXT</p> 
        </aside>
         

       </main>
      
      </body>
    
  ) 
}
export default Playlist;