import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscaPosts } from '../api/api';
import { IPost } from "../interfaces/post.interface.js";

interface ListaPostProps {
  categoria?: string;
  subcategoria?: string;
}

const ListaPost: FunctionComponent<ListaPostProps> = ({categoria, subcategoria}) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    buscaPosts(categoria, subcategoria)
      .then(posts => setPosts(posts))
  }, [categoria, subcategoria]);

  return (
    <section className="posts container">
      {
        posts.map((post, i) => (
          <Link key={i} 
            to={`/posts/${post.id}`} 
            className={`cartao-post cartao-post--${post.categoria}`}>
            <article>
              <h3 className="cartao-post__titulo">{post.title}</h3>
              <p className="cartao-post__meta">{post.metadescription}</p>
            </article>
          </Link>
        ))
      }
    </section>
  );
}

export default ListaPost;
