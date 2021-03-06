import React, { useState } from 'react'
var Data = new Date ();
var Hora = Data.getHours();

const initialState = {
  number: 0,
  text: 'h1jhjhf'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
  const [state, setState] = useState(initialState)

  function updateState(key, value){
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      setNumber: n => updateState('number', n),
      setText: t => updateState('text', t)

    }}>

      {props.children}

    </AppContext.Provider>
  )
}

export default Store