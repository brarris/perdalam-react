import { useState } from "react";

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

export default WebTitle;
