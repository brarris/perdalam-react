import { useState, useEffect } from "react";
import { getArticle } from "./utils/getArticle";
import Article from "./components/Article";
import LimitArticle from "./components/LimitArticle";
import WebTitle from "./components/WebTitle";
import "./App.css";

function App() {
  const [article, setArticle] = useState("");
  const [counterClick, setCounterClick] = useState(1);

  useEffect(() => {
    getArticle(counterClick).then((result) => setArticle(result));
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
      {counterClick === 2 && <p>Tombol next article telah di click 2x</p>}
      {counterClick > 4 ? (
        <LimitArticle />
      ) : (
        <div>
          <button onClick={previousArticle}>Previous Article</button>
          {counterClick}
          <button onClick={nextArticle}>Next Article</button>
        </div>
      )}
    </main>
  );
}

export default App;
