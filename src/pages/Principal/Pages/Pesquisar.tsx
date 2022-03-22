import Opções from "../Components/barraDeOpções";
import HederFixed from "../Components/HederPesquisa";
import Estilo from "../Components/Estilos";
import Funk from "../Components/Funk";

function Pesquisa(props) {

  return(
    
      <main style={{
        background: 'linear-gradient(#000000c7, #000000dc)',
        height: '100vh',
        color: 'white',
      }}>
        <Opções/>
        <HederFixed/>
        <div style={{
          marginLeft: '20%'
        }}>
        <h1></h1>
        <section style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft:'50px'
          }}>
         <Estilo cor="rgb(158, 0, 0)">
           rock
         </Estilo>
         <Estilo cor="rgb(0, 13, 158)">
           Pop
         </Estilo>
         <Estilo cor="rgba(105, 68, 0, 0.733)" >
           Sertanejo
         </Estilo>
         <Estilo cor="rgba(0, 116, 0, 0.733)">
           Reggae
         </Estilo>
         <Funk cor="rgba(199, 186, 0, 0.733)">
           Funk
         </Funk>
         <Estilo cor="rgba(255, 0, 0, 0.733)">
           Romance
         </Estilo>
         <Estilo cor="rgba(255, 255, 250, 0.733)">
           Gospel
         </Estilo>
         <Estilo>
           Hip-Hop
         </Estilo>
         <Estilo cor="rgba(11, 5, 93, 0.733)">
           Blues
         </Estilo>
        </section>
        </div>

      </main>
    
    
  ) 
}
export default Pesquisa;