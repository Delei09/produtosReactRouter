import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'
import Produtos from './pages/Produtos';
import Contatos from './pages/Contatos';
import Home from  './pages/Home'
import './styles/global.scss'
import Produto from './pages/Produto';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
         <Header />
          <Switch >
             <Route path ='/' exact component = {Home} />
              <Route path ='/produtos' component = {Produtos} />
              <Route path ='/contatos' component = {Contatos} />
              <Route path ='/produto/:id' component = {Produto} />
          </Switch>
          <Footer />
        </BrowserRouter>
     
    </div>
  );
}

export default App;
