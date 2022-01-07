import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import ListaPost from "../components/ListaPost";

type urlParams = {
  categoriaID: string;
  subcategoriaID: string;
}

const Subcategoria: FunctionComponent = () => {
  const { categoriaID, subcategoriaID } = useParams<urlParams>();
  
  return (
    <ListaPost 
      categoria={categoriaID} 
      subcategoria={subcategoriaID}
    />
  );
}

export default Subcategoria;
