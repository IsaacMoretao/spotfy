import React, { useState} from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import Store from './api/Store'
import DataContext, {data} from './api/DataContext'

function MyApp({ Component, pageProps }) {

  const [state, setState] = useState(data)

  return (
  <div className='App'>
    <Store>
     
      <DataContext.Provider value={{state, setState}}>
        <Component {...pageProps} />
      </DataContext.Provider>
     
    </Store>
 </div>
 )
}

export default MyApp
