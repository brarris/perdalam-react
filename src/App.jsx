import { useState, useEffect } from "react";
import "./App.css";

function WebTitle(props) {
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle("John Doe Website");
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{props.description}</p>
      <button onClick={changeTitle}>
        click aku untuk mengubah judul website
      </button>
    </div>
  );
}

function Article(props) {
  const title = props.title;
  const description = props.description;
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function App() {
  const [article, setArticle] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((data) => data.json())
      .then((result) => setArticle(result));
  }, []);

  console.log(article);

  return (
    <main>
      <WebTitle
        title="Netflix Clone"
        description="ini deskripsi website netflix cloning"
      />
      <Article title="Artikel Pertama" description="ini adalah deskripsi 1" />
      <Article title={article.title} description={article.body} />
    </main>
  );
}

export default App;
