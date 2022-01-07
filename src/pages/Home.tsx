import { FunctionComponent } from 'react'
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';

const Home: FunctionComponent = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>

      <ListaCategorias />

      <ListaPost />
    </main>
  );
}

export default Home;
