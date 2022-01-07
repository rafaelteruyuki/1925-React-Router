import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/base/base.css';

import Cabecalho from './components/Cabecalho';
import Categoria from './pages/Categoria';
import Home from './pages/Home';
import Pagina404 from './pages/Pagina404';
import Post from './pages/Post';
import Sobre from './pages/Sobre';


const  App: FunctionComponent = () => {

  return (
    <BrowserRouter>

      <Cabecalho />

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/sobre"><Sobre /></Route>
        <Route path="/categoria/:categoriaID"><Categoria /></Route>
        <Route path="/posts/:id"><Post /></Route>
        <Route><Pagina404 /></Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
