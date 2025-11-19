import { useState } from "react";
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/spitz-japanese/beet-001.jpg"
  );
  const changeDogImage = () => {
    setDogUrl("https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg");
  };
  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬の画像"/>
      <button onClick={changeDogImage}>更新</button>
    </div>
  )
}
