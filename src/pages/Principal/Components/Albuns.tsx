import Style from '../../../styles/playlist.module.css'

export default function Albun(props) {

  const Nome = props.Nome ?? 'Nome...'

return(

<>

  <aside style={{
    display: 'flex',
    justifyContent: 'space-around'
    }}>

    <div style={{
      width: '50%',
      marginBottom: '5px',
      marginLeft: '10%',
      display: 'flex'
      }}>

      <div style={{
        marginRight: '30px'
      }}>

       <div className={Style.Image}>
         <img src="/image/Relax.jpg" style={{
         height: '30px',
        }} />
       </div>
    
      </div>

      <div style={{marginLeft: '15px', marginTop: '4px'}}>
        {props.Nome}
      </div>

    </div>

    <p style={{
      width: '50%',
      marginLeft: '42%'
      }}>Relax
    </p>

  </aside>

</>

)
}