import { useState } from "react";
import { DogImage } from "./DogImage";

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/mountain-bernese/n02107683_5155.jpg"
  );

  const changeDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogUrl(data.message);
  };

  return (
    <div>
      <p>犬の画像を表示するサイトです</p>

      <DogImage imageUrl={dogUrl} />

      <button onClick={changeDogImage}>更新</button>
    </div>
  );
};
