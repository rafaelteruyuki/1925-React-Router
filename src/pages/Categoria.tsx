import { FunctionComponent, useEffect, useState } from "react";
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { buscaCategoria } from "../api/api";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import Subcategoria from "./Subcategoria";

const Categoria: FunctionComponent = () => {
  const { categoriaID } = useParams<{ categoriaID: string }>();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubcategorias] = useState<string[]>([]);

  useEffect(() => {
    buscaCategoria(categoriaID)
      .then(categorias => setSubcategorias(categorias))
  }, [categoriaID]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>

      <ListaCategorias />

      <ul className="lista-categorias container flex">
        {
          subcategorias.map((sub, i) => (
            <Link key={i} to={`${url}/${sub}`}>
              <li className={`lista-categorias__categoria lista-categorias__categoria--${categoriaID}`}>
                {sub}
              </li>
            </Link>
          ))
        }
      </ul>

      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost categoria={categoriaID} />
        </Route>

        <Route path={`${path}/:subcategoriaID`}>
          <Subcategoria />
        </Route>
      </Switch>

    </>
  );
}

export default Categoria;
