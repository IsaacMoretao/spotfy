
interface EstiloProps {
  children: any
  
}



export default function Estilo(props) {

  const cor = props.cor ?? 'rgb(88, 88, 88)'

  return(
    
    <>
     <a href="http://localhost:3000/Principal/Pages/Pendente">
       <button style={{
         height: '120px',
         width: '270px',
         background: `${cor}`,
         marginTop: '50px',
         borderRadius: '20px',
         border: '1px solid Black',
         cursor: 'pointer',
         margin: '10px'
      }}>
         {props.children}
      </button>
     </a>
      
       
    </>
    
  ) 
}
