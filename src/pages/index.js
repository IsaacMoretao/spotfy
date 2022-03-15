import Main from './Login/Main';
import LogHed from './Login/header';
import Footer from './Login/footer';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Router>

       <LogHed></LogHed>
       <Main></Main>
       <Footer></Footer>

      </Router>
      
      
    </div>
  )
}
