import { FunctionComponent, useEffect, useState } from "react";
import '../assets/css/blog.css';
import { buscaCategorias } from "../api/api";
import { ICategoria } from "../interfaces/categoria.interface";
import { Link } from "react-router-dom";

interface ListaCategoriasProps {
  
}

const ListaCategorias: FunctionComponent<ListaCategoriasProps> = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  useEffect(() => {
    buscaCategorias()
      .then(categorias => setCategorias(categorias))
  }, []);

  return ( 
    <ul className="lista-categorias container flex">
      {
        categorias.map((categoria, i) => (
          <Link key={i} to={`/categoria/${categoria.id}`}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
              {categoria.nome}
            </li>
          </Link>
        ))
      }
    </ul>
   );
}
 
export default ListaCategorias;
