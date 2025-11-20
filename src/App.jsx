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

const LimitArticle = () => {
  return (
    <div>
      <h3>Mohon maaf anda telah mencapai limit!</h3>
      <p>Anda sudah memasuki batas akhir untuk melihat artikel</p>
    </div>
  );
};

function App() {
  const [article, setArticle] = useState("");
  const [counterClick, setCounterClick] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/posts/" + counterClick)
      .then((data) => data.json())
      .then((result) => setArticle(result));
  }, [counterClick]);

  const nextArticle = () => {
    setCounterClick(counterClick + 1);
  };

  const previousArticle = () => {
    setCounterClick(counterClick - 1);
  };

  return (
    <main>
      <WebTitle
        title="Netflix Clone"
        description="ini deskripsi website netflix cloning"
      />
      <Article title="Artikel Pertama" description="ini adalah deskripsi 1" />
      <Article title={article.title} description={article.body} />
      {counterClick > 4 ? "kondisi sesuai" : "kondisi tidak sesuai"}
      <button onClick={previousArticle}>Previous Article</button>
      {counterClick}
      <button onClick={nextArticle}>Next Article</button>
    </main>
  );
}

export default App;
