import Padrão from '../Components/Padrão'
import React, { useContext, useEffect} from 'react';
import { AppContext } from '../../api/Store';
var Data = new Date ();
var Hora = Data.getHours();

 
function Index(props) {


  const{text, setText} = useContext(AppContext)
  const {state, setState} =useContext(AppContext)
  
 useEffect(function() {

   if (Hora< 12) {
     setText('Bom dia!')
   } else if(Hora>= 12) {
     setText('Boa Tarde!')
   }else if (Hora>= 18){
     setText('Boa noite!')
   }

 }, [Hora])

  return(
    
      <main style={{
        background: 'linear-gradient(#000000c7, #000000dc)',
        height: '100vh',
        color: 'white'
      }}>
       <Padrão/>
       <section style={{
         marginLeft: '25%',
       }}>
         <h2>{text}</h2>
         <div>
           <article style={{
             display: 'flex',
             
             background: 'rgba(255,255,255,.1)',
             width: '25%',
             borderRadius: '4px',
             height: '75px',
             marginBottom: '10px'
           }}>
             <div style={{background: 'red',
            }}>
               <img src="/image/Relax.jpg" style={{
                 height: '75px',
                 
               }} />
               </div>
             <div>
               <p style={{
                 display: 'flex',
                 marginTop: '27px',
                 marginLeft: '10px'

               }}>
                <b>Relax</b> 
               </p>
             </div>
           </article>
           <article style={{
             display: 'flex',
             background: 'rgba(255,255,255,.1)',
             width: '25%',
             borderRadius: '4px',
             height: '75px'
           }}>
             <div style={{background: 'red',
            }}>
               <img src="/image/faveSong.png" style={{
                 height: '75px',
                 
               }} />
               </div>
             <div>
               <p style={{
                 display: 'flex',
                 marginTop: '27px',
                 marginLeft: '10px'

               }}>
                <b>Favoritas</b> 
               </p>
             </div>
           </article>
           
         </div>
       </section>
      </main>
    
    
  ) 
}
export default Index;