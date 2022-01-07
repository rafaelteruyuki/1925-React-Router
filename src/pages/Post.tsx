import { FunctionComponent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { buscaPost } from "../api/api";
import { IPost } from "../interfaces/post.interface";
import '../assets/css/post.css';

interface PostProps {
  
}

type ID = { id: string };
 
const Post: FunctionComponent<PostProps> = () => {
  let history = useHistory();
  const { id } = useParams<ID>();
  const [post, setPost] = useState<IPost>({} as IPost);

  useEffect(() => {
    buscaPost(id)
      .then(post => setPost(post))
      .catch(() => history.push('/404'))
  }, [id, history]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post?.title}</h2>
        <p className="cartao__texto">{post?.body}</p>
      </article>
    </main>
  );
}
 
export default Post;
