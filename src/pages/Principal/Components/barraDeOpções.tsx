import React from 'react';
import Style from '../../../styles/Opcoes.module.css'



function Opções() {
  
  function mudarBlock(Alert){
    if (Alert == Style.Alert){
     Alert.style.display = "block";
    }
  
  }

  function mudarNone(alert){
    alert.style.display = "none";
   }

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
      
     <a href="http://localhost:3000/Principal/Pages/Biblioteca" style={{
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
      <br />

      <section style={{
        textAlign: 'center',
        height: '40px',
        marginLeft: '10px',
        marginRight: '10px',
        display: 'flex',
        marginTop: '15px',
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
        ><img src="/image/Plus.jpg"
        style={{
          height: '23px'
        }}/></div>
        <div style={{
          height: '30px',
          marginTop: '0px',
          width: '200px',
          fontSize: '15px',
          
        }}> <b>Nova playlist</b>
        </div>
      </a>
      </section>

      <section style={{
        textAlign: 'center',
        height: '40px',
        marginLeft: '10px',
        marginRight: '10px',
        display: 'flex',
        marginTop: '3px',
        cursor: 'pointer',
        borderBottom: '1px solid grey'
        
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
        ><img src="/image/faveSong.png"
        style={{
          height: '23px'
        }}/></div>
        <div style={{
          height: '30px',
          marginTop: '0px',
          width: '200px',
          fontSize: '15px',
          
        }}> <b>Favoritos</b>
        </div>
      </a>
      </section>

       <section>
        
          <div className={Style.div}>
           <option className={Style.option}>Favotitos</option>
           <option className={Style.option}>Relax</option>
           <option className={Style.option}>Playlist não nomeada</option>
           <option className={Style.option}>Playlist não nomeada</option>
           <option className={Style.option}>Playlist não nomeada</option>
           <option className={Style.option}>Playlist não nomeada</option>
          </div>
       </section>
        <section style={{
        display: 'flex',
        marginTop: '5%',
        textAlign: 'center',
        marginLeft: '10px',
        marginRight: '10px',
        cursor: 'pointer'
        
        
      }}>

        
        
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

        {/* === ↓ Criar Playlist ↓ ===*/}
        <div id='Alert' className={Style.Alert}>
          <header style={{
            borderBottom: '1px solid grey',
            height: '40px',
            fontSize: '20px',
            marginTop: '10px'
          }}>
             <b>Crie Sua Playlist</b>
          </header>
          <main>
            <div style={{
              marginTop: '10%',
              marginBottom: '20%',
              }}>
              <label style={{textAlign: 'start'}}> <b>Imagem:</b> </label> <br />
              <label className={Style.img} htmlFor="arquivo"> <b>Escolher imagem</b></label>
              <input type="file" id='arquivo' style={{display: 'none'}}/>
            </div>
            <div>
              <label className={Style.input}> <b>Nome:</b> </label>
              <input className={Style.Input} type="text" />
            </div>
            <button className={Style.But}>Criar!</button>
          </main>
          <footer style={{
            marginTop: '10%',
            borderTop: '1px solid grey',
            paddingTop: '5px'
          }}>
            &copy; Isaac Moretão
          </footer>
        </div>
        {/* === ↑ Criar Playlist ↑ ===*/}
      </section >

    </article>
 
  ) 
}
export default Opções;